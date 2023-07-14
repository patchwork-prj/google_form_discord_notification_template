export default class Utils {
  /**
   * 配列の可能性がある文字列を文字列にする。配列の時はjoinする
   *
   * @param str 文字列か1,2次元の配列
   * @returns 文字列 （配列だった場合はカンマ区切り）
   */
  static readonly joinStringArray = (str: string | string[] | string[][]) => {
    return Array.isArray(str) ? str.join(",") : str;
  };
}
