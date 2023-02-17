import { ShopRating } from "./../controller/ratingcontroller";
import { UserController } from "./../controller/usercontroller";
import { ShopMenu } from "./../controller/menucontroller";
import express from "express";

export const router = express.Router();

router.post("/registerNewFranchise", UserController.registerNewFranchise);
router.get("/cityShopDetails", UserController.cityShopDetails);

router.post("/shopRatingReview", ShopRating.shopRatingReview);
router.get("/getShopRatingReview", ShopRating.getShopRatingReview);
router.get("/getShopAllDetails", ShopRating.getShopAllDetails);

router.post("/shopmenu/:shopRegisterId", ShopMenu.addShopMenu);
router.patch("/changeShopMenuItems/:shopRegisterId", ShopMenu.changeShopMenu);
router.get("/shopmenu/:shopRegisterId", ShopMenu.addShopMenu);