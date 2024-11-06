const mongoose = require('mongoose');
require('dotenv').config();

const URI = 'mongodb+srv://pandey0773:JDDtMEXctv6Ms1v3@cluster0.p9kpfwk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


const connectDb = async()=>{
    try {
        await mongoose.connect(URI)
        console.log('connected to db')
    } catch (error) {
        console.error('conection failed to db', error)
    }
}
 module.exports = connectDb;