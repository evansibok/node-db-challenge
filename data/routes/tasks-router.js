const express = require('express');

const tasksDb = require('../helpers/tasks-db-model');

const router = express.Router();

router.get('/', (req, res) => {

  tasksDb.getAllTasks()
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

module.exports = router;