const authController = require('../../../adapters/controllers/authController');
const makeUserDb = require('../../../application/data-access/users.db');
const makeMongoDB = require('../../database/mongoDB/data-access/user');
const authService = require('../../../application/services/authService');
const authServiceImp = require('../../services/authService');

const authRouter = (express) => {
    const router = express.Router();

    // loading controller with its dependencies
    const controller = authController(
        makeUserDb,makeMongoDB,authService,authServiceImp
    );
    
    // login endpoint
    router.route('/').post(controller.loginUser);

    return router;
}


module.exports = authRouter;