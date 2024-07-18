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
        description:
          "Utilisé dans les projets Wildy Gamy, Lazy FLicks et Twistrip.",
      },
      {
        name: "Html 5",
        description:
          "Utilisé dans les projets Wildy Gamy, Lazy FLicks et Twistrip.",
      },
      {
        name: "Css 3",
        description:
          "Utilisé dans les projets Wildy Gamy, Lazy FLicks et Twistrip.",
      },
      {
        name: "React",
        description:
          "Utilisé dans les projets Wildy Gamy, Lazy FLicks et Twistrip.",
      },
      {
        name: "Mysql",
        description: "Utilisé dans les projets Wildy Gamy et Twistrip.",
      },
      {
        name: "Express.JS",
        description: "Utilisé dans le projet Wildy Gamy.",
      },
      {
        name: "Node.JS",
        description: "Utilisé dans le projet Wildy Gamy.",
      },
    ];

    languages.forEach((language) => {
      this.insert(language);
    });
  }
}

// Export the ItemSeeder class
module.exports = LanguageSeeder;
