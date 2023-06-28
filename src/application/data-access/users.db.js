// const {v4} = require('uuid')
// const _ = require('lodash');

// const makeUserDb = ({users}) => {
//     async function findOne(_filter, _options) {
//         const {populate, sort} = _options;
//         const query = await users.findOne(_filter);
//         if (sort) query.sort(sort);
//         _.forEach(populate || [], (p) => query.populate(p));
//         return query.lean().exec();
//     };
//     async function insert({id: _id = v4, ...userInfo }){
//         return await users.create({id: _id, ...userInfo});
//     };
//     async function update({_filter, _userInfo}){
//         return await users.findOneAndUpdate(_filter, _userInfo, {new:true});
//     };
//     async function remove(_id){
//         const res = await users.deleteOne({_id});
//         return {
//             found: res.n,
//             deleted: res.deletedCount
//         }
//     };
//     async function find(_filter, _options = {}){
//         const {populate} = _options;
//         const query = users.find(_filter);
//         if(populate) _.forEach(populate || [], (p) => query.populate(p));
//     };
//     async function aggregate(pipeline){
//         return await users.aggregate(pipeline);
//     };
//     async function paginate(_query, _options){
//         const {sort, populate, page, limit} = _options;
//         return users.paginate(_query, {
//             sort,
//             lean: true,
//             page,
//             limit,
//             populate
//         });
//     };

//     return Object.freeze({
//         findOne,
//         insert,
//         update,
//         remove,
//         find,
//         aggregate,
//         paginate
//     });
// }

// module.exports = {makeUserDb};
const makeUserDb = (repository)  => {
    const findByProperty = (params) => repository.findByProperty(params);
    const countAll = (params) => repository.countAll(params);
    const findById = (id) => repository.findById(id);
    const add = (user) => repository.add(user);
    const deleteById = (id) => repository.deleteById(id);
  
    return Object.freeze( {
      findByProperty,
      countAll,
      findById,
      add,
      deleteById
    });
  }