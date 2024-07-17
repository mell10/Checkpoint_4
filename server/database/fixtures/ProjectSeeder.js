const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)

class ProjectSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "project", truncate: true });
  }

  // The run method - Populate the 'item' table with fake data

  run() {
    const projects = [
      {
        name: "Wildy Gamy",
        description: "blah blah",
      },
    ];

    projects.forEach((project) => {
      this.insert(project);
    });
  }
}

// Export the ItemSeeder class
module.exports = ProjectSeeder;
