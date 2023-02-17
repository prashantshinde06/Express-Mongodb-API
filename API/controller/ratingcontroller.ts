import { userModel } from "../model/dbmodel";
import { ratingModel } from "../model/dbmodel";

export class ShopRating {
  static async shopRatingReview(req: any, res: any) {
    const { shopRating, shopReview, shopLocation } = req.body;
    const shopDetails = await userModel.find({
      $text: { $search: shopLocation },
    });
    const shopId = shopDetails[0].shopRegisterId;

    try {
      const ratingDoc = new ratingModel({
        shopRating: shopRating,
        shopReview: shopReview,
        shopId: shopId,
      });
      await ratingDoc.save();
      res.send("Data saved");
    } catch (error) {
      console.log(error);
      res.send("Data not saved");
    }
  }

  static async getShopRatingReview(req: any, res: any) {
    const { shopLocation } = req.query;
    const shopDetails = await userModel.find({
      $text: { $search: shopLocation },
    });
    const shopId = shopDetails[0].shopRegisterId;
    const shopWithRating = await ratingModel.find(
      { shopId: shopId },
      { _id: 0, __v: 0, shopId: 0 }
    );

    try {
      res.send(shopWithRating);
    } catch (error) {
      console.log(error);
      res.send("Data not saved");
    }
  }

  static async getShopAllDetails(req: any, res: any) {
    const { shopLocation } = req.query;
    const userDoc = new userModel();
    const ratingDoc = new ratingModel();
    await userDoc.collection
      .aggregate([
        {
          $match: { $text: { $search: shopLocation } },
        },
        {
          $lookup: {
            from: `${ratingDoc.collection.collectionName}`,
            localField: "shopRegisterId",
            foreignField: "shopId",
            as: "shopRatingReview",
          },
        },
        {
          $project: {
            _id: 0,
            shopRegisterId: 0,
            branchOwnerName: 0,
            __v: 0,
            shopRatingReview: {
              _id: 0,
              __v: 0,
              shopId: 0,
            },
          },
        },
      ])
      .toArray()
      .then((data) => res.send(data))
      .catch((e) => console.log(e));
  }
}
