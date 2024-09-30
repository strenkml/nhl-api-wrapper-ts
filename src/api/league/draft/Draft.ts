import { IDraftInfoInput, IDraftInfoOutput } from "../../../interfaces/draft/DraftInfo";
import { IDraftRankingsInput } from "../../../interfaces/draft/rankings/DraftRankings";
import { IDraftRankingsNowOutput } from "../../../interfaces/draft/rankings/DraftRankingsNow";
import { BASE_URL, IResponse, sendGetRequest, sendGetRequestWithoutParams } from "../../../internal/Requests";

/**
 * Retrieve a list of all draft prospects as of the current moment.
 * @returns The current draft rankings.
 */
export async function getCurrentDraftRankings(): Promise<IResponse<IDraftRankingsNowOutput>> {
  return await sendGetRequestWithoutParams<IDraftRankingsNowOutput>(BASE_URL.NORMAL, "draft/rankings/now");
}

/**
 * Retrieve a list of all draft prospects by category of prospect for a specific season
 * @param options The season to retrieve the draft rankings for.
 * @returns The draft rankings for the season.
 */
export async function getDraftRankings(options: IDraftRankingsInput): Promise<IResponse<IDraftRankingsNowOutput>> {
  return await sendGetRequest<IDraftRankingsNowOutput>(BASE_URL.NORMAL, "draft/rankings/{season}/{prospectCategory}", options);
}

/**
 * Retrieve draft information.
 * @param options The options to retrieve the draft information.
 * @returns The draft information.
 */
export async function getDraftInfo(options: IDraftInfoInput): Promise<IResponse<IDraftInfoOutput>> {
  return await sendGetRequest<IDraftInfoOutput>(BASE_URL.STAT, "{lang}/draft", options);
}
