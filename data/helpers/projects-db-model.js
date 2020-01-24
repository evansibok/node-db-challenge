const db = require('../db-config');

function getAllProjects() {
  return db('projects');
}

module.exports = {
  getAllProjects
}