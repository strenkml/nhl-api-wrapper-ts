// Generated by multi-json-to-ts

export interface IScheduleCalendarNowOutput_teams_commonName {
  default: string;
  fr?: string;
}
export interface IScheduleCalendarNowOutput_teams_placeNameWithPreposition {
  default: string;
  fr: string;
}

export interface IScheduleCalendarNowOutput_teams {
  id: number;
  seasonId: number;
  commonName: IScheduleCalendarNowOutput_teams_commonName;
  abbrev: string;
  name: IScheduleCalendarNowOutput_teams_commonName;
  placeNameWithPreposition: IScheduleCalendarNowOutput_teams_placeNameWithPreposition;
  placeName: IScheduleCalendarNowOutput_teams_commonName;
  logo: string;
  darkLogo: string;
  isNhl: boolean;
  french: boolean;
}

export interface IScheduleCalendarNowOutput {
  endDate: string;
  nextStartDate: string;
  previousStartDate: string;
  startDate: string;
  teams: IScheduleCalendarNowOutput_teams[];
}
