const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// GET request to find all tags and their associated Product data
router.get("/", async (req, res) => {
	try {
		const tagData = await Tag.findAll({
			include: [{ model: Product }],
		});
		res.status(200).json(tagData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// GET request to find a single tag by its 'id' and also includes its associated Product data
router.get("/:id", async (req, res) => {
	try {
		const tagData = await Tag.findByPk(req.params.id, {
			include: [{ model: Product }],
		});
		if (!tagData) {
			res.status(404).json({
				message: "No tag found with that id!",
			});
			return;
		}
		res.status(200).json(tagData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// POST request that creates a new tag
router.post("/", async (req, res) => {
	try {
		const tagData = await Tag.create(req.body);
		res.status(200).json(tagData);
	} catch (err) {
		res.status(400).json(err);
	}
});

// PUT request that updates a tag's name by its `id` value
router.put("/:id", async (req, res) => {
	try {
		Tag.update(
			{
				// All the fields you can update and the data attached to the request body.
				tag_name: req.body.tag_name,
			},
			{
				// Gets the tag based on its id given in the request parameters
				where: {
					id: req.params.id,
				},
			}
		)
		.then((updatedTag) => {
			// Sends the updated tag as a json response
			res.json(updatedTag);
		})
		.catch((err) => res.json(err));
	} catch (err){
		res.status(500).json(err);
	}
});

// DELETE request that deletes a tag by its `id` value
router.delete("/:id", async (req, res) => {
	try {
		const tagData = await Tag.destroy({
			where: {
				id: req.params.id,
			},
		});
		if (!tagData) {
			res.status(404).json({
				message: "No tag found with that id!",
			});
			return;
		}
		res.status(200).json(tagData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
