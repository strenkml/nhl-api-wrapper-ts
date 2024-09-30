import { IPlayoffBracketInput, IPlayoffBracketOutput } from "../../../interfaces/playoff-bracket/PlayoffBracket";
import { IPlayoffSeriesCarouselInput, IPlayoffSeriesCarouselOutput } from "../../../interfaces/playoff-series/carousel/PlayoffSeriesCarousel";
import { IPlayoffSeriesScheduleInput, IPlayoffSeriesScheduleOutput } from "../../../interfaces/schedule/playoff-series/PlayoffSeriesSchedule";
import { BASE_URL, IResponse, sendGetRequest } from "../../../internal/Requests";

/**
 * Retrieve the playoff series carousel.
 * @param options The season to retrieve the playoff series carousel for.
 * @returns The playoff series carousel for the season.
 */
export async function getPlayoffSeriesCarousel(options: IPlayoffSeriesCarouselInput): Promise<IResponse<IPlayoffSeriesCarouselOutput>> {
  return await sendGetRequest<IPlayoffSeriesCarouselOutput>(BASE_URL.NORMAL, "playoff-series/carousel/{season}", options);
}

/**
 * Retrieve the playoff series schedule.
 * @param options The season and series letter to retrieve the playoff series schedule for.
 * @returns The playoff series schedule for the season and series letter.
 */
export async function getPlayoffSeriesSchedule(options: IPlayoffSeriesScheduleInput): Promise<IResponse<IPlayoffSeriesScheduleOutput>> {
  return await sendGetRequest<IPlayoffSeriesScheduleOutput>(BASE_URL.NORMAL, "schedule/playoff-series/{season}/{seriesLetter}", options);
}

/**
 * Retrieve the playoff bracket.
 * @param options The year to retrieve the playoff bracket for.
 * @returns The playoff bracket for the year.
 */
export async function getPlayoffBracket(options: IPlayoffBracketInput): Promise<IResponse<IPlayoffBracketOutput>> {
  return await sendGetRequest<IPlayoffBracketOutput>(BASE_URL.NORMAL, "playoff-bracket/{year}", options);
}
