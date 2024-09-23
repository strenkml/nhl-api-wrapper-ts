import {
  IPlayerCurrentGameLogInput,
  IPlayerCurrentGameLogOutput,
  IPlayerGameLogInput,
  IPlayerGameLogOutput,
  IPlayerInfoInput,
  IPlayerInfoOutput,
} from "../../interfaces/Players";
import { BASE_URL, IResponse, sendGetRequest } from "../../internal/Requests";

import * as skaters from "./skaters/Skaters";
import * as goalies from "./goalies/Goalies";

/**
 * Retrieve the game log for a specific player, season, and game type.
 * @param options The player ID and season and game type to retrieve the game log for.
 * @returns The game log for the player.
 */
async function getPlayerGameLog(options: IPlayerGameLogInput): Promise<IResponse<IPlayerGameLogOutput>> {
  return await sendGetRequest<IPlayerGameLogOutput>(BASE_URL.NORMAL, "player/{playerId}/game-log/{season}/{gameType}", options);
}

/**
 * Retrieve the player information for a specific player.
 * @param options The player ID to retrieve the player information for.
 * @returns The player information for the player.
 */
async function getPlayerInfo(options: IPlayerInfoInput): Promise<IResponse<IPlayerInfoOutput>> {
  return await sendGetRequest<IPlayerInfoOutput>(BASE_URL.NORMAL, "player/{playerId}/landing", options);
}

/**
 * Retrieve the game log for a specific player as of the current moment.
 * @param options The player ID to retrieve the game log for.
 * @returns The current game log for the player.
 */
async function getPlayerCurrentGameLog(options: IPlayerCurrentGameLogInput): Promise<IResponse<IPlayerCurrentGameLogOutput>> {
  return await sendGetRequest<IPlayerCurrentGameLogOutput>(BASE_URL.NORMAL, "player/{playerId}/game-log/now", options);
}

export default {
  getPlayerGameLog,
  getPlayerInfo,
  getPlayerCurrentGameLog,
  skaters,
  goalies,
};
