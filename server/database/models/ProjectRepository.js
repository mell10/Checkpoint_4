const AbstractRepository = require("./AbstractRepository");

class ProjectRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "project" as configuration
    super({ table: "project" });
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

  async create(project) {
    // Execute the SQL INSERT query to create a new project
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, description, link) VALUES (?, ?, ?)`,
      [project.name, project.description, project.link]
    );
    // Return the id of the created project
    return result.insertId;
  }

  async update(id, project) {
    // Execute the SQL UPDATE query to update a project by its id
    await this.database.query(
      `UPDATE ${this.table} SET name = ?, description = ?, link = ? WHERE id = ?`,
      [project.name, project.description, project.link, id]
    );
  }

  async delete(id) {
    // Execute the SQL DELETE query to delete a project by its id
    await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }
}

module.exports = ProjectRepository;
