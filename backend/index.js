const express = require("express");
const card = require("./routes/cardRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/cards", card);


app.get("/", (req, res) => {
  res.send("Business Card application !");
});

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
