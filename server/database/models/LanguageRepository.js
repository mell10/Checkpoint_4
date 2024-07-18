const AbstractRepository = require("./AbstractRepository");

class LanguageRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "project" as configuration
    super({ table: "language" });
  }

  // The Rs of CRUD - Read operations

  async readAll() {
    // Execute the SQL SELECT query to retrieve all projects from the "project" table
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    // Return the array of projects
    return rows;
  }

  async readById(id) {
    // Execute the SQL SELECT query to retrieve a project by its id
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );
    // Return the project or null if not found
    return rows[0] || null;
  }

  async createLanguage(language) {
    // Execute the SQL INSERT query to create a new project
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, description) VALUES (?, ?)`,
      [language.name, language.description]
    );
    // Return the id of the created project
    return result.insertId;
  }

  async updateLanguage(language) {
    // Execute the SQL UPDATE query to update a project by its id
    await this.database.query(
      `UPDATE ${this.table} SET name = ?, description = ?`,
      [language.name, language.description]
    );
  }

  async deleteLanguage(id) {
    // Execute the SQL DELETE query to delete a project by its id
    await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }
}

module.exports = LanguageRepository;
