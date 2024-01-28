const Hotel = require("../models/Hotel.js");

class HotelController {
  //create
  async create(req, res, next) {
    const newHotel = new Hotel(req.body);

    try {
      const saveHotel = await newHotel.save();
      res.status(200).json(saveHotel);
    } catch (error) {
      next(error);
    }
  }
  //update
  async update(req, res, next) {
    try {
      const updateHotel = await HotelSchema.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updateHotel);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  //delete
  async delete(req, res, next) {
    try {
      await HotelSchema.findByIdAndDelete(req.params.id);
      res.status(200).json("Hotel has been deleted.");
    } catch (error) {
      res.status(500).json(error);
    }
  }
  //get
  async get(req, res, next) {
    try {
      const hotel = await HotelSchema.findById(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(hotel);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  //getall
  async getall(req, res, next) {
    try {
      const hotels = await HotelSchema.findById();
      res.status(200).json(hotels);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new HotelController();
