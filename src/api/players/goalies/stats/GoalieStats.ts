import { IGoalieStatsInput, IGoalieStatsOutput } from "../../../../interfaces/stats/goalie/GoalieStats";
import { IGoalieLeadersInput, IGoalieLeadersOutput } from "../../../../interfaces/stats/leaders/goalies/GoalieLeaders";
import { IGoalieMilestonesInput, IGoalieMilestonesOutput } from "../../../../interfaces/stats/milestones/goalies/GoalieMilestones";
import { BASE_URL, IResponse, sendGetRequest } from "../../../../internal/Requests";

/**
 * Retrieve goalie leaders for a specific attribute.
 * @param options The options to retrieve the goalie leaders.
 * @returns The goalie leaders.
 */
export async function getGoalieLeaders(options: IGoalieLeadersInput): Promise<IResponse<IGoalieLeadersOutput>> {
  return sendGetRequest<IGoalieLeadersOutput>(BASE_URL.STAT, "{lang}/leaders/goalies/{attribute}", options);
}

/**
 * Retrieve goalie stats for a specific report.
 * @param options The options to retrieve the goalie stats.
 * @returns The goalie stats.
 */
export async function getGoalieStats(options: IGoalieStatsInput): Promise<IResponse<IGoalieStatsOutput>> {
  return sendGetRequest<IGoalieStatsOutput>(BASE_URL.STAT, "{lang}/goalie/{report}", options);
}

/**
 * Retrieve goalie milestones for a specific attribute.
 * @param options The options to retrieve the goalie milestones.
 * @returns The goalie milestones.
 */
export async function getGoalieMilestones(options: IGoalieMilestonesInput): Promise<IResponse<IGoalieMilestonesOutput>> {
  return sendGetRequest<IGoalieMilestonesOutput>(BASE_URL.STAT, "{lang}/milestones/goalies", options);
}
