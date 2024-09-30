import nhlApi from "../src/index";

describe("GamesApi", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Check getGameInfo", async () => {
    const resp = await nhlApi.games.getGameInfo({ gameId: 2023020204 });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getStatGameInfo", async () => {
    const resp = await nhlApi.games.getStatGameInfo({ lang: "en" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getShiftCharts", async () => {
    const resp = await nhlApi.games.getShiftCharts({ lang: "en", gameId: 2023020204 });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getCurrentDailyScores", async () => {
    const resp = await nhlApi.games.scores.getCurrentDailyScores();

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getDailyScores", async () => {
    const resp = await nhlApi.games.scores.getDailyScores({ date: "2023-11-10" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getScoreboard", async () => {
    const resp = await nhlApi.games.scores.getScoreboard();

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getWhereToWatch", async () => {
    const resp = await nhlApi.games.streams.getWhereToWatch();

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getPlayByPlay", async () => {
    const resp = await nhlApi.games.events.getPlayByPlay({ gameId: 2023020204 });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getGameLandingPage", async () => {
    const resp = await nhlApi.games.events.getGameLandingPage({ gameId: 2023020204 });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getBoxScore", async () => {
    const resp = await nhlApi.games.events.getBoxScore({ gameId: 2023020204 });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getGameStory", async () => {
    const resp = await nhlApi.games.events.getGameStory({ gameId: 2023020204 });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getTvSchedule", async () => {
    const resp = await nhlApi.games.network.getTVSchedule({ date: "2023-11-10" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getCurrentTVSchedule", async () => {
    const resp = await nhlApi.games.network.getCurrentTVSchedule();

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getPartnerGameOdds", async () => {
    const resp = await nhlApi.games.odds.getPartnerGameOdds({ countryCode: "US" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });
});
