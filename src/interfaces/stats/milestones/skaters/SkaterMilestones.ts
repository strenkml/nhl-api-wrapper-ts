// Generated by multi-json-to-ts

import { ICommonLangInput } from "../../../Common";

export interface ISkaterMilestonesInput extends ICommonLangInput {}

export interface ISkaterMilestonesOutput_data {
  id: number;
  assists: number;
  currentTeamId: number;
  firstName: string;
  gameTypeId: number;
  gamesPlayed: number;
  goals: number;
  lastName: string;
  milestone: string;
  milestoneAmount: number;
  playerFullName: string;
  playerId: number;
  points: number;
  teamAbbrev: string;
  teamCommonName: string;
  teamFullName: string;
  teamPlaceName: string;
}

export interface ISkaterMilestonesOutput {
  data: ISkaterMilestonesOutput_data[];
  total: number;
}
