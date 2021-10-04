import { Request } from "express";
import { GetQuestion } from "../../application/usecases/GetQuestion";
import { LIMIT_ACCESS } from "../../config";
import { IQuestion } from "../../domain/models/Question";
import { IMediaWikiApi } from "../externalApi/IMediaWikiApi";
import { QuestionApi } from "../api/QuestionApi";
import { IQuestionApi } from "../../application/apiInterface/IQuestionApi";
import { ConfirmRequest } from "../types";
import { ConfirmQuestion } from "../../application/usecases/ConfirmQuestion";

export class QuestionController {
  private questionApi: IQuestionApi;

  constructor(mediaWikiApi: IMediaWikiApi) {
    const wikiJs = mediaWikiApi.execute();
    this.questionApi = new QuestionApi(wikiJs);
  }

  async getQuestion(): Promise<IQuestion> {
    const useCase = new GetQuestion(this.questionApi, LIMIT_ACCESS);
    return useCase.execute();
  }

  async confirmQuestion(req: Request): Promise<boolean> {
    const { searchWord, answer } = req.body as ConfirmRequest;
    const useCase = new ConfirmQuestion(this.questionApi, searchWord, answer);
    return useCase.execute();
  }
}
