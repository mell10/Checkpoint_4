const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)

class LanguageSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "language", truncate: true });
  }

  // The run method - Populate the 'item' table with fake data

  run() {
    const languages = [
      {
        name: "JavaScript",
        description: "Blah Blah",
      },
      {
        name: "HTML5",
        description: "Blah",
      },
      {
        name: "CSS3",
        description: "Blah",
      },
    ];

    languages.forEach((language) => {
      this.insert(language);
    });
  }
}

// Export the ItemSeeder class
module.exports = LanguageSeeder;
