const express = require("express");
const crypto = require("crypto");
const cors = require("cors");
const app = express();
const PORT = 8080;

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

let cart = {
  items: [],
};

let products = [
  {
    id: crypto.randomUUID(),
    title: "Monkey D Luffy Mug",
    price: 24,
    description: "White mug with One Piece character Luffy's face on it",
  },
  {
    id: crypto.randomUUID(),
    title: "Black Shirt with a mug logo",
    price: 102,
    description:
      "Black shirt with a big white mug graphic at the back. Avaialable in size M, L and XL.",
  },
  {
    id: crypto.randomUUID(),
    title: "Office Swivel Chair",
    price: 503,
    description:
      "Office Swivel Chair with 10 levels of adjustment. Comes with leather upholstery.",
  },
];

app.get("/cart", (req, res) => {
  res.status(200).json(cart);
});

app.post("/cart", (req, res) => {
  res.status(201).json({});
});

app.get("/products", (req, res) => {
  res.status(200).json(products);
});

app.listen(PORT);
