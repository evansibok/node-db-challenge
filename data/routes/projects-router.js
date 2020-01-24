const express = require('express');

const projectsDb = require('../helpers/projects-db-model');
const tasksDb = require('../helpers/tasks-db-model');

const router = express.Router();

router.get('/', (req, res) => {
  
  projectsDb.getAllProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: err.message,
        stack: err.stack
      });
    })
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  projectsDb.getProjectById(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: err.message,
        stack: err.stack
      });
    })
});

router.post('/', (req, res) => {
  const newProject = req.body;

  projectsDb.addProject(newProject)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: err.message,
        stack: err.stack
      });
    })
});

router.post('/:id/tasks', (req, res) => {
  const { id } = req.params;
  const newTask = req.body

  const updatedTask = { ...newTask, project_id: id }
  tasksDb.addTasks(updatedTask)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: err.message,
        stack: err.stack
      });
    })
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  projectsDb.deleteProject(id)
    .then(data => {
      res.status(202).json(data);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: err.message,
        stack: err.stack
      });
    })
});

module.exports = router;