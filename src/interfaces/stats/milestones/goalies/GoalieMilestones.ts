// Generated by multi-json-to-ts


export interface IGoalieMilestonesOutput_data {
  id: number;
  currentTeamId: number;
  firstName: string;
  gameTypeId: number;
  gamesPlayed: number;
  lastName: string;
  milestone: string;
  milestoneAmount: number;
  playerFullName: string;
  playerId: number;
  so: number;
  teamAbbrev: string;
  teamCommonName: string;
  teamFullName: string;
  teamPlaceName: string;
  toiMinutes: number;
  wins: number;
}

export interface IGoalieMilestonesOutput {
  data: IGoalieMilestonesOutput_data[];
  total: number;
}
