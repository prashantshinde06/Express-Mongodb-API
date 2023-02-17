import { userModel } from "../model/dbmodel";
import { uuid } from "uuidv4";

export class UserController {
  static async registerNewFranchise(req: any, res: any) {
    const {
      branchOwnerName,
      branchName,
      branchCityName,
      contactNumber,
      ownerEmailId,
      branchAddress,
    } = req.body;
    const shopRegisterId = uuid();
    try {
      const userDoc = new userModel({
        shopRegisterId: shopRegisterId,
        branchOwnerName: branchOwnerName,
        branchName: branchName,
        branchCityName: branchCityName,
        contactNumber: contactNumber,
        ownerEmailId: ownerEmailId,
        branchAddress: branchAddress,
      });
      userDoc.collection.createIndex({ branchAddress: "text" });
      await userDoc.save();
      res.send("Data saved");
    } catch (error) {
      console.log(error);
      res.send({ status: "failed", message: "Unable to login" });
    }
  }

  static async cityShopDetails(req: any, res: any) {
    const cityName = req.query.cityname;
    const shopDetails = await userModel.find(
      { branchCityName: cityName },
      { _id: 0, __v: 0, branchOwnerName: 0, shopRegisterId: 0 }
    );

    try {
      res.send(shopDetails);
    } catch (error) {
      console.log(error);
      res.send("error");
    }
  }
}
