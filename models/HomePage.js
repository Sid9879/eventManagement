const mongoose = require('mongoose');
const HomepageSchema = new mongoose.Schema({
    type:{
        type:String,
        enum:['partner','venue'],
    },
   partner:{
     name:{
        type:String,
    },
    url:{
        type:String,
    },
    document:{
        type:String
    },
   },
   venue:{
    name:{
        type:String,
    },
    img:[
        {
            name:{
                type:String
            },
            url:{
                type:String
            }
        }
    ]
   },
   banner:{
    type:mongoose.Schema.Types.ObjectId,
            ref:"Banner",
   }
},{timestamps:true});
module.exports = mongoose.model('homepage',HomepageSchema);