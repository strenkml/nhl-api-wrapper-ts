import {
  ICurrentGoalieStatsLeadersInput,
  ICurrentGoalieStatsLeadersOutput,
  IGoalieStatsLeadersSeasonInput,
  IGoalieStatsLeadersSeasonOutput,
} from "../../../interfaces/Players";
import { BASE_URL, IResponse, sendGetRequest } from "../../../internal/Requests";

/**
 * Retrieve the current goalie stats leaders.
 * @param options The options to retrieve the current goalie stats leaders.
 * @returns The current goalie stats leaders.
 */
export async function getCurrentGoalieStatsLeaders(options: ICurrentGoalieStatsLeadersInput): Promise<IResponse<ICurrentGoalieStatsLeadersOutput>> {
  return await sendGetRequest<ICurrentGoalieStatsLeadersOutput>(BASE_URL.NORMAL, "goalie-stats-leaders/current", options);
}

/**
 * Retrieve the goalie stats leaders for a specific season and game type.
 * @param options The options to retrieve the goalie stats leaders.
 * @returns The goalie stats leaders for the season and game type.
 */
export async function getGoalieStatsLeadersSeason(options: IGoalieStatsLeadersSeasonInput): Promise<IResponse<IGoalieStatsLeadersSeasonOutput>> {
  return await sendGetRequest<IGoalieStatsLeadersSeasonOutput>(BASE_URL.NORMAL, "goalie-stats-leaders/{season}/{gameType}", options);
}
