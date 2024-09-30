import nhlApi from "../src/index";
import { GAME_TYPE } from "../src/interfaces/Common";

describe("PlayersApi", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Check getPlayerGameLog", async () => {
    const resp = await nhlApi.players.getPlayerGameLog({ playerId: 8478402, season: 20232024, gameType: 2 });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getPlayerInfo", async () => {
    const resp = await nhlApi.players.getPlayerInfo({ playerId: 8478402 });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getPlayerCurrentGameLog", async () => {
    const resp = await nhlApi.players.getPlayerCurrentGameLog({ playerId: 8478402 });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getPlayerSpotlight", async () => {
    const resp = await nhlApi.players.getPlayerSpotlight();

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getCurrentSkaterStatsLeaders", async () => {
    const resp = await nhlApi.players.skaters.getCurrentSkaterStatsLeaders({ categories: ["goals"], limit: 5 });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getSkaterStatsLeadersSeason", async () => {
    const resp = await nhlApi.players.skaters.getSkaterStatsLeadersSeason({ season: 20232024, gameType: GAME_TYPE.REGULAR_SEASON });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check gettCurrentGoalieStatsLeaders", async () => {
    const resp = await nhlApi.players.goalies.getCurrentGoalieStatsLeaders({ categories: ["wins"], limit: 5 });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getGoalieStatsLeadersSeason", async () => {
    const resp = await nhlApi.players.goalies.getGoalieStatsLeadersSeason({ season: 20232024, gameType: GAME_TYPE.REGULAR_SEASON });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getPlayers", async () => {
    const resp = await nhlApi.players.stats.getPlayers({ lang: "en" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getSkaterLeaders", async () => {
    const resp = await nhlApi.players.skaters.stats.getSkaterLeaders({ lang: "en", attribute: "goals" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getSkaterMilestones", async () => {
    const resp = await nhlApi.players.skaters.stats.getSkaterMilestones({ lang: "en" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getSkaterStats", async () => {
    const resp = await nhlApi.players.skaters.stats.getSkaterStats({ lang: "en", report: "summary", cayenneExp: "seasonId=20232024" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getGoalieLeaders", async () => {
    const resp = await nhlApi.players.goalies.stats.getGoalieLeaders({ lang: "en", attribute: "gaa" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getGoalieStats", async () => {
    const resp = await nhlApi.players.goalies.stats.getGoalieStats({ lang: "en", report: "summary", cayenneExp: "seasonId=20232024" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getGoalieMilestones", async () => {
    const resp = await nhlApi.players.goalies.stats.getGoalieMilestones({ lang: "en" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });
});
