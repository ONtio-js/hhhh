const { userModel } = require(".");

const UserModel = (userInfo) => {
    const {username,email,password,role,createdAt,updatedAt} = userInfo;
    return Object.freeze({
        getUserName: () => username,
        getPassword: () => password,
        getEmail: () => email,
        getRole: () => role,
        getCreatedAt: () => createdAt,
        getUpdatedAt: () => updatedAt
    });
}

module.exports = userModel;