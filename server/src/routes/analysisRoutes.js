const { getRequest } = require("../controller/twitterController");
const { getSentiment } = require("../controller/analysisController");


module.exports = (app) => {
    app.post("/api/request-analysis", async (req, res) => {
        // const { authorization } = req.headers;
        const { topic } = req.body;
        console.log(topic);

        tweets = await getRequest(topic);
        console.log(tweets);

        res.status(201).send(tweets);

        // sentiment = getSentiment(tweets);
    });
}