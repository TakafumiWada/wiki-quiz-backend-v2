import { IQuestion, Question } from "../../domain/models/Question";

export class GetQuestion {
  private fetchQuestion: () => Promise<IQuestion>;
  private limit: number;

  constructor(fetchQuestion: () => Promise<IQuestion>, limit: number) {
    this.fetchQuestion = fetchQuestion;
    this.limit = limit;
  }

  async execute(): Promise<IQuestion> {
    for (let i = 0; i < this.limit; i++) {
      const data = await this.fetchQuestion();
      const question = new Question(data);
      if (question.isValid()) return question;
    }
    throw new Error("exceed limit");
  }
}
