

  const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/blog";
//Write missing code here
mongoose
.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
  