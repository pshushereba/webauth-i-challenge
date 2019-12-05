const db = require('../data/db-config.js');

function add(user) {
    return db('users').insert(user)
}

module.exports = {
    add
}