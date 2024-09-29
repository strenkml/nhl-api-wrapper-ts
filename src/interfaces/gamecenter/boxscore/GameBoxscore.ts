// Generated by multi-json-to-ts

export interface IGameBoxscoreOutput_venue {
  default: string;
}

export interface IGameBoxscoreOutput_tvBroadcasts {
  id: number;
  market: string;
  countryCode: string;
  network: string;
  sequenceNumber: number;
}
export interface IGameBoxscoreOutput_periodDescriptor {
  number: number;
  periodType: string;
  maxRegulationPeriods: number;
}
export interface IGameBoxscoreOutput_placeName {
  default: string;
  fr?: string;
}
export interface IGameBoxscoreOutput_placeNameWithPreposition {
  default: string;
  fr: string;
}
export interface IGameBoxscoreOutput_awayTeam {
  id: number;
  name: IGameBoxscoreOutput_venue;
  abbrev: string;
  score: number;
  sog: number;
  logo: string;
  placeName: IGameBoxscoreOutput_placeName;
  placeNameWithPreposition: IGameBoxscoreOutput_placeNameWithPreposition;
}
export interface IGameBoxscoreOutput_clock {
  timeRemaining: string;
  secondsRemaining: number;
  running: boolean;
  inIntermission: boolean;
}
export interface IGameBoxscoreOutput_forwards_name {
  default: string;
  cs?: string;
  fi?: string;
  sk?: string;
  de?: string;
  sv?: string;
}

export interface IGameBoxscoreOutput_forwards {
  playerId: number;
  sweaterNumber: number;
  name: IGameBoxscoreOutput_forwards_name;
  position: string;
  goals: number;
  assists: number;
  points: number;
  plusMinus: number;
  pim: number;
  hits: number;
  powerPlayGoals: number;
  sog: number;
  faceoffWinningPctg: number;
  toi: string;
  blockedShots: number;
  shifts: number;
  giveaways: number;
  takeaways: number;
}
export interface IGameBoxscoreOutput_defense_name {
  default: string;
  cs?: string;
  sk?: string;
}

export interface IGameBoxscoreOutput_defense {
  playerId: number;
  sweaterNumber: number;
  name: IGameBoxscoreOutput_defense_name;
  position: string;
  goals: number;
  assists: number;
  points: number;
  plusMinus: number;
  pim: number;
  hits: number;
  powerPlayGoals: number;
  sog: number;
  faceoffWinningPctg: number;
  toi: string;
  blockedShots: number;
  shifts: number;
  giveaways: number;
  takeaways: number;
}

export interface IGameBoxscoreOutput_goalies {
  playerId: number;
  sweaterNumber: number;
  name: IGameBoxscoreOutput_venue;
  position: string;
  evenStrengthShotsAgainst: string;
  powerPlayShotsAgainst: string;
  shorthandedShotsAgainst: string;
  saveShotsAgainst: string;
  evenStrengthGoalsAgainst: number;
  powerPlayGoalsAgainst: number;
  shorthandedGoalsAgainst: number;
  pim: number;
  goalsAgainst: number;
  toi: string;
  starter: boolean;
  shotsAgainst: number;
  saves: number;
  savePctg?: number;
  decision?: string;
}
export interface IGameBoxscoreOutput_awayTeam_1 {
  forwards: IGameBoxscoreOutput_forwards[];
  defense: IGameBoxscoreOutput_defense[];
  goalies: IGameBoxscoreOutput_goalies[];
}
export interface IGameBoxscoreOutput_playerByGameStats {
  awayTeam: IGameBoxscoreOutput_awayTeam_1;
  homeTeam: IGameBoxscoreOutput_awayTeam_1;
}
export interface IGameBoxscoreOutput_gameOutcome {
  lastPeriodType: string;
}

export interface IGameBoxscoreOutput {
  id: number;
  season: number;
  gameType: number;
  limitedScoring: boolean;
  gameDate: string;
  venue: IGameBoxscoreOutput_venue;
  venueLocation: IGameBoxscoreOutput_venue;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  tvBroadcasts: IGameBoxscoreOutput_tvBroadcasts[];
  gameState: string;
  gameScheduleState: string;
  periodDescriptor: IGameBoxscoreOutput_periodDescriptor;
  regPeriods: number;
  awayTeam: IGameBoxscoreOutput_awayTeam;
  homeTeam: IGameBoxscoreOutput_awayTeam;
  clock: IGameBoxscoreOutput_clock;
  playerByGameStats: IGameBoxscoreOutput_playerByGameStats;
  gameOutcome: IGameBoxscoreOutput_gameOutcome;
}
