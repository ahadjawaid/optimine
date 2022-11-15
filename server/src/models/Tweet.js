const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema ({
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
});

const Tweet = mongoose.model("tweet", TweetSchema);
exports.Tweet = Tweet;