import * as Schedule from "./schedule/Schedule";
import * as Playoffs from "./playoffs/Playoffs";
import * as Seasons from "./seasons/Seasons";
import * as Draft from "./draft/Draft";

import { BASE_URL, IResponse, sendGetRequestWithoutParams } from "../../internal/Requests";
import { IMetaInfoOutput } from "../../interfaces/meta/MetaInfo";

async function getMeta(): Promise<IResponse<IMetaInfoOutput>> {
  return await sendGetRequestWithoutParams<IMetaInfoOutput>(BASE_URL.NORMAL, "meta");
}

export default {
  Schedule,
  Playoffs,
  Seasons,
  Draft,
  getMeta,
};
