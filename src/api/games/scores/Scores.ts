import { IDailyScoresByDateInput, IDailyScoresByDateOutput } from "../../../interfaces/score/DailyScoresByDate";
import { IDailyScoresNowOutput } from "../../../interfaces/score/DailyScoresNow";
import { IScoreboardNowOutput } from "../../../interfaces/scoreboard/ScoreboardNow";
import { BASE_URL, IResponse, sendGetRequest, sendGetRequestWithoutParams } from "../../../internal/Requests";

/**
 * Retrieve the current daily scores.
 * @returns The current daily scores.
 */
export async function getCurrentDailyScores(): Promise<IResponse<IDailyScoresNowOutput>> {
  return await sendGetRequestWithoutParams<IDailyScoresNowOutput>(BASE_URL.NORMAL, "score/now");
}

/**
 * Retrieve the daily scores for a specific date.
 * @param options The date to retrieve the scores for.
 * @returns The daily scores for the date.
 */
export async function getDailyScores(options: IDailyScoresByDateInput): Promise<IResponse<IDailyScoresByDateOutput>> {
  return await sendGetRequest<IDailyScoresByDateOutput>(BASE_URL.NORMAL, "score/{date}", options);
}

/**
 * Retrieve the scoreboard.
 * @returns The scoreboard.
 */
export async function getScoreboard(): Promise<IResponse<IScoreboardNowOutput>> {
  return await sendGetRequestWithoutParams<IScoreboardNowOutput>(BASE_URL.NORMAL, "scoreboard/now");
}
