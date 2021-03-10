// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
  all(cb) {
    orm.selectAll('burger', (res) => cb(res));
  },
  // The variables cols and vals are arrays.
  create(cols, vals, cb) {
    orm.insertOne('burger', cols, vals, (res) => cb(res));
  },
  update(objColVals, condition, cb) {
    orm.updateOne('burger', objColVals, condition, (res) => cb(res));
  },
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
