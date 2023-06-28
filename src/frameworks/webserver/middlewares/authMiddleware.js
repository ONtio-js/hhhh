const authServiceImp = require('../../services/authService');
const authServiceInterface = require('../../../application/services/authService');

const authMiddleware = (req,res,next) => {
    const authService = authServiceInterface(authServiceImp());
    if(req.headers && req.headers('Authorization')){
        const token = req.headers['Authorization'].split(' ');
        if (token[0] !== 'bearer') throw new Error('invalid access token format');
        if(!token[1]) throw new Error('provide authorization token');

        try {
            const decoded = authService.verify(token[1]);
            req.user = decoded.user;
            next();
        } catch (error) {
            throw new Error(error);
        }
    }
    throw new Error('set authorization header');
};

module.exports = authMiddleware;