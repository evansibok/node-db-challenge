const express = require('express');

const resourcesDb = require('../helpers/resources-db-model');

const router = express.Router();

router.get('/', (req, res) => {

  resourcesDb.getAllResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: err.message,
        stack: err.stack
      });
    })
});

router.post('/', (req, res) => {
  const newResource = req.body;

  resourcesDb.addResource(newResource)
    .then(resourceId => {
      res.status(201).json(resourceId);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: err.message,
        stack: err.stack
      });
    })
});

module.exports = router;