import { WikiJS } from "../../infrastructure/types";
import { IQuestion } from "../../domain/models/Question";
import { IQuestionApi } from "../../application/apiInterface/IQuestionApi";

export class QuestionApi implements IQuestionApi {
  private wikiJs: WikiJS;
  constructor(wikiJs: WikiJS) {
    this.wikiJs = wikiJs;
  }

  async fetchQuestion(): Promise<IQuestion> {
    const title = (await this.wikiJs.random())[0];
    const page = await this.wikiJs.page(title);
    return {
      title,
      categories: await page.categories(),
      words: await page.links(),
      images: await page.mainImage(),
      url: page.url(),
    };
  }
}
