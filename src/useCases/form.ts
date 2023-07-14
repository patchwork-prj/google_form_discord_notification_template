import { ExtractResponse } from "../types";
import Utils from "./utils";

export class Form {
  /**
   * Formから取得できるデータから配列を抽出する
   *
   * @param itemResponses Formから取得できるデータ
   * @returns ExtractResponse の配列
   */
  static readonly extractResponse = (
    itemResponses: GoogleAppsScript.Forms.ItemResponse[]
  ): ExtractResponse[] => {
    return itemResponses.map((formData) => ({
      question: formData.getItem().getTitle(),
      answer: Utils.joinStringArray(formData.getResponse()),
    }));
  };

  /**
   * ExtractResponse から指定された質問に対する回答を取得する
   *
   * @param response
   * @param question
   * @returns 回答
   */
  static readonly getAnswerFromQuestion = (
    response: ExtractResponse[],
    question: string
  ) => {
    const answer = response.find((el) => el.question === question)?.answer;
    if (answer === undefined) {
      throw new Error(`answer of ${question} cannot be found`);
    }
    return answer;
  };
}
