import {
  ICurrentScheduleCalendarOutput,
  ICurrentScheduleWeekOutput,
  IScheduleCalendarInput,
  IScheduleCalendarOutput,
  IScheduleWeekInput,
  IScheduleWeekOutput,
} from "../../../interfaces/League";
import { BASE_URL, IResponse, sendGetRequest, sendGetRequestWithoutParams } from "../../../internal/Requests";

/**
 * Retrieve the current schedule week.
 * @returns The current schedule week.
 */
export async function getCurrentScheduleWeek(): Promise<IResponse<ICurrentScheduleWeekOutput>> {
  return await sendGetRequestWithoutParams<ICurrentScheduleWeekOutput>(BASE_URL.NORMAL, "schedule/now");
}

/**
 * Retrieve the schedule week for a specific date.
 * @param options The date to retrieve the schedule week for.
 * @returns The schedule week for the date.
 */
export async function getScheduleWeek(options: IScheduleWeekInput): Promise<IResponse<IScheduleWeekOutput>> {
  return await sendGetRequest<IScheduleWeekOutput>(BASE_URL.NORMAL, "schedule/{date}", options);
}

/**
 * Retrieve the currentschedule calendar.
 * @returns The schedule calendar for the current day.
 */
export async function getCurrentScheduleCalendar(): Promise<IResponse<ICurrentScheduleCalendarOutput>> {
  return await sendGetRequestWithoutParams<ICurrentScheduleCalendarOutput>(BASE_URL.NORMAL, "schedule-calendar/now");
}

/**
 * Retrieve the schedule calendar for a specific date.
 * @param options The date to retrieve the schedule calendar for.
 * @returns The schedule calendar for the date.
 */
export async function getScheduleCalendar(options: IScheduleCalendarInput): Promise<IResponse<IScheduleCalendarOutput>> {
  return await sendGetRequest<IScheduleCalendarOutput>(BASE_URL.NORMAL, "schedule-calendar/{date}", options);
}
