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
        description:
          "Site dédié à l'univers des jeux d'arcade. Voyagez dans le temps et revivez votre jeunesse à nos côtés.",
        link: "https://github.com/WildCodeSchool-2024-02/JS-lyon-0224-P3-wildygamy",
      },
      {
        name: "Lazy FLicks",
        description:
          "Vous ne voulez plus prendre de décision après une dure journée de travail ? Laissez nous prendre le contrôle, relaxez-vous.",
        link: "https://github.com/mell10/P2_Lazy_Flicks",
      },
      {
        name: "Twistrip",
        description:
          "Partir en vacances n'a jamais été aussi simple, dites nous vos préférences et on s'occupe de tout, mais attention...",
        link: "https://github.com/mell10/Hackathon_Twistrip",
      },
    ];

    projects.forEach((project) => {
      this.insert(project);
    });
  }
}

// Export the ItemSeeder class
module.exports = ProjectSeeder;
