const db = require('../data/db-config.js');

function add(user) {
    return db('users').insert(user)
}

function findBy(user) {
    return db('users').where(user);
  }

function getUsers() {
    return db.select("id", "username").from("users");
}

module.exports = {
    add,
    findBy,
    getUsers
}