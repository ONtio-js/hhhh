const jwt =  require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../../config/config');

const authService = () => {
    const encryptPassword =(password) => {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt)
    }
    const compare = (password, hashedPassword) => {
        return bcrypt.compare(password, hashedPassword);
    }

    const verify = (token) => {
        jwt.verify(token,config.jwtSecret);
    }

    const generateToken = (payload) => jwt.sign(payload, config.jwtSecret,{
        expiresIn:360000
    })

    return Object.freeze({
        encryptPassword,
        compare,
        verify,
        generateToken
    });
}

module.exports = authService;