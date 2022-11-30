const config = require("../config");
const axios = require('axios');

async function getTweets(hashtag) {
    const res = await axios.get('https://api.twitter.com/2/tweets/search/recent', { 
        params: {
            'query': `#${hashtag} lang:en`,
            'tweet.fields': 'public_metrics',
            'expansions': 'author_id',
            'max_results': '100'
        }, 
        headers: {
            "User-Agent": "v2RecentSearchJS",
            "authorization": `Bearer ${config.twitterBearerToken}`
         }
    });

    if (res.data) {
        return res.data.data;
    } else {
        // throw new Error('Unsuccessful request');
        console.log("request failed");
    }
}

module.exports.getTweets = getTweets;


