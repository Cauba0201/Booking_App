const express = require("express");
const mongoose = require("mongoose");
const HotelController = require("../controller/hotel.js");
const router = express.Router();
// Create
router.post("/", HotelController.create);
// Update
router.put("/:id", HotelController.update);
// Delete
router.delete("/:id", HotelController.delete);
// Get
router.get("/:id", HotelController.get);
// Get All
router.get("/", HotelController.getall);

module.exports = router;
