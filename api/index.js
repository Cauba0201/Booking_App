const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const app = express();
const AuthRoute = require("./routes/auth.js");
const HotelRoute = require("./routes/hotels.js");
const UserRoute = require("./routes/users.js");
const RoomRoute = require("./routes/rooms.js");

dotenv.config();

const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    throw error;
  }
};

//===============test=================>
const book = [
  {
    id: 1,
    name: "haha",
  },
  {
    id: 2,
    name: "hehe",
  },
];

// start
app.get("/", (req, res) => {
  res.json({ status: "success", data: book });
  res.send("Trang chu");
});
app.post("/register", (req, res) => {
  const data = req.body;
  const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken });
  // res.send("Trang chu");
});
//===================================>


// middleware

app.use(express.json());

app.use("/api/auth", AuthRoute);
app.use("/api/users", UserRoute);
app.use("/api/hotels", HotelRoute);
app.use("/api/rooms", RoomRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(3000, () => {
  connect();
  console.log("connected to backend");
});
