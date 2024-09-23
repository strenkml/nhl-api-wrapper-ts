import { ICurrentTeamRosterInput, ICurrentTeamRosterOutput } from "../../../interfaces/Teams";
import { BASE_URL, IResponse, sendGetRequest } from "../../../internal/Requests";

/**
 * Retrieve the current team roster.
 * @param options The team to retrieve the roster for.
 * @returns The current team roster.
 */
export async function getCurrentTeamRoster(options: ICurrentTeamRosterInput): Promise<IResponse<ICurrentTeamRosterOutput>> {
  return await sendGetRequest<ICurrentTeamRosterOutput>(BASE_URL.NORMAL, "roster/{team}/current", options);
}
