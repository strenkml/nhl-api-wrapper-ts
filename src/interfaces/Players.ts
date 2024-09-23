export interface IPlayerGameLogInput {
  /**
   * Player ID
   */
  playerId: number;

  /**
   * Season in YYYYYYYY format, where the first four digits represent the start year of the season, and the last four digits represent the end year.
   */
  season: number;

  /**
   * Game type
   */
  gameType: GAME_TYPE;
}

export enum GAME_TYPE {
  PRESEASON = 1,
  REGULAR_SEASON = 2,
  POSTSEASON = 3,
}

export interface IPlayerGameLogOutput {
  seasonId: number;
  gameTypeId: number;
  playerStatsSeasons: IPlayerStatsSeason[];
  gameLog: IGameLog[];
}

export interface IPlayerStatsSeason {
  season: number;
  gameTypes: number[];
}

export interface IGameLog {
  gameId: number;
  teamAbbrev: string;
  homeRoadFlag: HOME_ROAD_FLAG;
  gameDate: string;
  goals: number;
  assists: number;
  commonName: ICommonName;
  opponentCommonName: ICommonName;
  points: number;
  plusMinus: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  gameWinningGoals: number;
  otGoals: number;
  shots: number;
  shifts: number;
  shorthandedGoals: number;
  shorthandedPoints: number;
  opponentAbbrev: string;
  pim: number;
  toi: string;
}

export interface ICommonName {
  default: string;
  fr?: string;
}

export interface IPlayerInfoInput {
  /**
   * Player ID
   */
  playerId: number;
}

export interface IPlayerInfoOutput {
  playerId: number;
  isActiive: boolean;
  currentTeamId: number;
  currentTeamAbbrev: string;
  fullTeamName: ICommonName;
  teamCommonName: ICommonName;
  teamPlaceNameWithPreposition: ICommonName;
  firstName: ICommonName;
  lastName: ICommonName;
  teamLogo: string;
  sweaterNumber: number;
  position: string;
  headshot: string;
  heroImage: string;
  heightInInches: number;
  heightInCentimeters: number;
  weightInPounds: number;
  weightInKilograms: number;
  birthDate: string;
  birthCity: ICommonName;
  birthStateProvince: ICommonName;
  birthCountry: string;
  shootsCatches: string;
  draftDetails: IDraftDetails;
  playerSlug: string;
  inTop100AllTime: boolean;
  inHHOF: boolean;
  featuredStats: IFeaturedStats;
  careerTotals: ICareerTotals;
  shopLink: string;
  twitterLink: string;
  watchLink: string;
  last5Games: IGameStats[];
  seasonTotals: ISeasonTotals[];
  awards: IAward[];
  currentTeamRoster: ISimplePlayer[];
}

export interface IDraftDetails {
  year: number;
  teamAbbrev: string;
  round: number;
  pickInRound: number;
  overallPick: number;
}

export interface IFeaturedStats {
  season: number;
  regularSeason: IGameTypeStats;
  playoffs: IGameTypeStats;
}

export interface IGameTypeStats {
  subSeason: IStats;
  career: IStats;
}

export interface IStats {
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

export interface ICareerTotals {
  regularSeason: IGameTypeCareerTotals;
  playoffs: IGameTypeCareerTotals;
}

export interface IGameTypeCareerTotals {
  assists: number;
  avgToi: string;
  faceoffWinningPctg: number;
  gamesPlayed: number;
  gameWinningGoals: number;
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

export interface IGameStats {
  assists: number;
  gameDate: string;
  gameId: number;
  gameTypeId: GAME_TYPE;
  goals: number;
  homeRoadFlag: HOME_ROAD_FLAG;
  opponentAbbrev: string;
  pim: number;
  plusMinus: number;
  points: number;
  powerPlayGoals: number;
  shifts: number;
  shortHandedGoals: number;
  shots: number;
  teamAbbrev: string;
  toi: string;
}

export enum HOME_ROAD_FLAG {
  HOME = "H",
  ROAD = "R",
}

export interface ISeasonTotals {
  assists: number;
  gamesPlayed: number;
  gameTypeId: GAME_TYPE;
  goals: number;
  leagueAbbrev: string;
  pim: number;
  points: number;
  season: number;
  sequence: number;
  teamName: ICommonName;
}

export interface IAward {
  trophy: ICommonName;
  seasons: IAwardSeasonStats[];
}

export interface IAwardSeasonStats {
  assists: number;
  blockedShots: number;
  gameTypeId: GAME_TYPE;
  gamesPlayed: number;
  goals: number;
  hits: number;
  pim: number;
  plusMinus: number;
  points: number;
  seasonId: number;
}

export interface ISimplePlayer {
  playerId: number;
  lastName: ICommonName;
  firstName: ICommonName;
  playerSlug: string;
}

export interface IPlayerCurrentGameLogInput {
  /**
   * Player ID
   */
  playerId: number;
}

export interface IPlayerCurrentGameLogOutput {
  seasonId: number;
  gameTypeId: GAME_TYPE;
  playerStatsSeasons: IPlayerStatsSeason[];
  gameLog: IGameLog[];
}

export interface ICurrentSkaterStatsLeadersInput {
  /**
   * The categories of stats.
   */
  categories?: STAT_CATEGORY[];

  /**
   * The number of rows to return. A limit of -1 will return all stats
   */
  limit?: number;
}

export enum STAT_CATEGORY {
  SHORT_HANDED_GOALS = "goalsSh",
  PLUS_MINUS = "plusMinus",
  ASSISTS = "assists",
  GOALS_PP = "goalsPp",
  FACEOFF = "faceoffLeaders",
  PENALTY_MINUTES = "penaltyMins",
  GOALS = "goals",
  POINTS = "points",
  TOI = "toi",
}

export interface ICurrentSkaterStatsLeadersOutput {
  goalsSh?: ISkaterStats[];
  plusMinus?: ISkaterStats[];
  assists?: ISkaterStats[];
  goalsPp?: ISkaterStats[];
  faceoffLeaders?: ISkaterStats[];
  penaltyMins?: ISkaterStats[];
  goals?: ISkaterStats[];
  points?: ISkaterStats[];
  toi?: ISkaterStats[];
}

export interface ISkaterStats {
  id: number;
  firstName: ICommonName;
  lastName: ICommonName;
  sweaterNumber: number;
  headshot: string;
  teamAbbrev: string;
  teamName: ICommonName;
  teamLogo: string;
  position: string;
  value: number;
}

export interface ISkaterStatsLeadersSeasonInput {
  /**
   * Season in YYYYYYYY format, where the first four digits represent the start year of the season, and the last four digits represent the end year.
   */
  season: number;

  /**
   * Game type
   */
  gameTypeId: GAME_TYPE;

  /**
   * The categories of stats.
   */
  categories?: STAT_CATEGORY[];

  /**
   * The number of rows to return. A limit of -1 will return all stats
   */
  limit?: number;
}

export interface ISkaterStatsLeadersSeasonOutput {
  goalsSh?: ISkaterStats[];
  plusMinus?: ISkaterStats[];
  assists?: ISkaterStats[];
  goalsPp?: ISkaterStats[];
  faceoffLeaders?: ISkaterStats[];
  penaltyMins?: ISkaterStats[];
  goals?: ISkaterStats[];
  points?: ISkaterStats[];
  toi?: ISkaterStats[];
}
