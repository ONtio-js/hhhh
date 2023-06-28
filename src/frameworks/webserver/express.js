const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const expressconfig = (app) => {
    // security middleware configuration
    app.use(helmet());

    app.use(compression());
    app.use(bodyParser.json({limit:'50mb'}));
    app.use(
        bodyParser.urlencoded({
            limit:'50mb',
            extended:true,
            parameterLimit:50000
        })
    );
    app.use((req, res, next) => {
        //website you wish to allow to connect
        // res.setHeader('Access-Control-Allow-Origin', '*');
        // request methods allowed

        res.setHeader(
            'Access-Control-Allow-Methods',
            'GET, POST, PUT, DELETE, OPTIONS,PATCH'
        );
        // request headersyou wish to allow
        res.setHeader(
            'Access-Control-Allow-Headers',
            'X-Requested-With,content-type,Authorization, cache-control,pragma,'
        );
        // pass to the next layer
        next();
    })

    app.use(morgan('combined'))
}
module.exports = expressconfig;