import {
  ICurrentTeamScheduleInput,
  ICurrentTeamScheduleMonthInput,
  ICurrentTeamScheduleMonthOutput,
  ICurrentTeamScheduleOutput,
  ICurrentTeamScheduleWeekInput,
  ICurrentTeamScheduleWeekOutput,
  ITeamScheduleMonthInput,
  ITeamScheduleMonthOutput,
  ITeamScheduleSeasonInput,
  ITeamScheduleSeasonOutput,
  ITeamScheduleWeekInput,
  ITeamScheduleWeekOutput,
} from "../../../interfaces/Teams";
import { BASE_URL, IResponse, sendGetRequest } from "../../../internal/Requests";

/**
 * Retrieve the current team schedule.
 * @param options The team to retrieve the schedule for.
 * @returns The current team schedule.
 */
export async function getCurrentTeamSchedule(options: ICurrentTeamScheduleInput): Promise<IResponse<ICurrentTeamScheduleOutput>> {
  return await sendGetRequest<ICurrentTeamScheduleOutput>(BASE_URL.NORMAL, "club-schedule-season/{team}/now", options);
}

/**
 * Retrieve the team schedule for a specific season.
 * @param options The team and season to retrieve the schedule for.
 * @returns The team schedule for the team and season.
 */
export async function getTeamScheduleSeason(options: ITeamScheduleSeasonInput): Promise<IResponse<ITeamScheduleSeasonOutput>> {
  return await sendGetRequest<ITeamScheduleSeasonOutput>(BASE_URL.NORMAL, "club-schedule-season/{team}/{season}", options);
}

/**
 * Retrieve the current team schedule for a specific month.
 * @param options The team to retrieve the schedule for.
 * @returns The current team schedule for the month.
 */
export async function getCurrentTeamScheduleMonth(options: ICurrentTeamScheduleMonthInput): Promise<IResponse<ICurrentTeamScheduleMonthOutput>> {
  return await sendGetRequest<ICurrentTeamScheduleMonthOutput>(BASE_URL.NORMAL, "club-schedule/{team}/month/now", options);
}

/**
 * Retrieve the team schedule for a specific month.
 * @param options The team and month to retrieve the schedule for.
 * @returns The team schedule for the team and month.
 */
export async function getTeamScheduleMonth(options: ITeamScheduleMonthInput): Promise<IResponse<ITeamScheduleMonthOutput>> {
  return await sendGetRequest<ITeamScheduleMonthOutput>(BASE_URL.NORMAL, "club-schedule/{team}/month/{month}", options);
}

/**
 * Retrieve the current team schedule for the current week.
 * @param options The team to retrieve the schedule for.
 * @returns The current team schedule for the week.
 */
export async function getCurrentTeamScheduleWeek(options: ICurrentTeamScheduleWeekInput): Promise<IResponse<ICurrentTeamScheduleWeekOutput>> {
  return await sendGetRequest<ICurrentTeamScheduleWeekOutput>(BASE_URL.NORMAL, "club-schedule/{team}/week/now", options);
}

/**
 * Retrieve the team schedule for a specific week.
 * @param options The team and week to retrieve the schedule for.
 * @returns The team schedule for the team and week.
 */
export async function getTeamScheduleWeek(options: ITeamScheduleWeekInput): Promise<IResponse<ITeamScheduleWeekOutput>> {
  return await sendGetRequest<ITeamScheduleWeekOutput>(BASE_URL.NORMAL, "club-schedule/{team}/week/{date}", options);
}
