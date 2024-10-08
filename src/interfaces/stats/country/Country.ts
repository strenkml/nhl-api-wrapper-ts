// Generated by multi-json-to-ts

import { ICommonLangInput } from "../../Common";

export interface ICountryInput extends ICommonLangInput {}

export interface ICountryOutput_data {
  id: string;
  country3Code: string;
  countryCode: string;
  countryName: string;
  hasPlayerStats: number;
  imageUrl: string;
  iocCode: string;
  isActive: number;
  nationalityName: string;
  olympicUrl: object;
  thumbnailUrl: string;
}

export interface ICountryOutput {
  data: ICountryOutput_data[];
  total: number;
}
