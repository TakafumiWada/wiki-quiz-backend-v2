import { IQuestionApi } from "../apiInterface/IQuestionApi";

export class ConfirmQuestion {
  private questionApi: IQuestionApi;
  private searchWord: string;
  private answer: string;

  constructor(questionApi: IQuestionApi, searchWord: string, answer: string) {
    this.questionApi = questionApi;
    this.searchWord = searchWord;
    this.answer = answer;
  }

  async execute(): Promise<boolean> {
    const resultTitle = await this.questionApi.searchTitle(this.searchWord);
    return resultTitle == this.answer;
  }
}
