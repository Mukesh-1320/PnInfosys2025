const mongoose = require('mongoose');


const TeamSchema = new mongoose.Schema({
     name: {
        type: String,
        require: true,
     },
     position: {
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

const TeamModel = mongoose.model('Team', TeamSchema);
module.exports = TeamModel;