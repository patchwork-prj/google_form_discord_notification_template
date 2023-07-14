import Const from "./const";
import { Discord, Form } from "./useCases";

/**
 *  メッセージのテスト用
 */
export const test = () => {
  Discord.sendSuccess("テスト通知");
};

/**
 * フォームに投稿があった時のエントリーポイント
 *
 * @param e GoogleFormからのイベント
 */
export const onFormSubmit = (e: GoogleAppsScript.Events.FormsOnFormSubmit) => {
  try {
    const itemResponses = e.response.getItemResponses();

    const responses = Form.extractResponse(itemResponses);
    console.log(responses);

    const name = Form.getAnswerFromQuestion(responses, Const.NAME_KEY);
    const profile = Form.getAnswerFromQuestion(responses, Const.PROFILE_KEY);

    Discord.sendSuccess(
      `${name} がフォームに投稿しました

プロフィール: ${profile}`
    );
  } catch (e) {
    console.error("Some error was occurred on onFormSubmit");
    console.error(e);
    Discord.sendSuccess(
      `${Const.DEVELOPER_MENTION}
スクリプトでエラーが発生しました`
    );
    // 開発用ディスコードにエラーメッセージを送信
    Discord.sendError(
      `${Const.DEVELOPER_MENTION}
Some error was occurred on onFormSubmit

\`\`\`txt
${e}
\`\`\`
`
    );
    throw e;
  }
};
