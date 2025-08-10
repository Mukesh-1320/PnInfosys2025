const mongoose = require('mongoose')



const PortfolioSchema = new mongoose.Schema({
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

const PortfolioModel = mongoose.model('Portfolio', PortfolioSchema);
module.exports = PortfolioModel;