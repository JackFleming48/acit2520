const database = [
  {
    id: 1,
    name: "Jimmy Smith",
    email: "jimmy123@gmail.com",
    password: "jimmy123!",
    role: "user"
  },
  {
    id: 2,
    name: "Johnny Doe",
    email: "johnny123@gmail.com",
    password: "johnny123!",
    role: "user"
  },
  {
    id: 3,
    name: "Jonathan Chen",
    email: "jonathan123@gmail.com",
    password: "jonathan123!",
    role: "admin"
  },
];

export interface IUser {
  id: Number;
  name: string;
  email: string;
  password: string;
  role: string;
};

const userModel = {


  findOne: (email: String) => {
    const user = database.find((user) => user.email === email);
    if (user) {
      return user;
    }
    return null;
  },

  findById: (id: Number) => {
    const user = database.find((user) => user.id === id);
    if (user) {
      return user;
    }
    return null;
  },
};

export { database, userModel };
