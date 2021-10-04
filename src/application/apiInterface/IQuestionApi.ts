import { IQuestion } from "../../domain/models/Question";

export interface IQuestionApi {
  fetchQuestion: () => Promise<IQuestion>;
  searchTitle: (word: string) => Promise<string>;
}
