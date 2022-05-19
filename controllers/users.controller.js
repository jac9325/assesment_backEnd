import { User } from "../models/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//controller all users
export const login = async (req, res) => {
  const { email, password } = req.body;

  const currentUser = await User.find({ email });
  const userDB = currentUser[0];
  if (currentUser.length === 0) res.status(403).send();

  //validate hash_password
  const passToHash = `${password}${userDB.email}`;

  bcrypt.compare(passToHash, userDB.password, (err, isPassVlid) => {
    if (email === userDB.email && isPassVlid) {
      //JWT
      jwt.sign(
        { email: userDB.email },
        process.env.SECRET_KEY,
        (error, token) => {
          if (!error) {
            res.status(200).json({
              token,
            });
          } else {
            res.status(403).send();
          }
        }
      );
    } else {
      res.status(403).send();
    }
  });
};

export const createUser = async (req, res) => {
  const { password, email } = req.body;
  const passToHash = `${password}${email}`;

  const hash = await bcrypt.hash(passToHash, 10);
  const newUser = new User({ ...req.body, password: hash });
  try {
    const user = await newUser.save();
    res.status(201).send();
  } catch (err) {
    res.status(500).send(err);
  }
};
export const getAllUsers = async (request, response) => {
  try {
    const users = await User.find();
    if (users.length > 0) {
      response.status(200).json(users);
    } else {
      reponse.status(204).send();
    }
  } catch (e) {
    response.status(500).json({ error: e });
  }
};
