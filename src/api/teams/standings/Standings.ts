import { ICurrentStandingsOutput, IStandingsDateInput, IStandingsDateOutput, IStandingsEachSeasonOutput } from "../../../interfaces/Teams";
import { BASE_URL, IResponse, sendGetRequest, sendGetRequestWithoutParams } from "../../../internal/Requests";

/**
 * Retrieve the current standings.
 * @returns The current standings.
 */
export async function getCurentStandings(): Promise<IResponse<ICurrentStandingsOutput>> {
  return await sendGetRequestWithoutParams<ICurrentStandingsOutput>(BASE_URL.NORMAL, "standings/now");
}

/**
 * Retrieve the standings for a specific date.
 * @param options The date to retrieve the standings for.
 * @returns The standings for the date.
 */
export async function getStandingsDate(options: IStandingsDateInput): Promise<IResponse<IStandingsDateOutput>> {
  return await sendGetRequest<IStandingsDateOutput>(BASE_URL.NORMAL, "standings/{date}", options);
}

/**
 * Retrieve the standings for each season.
 * @returns The standings for each season.
 */
export async function getStandingsEachSeason(): Promise<IResponse<IStandingsEachSeasonOutput>> {
  return await sendGetRequestWithoutParams<IStandingsEachSeasonOutput>(BASE_URL.NORMAL, "standings-season");
}
