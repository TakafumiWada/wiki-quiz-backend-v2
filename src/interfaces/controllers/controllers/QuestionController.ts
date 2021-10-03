import { QuestionApi } from "../../../infrastructure/QuestionApi";
import { Request } from "express";
import { GetQuestion } from "../../../application/usecases/GetQuestion";
import { LIMIT_ACCESS } from "../../../config";
import { IQuestion } from "../../../domain/models/Question";

export class QuestionController {
  private questionApi: QuestionApi;

  constructor(req: Request) {
    this.questionApi = new QuestionApi(req.headers["user-agent"] || "");
  }

  async getQuestion(): Promise<IQuestion> {
    const useCase = new GetQuestion(
      this.questionApi.fetchQuestion,
      LIMIT_ACCESS
    );
    return useCase.execute();
  }
}
