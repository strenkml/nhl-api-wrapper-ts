import { ISkaterLeadersInput, ISkaterLeadersOutput } from "../../../../interfaces/stats/leaders/skaters/SkaterLeaders";
import { ISkaterMilestonesInput, ISkaterMilestonesOutput } from "../../../../interfaces/stats/milestones/skaters/SkaterMilestones";
import { ISkaterStatsInput, ISkaterStatsOutput } from "../../../../interfaces/stats/skater/SkaterStats";
import { BASE_URL, IResponse, sendGetRequest } from "../../../../internal/Requests";

/**
 * Retrieve skater leaders for a specific attribute.
 * @param options The options to retrieve the skater leaders.
 * @returns The skater leaders.
 */
export async function getSkaterLeaders(options: ISkaterLeadersInput): Promise<IResponse<ISkaterLeadersOutput>> {
  return sendGetRequest<ISkaterLeadersOutput>(BASE_URL.STAT, "{lang}/leaders/skaters/{attribute}", options);
}

/**
 * Retrieve skater milestones for a specific attribute.
 * @param options The options to retrieve the skater milestones.
 * @returns The skater milestones.
 */
export async function getSkaterMilestones(options: ISkaterMilestonesInput): Promise<IResponse<ISkaterMilestonesOutput>> {
  return sendGetRequest<ISkaterMilestonesOutput>(BASE_URL.STAT, "{lang}/milestones/skaters", options);
}

/**
 * Retrieve skater stats for a specific report.
 * @param options The options to retrieve the skater stats.
 * @returns The skater stats.
 */
export async function getSkaterStats(options: ISkaterStatsInput): Promise<IResponse<ISkaterStatsOutput>> {
  return sendGetRequest<ISkaterStatsOutput>(BASE_URL.STAT, "{lang}/skater/{report}", options);
}
