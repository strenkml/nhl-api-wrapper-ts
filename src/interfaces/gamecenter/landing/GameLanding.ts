// Generated by multi-json-to-ts

export interface IGameLandingOutput_venue {
  default: string;
}
export interface IGameLandingOutput_periodDescriptor {
  number: number;
  periodType: string;
  maxRegulationPeriods: number;
}

export interface IGameLandingOutput_tvBroadcasts {
  id: number;
  market: string;
  countryCode: string;
  network: string;
  sequenceNumber: number;
}
export interface IGameLandingOutput_placeName {
  default: string;
  fr?: string;
}
export interface IGameLandingOutput_placeNameWithPreposition {
  default: string;
  fr: string;
}
export interface IGameLandingOutput_awayTeam {
  id: number;
  name: IGameLandingOutput_venue;
  abbrev: string;
  placeName: IGameLandingOutput_placeName;
  placeNameWithPreposition: IGameLandingOutput_placeNameWithPreposition;
  score: number;
  sog: number;
  logo: string;
}
export interface IGameLandingOutput_scoring_goals_firstName {
  default: string;
  cs?: string;
  fi?: string;
  sk?: string;
}
export interface IGameLandingOutput_scoring_goals_lastName {
  default: string;
  cs?: string;
  sk?: string;
}
export interface IGameLandingOutput_scoring_goals_name {
  default: string;
  cs?: string;
  fi?: string;
  sk?: string;
  sv?: string;
}
export interface IGameLandingOutput_scoring_goals_assists_lastName {
  default: string;
  cs?: string;
  de?: string;
  fi?: string;
  sk?: string;
  sv?: string;
}

export interface IGameLandingOutput_scoring_goals_assists {
  playerId: number;
  firstName: IGameLandingOutput_scoring_goals_firstName;
  lastName: IGameLandingOutput_scoring_goals_assists_lastName;
  name: IGameLandingOutput_scoring_goals_assists_lastName;
  assistsToDate: number;
}

export interface IGameLandingOutput_scoring_goals {
  situationCode: string;
  strength: string;
  playerId: number;
  firstName: IGameLandingOutput_scoring_goals_firstName;
  lastName: IGameLandingOutput_scoring_goals_lastName;
  name: IGameLandingOutput_scoring_goals_name;
  teamAbbrev: IGameLandingOutput_venue;
  headshot: string;
  highlightClipSharingUrl?: string;
  highlightClip?: number;
  goalsToDate: number;
  awayScore: number;
  homeScore: number;
  leadingTeamAbbrev?: IGameLandingOutput_venue;
  timeInPeriod: string;
  shotType: string;
  goalModifier: string;
  assists: IGameLandingOutput_scoring_goals_assists[];
  pptReplayUrl: string;
  discreteClip?: number;
}

export interface IGameLandingOutput_scoring {
  periodDescriptor: IGameLandingOutput_periodDescriptor;
  goals: IGameLandingOutput_scoring_goals[];
}

export interface IGameLandingOutput_shootout {
  sequence: number;
  playerId: number;
  teamAbbrev: string;
  firstName: string;
  lastName: string;
  shotType: string;
  result: string;
  headshot: string;
  gameWinner: boolean;
}

export interface IGameLandingOutput_threeStars {
  star: number;
  playerId: number;
  teamAbbrev: string;
  headshot: string;
  name: IGameLandingOutput_venue;
  sweaterNo: number;
  position: string;
  goalsAgainstAverage?: number;
  savePctg?: number;
  goals?: number;
  assists?: number;
  points?: number;
}

export interface IGameLandingOutput_penalties_penalties {
  timeInPeriod: string;
  type: string;
  duration: number;
  committedByPlayer: string;
  teamAbbrev: IGameLandingOutput_venue;
  drawnBy: string;
  descKey: string;
}

export interface IGameLandingOutput_penalties {
  periodDescriptor: IGameLandingOutput_periodDescriptor;
  penalties: IGameLandingOutput_penalties_penalties[];
}
export interface IGameLandingOutput_summary {
  scoring: IGameLandingOutput_scoring[];
  shootout: IGameLandingOutput_shootout[];
  threeStars: IGameLandingOutput_threeStars[];
  penalties: IGameLandingOutput_penalties[];
}
export interface IGameLandingOutput_clock {
  timeRemaining: string;
  secondsRemaining: number;
  running: boolean;
  inIntermission: boolean;
}

export interface IGameLandingOutput {
  id: number;
  season: number;
  gameType: number;
  limitedScoring: boolean;
  gameDate: string;
  venue: IGameLandingOutput_venue;
  venueLocation: IGameLandingOutput_venue;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  venueTimezone: string;
  periodDescriptor: IGameLandingOutput_periodDescriptor;
  tvBroadcasts: IGameLandingOutput_tvBroadcasts[];
  gameState: string;
  gameScheduleState: string;
  awayTeam: IGameLandingOutput_awayTeam;
  homeTeam: IGameLandingOutput_awayTeam;
  shootoutInUse: boolean;
  maxPeriods: number;
  regPeriods: number;
  otInUse: boolean;
  tiesInUse: boolean;
  summary: IGameLandingOutput_summary;
  clock: IGameLandingOutput_clock;
}
