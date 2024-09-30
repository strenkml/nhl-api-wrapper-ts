// Generated by multi-json-to-ts

import { ICommonPlayerInput } from "../../Common";

export interface IPlayerLandingInput extends ICommonPlayerInput {}

export interface IPlayerLandingOutput_fullTeamName {
  default: string;
  fr: string;
}
export interface IPlayerLandingOutput_teamCommonName {
  default: string;
}
export interface IPlayerLandingOutput_draftDetails {
  year: number;
  teamAbbrev: string;
  round: number;
  pickInRound: number;
  overallPick: number;
}
export interface IPlayerLandingOutput_subSeason {
  assists: number;
  gameWinningGoals: number;
  gamesPlayed: number;
  goals: number;
  otGoals: number;
  pim: number;
  plusMinus: number;
  points: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  shootingPctg: number;
  shorthandedGoals: number;
  shorthandedPoints: number;
  shots: number;
}
export interface IPlayerLandingOutput_regularSeason {
  subSeason: IPlayerLandingOutput_subSeason;
  career: IPlayerLandingOutput_subSeason;
}
export interface IPlayerLandingOutput_featuredStats {
  season: number;
  regularSeason: IPlayerLandingOutput_regularSeason;
  playoffs?: IPlayerLandingOutput_regularSeason;
}
export interface IPlayerLandingOutput_regularSeason_1 {
  assists: number;
  avgToi: string;
  faceoffWinningPctg: number;
  gameWinningGoals: number;
  gamesPlayed: number;
  goals: number;
  otGoals: number;
  pim: number;
  plusMinus: number;
  points: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  shootingPctg: number;
  shorthandedGoals: number;
  shorthandedPoints: number;
  shots: number;
}
export interface IPlayerLandingOutput_playoffs {
  assists: number;
  avgToi: string;
  faceoffWinningPctg?: number;
  gameWinningGoals: number;
  gamesPlayed: number;
  goals: number;
  otGoals: number;
  pim: number;
  plusMinus: number;
  points: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  shootingPctg: number;
  shorthandedGoals: number;
  shorthandedPoints: number;
  shots: number;
}
export interface IPlayerLandingOutput_careerTotals {
  regularSeason: IPlayerLandingOutput_regularSeason_1;
  playoffs: IPlayerLandingOutput_playoffs;
}

export interface IPlayerLandingOutput_last5Games {
  assists: number;
  gameDate: string;
  gameId: number;
  gameTypeId: number;
  goals: number;
  homeRoadFlag: string;
  opponentAbbrev: string;
  pim: number;
  plusMinus: number;
  points: number;
  powerPlayGoals: number;
  shifts: number;
  shorthandedGoals: number;
  shots: number;
  teamAbbrev: string;
  toi: string;
}
export interface IPlayerLandingOutput_seasonTotals_teamName {
  default: string;
  cs?: string;
  de?: string;
  fi?: string;
  sk?: string;
  sv?: string;
  fr?: string;
}
export interface IPlayerLandingOutput_seasonTotals_teamCommonName {
  default: string;
  cs?: string;
  de?: string;
  fi?: string;
  sk?: string;
  sv?: string;
}

export interface IPlayerLandingOutput_seasonTotals {
  assists: number;
  gameTypeId: number;
  gamesPlayed: number;
  goals: number;
  leagueAbbrev: string;
  pim?: number;
  points: number;
  season: number;
  sequence: number;
  teamName: IPlayerLandingOutput_seasonTotals_teamName;
  gameWinningGoals?: number;
  plusMinus?: number;
  powerPlayGoals?: number;
  shorthandedGoals?: number;
  shots?: number;
  teamCommonName?: IPlayerLandingOutput_seasonTotals_teamCommonName;
  avgToi?: string;
  faceoffWinningPctg?: number;
  otGoals?: number;
  powerPlayPoints?: number;
  shootingPctg?: number;
  shorthandedPoints?: number;
  teamPlaceNameWithPreposition?: IPlayerLandingOutput_fullTeamName;
}
export interface IPlayerLandingOutput_awards_trophy {
  default: string;
  fr?: string;
}

export interface IPlayerLandingOutput_awards_seasons {
  assists: number;
  blockedShots: number;
  gameTypeId: number;
  gamesPlayed: number;
  goals: number;
  hits: number;
  pim: number;
  plusMinus: number;
  points: number;
  seasonId: number;
}

export interface IPlayerLandingOutput_awards {
  trophy: IPlayerLandingOutput_awards_trophy;
  seasons: IPlayerLandingOutput_awards_seasons[];
}
export interface IPlayerLandingOutput_currentTeamRoster_lastName {
  default: string;
  sv?: string;
}
export interface IPlayerLandingOutput_currentTeamRoster_firstName {
  default: string;
  cs?: string;
  de?: string;
  es?: string;
  fi?: string;
  sk?: string;
  sv?: string;
}

export interface IPlayerLandingOutput_currentTeamRoster {
  playerId: number;
  lastName: IPlayerLandingOutput_currentTeamRoster_lastName;
  firstName: IPlayerLandingOutput_currentTeamRoster_firstName;
  playerSlug: string;
}

export interface IPlayerLandingOutput {
  playerId: number;
  isActive: boolean;
  currentTeamId?: number;
  currentTeamAbbrev?: string;
  fullTeamName?: IPlayerLandingOutput_fullTeamName;
  teamCommonName?: IPlayerLandingOutput_teamCommonName;
  teamPlaceNameWithPreposition?: IPlayerLandingOutput_fullTeamName;
  firstName: IPlayerLandingOutput_teamCommonName;
  lastName: IPlayerLandingOutput_teamCommonName;
  teamLogo?: string;
  sweaterNumber: number;
  position: string;
  headshot: string;
  heroImage: string;
  heightInInches: number;
  heightInCentimeters: number;
  weightInPounds: number;
  weightInKilograms: number;
  birthDate: string;
  birthCity: IPlayerLandingOutput_teamCommonName;
  birthStateProvince?: IPlayerLandingOutput_teamCommonName;
  birthCountry: string;
  shootsCatches: string;
  draftDetails: IPlayerLandingOutput_draftDetails;
  playerSlug: string;
  inTop100AllTime: number;
  inHHOF: number;
  featuredStats: IPlayerLandingOutput_featuredStats;
  careerTotals: IPlayerLandingOutput_careerTotals;
  shopLink: string;
  twitterLink: string;
  watchLink: string;
  last5Games: IPlayerLandingOutput_last5Games[];
  seasonTotals: IPlayerLandingOutput_seasonTotals[];
  awards?: IPlayerLandingOutput_awards[];
  currentTeamRoster?: IPlayerLandingOutput_currentTeamRoster[];
}
