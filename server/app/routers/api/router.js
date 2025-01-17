const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const projectRouter = require("./projects/router");
const languageRouter = require("./languages/router");

router.use("/projects", projectRouter);
router.use("/languages", languageRouter);

/* ************************************************************************* */

module.exports = router;
