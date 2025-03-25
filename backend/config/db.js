const mongoose = require('mongoose');



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI); // enter your mongodb connection string here
        console.log('MongoDB connected Successfully!');
    }
    catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
    
}

module.exports = connectDB;