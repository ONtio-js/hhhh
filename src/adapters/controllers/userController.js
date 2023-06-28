const signUp = require('../../application/use-cases/auth/signUp')
const signUp = (
    makeUserDb,
    makeUserDbImpl,
    authServiceInterface,
    authServiceInterfaceImpl
) => {
    const makeDb = makeUserDb(makeUserDbImpl);
    const authService = authServiceInterface(authServiceInterfaceImpl);

    const addNewUser = (req, res, next) => {
        const userInfo = { username, password, email, role, createdAt } = req.body;
        signUp(userInfo).then((user) => res.json(user)
            .catch((err) => next(err)));
    }

    return {
        addNewUser
    }
}

module.exports = signUp;