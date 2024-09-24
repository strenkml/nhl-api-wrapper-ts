import { GAME_TYPE, ICommonName } from "./Players";

export interface ICurrentStandingsOutput {
  wildCardIndicator: boolean;
  standings: IStanding[];
}

export interface IStanding {
  clinchIndicator: string;
  conferenceAbbrev: string;
  conferenceHomeSequence: number;
  conferenceL10Sequence: number;
  conferenceName: string;
  conferenceRoadSequence: number;
  conferenceSequence: number;
  date: string;
  divisionAbbrev: string;
  divisionHomeSequence: number;
  divisionL10Sequence: number;
  divisionName: string;
  divisionRoadSequence: number;
  divisionSequence: number;
  gameTypeId: GAME_TYPE;
  gamesPlayed: number;
  goalDifferential: number;
  goalDifferentialPctg: number;
  goalAgainst: number;
  goalFor: number;
  goalsForPctg: number;
  homeGamesPlayed: number;
  homeGoalDifferential: number;
  homeGoalsAgainst: number;
  homeGoalsFor: number;
  homeLosses: number;
  homeOtLosses: number;
  homePoints: number;
  homeRegulationPlusOtWins: number;
  homeRegulationWins: number;
  homeTies: number;
  homeWins: number;
  l10GamesPlayed: number;
  l10GoalDifferential: number;
  l10GoalsAgainst: number;
  l10GoalsFor: number;
  l10Losses: number;
  l10OtLosses: number;
  l10Points: number;
  l10RegulationPlusOtWins: number;
  l10RegulationWins: number;
  l10Ties: number;
  l10Wins: number;
  leagueHomeSequence: number;
  leagueL10Sequence: number;
  leagueRoadSequence: number;
  leagueSequence: number;
  losses: number;
  otLosses: number;
  placeName: ICommonName;
  pointPctg: number;
  points: number;
  regulationPlusOtWinPctg: number;
  regulationPlusOtWins: number;
  regulationWinPctg: number;
  regulationWins: number;
  roadGamesPlayed: number;
  roadGoalDifferential: number;
  roadGoalsAgainst: number;
  roadGoalsFor: number;
  roadLosses: number;
  roadOtLosses: number;
  roadPoints: number;
  roadRegulationPlusOtWins: number;
  roadRegulationWins: number;
  roadTies: number;
  roadWins: number;
  seasonId: number;
  shootoutLosses: number;
  shootoutWins: number;
  streakCode: string;
  streakCount: number;
  teamName: ICommonName;
  teamCommonName: ICommonName;
  teamAbbrev: ICommonName;
  teamLogo: string;
  ties: number;
  waiversSequence: number;
  wildcardSequence: number;
  winPctg: number;
  wins: number;
}

export interface IStandingsDateInput {
  /**
   * Date in YYYY-MM-DD format.
   */
  date: string;
}

export interface IStandingsDateOutput extends ICurrentStandingsOutput {}

export interface IStandingsEachSeasonOutput {
  currentDate: string;
  standings: IStandingSeason[];
}

export interface IStandingSeason {
  id: number;
  conferencesInUse: boolean;
  divisionsInUse: boolean;
  pointForOTlossInUse: boolean;
  regulationWinsInUse: boolean;
  rowInUse: boolean;
  standingsEnd: string;
  standingsStart: string;
  tiesInUse: boolean;
  wildcardInUse: boolean;
}

export interface ICurrentClubStatsInput {
  /**
   * The team to retrieve the club stats for.
   * Three-letter team code
   */
  team: string;
}

export interface ICurrentClubStatsOutput {
  season: string;
  gameType: GAME_TYPE;
  skaters: ISkater[];
}

export interface ISkater {
  playerId: number;
  headshot: string;
  firstName: ICommonName;
  lastName: ICommonName;
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

export interface IClubStatsSeasonInput extends ICurrentClubStatsInput {}

export type IClubStatsSeasonOutput = IClubSeasonStats[];

export interface IClubSeasonStats {
  season: string;
  gamesTypes: GAME_TYPE[];
}

export interface IClubStatsSeasonAndGameTypeInput {
  /**
   * The team to retrieve the club stats for.
   * Three-letter team code
   */
  team: string;

  /**
   * Season in YYYYYYYY format, where the first four digits represent the start year of the season, and the last four digits represent the end year.
   */
  season: number;

