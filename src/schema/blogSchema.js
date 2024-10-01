import { Schema } from "mongoose";

export const blogSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
    avatar: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    fullDescription: {
      type: String,
    },
  },
  { timestamps: true }
); // Enable timestamps
