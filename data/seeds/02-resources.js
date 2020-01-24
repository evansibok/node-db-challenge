
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { resource_name: 'MacBook Pro 2017', description: "A macbook to make your life easier." },
        { resource_name: 'Microphone', description: "A microphone to speak your truth." },
        { resource_name: 'Conference Room', description: "A bubbling room with low lighting and air conditioning to set the tone." },
        { resource_name: 'Telescope', description: "A telescope to see beyond the horizon." },
        { resource_name: 'The Internet', description: "Travel around the world while in one corner." }
      ]);
    });
};
