import {
  IPlayerCurrentGameLogInput,
  IPlayerCurrentGameLogOutput,
  IPlayerGameLogInput,
  IPlayerGameLogOutput,
  IPlayerInfoInput,
  IPlayerInfoOutput,
  IPlayerSpotlightOutput,
} from "../../../interfaces/Players";
import { BASE_URL, IResponse, sendGetRequest, sendGetRequestWithoutParams } from "../../../internal/Requests";

/**
 * Retrieve the game log for a specific player, season, and game type.
 * @param options The player ID and season and game type to retrieve the game log for.
 * @returns The game log for the player.
 */
export async function getPlayerGameLog(options: IPlayerGameLogInput): Promise<IResponse<IPlayerGameLogOutput>> {
  return await sendGetRequest<IPlayerGameLogOutput>(BASE_URL.NORMAL, "player/{playerId}/game-log/{season}/{gameType}", options);
}

/**
 * Retrieve the player information for a specific player.
 * @param options The player ID to retrieve the player information for.
 * @returns The player information for the player.
 */
export async function getPlayerInfo(options: IPlayerInfoInput): Promise<IResponse<IPlayerInfoOutput>> {
  return await sendGetRequest<IPlayerInfoOutput>(BASE_URL.NORMAL, "player/{playerId}/landing", options);
}

/**
 * Retrieve the game log for a specific player as of the current moment.
 * @param options The player ID to retrieve the game log for.
 * @returns The current game log for the player.
 */
export async function getPlayerCurrentGameLog(options: IPlayerCurrentGameLogInput): Promise<IResponse<IPlayerCurrentGameLogOutput>> {
  return await sendGetRequest<IPlayerCurrentGameLogOutput>(BASE_URL.NORMAL, "player/{playerId}/game-log/now", options);
}

/**
 * Retrieve the player spotlight.
 * @returns The player spotlight.
 */
export async function getPlayerSpotlight(): Promise<IResponse<IPlayerSpotlightOutput>> {
  return await sendGetRequestWithoutParams<IPlayerSpotlightOutput>(BASE_URL.NORMAL, "player-spotlight");
}
