import mongoose from "mongoose";

let isConneted = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConneted) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConneted = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    console.log("MongoDB  error");
  }
};
