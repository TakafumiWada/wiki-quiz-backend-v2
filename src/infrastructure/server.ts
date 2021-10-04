import express from "express";
import router from "./router";
import cors from "cors";

const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
const corsOptions = {
  origin: [
    "https://www.quiz-wiki.com",
    "https://wiki-quiz-frontend-dev.an.r.appspot.com/",
    "http://localhost:3000",
  ],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// BodyParse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router
app.use("/v2/", router);

// Listen
app.listen(8888, () => {
  console.log("Start on port http://localhost:8888/");
});
