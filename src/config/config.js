require('dotenv').config();
const config = {
    port: process.env.PORT,
    ip: process.env.HOST,
    mongo: {
        uri:process.env.MONGO_URL
    },
    jwtSecret: process.env.JWT_SECRET
}

module.exports = config