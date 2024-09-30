import { ISkaterStatsLeadersInput, ISkaterStatsLeadersOutput } from "../../../interfaces/stats/skater/leaders/SkaterStatsLeaders";
import {
  ISkaterStatsLeadersCurrentInput,
  ISkaterStatsLeadersCurrentOutput,
} from "../../../interfaces/stats/skater/leaders/SkaterStatsLeadersCurrent";
import { BASE_URL, IResponse, sendGetRequest } from "../../../internal/Requests";

import * as stats from "./stats/SkaterStats";

/**
 * Retrieve the current skater stats leaders.
 * @param options The options to retrieve the current skater stats leaders.
 * @returns The current skater stats leaders.
 */
async function getCurrentSkaterStatsLeaders(options: ISkaterStatsLeadersCurrentInput): Promise<IResponse<ISkaterStatsLeadersCurrentOutput>> {
  return await sendGetRequest<ISkaterStatsLeadersCurrentOutput>(BASE_URL.NORMAL, "skater-stats-leaders/current", options);
}

/**
 * Retrieve the skater stats leaders for a specific season and game type.
 * @param options The options to retrieve the skater stats leaders.
 * @returns The skater stats leaders for the season and game type.
 */
async function getSkaterStatsLeadersSeason(options: ISkaterStatsLeadersInput): Promise<IResponse<ISkaterStatsLeadersOutput>> {
  return await sendGetRequest<ISkaterStatsLeadersOutput>(BASE_URL.NORMAL, "skater-stats-leaders/{season}/{gameType}", options);
}

export default {
  getCurrentSkaterStatsLeaders,
  getSkaterStatsLeadersSeason,
  stats,
};
