const BaseController = require("../core/BaseController");
const Feedback = require("../models/Feedback");
const config = require("../config");


const feedbackController = new BaseController(Feedback, {
  name: "Feedback",
  access: "admin",

  getById: {
    populate: [
      { path: "user", select: "name email mobile" },
    ],
  },
  get: {
    pagination: config.pagination,
    populate: [
      { path: "user", select: "name email mobile" },
    ],
  },
});


//For user..
const feedbackControllerUser = new BaseController(Feedback, {
  name: "Feedback",
  accessKey: "user",

  get: {
   populate:[{path:'user',select:'name email mobile '},
      // {path:'session',select:'sessionName name'}
   ],
    pre: async (filter, req) => {
      if (!req.user || !req.user._id)
        throw new Error("User not found in request");

      filter.user = req.user._id;

      return filter;
    },
  },

  getById:{
   populate:[{path:'user',select:'name email mobile '},
      // {path:'session',select:'sessionName name'}
   ],
  },

  create: {
    pre: async (body, req, res) => {
      if (!req.user || !req.user._id) {
        throw new Error("Unauthorized: Missing user info");
      }
      body.user = req.user._id;
    },
  },


updateById: async (req, res) => {
  try {
    const { id } = req.params;
    const { feedbacks, description } = req.body;

    if (!id) return res.status(400).json({ message: "Feedback ID is required" });

    if (description) {
      await Feedback.findByIdAndUpdate(id, { $set: { description } });
    }

    if (Array.isArray(feedbacks)) {
      for (const item of feedbacks) {
        await Feedback.updateOne(
          { _id: id, "feedbacks.item": item.item },
          { $set: { "feedbacks.$.rating": item.rating } }
        );
      }
    }

    const updatedFeedback = await Feedback.findById(id);

    return res.status(200).json({
      message: "Feedback updated successfully",
      data: updatedFeedback,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
}



});

module.exports = { feedbackController, feedbackControllerUser };
