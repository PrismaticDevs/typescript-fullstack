import { Response, Request } from "express";
const bcrypt = require("bcryptjs");

const { User } = require("../models");
interface UserType {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

module.exports = {
  createUser: async (req: Request, res: Response) => {
    const { email, username, password } = req.body;
    if (!email || !password) {
      return res.json("You must provide a valid email and password");
    }
    if (password.length < 8) {
      return res.json("Password must be at least 8 characters");
    }
    if (!email.includes("@")) {
      return res.json("Must enter a valid email address");
    }
    try {
      const userData = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (userData) {
        return res.json("A user already exists with that email");
      }
      const user = await User.create({
        username,
        email,
        password,
      });
      res.json(user);
    } catch (error) {
      return res.json(error);
    }
  },
  //   getAllUsers: async (req: Request, res: Response) => {
  //     try {
  //       const usersData = await User.findAll({});
  //       const users = usersData.map((user) => user.get({ plain: true }));
  //       return res.json(users);
  //     } catch (error) {
  //       return res.json(error);
  //     }
  //   },
  getUserById: async (req: Request, res: Response) => {
    try {
      const userData = await User.findByPk(req.params.userId);
      const user = userData.get({ plain: true });
      return res.render("singleUser", {
        user,
      });
    } catch (e) {
      return res.json(e);
    }
  },
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json("You must provide a valid email and password");
    }

    try {
      const userData = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (!userData) {
        return res.json("No user with that email");
      }
      const userFound = userData.get({ plain: true });
      if (!userFound) {
        return res.json("No user with that email");
      }
      const isMatchingPassword = await bcrypt.compare(
        password,
        userFound.password
      );
      if (!isMatchingPassword) {
        return res.json("Invalid password");
      }
    } catch (error) {
      return res.json(error);
    }
  },
  signupHandler: async (req: Request, res: Response) => {
    const { email, username, password } = req.body;
    if (!email || !password) {
      return res.json("You must provide a valid email and password");
    }
    try {
      const userData = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (!userData) {
        return res.json("A user already exists with that email");
      }
      const user = await User.create({
        email,
        username,
        password,
      });
      res.json(user);
    } catch (e) {
      return res.json(e);
    }
  },
};
