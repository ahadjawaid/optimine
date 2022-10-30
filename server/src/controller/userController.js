const jose = require("jose");
const keys = require('../config');

const tenantId = keys.userfrontTenantID;
const publicKey = keys.userfrontPublicKey;

module.exports = {
  async VerifyAccessToken(accessToken) {
    const key = await jose.importSPKI(publicKey, 'RS256');
    const { payload } = await jose.jwtVerify(accessToken, key, {
      algorithms: ["RS256"],
    });

    if (payload.tenantId == tenantId && payload.iss == 'userfront')
      return payload.userUuid;

    throw Error("Invalid credentials proivded");
  },

  async GetUser(accessToken) {
    await this.VerifyAccessToken(accessToken)
      .catch((error) => {
        console.log(error.message);
      }).then((userUuid) => {
        console.log(userUuid);
      });
  },
};