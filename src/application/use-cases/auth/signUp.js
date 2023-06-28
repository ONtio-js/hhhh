const user = require('../../entities/users.model');
const signUp = (userInfo,makeuserDb,authservice) =>{
    const {username,password,email,role,createdAt} = userInfo;
    if(!username || !password || !email){
        throw new Error('username,password and email are required');
    }
    const newUser =  user(
        username,
        authservice.encryptPassword(password),
        email,
        role,
        createdAt
    );

    return makeuserDb.findByProperty({username})
    .then((userWithUsername) => {
        if(userWithUsername.length > 0) {
            throw new Error(`user with username ${userWithUsername} already exists`);
        }
        return makeuserDb.findByProperty({email});
    })
    .then((userWithEmail) => {
        if(userWithEmail.length > 0){
            throw new Error(`User ${userWithEmail} already exists`);
        }
        return makeuserDb.add(newUser);
    })
}
 module.exports = signUp;