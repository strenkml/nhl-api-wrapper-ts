import { ITeamProspectsInput, ITeamProspectsOutput } from "../../../interfaces/prospects/TeamProspects";
import { IRosterSeasonInput, IRosterSeasonOutput } from "../../../interfaces/roster/RosterSeason";
import { ITeamRosterInput, ITeamRosterOutput } from "../../../interfaces/roster/TeamRoster";
import { ITeamRosterNowInput, ITeamRosterNowOutput } from "../../../interfaces/roster/TeamRosterNow";
import { BASE_URL, IResponse, sendGetRequest } from "../../../internal/Requests";

/**
 * Retrieve the current team roster.
 * @param options The team to retrieve the roster for.
 * @returns The current team roster.
 */
export async function getCurrentTeamRoster(options: ITeamRosterNowInput): Promise<IResponse<ITeamRosterNowOutput>> {
  return await sendGetRequest<ITeamRosterNowOutput>(BASE_URL.NORMAL, "roster/{team}/current", options);
}

/**
 * Retrieve the roster for a specific team and season.
 * @param options The team and season to retrieve the roster for.
 * @returns The roster for the team and season.
 */
export async function getTeamRosterSeason(options: ITeamRosterInput): Promise<IResponse<ITeamRosterOutput>> {
  return await sendGetRequest<ITeamRosterOutput>(BASE_URL.NORMAL, "roster/{team}/{season}", options);
}

/**
 * Retrieve the seasons for a specific team.
 * @param options The team to retrieve the seasons for.
 * @returns The seasons for the team.
 */
export async function getTeamSeasons(options: IRosterSeasonInput): Promise<IResponse<IRosterSeasonOutput>> {
  return await sendGetRequest<IRosterSeasonOutput>(BASE_URL.NORMAL, "roster-season/{team}", options);
}

/**
 * Retrieve the prospects for a specific team.
 * @param options The team to retrieve the prospects for.
 * @returns The prospects for the team.
 */
export async function getTeamProspects(options: ITeamProspectsInput): Promise<IResponse<ITeamProspectsOutput>> {
  return await sendGetRequest<ITeamProspectsOutput>(BASE_URL.NORMAL, "prospects/{team}", options);
}
