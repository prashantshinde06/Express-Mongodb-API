import { menuModel } from "./../model/dbmodel";

export class ShopMenu {
  static async addShopMenu(req: any, res: any) {
    const { shopRegisterId } = req.params;
    const menuContent = req.body;

    try {
      const menuDoc = new menuModel({
        shopRegisterId: shopRegisterId,
        shopMenu: menuContent.shopMenu,
      });
      await menuDoc.save();
      res.send("Data saved");
    } catch (error) {
      console.log(error);
      res.send("Data not saved");
    }
  }

  static async changeShopMenu(req: any, res: any) {
    const menuContent = req.body;
    try {
      const data = await menuModel.findOneAndUpdate(
        req.params.shopRegisterId,
        menuContent
      );
      await data?.save();
      res.send("data is updated..");
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async getShopMenu(req: any, res: any) {
    // const { shopLocation } = req.body;
    // const arr = shopLocation;
    // console.log(arr);
    
    // arr.forEach(element => {
    //   console.log(element);
    // });
  }
}
