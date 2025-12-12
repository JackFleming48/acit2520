import jwt from "jsonwebtoken";
import crypto from "node:crypto";
import { readDb, writeDb } from "../../database/database.js";
import { error } from "node:console";

const JWT_SECRET = "secret";

export default {
  async register({ username, password, profilePicture }) {
    // TODO: get ahold of the db using readDb();
    const db = await readDb();
    // TODO: check if there is an existing user with the same username
    const exists = db.users.find(usr => usr.username === username)
    if (exists) {
      // TODO: if there is, do the following:
      //       - construct a new Error("Username already taken");
      let err = new Error("Username is already taken.");
      //       - set the statusCode of that error object to 400
      err.statusCode = 400;
      //       - throw the err
      throw err
    } else {
      // TODO: otherwise, create a user object. A user has:
      const user = {
        //       - id: a random string-based id (crypto.randomUUID())
        id: crypto.randomUUID(),
        //       - username: a username
        username: username,
        //       - password: a password
        password: password,
        //       - profilePicture: their profile pic string or an empty string if no picture.
        profilePicture: profilePicture
      }
      // TODO:  push this user object into db.users
      db.users.push(user)
      // TODO:  call the writeDb(db) operation to save changes.
      await writeDb(db)
      // TODO:  return the user object but without their password  (only id, username, profilePicture)
      return {
        id: user.id, 
        username: user.username, 
        profilePicture: user.profilePicture
      }
    }
  },

  async login({ username, password }) {
    // TODO: get ahold of the db using readDb();
    const db = await readDb()
    // TODO: check the database for a user with a matching username and password
    const user = db.users.find(usr => usr.username === username && usr.password === password)
    if (!user) {
      const err = new Error("Invalid username or password");
      err.statusCode = 401;
      throw err;
    } else {
      const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET, { expiresIn: "1h" })
      return {
        token,
        user: {
          id: user.id,
          username: user.username,
          profilePicture: user.profilePicture
        }
      };
    }
    // TODO: if there is no user:
    //       - construct a new Error("Invalid username or password");
    //       - set the statusCode of that error object to 401
    //       - throw the err
    // TODO: otherwise, create a login token. I'll help you out with this one:
    // TODO:  return an object that contains 2 things:
    //  - token
    //  - user : { id: user.id, username: user.username, profilePicture: user.profilePicture }

  },
};
