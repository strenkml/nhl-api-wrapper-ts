import { IScheduleCalendarInput, IScheduleCalendarOutput } from "../../../interfaces/schedule/calendar/ScheduleCalendar";
import { IScheduleCalendarNowOutput } from "../../../interfaces/schedule/calendar/ScheduleCalendarNow";
import { IScheduleByDateInput, IScheduleByDateOutput } from "../../../interfaces/schedule/ScheduleByDate";
import { IScheduleNowOutput } from "../../../interfaces/schedule/ScheduleNow";
import { BASE_URL, IResponse, sendGetRequest, sendGetRequestWithoutParams } from "../../../internal/Requests";

/**
 * Retrieve the current schedule week.
 * @returns The current schedule week.
 */
export async function getCurrentScheduleWeek(): Promise<IResponse<IScheduleNowOutput>> {
  return await sendGetRequestWithoutParams<IScheduleNowOutput>(BASE_URL.NORMAL, "schedule/now");
}

/**
 * Retrieve the schedule week for a specific date.
 * @param options The date to retrieve the schedule week for.
 * @returns The schedule week for the date.
 */
export async function getScheduleWeek(options: IScheduleByDateInput): Promise<IResponse<IScheduleByDateOutput>> {
  return await sendGetRequest<IScheduleByDateOutput>(BASE_URL.NORMAL, "schedule/{date}", options);
}

/**
 * Retrieve the current schedule calendar.
 * @returns The schedule calendar for the current day.
 */
export async function getCurrentScheduleCalendar(): Promise<IResponse<IScheduleCalendarNowOutput>> {
  return await sendGetRequestWithoutParams<IScheduleCalendarNowOutput>(BASE_URL.NORMAL, "schedule-calendar/now");
}

/**
 * Retrieve the schedule calendar for a specific date.
 * @param options The date to retrieve the schedule calendar for.
 * @returns The schedule calendar for the date.
 */
export async function getScheduleCalendar(options: IScheduleCalendarInput): Promise<IResponse<IScheduleCalendarOutput>> {
  return await sendGetRequest<IScheduleCalendarOutput>(BASE_URL.NORMAL, "schedule-calendar/{date}", options);
}
