const db = require('../db-config');

function getAllTasks() {
  return db('tasks as t')
    .innerJoin('projects as p', 'p.id', 't.project_id')
    .select('t.id as task_id', 't.description as task_description', 'notes as task_notes', 't.completed as isTaskCompleted', 'project_name', 'p.description as project_description')


  // select
  //    t.id as task_id,
  //   t.description as task_description,
  //   notes as task_notes,
  //   t.completed as isTaskCompleted,
  //   project_name,
  //   p.description as project_description
  // from tasks t
  // join projects p
  // on p.id = t.project_id;
}

module.exports = {
  getAllTasks
}