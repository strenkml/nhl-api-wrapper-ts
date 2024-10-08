// Generated by multi-json-to-ts

import { ICommonTeamInput } from "../Common";

export interface ITeamProspectsInput extends ICommonTeamInput {}

export interface ITeamProspectsOutput_forwards_firstName {
  default: string;
  cs?: string;
  de?: string;
  es?: string;
  fi?: string;
  sk?: string;
  sv?: string;
}
export interface ITeamProspectsOutput_forwards_lastName {
  default: string;
  cs?: string;
  sk?: string;
}
export interface ITeamProspectsOutput_forwards_birthCity {
  default: string;
  cs?: string;
  de?: string;
  fi?: string;
  fr?: string;
  sk?: string;
  sv?: string;
}
export interface ITeamProspectsOutput_forwards_birthStateProvince {
  default: string;
  fr?: string;
  sk?: string;
  sv?: string;
}

export interface ITeamProspectsOutput_forwards {
  id: number;
  headshot: string;
  firstName: ITeamProspectsOutput_forwards_firstName;
  lastName: ITeamProspectsOutput_forwards_lastName;
  sweaterNumber?: number;
  positionCode: string;
  shootsCatches: string;
  heightInInches: number;
  weightInPounds: number;
  heightInCentimeters: number;
  weightInKilograms: number;
  birthDate: string;
  birthCity: ITeamProspectsOutput_forwards_birthCity;
  birthCountry: string;
  birthStateProvince?: ITeamProspectsOutput_forwards_birthStateProvince;
}
export interface ITeamProspectsOutput_defensemen_firstName {
  default: string;
}
export interface ITeamProspectsOutput_defensemen_birthCity {
  default: string;
  sv?: string;
  cs?: string;
  de?: string;
  fi?: string;
  sk?: string;
}
export interface ITeamProspectsOutput_defensemen_birthStateProvince {
  default: string;
  fr?: string;
}

export interface ITeamProspectsOutput_defensemen {
  id: number;
  headshot: string;
  firstName: ITeamProspectsOutput_defensemen_firstName;
  lastName: ITeamProspectsOutput_defensemen_firstName;
  sweaterNumber?: number;
  positionCode: string;
  shootsCatches: string;
  heightInInches: number;
  weightInPounds: number;
  heightInCentimeters: number;
  weightInKilograms: number;
  birthDate: string;
  birthCity: ITeamProspectsOutput_defensemen_birthCity;
  birthCountry: string;
  birthStateProvince?: ITeamProspectsOutput_defensemen_birthStateProvince;
}
export interface ITeamProspectsOutput_goalies_birthCity {
  default: string;
  fi?: string;
}

export interface ITeamProspectsOutput_goalies {
  id: number;
  headshot: string;
  firstName: ITeamProspectsOutput_defensemen_firstName;
  lastName: ITeamProspectsOutput_defensemen_firstName;
  sweaterNumber?: number;
  positionCode: string;
  shootsCatches: string;
  heightInInches: number;
  weightInPounds: number;
  heightInCentimeters: number;
  weightInKilograms: number;
  birthDate: string;
  birthCity?: ITeamProspectsOutput_goalies_birthCity;
  birthCountry: string;
  birthStateProvince?: ITeamProspectsOutput_defensemen_birthStateProvince;
}

export interface ITeamProspectsOutput {
  forwards: ITeamProspectsOutput_forwards[];
  defensemen: ITeamProspectsOutput_defensemen[];
  goalies: ITeamProspectsOutput_goalies[];
}
