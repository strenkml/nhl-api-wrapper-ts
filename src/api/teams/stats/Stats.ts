import { IScoreboardNowInput } from "../../../interfaces/club/scoreboard/ScoreboardNow";
import { IClubStatsInput, IClubStatsOutput } from "../../../interfaces/club/stats/ClubStats";
import { IClubStatsNowInput, IClubStatsNowOutput } from "../../../interfaces/club/stats/ClubStatsNow";
import { IClubStatsSeasonInput, IClubStatsSeasonOutput } from "../../../interfaces/club/stats/ClubStatsSeason";
import { IScoreboardNowOutput } from "../../../interfaces/scoreboard/ScoreboardNow";
import { BASE_URL, IResponse, sendGetRequest } from "../../../internal/Requests";

/**
 * Retrieve the current club stats.
 * @param options The team to retrieve the club stats for.
 * @returns The current club stats.
 */
export async function getCurrentClubStats(options: IClubStatsNowInput): Promise<IResponse<IClubStatsNowOutput>> {
  return await sendGetRequest<IClubStatsNowOutput>(BASE_URL.NORMAL, "club-stats/{team}/now", options);
}

/**
 * Returns an overview of the stats for each season for a specific club. Seems to only indicate the gametypes played in each season.
 * @param options The team to retrieve the club stats for.
 * @returns The club stats for each season.
 */
export async function getClubStatsSeason(options: IClubStatsSeasonInput): Promise<IResponse<IClubStatsSeasonOutput>> {
  return await sendGetRequest<IClubStatsSeasonOutput>(BASE_URL.NORMAL, "club-stats-season/{team}", options);
}

/**
 * Retrieve the stats for a specific team, season, and game type.
 * @param options The team, season, and game type to retrieve the stats for.
 * @returns The stats for the team, season, and game type.
 */
export async function getClubStatsSeasonAndGameType(options: IClubStatsInput): Promise<IResponse<IClubStatsOutput>> {
  return await sendGetRequest<IClubStatsOutput>(BASE_URL.NORMAL, "club-stats/{team}/{season}/{gameType}", options);
}

/**
 * Retrieve the current team scoreboard.
 * @param options The team to retrieve the scoreboard for.
 * @returns The current team scoreboard.
 */
export async function getCurrentTeamScoreboard(options: IScoreboardNowInput): Promise<IResponse<IScoreboardNowOutput>> {
  return await sendGetRequest<IScoreboardNowOutput>(BASE_URL.NORMAL, "scoreboard/{team}/now", options);
}
