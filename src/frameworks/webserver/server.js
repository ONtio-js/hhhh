const {createTerminus} = require('@godaddy/terminus')

const serverConfig = (app,mongoose,serverInt, config) => {
    const healthCheck = () => {
        // err_connecting_to_mongodb_server
       if ( 
        mongoose.connection.readystate === 0 
        || mongoose.connection.readystate ===3){
            return Promise.reject(new Error('mongoose has disconnected'));
        }
        // connection to mongodb server
        if(mongoose.connection.readystate === 2){
            return Promise.reject(new Error('mongoose is connecting'));
        }
        return Promise.resolve();
    };

    const onSignal = () => {
        console.log('server is starting cleanup');
        return new Promise((resolve, reject) => {
            mongoose
            .disconnect(false)
            .then(() => {
                console.log('mongoose is disconnected');
                resolve();
            })
            .catch(reject);
        })
    };

    const beforeShutdown = () => {
        return new Promise((resolve) => {
            setTimeout(resolve,15000)
        })
    };

    const onShutdown = () => {
        console.log('cleanup finished, server is shutting down');
    }

    const startServer = () => {
        createTerminus(serverInt,{
            logger:console.log,
            signal: 'SIGNINT',
            healthChecks: {
                '/healthcheck': healthCheck
            },
            onSignal,
            onShutdown,
            beforeShutdown,
        }).listen(config.port, config.ip, () => {
            console.log('Express server listening on %d port in %s mode', config.port, app.get('env'));
        });
    }
    return Object.freeze({
        startServer
    });
}

module.exports = serverConfig;