// Generated by multi-json-to-ts


export interface ISeasonOutput_data {
  id: number;
  allStarGameInUse: number;
  conferencesInUse: number;
  divisionsInUse: number;
  endDate: string;
  entryDraftInUse: number;
  formattedSeasonId: string;
  minimumPlayoffMinutesForGoalieStatsLeaders: number;
  minimumRegularGamesForGoalieStatsLeaders: number;
  nhlStanleyCupOwner: number;
  numberOfGames: number;
  olympicsParticipation: number;
  pointForOTLossInUse: number;
  preseasonStartdate: object;
  regularSeasonEndDate: string;
  rowInUse: number;
  seasonOrdinal: number;
  startDate: string;
  supplementalDraftInUse: number;
  tiesInUse: number;
  totalPlayoffGames: number;
  totalRegularSeasonGames: number;
  wildcardInUse: number;
}

export interface ISeasonOutput {
  data: ISeasonOutput_data[];
  total: number;
}
