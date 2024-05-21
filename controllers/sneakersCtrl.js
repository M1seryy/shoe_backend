const Shoes = require("../models/shoeSchema");
const {
  getSneakers,
  getSneakersById,
  deleteSneakers,
  addToFav,
} = require("../services/sneakers");

const sneakersController = async (req, res) => {
  const response = await getSneakers();
  res.json({ sneakers: response });
};

const sneakerByIdController = async (req, res) => {
  const { sneakerId } = req.params;
  const response = await getSneakersById(sneakerId);
  res.status(200).json({
    data: response,
  });
};

const deleteSneakersController = async (req, res) => {
  const { sneakerId } = req.params;
  const responce = await deleteSneakers(sneakerId);
  if (responce.deletedCount !== 0) {
    res.status(201).json({
      data: responce,
      message: `Deleted item by id:${sneakerId}`,
    });
  }
  res.status(404).json({
    code: 404,
    message: `Not found task id: ${sneakerId}`,
    data: "Not Found",
  });
};

const addToFavCtrl = async (req, res, next) => {
  const { sneakerId } = req.params;
  let { favourite } = req.body;

  try {
    const result = await addToFav(sneakerId, { favourite });

    if (result) {
      res.json({
        status: "success",
        code: 200,
        data: result,
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found task id: ${sneakerId}`,
        data: "Not Found",
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

module.exports = {
  sneakersController,
  sneakerByIdController,
  deleteSneakersController,
  addToFavCtrl,
};
