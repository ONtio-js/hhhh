const connection = (mongoose, config, options) => {
    const connectToMongo = () => {
        mongoose
            .connect(config.mongo.uri, options)
            .then(() => {
                console.log('Connected to Mongo')
             },
                (err) => {
                    console.error('mongodb Error:', err);
                })
            .catch((err) => {
                console.error('mongodb Error:', err);
            });
    }
    setTimeout(() => {
        connectToMongo()
    },100000000);

    return {
        connectToMongo
    }
}

module.exports = connection;