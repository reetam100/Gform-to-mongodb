import { UserType } from "./../models/user.model";
import { Request, Response, Router } from "express";
import { User } from "../models/user.model";
import { Error } from "mongoose";

const router = Router();

interface ResponseInterface extends Response {
  message: string;
}
// interface UserType {
//   firstName?: string | null;
//   lastName?: string | null;
//   email?: string | null;
//   gender?: string | null;
//   codingLanguage?: string | null;
//   createdAt: Date;
//   updatedAt: Date;
// }

router.post(
  "/form-submit",
  // @ts-ignore
  async (req, res) => {
    try {
      console.log(req.body);
      const newUser = await User.create(req.body);
      return res.status(201).json({ message: "working", data: newUser });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
);

export default router;
