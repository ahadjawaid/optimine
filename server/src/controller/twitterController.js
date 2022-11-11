// Search for Tweets within the past seven days
const needle = require('needle');
const config = require("../config");

async function getRequest(hashtag) {
    const params = {
        'query': `#${hashtag} lang:en`,
        'tweet.fields': 'public_metrics',
        'expansions': 'author_id',
        'max_results': '100'
    }
    const res = await needle('get', 'https://api.twitter.com/2/tweets/search/recent', params, {
        headers: {
            "User-Agent": "v2RecentSearchJS",
            "authorization": `Bearer ${config.userfrontAPIKey}`
        }
    })
    if (res.body) {
        return res.body;
    } else {
        throw new Error('Unsuccessful request');
    }
}
(async () => {
    try {
        const response = await getRequest();
        console.dir(response, {
            depth: null
        });
    } catch (e) {
        console.log(e);
        process.exit(-1);
    }
    process.exit();
})();

module.exports.getRequest = getRequest;


