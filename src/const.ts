export default class Const {
  /** 通知送信先の Discord の webhook URL */
  static readonly WEBHOOK_URL = "https://discord.com/api/webhooks/hogehoge";
  /** エラー通知を送信する Disscord の webhook URL */
  static readonly ERROR_NOTIFICATION_WEBHOOK_URL =
    "https://discord.com/api/webhooks/fugafuga";

  // form の各設問の答えを拾うためのキーとして使用する各設問文
  static readonly NAME_KEY = "名前";
  static readonly PROFILE_KEY = "プロフィール";

  // デバッグ用
  /**
   * 開発者の Discord のユーザーID
   *
   * エラー通知を別のチャンネルに飛ばすときに開発者にメンションする時に使用する
   */
  private static readonly DEVELOPER_USER_ID = "user_id";
  /**
   * 開発者の Discord のメンション
   */
  static readonly DEVELOPER_MENTION = `<@!${Const.DEVELOPER_USER_ID}>`;
}
