import { ISeasonsOutput } from "../../../interfaces/season/Seasons";
import { IComponentSeasonInput, IComponentSeasonOutput } from "../../../interfaces/stats/component-season/ComponentSeason";
import { ISeasonInput, ISeasonOutput } from "../../../interfaces/stats/season/Season";
import { BASE_URL, IResponse, sendGetRequest, sendGetRequestWithoutParams } from "../../../internal/Requests";

/**
 * Retrieve a list of all season IDs past & present in the NHL
 * @returns The seasons.
 */
export async function getSeasons(): Promise<IResponse<ISeasonsOutput>> {
  return await sendGetRequestWithoutParams<ISeasonsOutput>(BASE_URL.NORMAL, "season");
}

/**
 * Retrieve component season information.
 * @param options The options to retrieve the component season information.
 * @returns The component season information.
 */
export async function getComponentSeason(options: IComponentSeasonInput): Promise<IResponse<IComponentSeasonOutput>> {
  return await sendGetRequest<IComponentSeasonOutput>(BASE_URL.STAT, "{lang}/componentSeason", options);
}

/**
 * Retrieve season information.
 * @param options The options to retrieve the season information
 * @returns The season information
 */
export async function getSeason(options: ISeasonInput): Promise<IResponse<ISeasonOutput>> {
  return await sendGetRequest<ISeasonOutput>(BASE_URL.STAT, "{lang}/season", options);
}
