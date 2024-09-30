import nhlApi from "../src/index";

describe("MiscApi", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Check pingServer", async () => {
    const resp = await nhlApi.misc.pingServer();

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
  });

  it("Check getLocation", async () => {
    const resp = await nhlApi.misc.getLocation();

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getConfig", async () => {
    const resp = await nhlApi.misc.getConfig({ lang: "en" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getCountryInfo", async () => {
    const resp = await nhlApi.misc.getCountryInfo({ lang: "en" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  it("Check getGlossary", async () => {
    const resp = await nhlApi.misc.getGlossary({ lang: "en" });

    expect(resp).toBeDefined();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });
});
