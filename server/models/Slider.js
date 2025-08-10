const mongoose = require('mongoose')



const SliderSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,

    },
    subtitle:{
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
}, {timestamps:true});

const SliderModel = mongoose.model('Slider', SliderSchema);
module.exports = SliderModel;