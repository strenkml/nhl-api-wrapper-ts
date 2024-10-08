// Generated by multi-json-to-ts

import { ICommonLangAttrInput } from "../../../Common";

export interface IGoalieLeadersInput extends ICommonLangAttrInput {}

export interface IGoalieLeadersOutput_data_player {
  id: number;
  currentTeamId: object;
  firstName: string;
  fullName: string;
  lastName: string;
  positionCode: string;
  sweaterNumber: object;
}

export interface IGoalieLeadersOutput_data_logos {
  id: number;
  background: string;
  endSeason: number;
  secureUrl: string;
  startSeason: number;
  teamId: number;
  url: string;
}
export interface IGoalieLeadersOutput_data_team {
  id: number;
  franchiseId: number;
  fullName: string;
  leagueId: number;
  logos: IGoalieLeadersOutput_data_logos[];
  rawTricode: string;
  triCode: string;
}

export interface IGoalieLeadersOutput_data {
  gaa: object;
  player: IGoalieLeadersOutput_data_player;
  team: IGoalieLeadersOutput_data_team;
}

export interface IGoalieLeadersOutput {
  data: IGoalieLeadersOutput_data[];
  total: number;
}
