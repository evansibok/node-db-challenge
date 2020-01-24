
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { description: 'View into the milky way', project_id: 1, notes: 'I can see the galaxy beyond my human eyes.', completed: false },
        { description: 'Send a transmission to the alien vessels.', project_id: 1, notes: 'I have established communication with a foreign race.', completed: false },
        { description: 'Give a talk on the importance of love', project_id: 2, notes: '20 people attended the talk', completed: false },
        { description: 'Visit the orphanage to show love', project_id: 2, notes: 'I felt so sad seeing how badly our orphanage homes are run', completed: false },
        { description: 'Get project requirements from clients', project_id: 3, notes: 'Insightful session with clients after learning about the project.', completed: false },
        { description: 'Design wireframes for clients', project_id: 3, notes: 'Completed wireframes design and sent to clients.', completed: false },
      ]);
    });
};
