const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// GET request that finds all categories and all of their associated products
router.get("/", async (req, res) => {
	try {
		const categoryData = await Category.findAll({
			include: [{ model: Product }],
		});
		res.status(200).json(categoryData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// GET request that finds one category by its `id` value along with their associated products
router.get("/:id", async (req, res) => {
	try {
		const categoryData = await Category.findByPk(req.params.id, {
			include: [{ model: Product }],
		});
		if (!categoryData) {
			res.status(404).json({
				message: "No category found with that id!",
			});
			return;
		}
		res.status(200).json(categoryData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// POST request that creates a new category
router.post("/", async (req, res) => {
	try {
		const categoryData = await Category.create(req.body);
		res.status(200).json(categoryData);
	} catch (err) {
		res.status(400).json(err);
	}
});

// PUT - Updates a category by its `id` value
router.put("/:id", async (req, res) => {
	try {
		Category.update(
			{
				// All the fields you can update and the data attached to the request body.
				category_name: req.body.category_name,
			},
			{
				// Gets the category based on its id given in the request parameters
				where: {
					id: req.params.id,
				},
			}
		)
		.then((updatedCategory) => {
			// Sends the updated category as a json response
			res.json(updatedCategory);
		})
		.catch((err) => res.json(err));
	} catch (err){
		res.status(500).json(err);
	}
});

// DELETE request that deletes a category by its `id` value
router.delete("/:id", async (req, res) => {
	try {
		const categoryData = await Category.destroy({
			where: {
				id: req.params.id,
			},
		});
		if (!categoryData) {
			res.status(404).json({
				message: "No category found with that id!",
			});
			return;
		}
		res.status(200).json(categoryData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
