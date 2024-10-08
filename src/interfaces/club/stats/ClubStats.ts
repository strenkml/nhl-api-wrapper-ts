// Generated by multi-json-to-ts

import { GAME_TYPE, ICommonTeamSeasonGameTypeInput } from "../../Common";

export interface IClubStatsInput extends ICommonTeamSeasonGameTypeInput {}

export interface IClubStatsOutput_skaters_firstName {
  default: string;
  cs?: string;
  de?: string;
  es?: string;
  fi?: string;
  sk?: string;
  sv?: string;
}
export interface IClubStatsOutput_skaters_lastName {
  default: string;
  cs?: string;
  fi?: string;
  sk?: string;
}

export interface IClubStatsOutput_skaters {
  playerId: number;
  headshot: string;
  firstName: IClubStatsOutput_skaters_firstName;
  lastName: IClubStatsOutput_skaters_lastName;
  positionCode: string;
  gamesPlayed: number;
  goals: number;
  assists: number;
  points: number;
  plusMinus: number;
  penaltyMinutes: number;
  powerPlayGoals: number;
  shorthandedGoals: number;
  gameWinningGoals: number;
  overtimeGoals: number;
  shots: number;
  shootingPctg: number;
  avgTimeOnIcePerGame: number;
  avgShiftsPerGame: number;
  faceoffWinPctg: number;
}
export interface IClubStatsOutput_goalies_firstName {
  default: string;
}

export interface IClubStatsOutput_goalies {
  playerId: number;
  headshot: string;
  firstName: IClubStatsOutput_goalies_firstName;
  lastName: IClubStatsOutput_goalies_firstName;
  gamesPlayed: number;
  gamesStarted: number;
  wins: number;
  losses: number;
  ties?: number;
  overtimeLosses: number;
  goalsAgainstAverage: number;
  savePercentage: number;
  shotsAgainst: number;
  saves: number;
  goalsAgainst: number;
  shutouts: number;
  goals: number;
  assists: number;
  points: number;
  penaltyMinutes: number;
  timeOnIce: number;
}

export interface IClubStatsOutput {
  season: string;
  gameType: GAME_TYPE;
  skaters: IClubStatsOutput_skaters[];
  goalies: IClubStatsOutput_goalies[];
}
