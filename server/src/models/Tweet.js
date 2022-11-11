const Tweet = {
  body: {
    type: String
  },
  poster: {
    type: String
  },
  date: {
    type: String,
  },
  retweets: {
    type: int
  },
  quoteTweets: {
    type: int
  },
  replies: {
    type: int
  },
  likes: {
    type: int
  },
  sentiment: {
    type: int
  }
};

exports.Tweet = Tweet;