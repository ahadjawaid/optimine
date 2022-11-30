const { getTweets } = require("../controller/twitterController");
const { getAnalysis, saveAnalysis, getUserAnalysis } = require("../controller/analysisController");
const { GetUser } = require("../controller/userController");



module.exports = (app) => {
    app.post("/api/request-analysis", async (req, res) => {
        const { authorization } = req.headers;
        const { topic } = req.body;

        const { user } = await GetUser(authorization);
        const rawTweets = await getTweets(topic);

        const analysisData = await getAnalysis(user, topic, rawTweets);
        
        await saveAnalysis(analysisData);

        res.status(201).send(analysisData);
    });

    app.get("/api/get-user-analysis", async (req, res) => {
        const { authorization } = req.headers;
        const { user } = await GetUser(authorization);

        const analysisData = await getUserAnalysis(user);

        res.status(201).send(analysisData);
    })  
}