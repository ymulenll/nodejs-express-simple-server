const express = require("express");
const app = express();
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const port = process.env.PORT ?? 3500;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
