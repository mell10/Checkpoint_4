const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  browse,
  add,
  edit,
  destroy,
} = require("../../../controllers/projectActions");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
// router.get("/:id", read);

// Route to add a new item
router.post("/add", add);
router.put("/:id", edit);
router.delete("/delete", destroy);

/* ************************************************************************* */

module.exports = router;
