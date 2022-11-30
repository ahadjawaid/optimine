const mongoose = require("mongoose");

const AnalysisSchema = new mongoose.Schema({
  uuid: {
    type: String,
    unique: true,
  },
  topic: {
    type: String,
  },
  postive: {
    type: Number,
    default: 0,
  },
  negative: {
    type: Number,
    default: 0,
  },
  neutral: {
    type: Number,
    default: 0,
  },
  numberOfTweets: {
    type: Number,
    default: 0,
  },
  tweets: [{
    body: {
      type: String
    },
    poster: {
      type: String
    },
    retweets: {
      type: Number
    },
    quoteTweets: {
      type: Number
    },
    replies: {
      type: Number
    },
    likes: {
      type: Number
    },
    sentiment: {
      type: Number
    }
  }]
});

const Analysis = mongoose.model("analysis", AnalysisSchema)
exports.Analysis = Analysis;