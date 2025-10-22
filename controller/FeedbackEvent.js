const BaseController = require("../core/BaseController");
const Feedbackevent = require("../models/FeedbackforEvent");
const config = require("../config");

const feedbackeventController = new BaseController(Feedbackevent,{
    name:"Feedback for event",
     create: {
    pre: async (body, req, res) => {
      if (!req.user || !req.user._id) {
        throw new Error("Unauthorized: Missing user info");
      }
      body.user = req.user._id;
    },
  },
  get:{
    populate:[{path:"user",select:"name email "},{path:"event",select:"programCard",populate:[{path:"programCard.speaker",select:"name type"}]}]
  },
  getById:{
    populate:[{path:"user",select:"name email "},{path:"event",select:"programCard",populate:[{path:"programCard.speaker",select:"name type"}]}]
  }
});

module.exports = feedbackeventController