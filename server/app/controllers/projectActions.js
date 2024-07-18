// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const project = await tables.project.readAll();

    // Respond with the items in JSON format
    res.json(project);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

/* The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const item = await tables.item.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (item == null) {
      res.sendStatus(404);
    } else {
      res.json(item);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
}; */

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  // Extract the item data from the request body
  const project = req.body;
  try {
    // Update the item into the database
    const updatedProject = await tables.project.update(id, project);
    // Respond with HTTP 201 (OK) and the response data
    res.status(200).json({ updatedProject });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const project = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.project.create(project);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  // read,
  edit,
  add,
  // destroy,
};
