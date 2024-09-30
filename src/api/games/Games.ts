import * as scores from "./scores/Scores";
import * as streams from "./streams/Streams";
import * as events from "./events/Events";
import * as network from "./network/Network";
import * as odds from "./odds/Odds";
import { IMetaGameInfoInput, IMetaGameInfoOutput } from "../../interfaces/meta/game/MetaGameInfo";
import { BASE_URL, IResponse, sendGetRequest } from "../../internal/Requests";
import { IGameInput, IGameOutput } from "../../interfaces/stats/game/Game";
import { IShiftChartsInput, IShiftChartsOutput } from "../../interfaces/stats/shiftcharts/ShiftCharts";

/**
 * Retrieve the game information for a specific game.
 * @param options The game ID to retrieve the game information for.
 * @returns The game information for the game.
 */
async function getGameInfo(options: IMetaGameInfoInput): Promise<IResponse<IMetaGameInfoOutput>> {
  return await sendGetRequest<IMetaGameInfoOutput>(BASE_URL.NORMAL, "meta/game/{gameId}", options);
}

/**
 * Retrieve game information
 * @param options The options to retrieve the game information
 * @returns The game information
 */
async function getStatGameInfo(options: IGameInput): Promise<IResponse<IGameOutput>> {
  return await sendGetRequest<IGameOutput>(BASE_URL.STAT, "{lang}/game", options);
}

/**
 * Retrieve shift charts for a specific game.
 * @param options The game ID to retrieve the shift charts for.
 * @returns The shift charts for the game.
 */
async function getShiftCharts(options: IShiftChartsInput): Promise<IResponse<IShiftChartsOutput>> {
  return await sendGetRequest<IShiftChartsOutput>(BASE_URL.STAT, "{lang}/shiftcharts?cayenneExp=gameId={gameId}", options);
}

export default {
  scores,
  streams,
  events,
  network,
  odds,
  getGameInfo,
  getStatGameInfo,
  getShiftCharts,
};
