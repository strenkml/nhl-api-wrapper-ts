import { ICommonTeamInput } from "../../Common";

export interface IClubStatsSeasonInput extends ICommonTeamInput {}

export interface IClubStatsSeasonOutput_0 {
  season: number;
  gameTypes: string;
}

export type IClubStatsSeasonOutput = IClubStatsSeasonOutput_0[];
