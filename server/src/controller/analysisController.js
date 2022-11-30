const tf = require("@tensorflow/tfjs-node");
const word2index = require("../tfjs/tokenizer.json");

function getWords(text){
    var words = text.split(" ");
    return words;
}

function getTokenised(words) {
    var wordTokens = [];
    for (let i = 0; i < words.length; i++) {
        if (word2index[words[i].toLowerCase()] != undefined && wordTokens.length < 50) {
            wordTokens.push(word2index[words[i].toLowerCase()]);
        }
    }
    for (let i = 0; i < 50; i++) {
        if (wordTokens.length < 50) {
            wordTokens.push(0);
        }
    }
    return new Array(wordTokens);
}

async function getSentiment(text) {
    const model = await tf.loadLayersModel("file://server/src/tfjs/model.json");
    const seedWordToken = tf.tensor2d(getTokenised(getWords(text)));
    const predict = await model.predict(seedWordToken).data();
    const p = predict[0];
    if (p > 0.5)
        result = 1;
    else
        result = 0;
    return result;
}

async function getAnalysis(user, topic, rawTweets) {
        const tweets = [];
        
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

//Just pass in a string of text to get the sentiment
module.exports.getSentiment = getSentiment;
module.exports.getAnalysis = getAnalysis;