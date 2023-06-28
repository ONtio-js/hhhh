const userModel =  require('../models/user');


// move it to proper place
function omit(obj, ...props){
    const result = {...obj};
    props.forEach((prop) => delete result[prop]);
    return result;
}

const makeUserMongoDB = () =>{
    const findByProperty = (params) => {
        userModel.find(omit(params,'page','perpage'))
        .skip(params.perPage * params.page - params.perPage)
        .limit(params.perPage);
    }

    const countAll = (params) => {
        userModel.countDocuments(omit(params,'page','perpage'))
    }

    const findById = (id) => {
        userModel.findById(id).select('-password');
    }

    const add = (userEntity) => {
        const newUser = userModel.create({
            username:userEntity.getUserName(),
            password:userEntity.getPassword(),
            email:userEntity.getEmail(),
            role:userEntity.getRole(),
            createdAt: new Date(),
        });
        return newUser;
    }

}

module.exports = makeUserMongoDB;