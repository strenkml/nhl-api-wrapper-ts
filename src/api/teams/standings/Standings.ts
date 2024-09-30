import { IStandingsByDateInput, IStandingsByDateOutput } from "../../../interfaces/standings/StandingsByDate";
import { IStandingsNowOutput } from "../../../interfaces/standings/StandingsNow";
import { IStandingsSeasonOutput } from "../../../interfaces/standings/StandingsSeason";
import { BASE_URL, IResponse, sendGetRequest, sendGetRequestWithoutParams } from "../../../internal/Requests";

/**
 * Retrieve the current standings.
 * @returns The current standings.
 */
export async function getCurrentStandings(): Promise<IResponse<IStandingsNowOutput>> {
  return await sendGetRequestWithoutParams<IStandingsNowOutput>(BASE_URL.NORMAL, "standings/now");
}

/**
 * Retrieve the standings for a specific date.
 * @param options The date to retrieve the standings for.
 * @returns The standings for the date.
 */
export async function getStandingsDate(options: IStandingsByDateInput): Promise<IResponse<IStandingsByDateOutput>> {
  return await sendGetRequest<IStandingsByDateOutput>(BASE_URL.NORMAL, "standings/{date}", options);
}

/**
 * Retrieve the standings for each season.
 * @returns The standings for each season.
 */
export async function getStandingsEachSeason(): Promise<IResponse<IStandingsSeasonOutput>> {
  return await sendGetRequestWithoutParams<IStandingsSeasonOutput>(BASE_URL.NORMAL, "standings-season");
}
