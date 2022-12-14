import express from "express";
import path from "path";

//import dotenv
import dotenv from "dotenv";
//get the config from .env file
dotenv.config();

//routers imports
import userRouter from "./routes/users_routes.js";

let app = express();

//json middleware
app.use(express.json());

//form data middleware
app.use(express.urlencoded({ extended: false }));

//static file serving
app.use(express.static("./public"));

//root get request
app.get("/", function (req, res) {
  res.send("Hellow world");
});

app.use("/users", userRouter);

app.listen(process.env.PORT, function () {
  console.log(`Server running on port ${process.env.PORT}`);
});
