import { GAME_TYPE, ICommonName } from "./Players";

export interface ICurrentScheduleWeekOutput {
  nextStartDate: string;
  previousStartDate: string;
  gameWeek: IGameDay[];
  oddsPartners: IOddsPartner[];
  preSeasonStartDate: string;
  regularSeasonStartDate: string;
  regularSeasonEndDate: string;
  playoffEndDate: string;
  numberOfGames: number;
}

export interface IGameDay {
  date: string;
  dayAbbrev: string;
  numberOfGames: number;
  games: IGame[];
}

export interface IGame {
  id: number;
  season: number;
  gameType: GAME_TYPE;
  venue: ICommonName;
  neutralSite: boolean;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  venueTimezone: string;
  gameState: string;
  gameScheduleState: string;
  tvBroadcasts: ITvBroadcast[];
  awayTeam: ITeamDetails;
  homeTeam: ITeamDetails;
  periodDescriptor: IPeriodDescriptor;
  gameOutcome?: IGameOutcome;
  specialEvent?: ICommonName;
  specialEventLogo?: string;
  ticketsLink?: string;
  ticketsLinkFr?: string;
  gameCenterLink: string;
}

export interface IOddsPartner {
  partnerId: number;
  country: string;
  name: string;
  imageUrl: string;
  siteUrl?: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
}

export interface ITvBroadcast {
  id: number;
  market: string;
  countryCode: string;
  network: string;
  sequenceNumber: number;
}

export interface ITeamDetails {
  id: number;
  placeName: ICommonName;
  placeNameWithPreposition: ICommonName;
  abbrev: string;
  logo: string;
  darkLogo: string;
  awaySplitSquad?: boolean;
  homeSplitSquad?: boolean;
  radioLink?: string;
}

export interface IPeriodDescriptor {
  number: number;
  periodType: string;
  maxRegulationPeriods: number;
}

export interface IGameOutcome {
  lastPeriodType: string;
}

export interface IScheduleWeekInput {
  /**
   * Date in YYYY-MM-DD format
   */
  date: string;
}

export interface IScheduleWeekOutput extends ICurrentScheduleWeekOutput {}

export interface ICurrentScheduleCalendarOutput {
  endDate: string;
  nextStartDate: string;
  previousStartDate: string;
  startDate: string;
  teams: ITeam[];
}

export interface ITeam {
  id: number;
  seasonId: number;
  commonName: ICommonName;
  abbrev: string;
  name: ICommonName;
  placeNameWithPreposition: ICommonName;
  placeName: ICommonName;
  logo: string;
  darkLogo: string;
  isNhl: boolean;
  french: boolean;
}

export interface IScheduleCalendarInput {
  /**
   * Date in YYYY-MM-DD format
   */
  date: string;
}

export interface IScheduleCalendarOutput extends ICurrentScheduleCalendarOutput {}
