const authRouter = require('./auth');

const routes = (app,express) => {
    app.use('/api/v1/login', authRouter(express))
}

module.exports = routes;