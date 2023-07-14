import { Webhook as DiscordWebhook } from "discord-webhook-ts";
import Const from "../const";

export class Discord {
  /**
   * 成功通知をDiscordに送信する
   *
   * @param body 送信するメッセージの文字列
   */
  static readonly sendSuccess = (body: string) => {
    Discord.send(body, Const.WEBHOOK_URL);
  };

  /**
   * エラー通知をDiscordに送信する
   *
   * @param body 送信するメッセージの文字列
   */
  static readonly sendError = (body: string) => {
    Discord.send(body, Const.ERROR_NOTIFICATION_WEBHOOK_URL);
  };

  /**
   * Discord に Webhook でメッセージを送信する
   *
   * @param body
   * @param webhookUrl
   */
  private static readonly send = (body: string, webhookUrl: string) => {
    const data: DiscordWebhook.input.POST = {
      content: body,
    };
    const payload = JSON.stringify(data);
    const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
      method: "post",
      contentType: "application/json",
      payload: payload,
    };
    const response = UrlFetchApp.fetch(webhookUrl, options);
    console.log(response.getResponseCode());
  };
}
