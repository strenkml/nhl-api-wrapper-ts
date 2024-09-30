import { IPartnerGameOddsInput, IPartnerGameOddsOutput } from "../../../interfaces/partner-game/PartnerGameOdds";
import { BASE_URL, IResponse, sendGetRequest } from "../../../internal/Requests";

/**
 * Retrieve the current odds for a specific country.
 * @param options The country to retrieve the current odds for.
 * @returns The current odds for the country.
 */
export async function getPartnerGameOdds(options: IPartnerGameOddsInput): Promise<IResponse<IPartnerGameOddsOutput>> {
  return await sendGetRequest<IPartnerGameOddsOutput>(BASE_URL.NORMAL, "partner-game/{country-code}/now", options);
}
