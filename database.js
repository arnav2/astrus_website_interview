const mongoose = require('mongoose');

// TODO: Update this to an env
let dev_url = "mongodb://localhost:27017"; // add local URL for testing here
let mongoDB = process.env.MONGO_URI || dev_url;
if (!mongoDB){
    console.error('PLEASE ADD DB URI')
}
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
