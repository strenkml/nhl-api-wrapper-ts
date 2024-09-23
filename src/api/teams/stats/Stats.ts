import {
  IClubStatsSeasonAndGameTypeInput,
  IClubStatsSeasonAndGameTypeOutput,
  IClubStatsSeasonInput,
  IClubStatsSeasonOutput,
  ICurrentClubStatsInput,
  ICurrentClubStatsOutput,
  ICurrentTeamScoreboardInput,
  ICurrentTeamScoreboardOutput,
} from "../../../interfaces/Teams";
import { BASE_URL, IResponse, sendGetRequest } from "../../../internal/Requests";

/**
 * Retrieve the current club stats.
 * @param options The team to retrieve the club stats for.
 * @returns The current club stats.
 */
export async function getCurrentClubStats(options: ICurrentClubStatsInput): Promise<IResponse<ICurrentClubStatsOutput>> {
  return await sendGetRequest<ICurrentClubStatsOutput>(BASE_URL.NORMAL, "club-stats/{team}/now", options);
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
export async function getClubStatsSeasonAndGameType(
  options: IClubStatsSeasonAndGameTypeInput,
): Promise<IResponse<IClubStatsSeasonAndGameTypeOutput>> {
  return await sendGetRequest<IClubStatsSeasonAndGameTypeOutput>(BASE_URL.NORMAL, "club-stats/{team}/{season}/{gameType}", options);
}

/**
 * Retrieve the current team scoreboard.
 * @param options The team to retrieve the scoreboard for.
 * @returns The current team scoreboard.
 */
export async function getCurrentTeamScoreboard(options: ICurrentTeamScoreboardInput): Promise<IResponse<ICurrentTeamScoreboardOutput>> {
  return await sendGetRequest<ICurrentTeamScoreboardOutput>(BASE_URL.NORMAL, "scoreboard/{team}/now", options);
}
