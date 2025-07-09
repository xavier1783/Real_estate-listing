const express = require('express');
const router = express.Router();
const Property = require('../models/Property');

// Get all properties
router.get('/', async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
});

// Add property
router.post('/', async (req, res) => {
  const newProperty = new Property(req.body);
  await newProperty.save();
  res.status(201).json(newProperty);
});

// Get by ID
router.get('/:id', async (req, res) => {
  const property = await Property.findById(req.params.id);
  res.json(property);
});

// Update property
router.put('/:id', async (req, res) => {
  const updated = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete property
router.delete('/:id', async (req, res) => {
  await Property.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
