var express = require("express");

var articleCont = require("../controllers/articleCont");

var router = new express.Router();

// Get all quotes (or optionally a specific quote with an id)
router.get("/quotes/:id?", articleCont.index);
// Create a new quote using data passed in req.body
router.post("/quotes", articleCont.create);
// Update an existing quote with a speicified id param, using data in req.body
router.patch("/quotes/:id", articleCont.update);
// Delete a specific quote using the id in req.params.id
router.delete("/quotes/:id", articleCont.destroy);

module.exports = router;