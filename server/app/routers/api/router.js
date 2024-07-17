const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const projectRouter = require("./projects/router");

router.use("/projects", projectRouter);

/* ************************************************************************* */

module.exports = router;
