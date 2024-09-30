import * as Roster from "./roster/Roster";
import * as Schedule from "./schedule/Schedule";
import * as Stats from "./stats/Stats";
import * as Standings from "./standings/Standings";
import { ITeamsInput, ITeamsOutput } from "../../interfaces/stats/teams/Teams";
import { BASE_URL, IResponse, sendGetRequest } from "../../internal/Requests";
import { ITeamStatsInput, ITeamStatsOutput } from "../../interfaces/stats/team/TeamStats";
import { IFranchisesInput, IFranchisesOutput } from "../../interfaces/stats/franchise/Franchises";

/**
 * Get a list of all teams
 * @param options The options to retrieve the teams.
 * @returns The teams.
 */
async function getTeams(options: ITeamsInput): Promise<IResponse<ITeamsOutput>> {
  return await sendGetRequest<ITeamsOutput>(BASE_URL.STAT, "{lang}/team", options);
}

/**
 * Retrieve team stats for a specific report
 * @param options The options to retrieve the team stats.
 * @returns The team stats.
 */
async function getTeamStats(options: ITeamStatsInput): Promise<IResponse<ITeamStatsOutput>> {
  return await sendGetRequest<ITeamStatsOutput>(BASE_URL.STAT, "{lang}/team/{report}", options);
}

/**
 * Retrieve franchise information
 * @param options The options to retrieve the franchise information.
 * @returns The franchise information.
 */
async function getFranchiseInfo(options: IFranchisesInput): Promise<IResponse<IFranchisesOutput>> {
  return await sendGetRequest<IFranchisesOutput>(BASE_URL.STAT, "{lang}/franchise", options);
}

export default {
  Roster,
  Schedule,
  Stats,
  Standings,
  getTeams,
  getTeamStats,
  getFranchiseInfo,
};
