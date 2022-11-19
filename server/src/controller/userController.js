const jose = require('jose');
const assert = require('assert');
const axios = require('axios');
const keys = require('../config');
const { User } = require("../models/User");

const tenantId = keys.userfrontTenantID;
const publicKey = keys.userfrontPublicKey;

async function GetUserId(authorization) {
  const [tokenFormat, accessToken] = authorization.split(" ");
  assert(tokenFormat == "Bearer", "Invalid token format");

  const key = await jose.importSPKI(publicKey, "RS256");
  const { payload } = await jose.jwtVerify(accessToken, key, {
    algorithms: ["RS256"],
  });
  assert(payload.tenantId == tenantId && payload.iss == "userfront", "Invalid access token");

  const userId = payload.userId, userUuid = payload.userUuid;
  return { userId, userUuid };
}

async function CreateUser(authorization) {
  const { userId } = await GetUserId(authorization);
  const response = await axios({
    method: "GET",
    url: `https://api.userfront.com/v0/users/${userId}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${keys.userfrontAPIKey}`,
    },
  });

  let userData = response.data;
  let user = new User({
    id: userData.userId,
    uuid: userData.userUuid,
    name: userData.name,
    email: userData.email,
  });
  await user.save();

  return user;
}

async function GetUser(authorization) {
  const { userId, userUuid } = await GetUserId(authorization);

  let created = false;
  let user = await User.findOne({
    id: userId,
    uuid: userUuid
  }).exec();

  if (user == null) {
    created = true;
    user = await CreateUser(authorization);
  }

  return { user, created };
}

async function UpdateUser(authorization, values) {
  const { user } = await GetUser(authorization);

  Object.entries(values).forEach(([key, value]) => {
    user[key] = value;
  });
  await user.save();
  
  return user;
}

module.exports.GetUserId = GetUserId;
module.exports.CreateUser = CreateUser;
module.exports.GetUser = GetUser;
module.exports.UpdateUser = UpdateUser;