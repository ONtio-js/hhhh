const mongoose = require('mongoose');
const database = (DATABSE_URL) => {
    mongoose.connect(DATABSE_URL).then(
        console.log("database connection established"));
};
module.exports.database = database;