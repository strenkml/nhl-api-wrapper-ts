// Generated by multi-json-to-ts

export interface IPartnerGameOddsOutput_bettingPartner {
  partnerId: number;
  country: string;
  name: string;
  imageUrl: string;
  siteUrl: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
}
export interface IPartnerGameOddsOutput_games_name {
  default: string;
}

export interface IPartnerGameOddsOutput_games_odds {
  description: string;
  value: number;
  qualifier: string;
}
export interface IPartnerGameOddsOutput_games_homeTeam {
  id: number;
  name: IPartnerGameOddsOutput_games_name;
  abbrev: string;
  logo: string;
  odds: IPartnerGameOddsOutput_games_odds[];
}

export interface IPartnerGameOddsOutput_games {
  gameId: number;
  gameType: number;
  startTimeUTC: string;
  homeTeam: IPartnerGameOddsOutput_games_homeTeam;
  awayTeam: IPartnerGameOddsOutput_games_homeTeam;
}

export interface IPartnerGameOddsOutput {
  currentOddsDate: string;
  lastUpdatedUTC?: string;
  bettingPartner?: IPartnerGameOddsOutput_bettingPartner;
  games: IPartnerGameOddsOutput_games[];
}
