import {
  ICurrentSkaterStatsLeadersInput,
  ICurrentSkaterStatsLeadersOutput,
  IPlayerCurrentGameLogInput,
  IPlayerCurrentGameLogOutput,
  IPlayerGameLogInput,
  IPlayerGameLogOutput,
  IPlayerInfoInput,
  IPlayerInfoOutput,
  ISkaterStatsLeadersSeasonInput,
  ISkaterStatsLeadersSeasonOutput,
} from "../interfaces/Players";
import { BASE_URL, IResponse, sendGetRequest } from "../internal/Requests";

export default class PlayerAPI {
  /**
   * Retrieve the game log for a specific player, season, and game type.
   * @param options The player ID and season and game type to retrieve the game log for.
   * @returns The game log for the player.
   */
  public static async getPlayerGameLog(options: IPlayerGameLogInput): Promise<IResponse<IPlayerGameLogOutput>> {
    return await sendGetRequest<IPlayerGameLogOutput>(BASE_URL.NORMAL, "player/{playerId}/game-log/{season}/{gameType}", options);
  }

  /**
   * Retrieve the player information for a specific player.
   * @param options The player ID to retrieve the player information for.
   * @returns The player information for the player.
   */
  public static async getPlayerInfo(options: IPlayerInfoInput): Promise<IResponse<IPlayerInfoOutput>> {
    return await sendGetRequest<IPlayerInfoOutput>(BASE_URL.NORMAL, "player/{playerId}/landing", options);
  }

  /**
   * Retrieve the game log for a specific player as of the current moment.
   * @param options The player ID to retrieve the game log for.
   * @returns The current game log for the player.
   */
  public static async getPlayerCurrentGameLog(options: IPlayerCurrentGameLogInput): Promise<IResponse<IPlayerCurrentGameLogOutput>> {
    return await sendGetRequest<IPlayerCurrentGameLogOutput>(BASE_URL.NORMAL, "player/{playerId}/game-log/now", options);
  }

  /**
   * Retrieve the current skater stats leaders.
   * @param options The options to retrieve the current skater stats leaders.
   * @returns The current skater stats leaders.
   */
  public static async getCurrentSkaterStatsLeaders(options: ICurrentSkaterStatsLeadersInput): Promise<IResponse<ICurrentSkaterStatsLeadersOutput>> {
    return await sendGetRequest<ICurrentSkaterStatsLeadersOutput>(BASE_URL.NORMAL, "skater-stats-leaders/current", options);
  }

  /**
   * Retrieve the skater stats leaders for a specific season and game type.
   * @param options The options to retrieve the skater stats leaders.
   * @returns The skater stats leaders for the season and game type.
   */
  public static async getSkaterStatsLeadersSeason(options: ISkaterStatsLeadersSeasonInput): Promise<IResponse<ISkaterStatsLeadersSeasonOutput>> {
    return await sendGetRequest<ISkaterStatsLeadersSeasonOutput>(BASE_URL.NORMAL, "skater-stats-leaders/{season}/{gameType}", options);
  }
}
