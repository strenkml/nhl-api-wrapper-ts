import { GAME_TYPE, ICommonName } from "./Players";

export interface ICurrentDailyScoresOutput {
  prevDate: string;
  currentDate: string;
  nextDate: string;
  gameWeek: IGameWeek[];
  oddsPartners: IOddsPartner[];
  games: IGame[];
}

export interface IGameWeek {
  date: string;
  dayAbbrev: string;
  numberOfGames: number;
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

export interface IGame {
  id: number;
  season: number;
  gameType: number;
  gameDate: string;
  venue: ICommonName;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  tvBroadcasts: ITvBroadcast[];
  gameState: string;
  gameScheduleState: string;
  awayTeam: ITeamInfo;
  homeTeam: ITeamInfo;
  gameCenterLink: string;
  clock: IClock;
  neutralSite: boolean;
  venueTimezone: string;
  period: number;
  periodDescriptor: IPeriodDescriptor;
  gameOutcome: IGameOutcome;
  goals: IGoal[];
}

export interface ITvBroadcast {
  id: number;
  market: string;
  countryCode: string;
  network: string;
  sequenceNumber: number;
}

export interface ITeamInfo {
  id: number;
  name: ICommonName;
  commonName?: ICommonName;
  placeNameWithPreposition?: ICommonName;
  abbrev: string;
  score: number;
  sog?: number;
  logo: string;
  record?: string;
}

export interface IClock {
  timeRemaining: string;
  secondsRemaining: number;
  running: boolean;
  inIntermission: boolean;
}

export interface IPeriodDescriptor {
  number: number;
  periodType: string;
  maxRegulationPeriods: number;
}

export interface IGameOutcome {
  lastPeriodType: string;
  otPeriods?: number;
}

export interface IGoal {
  period: number;
  periodDescriptor: IPeriodDescriptor;
  timeInPeriod: string;
  playerId: number;
  name: ICommonName;
  firstName: ICommonName;
  lastName: ICommonName;
  goalModifier: string;
  assists: IAssist[];
  mugshot: string;
  teamAbbrev: string;
  goalsToDate: number;
  awayScore: number;
  homeScore: number;
  strength: string;
  highlightClipSharingUrl?: string;
  highlightClip?: number;
  discreteClip?: number;
}

export interface IAssist {
  playerId: number;
  name: ICommonName;
  assistsToDate: number;
}

export interface IDailyScoresInput {
  /**
   * Date in YYYY-MM-DD format
   */
  date: string;
}

export interface IDailyScoresOutput extends ICurrentDailyScoresOutput {}

export interface ICurrentScoreboardOutput {
  focusedDate: string;
  focusedDateCount: number;
  gamesByDate: IGamesByDate[];
}

export interface IGamesByDate {
  date: string;
  games: IGameDetails[];
}

export interface IGameDetails {
  id: number;
  season: number;
  gameType: number;
  gameDate: string;
  gameCenterLink: string;
  venue: ICommonName;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  tvBroadcasts: ITvBroadcast[];
  gameState: string;
  gameScheduleState: string;
  awayTeam: ITeamInfo;
  homeTeam: ITeamInfo;
  ticketsLink: string;
  ticketsLinkFr: string;
  period: number;
  periodDescriptor: IPeriodDescriptor;
  threeMinRecap?: string;
}

export interface IWhereToWatchInput {
  /**
   * Not really sure what this is
   */
  include?: string;
}

export type IWhereToWatchOutput = IWhereToWatch[];

export interface IWhereToWatch {
  id: string;
  active: boolean;
  countryCode: string;
  countryName: string;
  streamingName: string;
  streamingSiteUrl: string;
  streamingLogoUrl: string;
  primaryBroadcastName?: string;
  primaryBroadcastSiteUrl?: string;
  primaryBroadcastLogoUrl?: string;
  secondaryBroadcastName?: string;
  secondaryBroadcastSiteUrl?: string;
  secondaryBroadcastLogoUrl?: string;
}

export interface IPlaybyPlayInput {
  /**
   * Game ID
   */
  gameId: number;
}

export interface IPlaybyPlayOutput {
  id: number;
  season: number;
  gameType: GAME_TYPE;
  limitedScoring: boolean;
  gameDate: string;
  venue: ICommonName;
  venueLocation: ICommonName;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  tvBroadcasts: ITvBroadcast[];
  gameState: string;
  gameScheduleState: string;
  periodDescriptor: IPeriodDescriptor;
  awayTeam: ITeam;
  homeTeam: ITeam;
  shootoutInUse: boolean;
  otInUse: boolean;
  clock: IClock;
  displayPeriod: number;
  maxPeriods: number;
  gameOutcome: IGameOutcome;
  plays: IPlay[];
  rosterSpots: IRosterSpot[];
  gameVideo: IGameVideo;
  regPeriods: number;
  summary: IGameSummary;
}

interface ITeam {
  id: number;
  name: ICommonName;
  abbrev: string;
  score: number;
  sog: number;
  logo: string;
  placeName: ICommonName;
  placeNameWithPreposition: ICommonName;
}

interface IPlay {
  eventId: number;
  periodDescriptor: IPeriodDescriptor;
  timeInPeriod: string;
  timeRemaining: string;
  situationCode: string;
  homeTeamDefendingSide: string;
  typeCode: number;
  typeDescKey: string;
  sortOrder: number;
}

interface IRosterSpot {
  teamId: number;
  playerId: number;
  firstName: ICommonName;
  lastName: ICommonName;
  sweaterNumber: number;
  positionCode: string;
  headshot: string;
}

interface IGameVideo {
  threeMinRecap: number;
  condensedGame: number;
}

interface ISummaryCategory {
  category: string;
  awayValue: number | string;
  homeValue: number | string;
}

interface ISeasonSeries {
  id: number;
  season: number;
  gameType: number;
  gameDate: string;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  gameState: string;
  gameScheduleState: string;
  awayTeam: ISeasonSeriesTeam;
  homeTeam: ISeasonSeriesTeam;
  clock: IClock;
  gameCenterLink: string;
  periodDescriptor: IPeriodDescriptor;
  gameOutcome: IGameOutcome;
}

interface ISeasonSeriesTeam {
  id: number;
  abbrev: string;
  logo: string;
  score: number;
}

interface ILineScore {
  byPeriod: IByPeriod[];
  totals: IScoreTotal;
}

interface IByPeriod {
  periodDescriptor: IPeriodDescriptor;
  away: number;
  home: number;
}

interface IScoreTotal {
  away: number;
  home: number;
}

interface IGameReports {
  gameSummary: string;
  eventSummary: string;
  playByPlay: string;
  faceoffSummary: string;
  faceoffComparison: string;
  rosters: string;
  shotSummary: string;
  shiftChart: string;
  toiAway: string;
  toiHome: string;
}

interface IGameInfo {
  referees: ICommonName[];
  linesmen: ICommonName[];
  awayTeam: ICoachAndScratches;
  homeTeam: ICoachAndScratches;
}

interface ICoachAndScratches {
  headCoach: ICommonName;
  scratches: IScratch[];
}

interface IScratch {
  id: number;
  firstName: ICommonName;
  lastName: ICommonName;
}

interface IGameSummary {
  teamGameStats: ISummaryCategory[];
  seasonSeries: ISeasonSeries[];
  seasonSeriesWins: ISeasonSeriesWins;
  linescore: ILineScore;
  shotsByPeriod: IShotsByPeriod[];
  gameReports: IGameReports;
  gameInfo: IGameInfo;
}

interface ISeasonSeriesWins {
  awayTeamWins: number;
  homeTeamWins: number;
}

interface IShotsByPeriod {
  periodDescriptor: IPeriodDescriptor;
  away: number;
  home: number;
}
