const Basecontroller = require("../core/BaseController");
const FinalPage = require("../models/FinalPage");
const config = require("../config");

const finalPageController = new Basecontroller(FinalPage, {
  name: "Final Page",


  get: {
  pagination: config.pagination,
  query: ['eventDate', 'eventWorkshop'],
  populate: [
    { path: "link", select: 'name url type' },
    { path: "document", select: "name url type" },
    { path: "eventDate", select: "eventDate" },
    { path: "eventWorkshop", populate: [{ path: "eventDate", select: "eventDate" }] },
    { path: "programCard.speaker", select: 'type name' }
  ],
  pre: async (filter, req) => {
    if (!req.user) throw new Error("Unauthorized");

    if (req.user.role === 'admin') return;

    if (!req.query.eventWorkshop) {
      throw new Error("eventWorkshop Id is required for  users");
    }

    filter.eventWorkshop = req.query.eventWorkshop;
  }
},


  getById: {
    populate: [
      { path: "link" ,select:'name url'},
      { path: "document",select:"name document" },
      { path: "eventDate", select: "eventDate" },
      { path: "eventWorkshop" ,populate:[{path:"eventDate",select:"eventDate"}] },
      {
        path: "programCard.speaker",select:'type name'
      },
    ],
  },
});

module.exports = finalPageController;
