const Shoes = require("../models/shoeSchema");
const db = require("./db.json");

const getSneakers = async () => {
  const findShoes = await Shoes.find({});
  return findShoes;
};

const getSneakersById = async (sneakerId) => {
  const findById = await Shoes.findOne({ id: sneakerId });
  return findById;
};

const deleteSneakers = async (id) => {
  return Shoes.deleteOne({ id });
};

const addToFav = async (id, fields) => {
  return await Shoes.findByIdAndUpdate({ _id: id }, fields);
  //problem 1 : no responce from result
  //problem 2 : no code move on, it stops fully 
};

module.exports = {
  getSneakers,
  getSneakersById,
  deleteSneakers,
  addToFav,
};
