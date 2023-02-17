import mongoose from "mongoose";

//new registartion model

const userSchema = new mongoose.Schema({
  shopRegisterId: { type: String },
  branchOwnerName: { type: String },
  branchName: { type: String },
  branchCityName: { type: String },
  contactNumber: { type: Number },
  ownerEmailId: { type: String },
  branchAddress: { type: String },
});

export const userModel = mongoose.model("shopDetails", userSchema);

//rating comments model

const ratingSchema = new mongoose.Schema({
  shopRating: { type: Number },
  shopReview: { type: String },
  shopId: { type: String },
});

export const ratingModel = mongoose.model("shopRating", ratingSchema);

//food menu model

const menuSchema = new mongoose.Schema({
  shopRegisterId: { type: String },
  shopMenu: {},
});

export const menuModel = mongoose.model("shopMenu", menuSchema);
