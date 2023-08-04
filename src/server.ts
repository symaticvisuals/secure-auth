import express from "express";
import bodyParser from "body-parser";
import { RequestHandler, ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

require(__dirname + "/routes/").forEach(function (route: { prefix: RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>; app: RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>; }) {
  app.use(route.prefix, route.app);
});


app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT || 3000}`);
});