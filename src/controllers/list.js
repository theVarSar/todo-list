
const List = require('./../models/list');

function get() {
    
    return List.find({});
}

function findOne(id) {    
    return List.findOne({_id: id});
}

function post(body) {
    return List.create(body);
}

function update(params, body) {
    return List.findByIdAndUpdate(params, body);
}

function delete_item(id) {
    return List.findByIdAndRemove({_id: id});    
}


module.exports = {
    get: get,
    findOne: findOne,
    post: post,
    update: update,
    delete_item: delete_item,
    
};
