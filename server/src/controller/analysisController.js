const tf = require("@tensorflow/tfjs-node");
const config = require("../config");


async function getSentiment(text) {
    model = await tf.loadLayersModel("file://src/tfjs_model/model.json");

    // const out = model.predict(processedText);
    // console.log(out);
    
}

async function getAnalysis(user, topic, rawTweets) {
        const tweets = []
        
        let postiveCount, negativeCount, neutralCount = 0;

        for (let i = 0; i < rawTweets.length; i++) {
            let currTweet = rawTweets[i];

            let sentiment = getSentiment(currTweet.text);

            tweets.append({
                body: currTweet.text,
                poster: currTweet.author_id,
                retweets: currTweet.public_metrics.retweet_count,
                quoteTweets: currTweet.public_metrics.quote_count,
                replies: currTweet.public_metrics.reply_count,
                likes: currTweet.public_metrics.like_count,
                sentiment: sentiment,
            });
        }

        const analysis = {
            uuid: user.uuid,
            postive: postiveCount,
            negative: negativeCount,
            neutral: neutralCount,
            numberOfTweets: tweets.length,
            tweets: tweets
        };

        return analysis;
}

module.exports.getSentiment = getSentiment;
module.exports.getAnalysis = getAnalysis;