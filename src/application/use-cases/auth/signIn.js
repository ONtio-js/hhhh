const signIn = (email,password,makeuserDb,authservice) =>{
    if(!email || !password){
        const error = new Error('email and password muust not be empty');
        error.statusCode = 401;
        throw error;
    }
    return makeuserDb.findByProperty({email})
    .then((user) => {
        if(!user.length) {
            const error = new Error('Email not registered yet');
            error.statusCode = 400;
            throw error;
        }
        const isMatch = authservice.compare(password,user[0].password);
        if(!isMatch) {
            const error = new Error(' incorrect Password');
            error.statusCode = 400;
            throw error;
        }
        const payload = {
            user: {
                id: user[0].id
            }
        };
        return authservice.generateToken(payload);
    })
    
}

module.exports = signIn;