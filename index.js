const express = require("express");
const server = express();
const port = 8080;
const mongoose = require("mongoose");
const { createProduct } = require("./controller/Product");
const productsRouter = require("./routes/Products");
const categoriesRouter = require("./routes/Categories");
const brandsRouter = require("./routes/Brands");
const usersRouter = require("./routes/Users");
const authRouter = require("./routes/Auth");
const cartRouter = require("./routes/Cart");
const ordersRouter = require("./routes/Order");
require("dotenv").config();
const cors = require("cors"); // without cors ek server se dusre server pe call nahi kr skte

const run = require("./model/config");

const mongoURI = process.env.MONGODB_URI;

run().catch(console.dir);

//middlewares

server.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);
server.use(express.json()); // to parse req.body
server.use("/products", productsRouter.router);
server.use("/categories", categoriesRouter.router);
server.use("/brands", brandsRouter.router);
server.use("/users", usersRouter.router);
server.use("/auth", authRouter.router);
server.use("/cart", cartRouter.router);
server.use("/orders", ordersRouter.router);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoURI);
  console.log("database connected");
}

server.get("/", async (req, res) => {
  res.json({ status: "success", data: brands });
});

server.listen(port, () => {
  console.log("server started");
});