  /**
   * Game type
   */
  gameType: GAME_TYPE;
}

export interface IClubStatsSeasonAndGameTypeOutput {
  season: string;
  gameType: GAME_TYPE;
  skaters: ISkater[];
  goalies: IGoalie[];
}

export interface IGoalie {
  playerId: number;
  headshot: string;
  firstName: ICommonName;
  lastName: ICommonName;
  gamesPlayed: number;
  gamesStarted: number;
  wins: number;
  losses: number;
  ties: number;
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

export interface ICurrentTeamScoreboardInput {
  /**
   * The team to retrieve the scoreboard for.
   * Three-letter team code
   */
  team: string;
}

export interface ICurrentTeamScoreboardOutput {
  focusedDate: string;
  focusedDateCount: number;
  clubTimeZone: string;
  clubUTCOffset: string;
  clubScheduleLink: string;
  gamesByDate: IGameDate[];
}

export interface IGameDate {
  date: string;
  games: IGame[];
}

export interface IGame {
  id: number;
  season: number;
  gameType: GAME_TYPE;
  gameDate: string;
  gameCenterLink: string;
  venue: ICommonName;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  tvBroadcasts: ITvBroadcast[];
  gameState: string;
  gameScheduleState: string;
  awayTeam: ITeam;
  homeTeam: ITeam;
  ticketsLink: string;
  ticketsLinkFr: string;
  period?: number;
  periodDescriptor?: IPeriodDescriptor;
}

export interface ITvBroadcast {
  id: number;
  market: string;
  countryCode: string;
  network: string;
  sequenceNumber: number;
}

export interface ITeam {
  id: number;
  name: ICommonName;
  commonName: ICommonName;
  placeNameWithPreposition: ICommonName;
  abbrev: string;
  score?: number;
  record?: string;
  logo: string;
}

export interface IPeriodDescriptor {
  number?: number;
  periodType: string;
  maxRegulationPeriods: number;
}

export interface ICurrentTeamRosterInput {
  /**
   * The team to retrieve the roster for.
   * Three-letter team code
   */
  team: string;
}

export interface ICurrentTeamRosterOutput {
  forwards: IPlayer[];
  defensemen: IPlayer[];
  goalies: IPlayer[];
}

export interface IPlayer {
  id: number;
  headshot: string;
  firstName: ICommonName;
  lastName: ICommonName;
  sweaterNumber?: number;
  positionCode: string;
  shootsCatches: string;
  heightInInches: number;
  weightInPounds: number;
  heightInCentimeters: number;
  weightInKilograms: number;
  birthDate: string;
  birthCity: ICommonName;
  birthCountry: string;
  birthStateProvince?: ICommonName;
}

export interface ITeamRosterSeasonInput {
  /**
   * The team to retrieve the roster for.
   * Three-letter team code
   */
  team: string;

  /**
   * Season in YYYYYYYY format, where the first four digits represent the start year of the season, and the last four digits represent the end year.
   */
  season: number;
}

export interface ITeamRosterSeasonOutput extends ICurrentTeamRosterOutput {}

export interface ITeamSeasonsInput {
  /**
   * The team to retrieve the seasons for.
   * Three-letter team code
   */
  team: string;
}

export type ITeamSeasonsOutput = number[];

export interface ITeamProspectsInput {
  /**
   * The team to retrieve the prospects for.
   * Three-letter team code
   */
  team: string;
}

export interface ITeamProspectsOutput {
  forwards: IPlayer[];
  defensemen: IPlayer[];
  goalies: IPlayer[];
}

export interface ICurrentTeamScheduleInput {
  /**
   * The team to retrieve the schedule for.
   * Three-letter team code
   */
  team: string;
}

export interface ICurrentTeamScheduleOutput {
  previousSeason: number;
  currentSeason: number;
  clubTimezone: string;
  clubUTCOffset: string;
  games: IScheduleGame[];
}

export interface IScheduleGame {
  id: number;
  season: number;
  gameType: GAME_TYPE;
  gameDate: string;
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
  gameOutcome: IGameOutcome;
  winningGoalie: IPlayerShortInfo;
  winningGoalScorer: IPlayerShortInfo;
  gameCenterLink: string;
}

export interface ITeamDetails {
  id: number;
  placeName: ICommonName;
  placeNameWithPreposition: ICommonName;
  abbrev: string;
  logo: string;
  darkLogo: string;
  score?: number;
  awaySplitSquad?: boolean;
  homeSplitSquad?: boolean;
  radioLink?: string;
}

export interface IGameOutcome {
  lastPeriodType: string;
}

export interface IPlayerShortInfo {
  playerId: number;
  firstInitial: ICommonName;
  lastName: ICommonName;
}

export interface ITeamScheduleSeasonInput {
  /**
   * The team to retrieve the schedule for.
   * Three-letter team code
   */
  team: string;

  /**
   * Season in YYYYYYYY format, where the first four digits represent the start year of the season, and the last four digits represent the end year.
   */
  season: number;
}

export interface ITeamScheduleSeasonOutput extends ICurrentTeamScheduleOutput {}

export interface ICurrentTeamScheduleMonthInput {
  /**
   * The team to retrieve the schedule for.
   * Three-letter team code
   */
  team: string;
}

export interface ICurrentTeamScheduleMonthOutput {
  previousMonth: string;
  currentMonth: string;
  nextMonth: string;
  calendarUrl: string;
  clubTimezone: string;
  clubUTCOffset: string;
  games: IGameWithState[];
}

export interface IGameWithState {
  id: number;
  season: number;
  gameType: GAME_TYPE;
  gameDate: string;
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
  ticketsLink?: string;
  ticketsLinkFr?: string;
  gameCenterLink: string;
}

export interface ITeamScheduleMonthInput {
  /**
   * The team to retrieve the schedule for.
   * Three-letter team code
   */
  team: string;

  /**
   * Month in YYYY-MM format.
   */
  month: string;
}

export interface ITeamScheduleMonthOutput extends ICurrentTeamScheduleMonthOutput {}

export interface ICurrentTeamScheduleWeekInput {
  /**
   * The team to retrieve the schedule for.
   * Three-letter team code
   */
  team: string;
}

export interface ICurrentTeamScheduleWeekOutput {
  previousStartDate: string;
  nextStartDate: string;
  calendarUrl: string;
  clubTimezone: string;
  clubUTCOffset: string;
  games: IScheduleGameWeek[];
}

export interface IScheduleGameWeek {
  id: number;
  season: number;
  gameType: GAME_TYPE;
  gameDate: string;
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
  ticketsLink?: string;
  ticketsLinkFr?: string;
  gameCenterLink: string;
}

export interface ITeamScheduleWeekInput {
  /**
   * The team to retrieve the schedule for.
   * Three-letter team code
   */
  team: string;

  /**
   * Date in YYYY-MM-DD format
   */
  date: string;
}

export interface ITeamScheduleWeekOutput extends ICurrentTeamScheduleWeekOutput {}
