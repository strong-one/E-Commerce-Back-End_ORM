const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const userData = await ProductTag.findAll();

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const userData = await ProductTag.findByPk(req.params.id);

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", (req, res) => {
  // create a new tag
  try {
    const userData = await ProductTag.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  try {
    const userData = await ProductTag.update(req.params.id);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  try {
    const userData = await ProductTag.destroy(req.params.id);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
