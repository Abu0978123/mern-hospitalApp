import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect(
    // process.env.MONGO_URL
     "mongodb://localhost:27017/", {
      dbName: "MERN_HOSPITAL_APP",
    })
    .then(() => {
      console.log("DB connected successfully");
    })
    .catch((err) => {
      console.log("some error occurred  while connecting to database", err);
    });
};
  