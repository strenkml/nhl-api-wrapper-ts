// Generated by multi-json-to-ts


export interface ITeamsOutput_data {
  id: number;
  franchiseId: number;
  fullName: string;
  leagueId: number;
  rawTricode: string;
  triCode: string;
}

export interface ITeamsOutput {
  data: ITeamsOutput_data[];
  total: number;
}
