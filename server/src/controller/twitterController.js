const config = require("../config");
const axios = require('axios');
const { Analysis } = require("../models/Analysis");

async function getRequest(hashtag,requestUuid) {
    const param = {
        'query': `#${hashtag} lang:en`,
        'tweet.fields': ["created_at","id","public_metrics"],
        'expansions': 'author_id',
        'max_results': '100'
    }
    
    const res = await axios.get({url: 'https://api.twitter.com/2/tweets/search/recent', params: param, 
        headers: {
            "User-Agent": "v2RecentSearchJS",
            "authorization": `Bearer ${config.userfrontAPIKey}`
        }})

    if (res.body) {
        console.log('Unsuccessful request');
    }

    let tweetData = res.data;
    let tweetUsers = res.users;
    let tweetMeta = res.meta;
    for (let i = 0; i < tweetMeta.result_count; i++) {
        let tweet = {
            body: tweetData[i].text,
            poster: tweetUsers[i].username,
            date: tweetData[i].created_at,
            retweets: tweetData[i].public_metrics.retweet_count,
            quoteTweets: tweetData[i].public_metrics.quote_count,
            replies: tweetData[i].public_metrics.reply_count,
            likes: tweetData[i].public_metrics.like_count, 
            sentiment: 1
        }
        let doc = await Analysis.findOne({ uuid: requestUuid })
        doc.tweets.push(tweet)
        await doc.save()
    };
}

module.exports.getRequest = getRequest;



