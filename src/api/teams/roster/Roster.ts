import {
  ICurrentTeamRosterInput,
  ICurrentTeamRosterOutput,
  ITeamRosterSeasonInput,
  ITeamRosterSeasonOutput,
  ITeamSeasonsInput,
  ITeamSeasonsOutput,
} from "../../../interfaces/Teams";
import { BASE_URL, IResponse, sendGetRequest } from "../../../internal/Requests";

/**
 * Retrieve the current team roster.
 * @param options The team to retrieve the roster for.
 * @returns The current team roster.
 */
export async function getCurrentTeamRoster(options: ICurrentTeamRosterInput): Promise<IResponse<ICurrentTeamRosterOutput>> {
  return await sendGetRequest<ICurrentTeamRosterOutput>(BASE_URL.NORMAL, "roster/{team}/current", options);
}

/**
 * Retrieve the roster for a specific team and season.
 * @param options The team and season to retrieve the roster for.
 * @returns The roster for the team and season.
 */
export async function getTeamRosterSeason(options: ITeamRosterSeasonInput): Promise<IResponse<ITeamRosterSeasonOutput>> {
  return await sendGetRequest<ITeamRosterSeasonOutput>(BASE_URL.NORMAL, "roster/{team}/{season}", options);
}

/**
 * Retrieve the seasons for a specific team.
 * @param options The team to retrieve the seasons for.
 * @returns The seasons for the team.
 */
export async function getTeamSeasons(options: ITeamSeasonsInput): Promise<IResponse<ITeamSeasonsOutput>> {
  return await sendGetRequest<ITeamSeasonsOutput>(BASE_URL.NORMAL, "roster-season/{team}", options);
}
