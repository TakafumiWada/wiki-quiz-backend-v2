import { IQuestion } from "../../domain/models/Question";
import {
  SELECTED_WORDS_NUMBER,
  SELECTED_CATEGORIES_NUMBER,
  LIMITED_WORD_LENGTH,
} from "../../config";

const randomSelect = (array: Array<string>, num: number): Array<string> => {
  const newArray: Array<string> = [];
  let rand = 0;
  while (newArray.length < num && array.length > 0) {
    rand = Math.floor(Math.random() * array.length);
    if (array[rand].length <= LIMITED_WORD_LENGTH) {
      newArray.push(array[rand]);
      array.splice(rand, 1);
    }
  }
  return newArray;
};
export class QuestionSerializer {
  getQuestionSerialize(quesion: IQuestion) {
    quesion.words = randomSelect(quesion.words, SELECTED_WORDS_NUMBER);
    quesion.categories = randomSelect(
      quesion.categories,
      SELECTED_CATEGORIES_NUMBER
    );
    return quesion;
  }
}
