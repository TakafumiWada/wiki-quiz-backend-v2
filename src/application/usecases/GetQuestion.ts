import { IQuestion, Question } from "../../domain/models/Question";
import { IQuestionApi } from "../apiInterface/IQuestionApi";

export class GetQuestion {
  private questionApi: IQuestionApi;
  private limit: number;

  constructor(questionApi: IQuestionApi, limit: number) {
    this.questionApi = questionApi;
    this.limit = limit;
  }

  async execute(): Promise<IQuestion> {
    for (let i = 0; i < this.limit; i++) {
      console.log(i);
      const data = await this.questionApi.fetchQuestion();
      const question = new Question(data);
      if (question.isValid()) return question;
    }
    throw new Error("exceed limit");
  }
}
