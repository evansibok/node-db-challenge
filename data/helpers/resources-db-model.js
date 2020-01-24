const db = require('../db-config');

function getAllResources() {
  return db('resources');
}

function addResource(newResource) {
  return db('resources')
    .insert(newResource);
}

module.exports = {
  getAllResources,
  addResource
}