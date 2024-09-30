import nhlApi from "../src/index";
import { GAME_TYPE, TEAM_TRI_CODE } from "../src/interfaces/Common";

describe("TeamsApi", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Check getTeams", async () => {
    const resp = await nhlApi.teams.getTeams({ lang: "en" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getTeamStats", async () => {
    const resp = await nhlApi.teams.getTeamStats({ lang: "en", report: "summary" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getFranchiseInfo", async () => {
    const resp = await nhlApi.teams.getFranchiseInfo({ lang: "en" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getCurrentTeamRoster", async () => {
    const resp = await nhlApi.teams.roster.getCurrentTeamRoster({ team: TEAM_TRI_CODE.PHILADELPHIA_FLYERS });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getTeamRosterSeason", async () => {
    const resp = await nhlApi.teams.roster.getTeamRosterSeason({ team: TEAM_TRI_CODE.PHILADELPHIA_FLYERS, season: 20232024 });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getTeamSeasons", async () => {
    const resp = await nhlApi.teams.roster.getTeamSeasons({ team: TEAM_TRI_CODE.PHILADELPHIA_FLYERS });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getTeamProspects", async () => {
    const resp = await nhlApi.teams.roster.getTeamProspects({ team: TEAM_TRI_CODE.PHILADELPHIA_FLYERS });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getCurrentTeamSchedule", async () => {
    const resp = await nhlApi.teams.schedule.getCurrentTeamSchedule({ team: TEAM_TRI_CODE.PHILADELPHIA_FLYERS });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getTeamScheduleSeason", async () => {
    const resp = await nhlApi.teams.schedule.getTeamScheduleSeason({ team: TEAM_TRI_CODE.PHILADELPHIA_FLYERS, season: 20232024 });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getCurrentTeamScheduleMonth", async () => {
    const resp = await nhlApi.teams.schedule.getCurrentTeamScheduleMonth({ team: TEAM_TRI_CODE.PHILADELPHIA_FLYERS });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getTeamScheduleMonth", async () => {
    const resp = await nhlApi.teams.schedule.getTeamScheduleMonth({ team: TEAM_TRI_CODE.PHILADELPHIA_FLYERS, month: "2023-11" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getCurrentTeamScheduleWeek", async () => {
    const resp = await nhlApi.teams.schedule.getCurrentTeamScheduleWeek({ team: TEAM_TRI_CODE.PHILADELPHIA_FLYERS });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getTeamScheduleWeek", async () => {
    const resp = await nhlApi.teams.schedule.getTeamScheduleWeek({ team: TEAM_TRI_CODE.PHILADELPHIA_FLYERS, date: "2023-11-10" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getCurrentClubStats", async () => {
    const resp = await nhlApi.teams.stats.getCurrentClubStats({ team: TEAM_TRI_CODE.PHILADELPHIA_FLYERS });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getClubStatsSeason", async () => {
    const resp = await nhlApi.teams.stats.getClubStatsSeason({ team: TEAM_TRI_CODE.PHILADELPHIA_FLYERS });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getClubStatsSeasonAndGameType", async () => {
    const resp = await nhlApi.teams.stats.getClubStatsSeasonAndGameType({
      team: TEAM_TRI_CODE.PHILADELPHIA_FLYERS,
      season: 20232024,
      gameType: GAME_TYPE.REGULAR_SEASON,
    });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getCurrentTeamScoreboard", async () => {
    const resp = await nhlApi.teams.stats.getCurrentTeamScoreboard({ team: TEAM_TRI_CODE.PHILADELPHIA_FLYERS });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getCurrentStandings", async () => {
    const resp = await nhlApi.teams.standings.getCurrentStandings();

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getStandingsDate", async () => {
    const resp = await nhlApi.teams.standings.getStandingsDate({ date: "2023-11-10" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getStandingsEachSeason", async () => {
    const resp = await nhlApi.teams.standings.getStandingsEachSeason();

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });
});
