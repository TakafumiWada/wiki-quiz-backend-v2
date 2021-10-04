import { Router } from "express";
import { Request, Response } from "express";
import { QuestionController } from "../interfaces/controllers/QuestionController";
import { MediaWikiApi } from "./MediaWiki";

const router = Router();

const createQuestionController = (req: Request): QuestionController => {
  const mediaWikiApi = new MediaWikiApi(req.headers["user-agent"] || "");
  return new QuestionController(mediaWikiApi);
};

router.get("/question", async (req: Request, res: Response) => {
  const questionController = createQuestionController(req);
  try {
    const result = await questionController.getQuestion();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).end();
  }
});

router.post("/question:confirm", async (req: Request, res: Response) => {
  if (!req.body.searchWord) res.status(400).end();
  const questionController = createQuestionController(req);
  try {
    const result = await questionController.confirmQuestion(req);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).end();
  }
});

export default router;
