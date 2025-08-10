const mongoose = require('mongoose');
const Local_url = "mongodb://127.0.0.1:27017/pninfosys2025"

const connectdb =async ()=>{
    try {
        await mongoose.connect(Local_url);
        console.log('Connected to the database');
    } catch (error) {
        console.log(error);
    }

}
module.exports = connectdb;