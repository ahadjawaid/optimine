const jose = require('jose');
const assert = require('assert');
const axios = require('axios');
const keys = require('../config');
const { User } = require("../models/User");
const config = require("../config");

const tenantId = keys.userfrontTenantID;
const publicKey = keys.userfrontPublicKey;

async function GetUserId(authHeader) {
  const [tokenFormat, accessToken] = authHeader.split(" ");
  assert(tokenFormat == "Bearer", "Invalid token format");

  const key = await jose.importSPKI(publicKey, "RS256");
  const { payload } = await jose.jwtVerify(accessToken, key, {
    algorithms: ["RS256"],
  });
  assert(payload.tenantId == tenantId && payload.iss == "userfront", "Invalid access token");

  const userId = payload.userId, userUuid = payload.userUuid;
  return { userId, userUuid };
}

async function CreateUser(authHeader) {
  const { userId } = await GetUserId(authHeader);
  const response = await axios({
    method: "GET",
    url: `https://api.userfront.com/v0/users/${userId}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.userfrontAPIKey}`,
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

async function GetUser(authHeader) {
  const { userId, userUuid } = await GetUserId(authHeader);

  let created = false;
  let user = await User.findOne({
    id: userId,
    uuid: userUuid
  }).exec();

  if (user == null) {
    created = true;
    user = await CreateUser(authHeader);
  }

  return { user, created };
}

module.exports.GetUserId = GetUserId;
module.exports.CreateUser = CreateUser;
module.exports.GetUser = GetUser;