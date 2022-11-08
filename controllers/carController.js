const { json } = require("express");
const Car = require("../models/Car");

class carController {
  async create(req, res) {
    try {
      const {
        engine,
        mark,
        model,
        price,
        mileage,
        year,
        availability,
        transmission,
        body,
        color,
      } = req.body;
      const car = new Car({
        engine,
        mark,
        model,
        price,
        mileage,
        year,
        availability,
        transmission,
        body,
        color,
      });

      if (req.files.carouselPhotos) {
        req.files.carouselPhotos.forEach((file) => {
          car.carouselPhotos.push(file.path);
        });
      }
      if (req.files.photo) {
        car.photo = req.files.photo[0].path;
      }
      car.save();
      return res.json(car);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Car create error" });
    }
  }
  async updateCar(req, res) {
    try {
      const car = req.body;
      car.carouselPhotos = [];
      car.photo = "";
      if (!car._id) {
        res.status(400).json({ message: "id не указан" });
      }
      if (req.files.carouselPhotos) {
        req.files.carouselPhotos.forEach((file) => {
          car.carouselPhotos.push(file.path);
        });
      }
      if (req.files.photo) {
        car.photo = req.files.photo[0].path;
      }
      const updatedCar = await Car.findByIdAndUpdate(car._id, car, {
        new: true,
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Car create error" });
    }
  }
  async deleteCar(req, res) {
    const { id } = req.params;
    try {
      const car = await Car.findByIdAndDelete(id);
      return res.json(car);
    } catch (e) {
      console.log(e);
    }
  }
  async getAll(req, res) {
    try {
      const cars = await Car.find();
      return res.json(cars);
    } catch (e) {
      console.log(e);
    }
  }
  async getLimit(req, res) {
    const { page } = req.query;
    try {
      
      const cars = await Car.find()
        .skip(7 * page)
        .limit(7);
      return res.json(cars);
    } catch (e) {
      console.log(e);
    }
  }
  async getCar(req, res) {
    const { id } = req.params;
    try {
      const car = await Car.findById(id);
      return res.json(car);
    } catch (e) {}
  }
  async filters(req, res) {
    const cars = await Car.find();
    let filters = [];
    let mark = new Set(cars.map((i) => i.mark));
    mark = [...mark];
    mark.forEach((item) => {
      filters.push({
        mark: item,
        models: [],
      });
    });
    cars.forEach((car) => {
      filters.forEach((mark) => {
        if (mark.mark == car.mark) {
          mark.models.push(car.model);
        }
      });
    });

    return res.json(filters);
  }
}

module.exports = new carController();
