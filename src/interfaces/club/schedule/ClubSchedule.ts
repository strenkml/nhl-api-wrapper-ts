// Generated by multi-json-to-ts

import { GAME_TYPE, ICommonTeamSeasonInput } from "../../Common";

export interface IClubScheduleInput extends ICommonTeamSeasonInput {}

export interface IClubScheduleOutput_games_venue {
  default: string;
  fr?: string;
  es?: string;
}

export interface IClubScheduleOutput_games_tvBroadcasts {
  id: number;
  market: string;
  countryCode: string;
  network: string;
  sequenceNumber: number;
}
export interface IClubScheduleOutput_games_placeName {
  default: string;
  fr?: string;
}
export interface IClubScheduleOutput_games_placeNameWithPreposition {
  default: string;
  fr: string;
}
export interface IClubScheduleOutput_games_awayTeam {
  id: number;
  placeName: IClubScheduleOutput_games_placeName;
  placeNameWithPreposition: IClubScheduleOutput_games_placeNameWithPreposition;
  abbrev: string;
  logo: string;
  darkLogo: string;
  awaySplitSquad: boolean;
  score: number;
  airlineLink?: string;
  airlineDesc?: string;
  hotelLink?: string;
  hotelDesc?: string;
}
export interface IClubScheduleOutput_games_homeTeam {
  id: number;
  placeName: IClubScheduleOutput_games_placeName;
  placeNameWithPreposition: IClubScheduleOutput_games_placeNameWithPreposition;
  abbrev: string;
  logo: string;
  darkLogo: string;
  homeSplitSquad: boolean;
  hotelLink?: string;
  hotelDesc?: string;
  score: number;
  airlineLink?: string;
  airlineDesc?: string;
}
export interface IClubScheduleOutput_games_periodDescriptor {
  periodType: string;
  maxRegulationPeriods: number;
}
export interface IClubScheduleOutput_games_gameOutcome {
  lastPeriodType: string;
}
export interface IClubScheduleOutput_games_firstInitial {
  default: string;
}
export interface IClubScheduleOutput_games_lastName {
  default: string;
  cs?: string;
  sk?: string;
  fi?: string;
}
export interface IClubScheduleOutput_games_winningGoalie {
  playerId: number;
  firstInitial: IClubScheduleOutput_games_firstInitial;
  lastName: IClubScheduleOutput_games_lastName;
}
export interface IClubScheduleOutput_games_seriesStatus {
  round: number;
  seriesAbbrev: string;
  seriesTitle: string;
  seriesLetter: string;
  neededToWin: number;
  topSeedWins: number;
  bottomSeedWins: number;
  gameNumberOfSeries: number;
}

export interface IClubScheduleOutput_games {
  id: number;
  season: number;
  gameType: GAME_TYPE;
  gameDate: string;
  venue: IClubScheduleOutput_games_venue;
  neutralSite: boolean;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  venueTimezone: string;
  gameState: string;
  gameScheduleState: string;
  tvBroadcasts: IClubScheduleOutput_games_tvBroadcasts[];
  awayTeam: IClubScheduleOutput_games_awayTeam;
  homeTeam: IClubScheduleOutput_games_homeTeam;
  periodDescriptor: IClubScheduleOutput_games_periodDescriptor;
  gameOutcome: IClubScheduleOutput_games_gameOutcome;
  winningGoalie: IClubScheduleOutput_games_winningGoalie;
  winningGoalScorer?: IClubScheduleOutput_games_winningGoalie;
  gameCenterLink: string;
  specialEvent?: IClubScheduleOutput_games_placeName;
  threeMinRecap?: string;
  threeMinRecapFr?: string;
  specialEventLogo?: string;
  seriesStatus?: IClubScheduleOutput_games_seriesStatus;
  seriesUrl?: string;
}

export interface IClubScheduleOutput {
  previousSeason: number;
  currentSeason: number;
  nextSeason: number;
  clubTimezone: string;
  clubUTCOffset: string;
  games: IClubScheduleOutput_games[];
}
