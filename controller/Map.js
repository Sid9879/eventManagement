const BaseController = require('../core/BaseController')
const Maps = require('../models/Maps');
const config = require('../config');

const mapController = new BaseController(Maps,{
    name:"Maps",

    create: {
    pre: async (payload, req, res) => {
      const { type, eventDate, eventWorkshop, exhibition, img } = payload;

      if (!type) {
        return res.status(400).json({ message: "Type is required" });
      }

      if (type === "event management") {
        if (!eventDate || !eventWorkshop) {
          return res.status(400).json({
            message: "For 'event management', both eventDate and eventWorkshop IDs are required.",
          });
        }
      }

      if (type === "exhibition") {
        if (!exhibition) {
          return res.status(400).json({
            message: "For 'exhibition', exhibition ID is required.",
          });
        }
      }

      if (!img || !Array.isArray(img) || img.length === 0) {
        return res.status(400).json({
          message: "At least one image (name and url) is required.",
        });
      }

      for (const image of img) {
        if (!image.name || !image.url) {
          return res.status(400).json({
            message: "Each image must include both name and url.",
          });
        }
      }
    },

    
    post: async (instance, req, res) => {
      return await instance.populate([
        { path: 'eventDate' },
        { path: 'eventWorkshop' },
        { path: 'exhibition' },
      ]);
    },
  },


//   updateById: {
//     pre: async (filter, updatePayload, req, res) => {
//       if (updatePayload.img && Array.isArray(updatePayload.img)) {
//         const mapDoc = await Maps.findOne(filter);
//         if (!mapDoc) {
//           return res.status(404).json({ message: "Map not found" });
//         }

//         const existingImages = mapDoc.img || [];
//         const newImages = updatePayload.img.filter(
//           img => img.name && img.url
//         );

//         updatePayload.img = [...existingImages, ...newImages];
//       }

    
//       if (updatePayload.type === "event management") {
//         updatePayload.exhibition = undefined; // remove exhibition if type changed
//       } else if (updatePayload.type === "exhibition") {
//         updatePayload.eventDate = undefined;
//         updatePayload.eventWorkshop = undefined;
//       }
//     },

//     post: async (updated, req, res) => {
//       await updated.populate([
//         { path: 'eventDate' },
//         { path: 'eventWorkshop' },
//         { path: 'exhibition' },
//       ]);
//     },
//   },

get:{
    pagination:config.pagination,
      populate:[
    {
    path:"eventWorkshop",populate:[{path:"eventDate",select:"eventDate"},
      
    ]
  },{path:"exhibition"}
],
     query: ['type', 'eventDate', 'eventWorkshop', 'exhibition'],
     pre: async (filter, req, res) => {
     const userRole = req.user?.role;

     if (userRole === 'user') {
      const hasEventWorkshop = !!req.query.eventWorkshop;
      const hasExhibition = !!req.query.exhibition;

      if (!hasEventWorkshop && !hasExhibition) {
        return res.status(400).json({
          message: "For users, either eventWorkshop ID or exhibition ID is required."
        });
      }
    }

    // Admins have no restrictions
    return;
  }
},

getById:{
  populate:[
    // {path:"eventDate",select:"eventDate"},
    {
    path:"eventWorkshop",populate:[{path:"eventDate",select:"eventDate"},
      
    ]
  },{path:"exhibition"}
]
}

})
module.exports = mapController;