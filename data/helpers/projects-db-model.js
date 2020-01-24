const db = require('../db-config');

function getAllProjects() {
  return db('projects');
}

function getProjectById(project_id) {
  return db('projects as p')
    .where({ project_id })
    .leftJoin('tasks as t', 't.project_id', 'p.id')
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