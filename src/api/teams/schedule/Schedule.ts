import { IClubScheduleInput, IClubScheduleOutput } from "../../../interfaces/club/schedule/ClubSchedule";
import { IClubScheduleMonthInput, IClubScheduleMonthOutput } from "../../../interfaces/club/schedule/ClubScheduleMonth";
import { IClubScheduleMonthNowInput, IClubScheduleMonthNowOutput } from "../../../interfaces/club/schedule/ClubScheduleMonthNow";
import { IClubScheduleNowInput, IClubScheduleNowOutput } from "../../../interfaces/club/schedule/ClubScheduleNow";
import { IClubScheduleWeekInput, IClubScheduleWeekOutput } from "../../../interfaces/club/schedule/ClubScheduleWeek";
import { IClubScheduleWeekNowInput, IClubScheduleWeekNowOutput } from "../../../interfaces/club/schedule/ClubScheduleWeekNow";
import { BASE_URL, IResponse, sendGetRequest } from "../../../internal/Requests";

/**
 * Retrieve the current team schedule.
 * @param options The team to retrieve the schedule for.
 * @returns The current team schedule.
 */
export async function getCurrentTeamSchedule(options: IClubScheduleNowInput): Promise<IResponse<IClubScheduleNowOutput>> {
  return await sendGetRequest<IClubScheduleNowOutput>(BASE_URL.NORMAL, "club-schedule-season/{team}/now", options);
}

/**
 * Retrieve the team schedule for a specific season.
 * @param options The team and season to retrieve the schedule for.
 * @returns The team schedule for the team and season.
 */
export async function getTeamScheduleSeason(options: IClubScheduleInput): Promise<IResponse<IClubScheduleOutput>> {
  return await sendGetRequest<IClubScheduleOutput>(BASE_URL.NORMAL, "club-schedule-season/{team}/{season}", options);
}

/**
 * Retrieve the current team schedule for a specific month.
 * @param options The team to retrieve the schedule for.
 * @returns The current team schedule for the month.
 */
export async function getCurrentTeamScheduleMonth(options: IClubScheduleMonthNowInput): Promise<IResponse<IClubScheduleMonthNowOutput>> {
  return await sendGetRequest<IClubScheduleMonthNowOutput>(BASE_URL.NORMAL, "club-schedule/{team}/month/now", options);
}

/**
 * Retrieve the team schedule for a specific month.
 * @param options The team and month to retrieve the schedule for.
 * @returns The team schedule for the team and month.
 */
export async function getTeamScheduleMonth(options: IClubScheduleMonthInput): Promise<IResponse<IClubScheduleMonthOutput>> {
  return await sendGetRequest<IClubScheduleMonthOutput>(BASE_URL.NORMAL, "club-schedule/{team}/month/{month}", options);
}

/**
 * Retrieve the current team schedule for the current week.
 * @param options The team to retrieve the schedule for.
 * @returns The current team schedule for the week.
 */
export async function getCurrentTeamScheduleWeek(options: IClubScheduleWeekNowInput): Promise<IResponse<IClubScheduleWeekNowOutput>> {
  return await sendGetRequest<IClubScheduleWeekNowOutput>(BASE_URL.NORMAL, "club-schedule/{team}/week/now", options);
}

/**
 * Retrieve the team schedule for a specific week.
 * @param options The team and week to retrieve the schedule for.
 * @returns The team schedule for the team and week.
 */
export async function getTeamScheduleWeek(options: IClubScheduleWeekInput): Promise<IResponse<IClubScheduleWeekOutput>> {
  return await sendGetRequest<IClubScheduleWeekOutput>(BASE_URL.NORMAL, "club-schedule/{team}/week/{date}", options);
}
