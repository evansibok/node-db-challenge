const db = require('../db-config');

function getAllResources() {
  return db('resources');
}

module.exports = {
  getAllResources
}