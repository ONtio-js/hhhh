const signIn = require('../../application/use-cases/auth/signIn');

const authController = (
    makeUserDb,
    makeUserDbImpl,
    authServiceInterface,
    authServiceInterfaceImpl,
) => {
    const makeDb = makeUserDb(makeUserDbImpl);
    const authService = authServiceInterface(authServiceInterfaceImpl);

    const loginUser = (req, res, next) => {
        const { email, password } = req.body;
        signIn(email, password,makeDb,authService)
        .then((token) => res.json(token))
        .catch((err) => next(err));
    };

    return {
        loginUser
    }
}

module.exports = authController;