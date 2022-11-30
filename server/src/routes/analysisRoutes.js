const { getTweets } = require("../controller/twitterController");
const { getAnalysis } = require("../controller/analysisController");



module.exports = (app) => {
    app.post("/api/request-analysis", async (req, res) => {
        const { authorization } = req.headers;
        const { topic } = req.body;
        const { user } = GetUser(authorization);
        const rawTweets = await getTweets(topic);
        const analysis = await getAnalysis(user, rawTweets);

        res.status(201).send(analysis);
    });
}

