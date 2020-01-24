
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_name: 'The Big Bang', description: "Let's remake the universe.", completed: false },
        { project_name: 'Community Service', description: "Contribute to your community with your best skillset.", completed: false },
        { project_name: 'Build a website', description: "Build a website for a client.", completed: false }
      ]);
    });
};
