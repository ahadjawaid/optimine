const tf = require("@tensorflow/tfjs-node");
const word2index = require("../tfjs/tokenizer.json");

async function getAnalysis(user, topic, rawTweets) {
        const tweets = [];
        let postiveCount = 0;
        let negativeCount = 0;
        let neutralCount = 0;

        for (let i = 0; i < rawTweets.length; i++) {
            let currTweet = rawTweets[i];

            let sentiment = await getSentiment(currTweet.text);

            if (sentiment > 0.5) {
                postiveCount++;
            } else if (sentiment < 0.5) {
                negativeCount++;
            } else {
                neutralCount++;
            }

            tweets.push({
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
            topic: topic,
            postive: postiveCount,
            negative: negativeCount,
            neutral: neutralCount,
            numberOfTweets: tweets.length,
            tweets: tweets
        };

        return analysis;
}

async function getSentiment(text) {
    const model = await tf.loadLayersModel("file://src/tfjs/model.json");
    const seedWordToken = tf.tensor2d(getTokenised(getWords(text)));
    const predict = await model.predict(seedWordToken).data();
    const p = predict[0];

    return p;
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

function getWords(text){
    var words = text.split(" ");
    return words;
}

//Just pass in a string of text to get the sentiment
module.exports.getAnalysis = getAnalysis;