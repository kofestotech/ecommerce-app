const mongoose = require("mongoose");
const app = require("./app");

require("dotenv").config();

const port = process.env.PORT || 8000;

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log("Mongo db connection success");
  })
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
