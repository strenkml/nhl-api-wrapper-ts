import skaters from "./skaters/Skaters";
import goalies from "./goalies/Goalies";
import * as stats from "./stats/Stats";
import { BASE_URL, IResponse, sendGetRequest, sendGetRequestWithoutParams } from "../../internal/Requests";
import { IPlayerGameLogInput, IPlayerGameLogOutput } from "../../interfaces/player/game-log/PlayerGameLog";
import { IPlayerLandingInput, IPlayerLandingOutput } from "../../interfaces/player/landing/PlayerLanding";
import { IPlayerGameLogNowInput, IPlayerGameLogNowOutput } from "../../interfaces/player/game-log/PlayerGameLogNow";
import { IPlayerSpotlightOutput } from "../../interfaces/player/PlayerSpotlight";

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
async function getPlayerInfo(options: IPlayerLandingInput): Promise<IResponse<IPlayerLandingOutput>> {
  return await sendGetRequest<IPlayerLandingOutput>(BASE_URL.NORMAL, "player/{playerId}/landing", options);
}

/**
 * Retrieve the game log for a specific player as of the current moment.
 * @param options The player ID to retrieve the game log for.
 * @returns The current game log for the player.
 */
async function getPlayerCurrentGameLog(options: IPlayerGameLogNowInput): Promise<IResponse<IPlayerGameLogNowOutput>> {
  return await sendGetRequest<IPlayerGameLogNowOutput>(BASE_URL.NORMAL, "player/{playerId}/game-log/now", options);
}

/**
 * Retrieve the player spotlight.
 * @returns The player spotlight.
 */
async function getPlayerSpotlight(): Promise<IResponse<IPlayerSpotlightOutput>> {
  return await sendGetRequestWithoutParams<IPlayerSpotlightOutput>(BASE_URL.NORMAL, "player-spotlight");
}

export default {
  skaters,
  goalies,
  stats,
  getPlayerGameLog,
  getPlayerInfo,
  getPlayerCurrentGameLog,
  getPlayerSpotlight,
};
