// Generated by multi-json-to-ts

import { GAME_TYPE, ICommonGameIdInput } from "../../Common";

export interface IMetaGameInfoInput extends ICommonGameIdInput {}

export interface IMetaGameInfoOutput_teams_name {
  default: string;
  fr: string;
}

export interface IMetaGameInfoOutput_teams {
  name: IMetaGameInfoOutput_teams_name;
  tricode: string;
  teamId: number;
}
export interface IMetaGameInfoOutput_seasonStates {
  date: string;
  gameType: GAME_TYPE;
  season: number;
}

export interface IMetaGameInfoOutput {
  teams: IMetaGameInfoOutput_teams[];
  seasonStates: IMetaGameInfoOutput_seasonStates;
}
