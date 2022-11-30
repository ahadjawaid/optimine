const { getTweets } = require("../controller/twitterController");
const { getAnalysis } = require("../controller/analysisController");
const { GetUser } = require("../controller/userController");



module.exports = (app) => {
    app.post("/api/request-analysis", async (req, res) => {
        const { authorization } = req.headers;
        const { topic } = req.body;

        const { user } = await GetUser(authorization);
        const rawTweets = await getTweets(topic);

        const analysis = await getAnalysis(user, topic, rawTweets);
        console.log(analysis);

        res.status(201).send(analysis);
    });
}