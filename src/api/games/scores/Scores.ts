import { ICurrentDailyScoresOutput, ICurrentScoreboardOutput, IDailyScoresInput, IDailyScoresOutput } from "../../../interfaces/Games";
import { BASE_URL, IResponse, sendGetRequest, sendGetRequestWithoutParams } from "../../../internal/Requests";

/**
 * Retrieve the current daily scores.
 * @returns The current daily scores.
 */
export async function getCurrentDailyScores(): Promise<IResponse<ICurrentDailyScoresOutput>> {
  return await sendGetRequestWithoutParams<ICurrentDailyScoresOutput>(BASE_URL.NORMAL, "score/now");
}

/**
 * Retrieve the daily scores for a specific date.
 * @param options The date to retrieve the scores for.
 * @returns The daily scores for the date.
 */
export async function getDailyScores(options: IDailyScoresInput): Promise<IResponse<IDailyScoresOutput>> {
  return await sendGetRequest<IDailyScoresOutput>(BASE_URL.NORMAL, "score/{date}", options);
}

/**
 * Retrieve the scoreboard.
 * @returns The scoreboard.
 */
export async function getScoreboard(): Promise<IResponse<ICurrentScoreboardOutput>> {
  return await sendGetRequestWithoutParams<ICurrentScoreboardOutput>(BASE_URL.NORMAL, "scoreboard/now");
}
