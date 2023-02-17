import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const databaseUrl: any = process.env.DB_URL;

export const dbConnection = async () => {
  try {
    const dbOptions = {
      dbName: process.env.DB_NAME,
    };
    // const connect = client.db(process.env.DB_NAME);
    // console.log(connect);

    await mongoose.connect(databaseUrl, dbOptions);
    console.log("Database connection successfully...");
  } catch (err) {
    console.log(err);
  }
};
