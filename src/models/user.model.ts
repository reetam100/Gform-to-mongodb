import mongoose, { InferSchemaType, model } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    gender: {
      type: String,
    },
    codingLanguage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
export type UserType = InferSchemaType<typeof userSchema>;

export const User = model<UserType>("User", userSchema);
