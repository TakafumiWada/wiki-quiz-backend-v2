import wikiApi from "wikijs";
import { MEDIAWIKI_API_URL } from "../config";
import { WikiJS } from "./types";
import { IQuestion } from "../domain/models/Question";

export class QuestionApi {
  private wiki: WikiJS;

  constructor(userAgent: string) {
    this.wiki = wikiApi({
      apiUrl: MEDIAWIKI_API_URL,
      headers: {
        "User-Agent": userAgent,
      },
    });
  }

  async fetchQuestion(): Promise<IQuestion> {
    const title = (await this.wiki.random())[0];
    const page = await this.wiki.page(title);
    return {
      title,
      categories: await page.categories(),
      words: await page.links(),
      images: await page.mainImage(),
      url: page.url(),
    };
  }
}
