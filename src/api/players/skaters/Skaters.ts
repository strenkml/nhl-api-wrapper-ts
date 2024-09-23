import { BASE_URL, IResponse, sendGetRequest } from "../../../internal/Requests";
import {
  ICurrentSkaterStatsLeadersInput,
  ICurrentSkaterStatsLeadersOutput,
  ISkaterStatsLeadersSeasonInput,
  ISkaterStatsLeadersSeasonOutput,
} from "../../../interfaces/Players";

/**
 * Retrieve the current skater stats leaders.
 * @param options The options to retrieve the current skater stats leaders.
 * @returns The current skater stats leaders.
 */
export async function getCurrentSkaterStatsLeaders(options: ICurrentSkaterStatsLeadersInput): Promise<IResponse<ICurrentSkaterStatsLeadersOutput>> {
  return await sendGetRequest<ICurrentSkaterStatsLeadersOutput>(BASE_URL.NORMAL, "skater-stats-leaders/current", options);
}

/**
 * Retrieve the skater stats leaders for a specific season and game type.
 * @param options The options to retrieve the skater stats leaders.
 * @returns The skater stats leaders for the season and game type.
 */
export async function getSkaterStatsLeadersSeason(options: ISkaterStatsLeadersSeasonInput): Promise<IResponse<ISkaterStatsLeadersSeasonOutput>> {
  return await sendGetRequest<ISkaterStatsLeadersSeasonOutput>(BASE_URL.NORMAL, "skater-stats-leaders/{season}/{gameType}", options);
}
