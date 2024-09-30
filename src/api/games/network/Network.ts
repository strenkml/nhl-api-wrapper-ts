import { ITvScheduleInput, ITvScheduleOutput } from "../../../interfaces/network/tv-schedule/TvSchedule";
import { ITvScheduleNowOutput } from "../../../interfaces/network/tv-schedule/TvScheduleNow";
import { BASE_URL, IResponse, sendGetRequest, sendGetRequestWithoutParams } from "../../../internal/Requests";

/**
 * Retrieve information about streaming options.
 * @param options The options to retrieve the streaming options for.
 * @returns The streaming options.
 */
export async function getTVSchedule(options: ITvScheduleInput): Promise<IResponse<ITvScheduleOutput>> {
  return await sendGetRequest<ITvScheduleOutput>(BASE_URL.NORMAL, "network/tv-schedule/{date}", options);
}

/**
 * Retrieve the current TV schedule.
 * @returns The current TV schedule.
 */
export async function getCurrentTVSchedule(): Promise<IResponse<ITvScheduleNowOutput>> {
  return await sendGetRequestWithoutParams<ITvScheduleNowOutput>(BASE_URL.NORMAL, "network/tv-schedule/now");
}
