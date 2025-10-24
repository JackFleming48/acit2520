import {IUser, userModel} from "../models/userModel";

const getUserByEmail = (email: string) => {
  return userModel.findOne(email) ?? null;
};
const getUserById = (id:Number) => {
  let user = userModel.findById(id);
  if (user) {
    return user;
  }
  return null;
};

export {
  getUserByEmail,
  getUserById,
};
