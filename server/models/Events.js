const mongoose = require('mongoose');


const EventsSchema = new mongoose.Schema({
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

const EventsModel = mongoose.model('Events', EventsSchema);
module.exports = EventsModel;