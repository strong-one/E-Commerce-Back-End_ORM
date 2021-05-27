const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const userData = await Category.findAll({
      include: [{ model: Product }],
    }); // waiting for userdata to come back from finding all in the category and storing the result of the data in a variable

    res.status(200).json(userData); // if everything works, status code is 200 (all good), and will return the requested data
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  try {
    const userData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    }); // finding by primary key, req.params.id is the location of the actual id number (request, parameter, id )

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const userData = await Category.create(req.body); // creating a new category, user is requesting to post in the body of the page, (req.body) -- storing the data post request in a variable
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const userData = await Category.update(req.params.id);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const userData = await Category.destroy(req.params.id);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
