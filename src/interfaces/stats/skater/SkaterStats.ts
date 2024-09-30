// Generated by multi-json-to-ts

import { ICommonLangInput } from "../../Common";

export interface ISkaterStatsInput extends ICommonLangInput {
  /**
   * Skater report
   */
  report: string;

  /**
   * isAggregate
   */
  isAggregate?: boolean;

  /**
   * isGame
   */
  isGame?: boolean;

  /**
   * factCayenneExp
   */
  factCayenneExp?: string;

  /**
   * include
   */
  include?: string;

  /**
   * exclude
   */
  exclude?: string;

  /**
   * cayenneExp
   */
  cayenneExp: string;

  /**
   * sort
   */
  sort?: string;

  /**
   * dir
   */
  dir?: string;

  /**
   * start
   */
  start?: number;

  /**
   * limit
   * A limit of -1 will return all results
   */
  limit?: number;
}

export interface ISkaterStatsOutput_data {
  assists: number;
  evGoals: number;
  evPoints: number;
  faceoffWinPct: number;
  gameWinningGoals: number;
  gamesPlayed: number;
  goals: number;
  lastName: string;
  otGoals: number;
  penaltyMinutes: number;
  playerId: number;
  plusMinus: number;
  points: number;
  pointsPerGame: number;
  positionCode: string;
  ppGoals: number;
  ppPoints: number;
  seasonId: number;
  shGoals: number;
  shPoints: number;
  shootingPct: number;
  shootsCatches: string;
  shots: number;
  skaterFullName: string;
  teamAbbrevs: string;
  timeOnIcePerGame: number;
}

export interface ISkaterStatsOutput {
  data: ISkaterStatsOutput_data[];
  total: number;
}
