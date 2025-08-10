const mongoose = require('mongoose');


const TechnologySchema = new mongoose.Schema({
     title: {
        type: String,
        require: true,
     },
     discription: {
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

const TechnologyModel = mongoose.model('Technology', TechnologySchema);
module.exports = TechnologyModel;