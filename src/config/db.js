const mongoose = require('mongoose');
require('dotenv').config({path: '.env'});

const conectarDB = async() => {
    try{
        await mongoose
            .connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log('Connected to MongoDB');
    }catch (err){
        console.error(err);
        process.exit(1);
    }
}

module.exports = conectarDB;