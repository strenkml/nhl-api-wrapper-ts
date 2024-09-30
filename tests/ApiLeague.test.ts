import nhlApi from "../src/index";
import { PROSPECT_CATEGORY } from "../src/interfaces/Common";

describe("LeagueApi", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Check getMeta", async () => {
    const resp = await nhlApi.league.getMeta();

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("check getCurrrentScheduleWeek", async () => {
    const resp = await nhlApi.league.schedule.getCurrentScheduleWeek();

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("check getScheduleWeek", async () => {
    const resp = await nhlApi.league.schedule.getScheduleWeek({ date: "2023-11-10" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getCurrentScheduleCalendar", async () => {
    const resp = await nhlApi.league.schedule.getCurrentScheduleCalendar();

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getScheduleCalendar", async () => {
    const resp = await nhlApi.league.schedule.getScheduleCalendar({ date: "2023-11-10" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getPlaoffSeriesCarousel", async () => {
    const resp = await nhlApi.league.playoffs.getPlayoffSeriesCarousel({ season: 20232024 });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getPlayoffSeriesSchedule", async () => {
    const resp = await nhlApi.league.playoffs.getPlayoffSeriesSchedule({ season: 20232024, seriesLetter: "a" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getPlayoffBracket", async () => {
    const resp = await nhlApi.league.playoffs.getPlayoffBracket({ year: 2023 });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getSeasons", async () => {
    const resp = await nhlApi.league.seasons.getSeasons();

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getComponentSeason", async () => {
    const resp = await nhlApi.league.seasons.getComponentSeason({ lang: "en" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getSeason", async () => {
    const resp = await nhlApi.league.seasons.getSeason({ lang: "en" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getCurrentDraftRankings", async () => {
    const resp = await nhlApi.league.draft.getCurrentDraftRankings();

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getDraftRankings", async () => {
    const resp = await nhlApi.league.draft.getDraftRankings({ year: 2023, prospectCategory: PROSPECT_CATEGORY.NORTH_AMERICAN_SKATER });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getDraftInfo", async () => {
    const resp = await nhlApi.league.draft.getDraftInfo({ lang: "en" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });
});
