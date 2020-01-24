const db = require('../db-config');

function getAllProjects() {
  return db('projects');
}

function getProjectById(id) {
  return db('projects')
    .where({ id })
    .first();
}

module.exports = {
  getAllProjects,
  getProjectById
}