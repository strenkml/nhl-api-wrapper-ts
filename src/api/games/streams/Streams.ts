import { IWhereToWatchInput, IWhereToWatchOutput } from "../../../interfaces/where-to-watch/WhereToWatch";
import { BASE_URL, IResponse, sendGetRequest } from "../../../internal/Requests";

/**
 * Retrieve information about streaming options.
 * @param options The options to retrieve the streaming options for.
 * @returns The streaming options.
 */
export async function getWhereToWatch(options: IWhereToWatchInput): Promise<IResponse<IWhereToWatchOutput>> {
  return await sendGetRequest<IWhereToWatchOutput>(BASE_URL.NORMAL, "where-to-watch", options);
}
