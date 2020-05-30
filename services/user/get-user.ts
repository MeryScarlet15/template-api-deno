import { database } from "../../config/db.ts";
import { IUser } from "../../models/user.ts";

const userCollection = database.collection("users");

export const getUsers = async (): Promise<IUser> => {
  return await userCollection.find({});
};

export const createUser = async (user: IUser) => {
  await userCollection.insertOne(user);
};
