const mongoose = require('mongoose');


const LearnSchema = new mongoose.Schema({
     title: {
        type: String,
        require: true,
     },
     description: {
        type: String,
        require: true,
     },
     image:{
        public_id:{
            type:String,
            require: true
        },
        url:{
            type:String,
            require: true
        }
    }
}, {timestamps: true});

const LearnModel = mongoose.model('Learn', LearnSchema);
module.exports = LearnModel;