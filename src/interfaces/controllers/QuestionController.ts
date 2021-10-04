import { GetQuestion } from "../../application/usecases/GetQuestion";
import { LIMIT_ACCESS } from "../../config";
import { IQuestion } from "../../domain/models/Question";
import { IMediaWikiApi } from "../externalApi/IMediaWikiApi";
import { QuestionApi } from "../api/QuestionApi";
import { IQuestionApi } from "../../application/apiInterface/IQuestionApi";

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
}
