const config = {
    port: process.env.PORT || 8080,
    ip: process.env.HOST || '0.0.0.0',
    mongo: {
        uri:process.env.MONGO_URL || 'mongodb://localhost:27017/auth_api'
    },
    jwtSecret: process.env.JWT_SECRET || "hxeyt%_-894$#$%&'"
}