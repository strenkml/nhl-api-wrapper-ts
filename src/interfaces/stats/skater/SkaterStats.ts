// Generated by multi-json-to-ts


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
