const db = require('../db-config');

function getAllProjects() {
  return db('projects');
}

function getProjectById(id) {
  return db('projects')
    .where({ id })
    .first();
}

function addProject(newProject) {
  return db('projects')
    .insert(newProject)
}

function deleteProject(id) {
  return db('projects')
    .where({ id })
    .del()
}

module.exports = {
  getAllProjects,
  getProjectById,
  addProject,
  deleteProject
}