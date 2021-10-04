import { Router } from "express";
import { Request, Response } from "express";
import { QuestionController } from "../interfaces/controllers/QuestionController";
import { MediaWikiApi } from "./MediaWiki";

const router = Router();

router.get("/question", async (req: Request, res: Response) => {
  const mediaWikiApi = new MediaWikiApi(req.headers["user-agent"] || "");
  const questionController = new QuestionController(mediaWikiApi);
  try {
    const result = await questionController.getQuestion();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).end();
  }
});

export default router;
