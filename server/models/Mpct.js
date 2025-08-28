const mongoose = require('mongoose');


const MpctSchema = new mongoose.Schema({
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

const MpctModel = mongoose.model('Mpct', MpctSchema);
module.exports = MpctModel;