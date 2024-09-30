import * as schedule from "./schedule/Schedule";
import * as playoffs from "./playoffs/Playoffs";
import * as seasons from "./seasons/Seasons";
import * as draft from "./draft/Draft";

import { BASE_URL, IResponse, sendGetRequestWithoutParams } from "../../internal/Requests";
import { IMetaInfoOutput } from "../../interfaces/meta/MetaInfo";

async function getMeta(): Promise<IResponse<IMetaInfoOutput>> {
  return await sendGetRequestWithoutParams<IMetaInfoOutput>(BASE_URL.NORMAL, "meta");
}

export default {
  schedule,
  playoffs,
  seasons,
  draft,
  getMeta,
};
