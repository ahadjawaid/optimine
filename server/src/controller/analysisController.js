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

async function getAnalysis(user, rawTweets) {
        const tweets = [];
        
        let postiveCount, negativeCount, neutralCount = 0;
        let tweetData = rawTweets.data;
        let tweetUsers = rawTweets.users;
        let tweetMeta = rawTweets.meta;

        for (let i = 0; i < tweetMeta.result_count; i++) {
            let senti = getSentiment(tweetData[i].text);
            if(sentiment == 1){
                postiveCount++;
            }
            else{
                negativeCount++;
            }
            tweets.append({
                body: tweetData[i].text,
                poster: tweetUsers[i].username,
                retweets: tweetData[i].public_metrics.retweet_count,
                quoteTweets: tweetData[i].public_metrics.quote_count,
                replies: tweetData[i].public_metrics.reply_count,
                likes: tweetData[i].public_metrics.like_count,
                sentiment: senti
            });
        }

        const analysis = {
            uuid: user.uuid,
            postive: postiveCount,
            negative: negativeCount,
            neutral: neutralCount,
            numberOfTweets: tweetMeta.result_count,
            tweets: tweets
        };

        return analysis;
}

module.exports.getSentiment = getSentiment;
module.exports.getAnalysis = getAnalysis;
