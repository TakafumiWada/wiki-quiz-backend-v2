import { SELECTED_WORDS_NUMBER, LIMITED_WORD_LENGTH } from "../../config";

export interface IQuestion {
  title: string;
  categories: Array<string>;
  words: Array<string>;
  images: string;
  url: string;
}

export class Question implements IQuestion {
  title: string;
  categories: Array<string>;
  words: Array<string>;
  images: string;
  url: string;

  constructor(question: IQuestion) {
    this.title = question.title;
    this.categories = question.categories;
    this.words = question.words;
    this.images = question.images;
    this.url = question.url;
  }

  isValid(): boolean {
    const limitedWords = this.words.filter(
      (word) => word.length <= LIMITED_WORD_LENGTH
    );
    return limitedWords.length >= SELECTED_WORDS_NUMBER;
  }

  getValue(): IQuestion {
    return {
      title: this.title,
      categories: this.categories,
      words: this.words,
      images: this.images,
      url: this.url,
    };
  }
}
