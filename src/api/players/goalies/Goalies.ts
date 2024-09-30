import { IGoalieStatsLeadersInput, IGoalieStatsLeadersOutput } from "../../../interfaces/stats/goalie/leaders/GoalieStatsLeaders";
import {
  IGoalieStatsLeadersCurrentInput,
  IGoalieStatsLeadersCurrentOutput,
} from "../../../interfaces/stats/goalie/leaders/GoalieStatsLeadersCurrent";
import { BASE_URL, IResponse, sendGetRequest } from "../../../internal/Requests";

import * as stats from "./stats/GoalieStats";

/**
 * Retrieve the current goalie stats leaders.
 * @param options The options to retrieve the current goalie stats leaders.
 * @returns The current goalie stats leaders.
 */
async function getCurrentGoalieStatsLeaders(options: IGoalieStatsLeadersCurrentInput): Promise<IResponse<IGoalieStatsLeadersCurrentOutput>> {
  return await sendGetRequest<IGoalieStatsLeadersCurrentOutput>(BASE_URL.NORMAL, "goalie-stats-leaders/current", options);
}

/**
 * Retrieve the goalie stats leaders for a specific season and game type.
 * @param options The options to retrieve the goalie stats leaders.
 * @returns The goalie stats leaders for the season and game type.
 */
async function getGoalieStatsLeadersSeason(options: IGoalieStatsLeadersInput): Promise<IResponse<IGoalieStatsLeadersOutput>> {
  return await sendGetRequest<IGoalieStatsLeadersOutput>(BASE_URL.NORMAL, "goalie-stats-leaders/{season}/{gameType}", options);
}

export default {
  getCurrentGoalieStatsLeaders,
  getGoalieStatsLeadersSeason,
  stats,
};
