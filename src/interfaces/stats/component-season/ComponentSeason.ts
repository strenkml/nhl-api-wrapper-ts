// Generated by multi-json-to-ts

import { ICommonLangInput } from "../../Common";

export interface IComponentSeasonInput extends ICommonLangInput {}

export interface IComponentSeasonOutput_data {
  id: string;
  component: string;
  gameTypeId: number;
  seasonId: number;
}

export interface IComponentSeasonOutput {
  data: IComponentSeasonOutput_data[];
  total: number;
}
