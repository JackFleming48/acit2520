import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { getUserByEmail, getUserById} from "../../controllers/userController";
import { PassportStrategy } from '../../interfaces/index';
import { IUser } from "../../models/userModel";

const localStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  (email, password, done) => {
    const user = getUserByEmail(email);
    if (!user) {
      return done(null, false, {
        message: `Could not find user with email: ${email}`,
      });
    } 
    
    if (user.password !== password) {
      return done(null, false, {
        message: "Password is incorrect"
      })
    }

    return done(null, user);
  }
);

passport.serializeUser(function (user: IUser, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id: number, done) {
  const user = getUserById(id)
  if (!user) return done(null, false)
    return done(null, user)
});

const passportLocalStrategy: PassportStrategy = {
  name: 'local',
  strategy: localStrategy,
};

export default passportLocalStrategy;
