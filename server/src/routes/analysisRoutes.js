const { getTweets } = require("../controller/twitterController");
const { getSentiment } = require("../controller/analysisController");



module.exports = (app) => {
    app.post("/api/request-analysis", async (req, res) => {
        const { authorization } = req.headers;
        const { topic } = req.body;

        const { user } = GetUser(authorization);
        const rawTweets = await getTweets(topic).data;

        const analysis = getAnalysis(user, topic, rawTweets);

        res.status(201).send(analysis);
    });
}