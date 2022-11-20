const config = require("../config");
const axios = require('axios');

async function getRequest(hashtag) {
    const param = {
        'query': `#${hashtag} lang:en`,
        'tweet.fields': 'public_metrics',
        'expansions': 'author_id',
        'max_results': '100'
    }
    const res = await axios.get({url: 'https://api.twitter.com/2/tweets/search/recent', params: param, 
        headers: {
            "User-Agent": "v2RecentSearchJS",
            "authorization": `Bearer ${config.userfrontAPIKey}`
        }})
    if (res.body) {
        return res.body;
    } else {
        // throw new Error('Unsuccessful request');
        console.log("request failed");
    }
}

module.exports.getRequest = getRequest;


