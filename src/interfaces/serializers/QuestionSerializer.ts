import { IQuestion } from "../../domain/models/Question";
import { SELECTED_WORDS_NUMBER, LIMITED_WORD_LENGTH } from "../../config";

export class QuestionSerializer {
  getQuestionSerialize(quesion: IQuestion) {
    const array = quesion.words;
    const limitedArray: Array<string> = [];
    let rand = 0;
    while (limitedArray.length < SELECTED_WORDS_NUMBER && array.length > 0) {
      rand = Math.floor(Math.random() * array.length);
      if (array[rand].length <= LIMITED_WORD_LENGTH) {
        limitedArray.push(array[rand]);
        array.splice(rand, 1);
      }
    }
    quesion.words = limitedArray;
    return quesion;
  }
}
