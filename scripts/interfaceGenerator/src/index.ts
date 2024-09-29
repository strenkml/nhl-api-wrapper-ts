import Gen from "multi-json-to-ts";
import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getRequest(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

async function main() {
  try {
    // Get Game Log for a specific player, season, and game type
    const playerGameLogUrl1 = "https://api-web.nhle.com/v1/player/8478402/game-log/20232024/2";
    const playerGameLogData1 = await getRequest(playerGameLogUrl1);

    const playerGameLogUrl2 = "https://api-web.nhle.com/v1/player/8478403/game-log/20222023/3";
    const playerGameLogData2 = await getRequest(playerGameLogUrl2);

    const playerGameLogUrl3 = "https://api-web.nhle.com/v1/player/8478404/game-log/20212022/2";
    const playerGameLogData3 = await getRequest(playerGameLogUrl3);

    const iPlayerGameLogOutput = new Gen("IPlayerGameLogOutput", "./output/interfaces/player/game-log", {
      backupOldFile: false,
      fileName: "PlayerGameLog",
      jsonVariations: [playerGameLogData1, playerGameLogData2, playerGameLogData3],
    });
    iPlayerGameLogOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching player game logs:", error);
  }

  try {
    // Get Specific Player Info
    const specificPlayerInfoUrl = "https://api-web.nhle.com/v1/player/8478402/landing";
    const specificPlayerInfoData = await getRequest(specificPlayerInfoUrl);

    const iSpecificPlayerInfoOutput = new Gen("ISpecificPlayerInfoOutput", "./output/interfaces/player/info", {
      backupOldFile: false,
      fileName: "SpecificPlayerInfo",
      jsonVariations: [specificPlayerInfoData],
    });
    iSpecificPlayerInfoOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching specific player info:", error);
  }

  try {
    // Get Game Log As of Now for a specific player
    const playerGameLogNowUrl1 = "https://api-web.nhle.com/v1/player/8478402/game-log/now";
    const playerGameLogNowData1 = await getRequest(playerGameLogNowUrl1);

    const playerGameLogNowUrl2 = "https://api-web.nhle.com/v1/player/8478403/game-log/now";
    const playerGameLogNowData2 = await getRequest(playerGameLogNowUrl2);

    const playerGameLogNowUrl3 = "https://api-web.nhle.com/v1/player/8478404/game-log/now";
    const playerGameLogNowData3 = await getRequest(playerGameLogNowUrl3);

    const iPlayerGameLogNowOutput = new Gen("IPlayerGameLogNowOutput", "./output/interfaces/player/game-log/now", {
      backupOldFile: false,
      fileName: "PlayerGameLogNow",
      jsonVariations: [playerGameLogNowData1, playerGameLogNowData2, playerGameLogNowData3],
    });
    iPlayerGameLogNowOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching player game log now:", error);
  }

  try {
    // Get Current Skater Stats Leaders
    const currentSkaterStatsUrl1 = "https://api-web.nhle.com/v1/skater-stats-leaders/current?categories=goals&limit=5";
    const currentSkaterStatsData1 = await getRequest(currentSkaterStatsUrl1);

    const currentSkaterStatsUrl2 = "https://api-web.nhle.com/v1/skater-stats-leaders/current?categories=assists&limit=3";
    const currentSkaterStatsData2 = await getRequest(currentSkaterStatsUrl2);

    const currentSkaterStatsUrl3 = "https://api-web.nhle.com/v1/skater-stats-leaders/current?categories=points&limit=-1";
    const currentSkaterStatsData3 = await getRequest(currentSkaterStatsUrl3);

    const iCurrentSkaterStatsLeadersOutput = new Gen("ICurrentSkaterStatsLeadersOutput", "./output/interfaces/skater/stats/leaders", {
      backupOldFile: false,
      fileName: "CurrentSkaterStatsLeaders",
      jsonVariations: [currentSkaterStatsData1, currentSkaterStatsData2, currentSkaterStatsData3],
    });
    iCurrentSkaterStatsLeadersOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching current skater stats leaders:", error);
  }

  try {
    // Get Skater Stats Leaders for a Specific Season and Game Type
    const skaterStatsSeasonUrl1 = "https://api-web.nhle.com/v1/skater-stats-leaders/20222023/2?categories=goals&limit=3";
    const skaterStatsSeasonData1 = await getRequest(skaterStatsSeasonUrl1);

    const skaterStatsSeasonUrl2 = "https://api-web.nhle.com/v1/skater-stats-leaders/20212022/3?categories=assists&limit=5";
    const skaterStatsSeasonData2 = await getRequest(skaterStatsSeasonUrl2);

    const skaterStatsSeasonUrl3 = "https://api-web.nhle.com/v1/skater-stats-leaders/20232024/2?categories=points&limit=10";
    const skaterStatsSeasonData3 = await getRequest(skaterStatsSeasonUrl3);

    const iSkaterStatsSeasonLeadersOutput = new Gen("ISkaterStatsSeasonLeadersOutput", "./output/interfaces/skater/stats/leaders/season", {
      backupOldFile: false,
      fileName: "SkaterStatsSeasonLeaders",
      jsonVariations: [skaterStatsSeasonData1, skaterStatsSeasonData2, skaterStatsSeasonData3],
    });
    iSkaterStatsSeasonLeadersOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching skater stats season leaders:", error);
  }

  try {
    // Get Current Goalie Stats Leaders
    const currentGoalieStatsUrl1 = "https://api-web.nhle.com/v1/goalie-stats-leaders/current?categories=wins&limit=5";
    const currentGoalieStatsData1 = await getRequest(currentGoalieStatsUrl1);

    const currentGoalieStatsUrl2 = "https://api-web.nhle.com/v1/goalie-stats-leaders/current?categories=save-percentage&limit=3";
    const currentGoalieStatsData2 = await getRequest(currentGoalieStatsUrl2);

    const currentGoalieStatsUrl3 = "https://api-web.nhle.com/v1/goalie-stats-leaders/current?categories=gaa&limit=10";
    const currentGoalieStatsData3 = await getRequest(currentGoalieStatsUrl3);

    const iCurrentGoalieStatsLeadersOutput = new Gen("ICurrentGoalieStatsLeadersOutput", "./output/interfaces/goalie/stats/leaders", {
      backupOldFile: false,
      fileName: "CurrentGoalieStatsLeaders",
      jsonVariations: [currentGoalieStatsData1, currentGoalieStatsData2, currentGoalieStatsData3],
    });
    iCurrentGoalieStatsLeadersOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching current goalie stats leaders:", error);
  }

  try {
    // Get Goalie Stats Leaders by Season
    const goalieStatsSeasonUrl1 = "https://api-web.nhle.com/v1/goalie-stats-leaders/20232024/2?categories=wins&limit=3";
    const goalieStatsSeasonData1 = await getRequest(goalieStatsSeasonUrl1);

    const goalieStatsSeasonUrl2 = "https://api-web.nhle.com/v1/goalie-stats-leaders/20222023/2?categories=gaa&limit=5";
    const goalieStatsSeasonData2 = await getRequest(goalieStatsSeasonUrl2);

    const goalieStatsSeasonUrl3 = "https://api-web.nhle.com/v1/goalie-stats-leaders/20212022/3?categories=save-percentage&limit=10";
    const goalieStatsSeasonData3 = await getRequest(goalieStatsSeasonUrl3);

    const iGoalieStatsSeasonLeadersOutput = new Gen("IGoalieStatsSeasonLeadersOutput", "./output/interfaces/goalie/stats/leaders/season", {
      backupOldFile: false,
      fileName: "GoalieStatsSeasonLeaders",
      jsonVariations: [goalieStatsSeasonData1, goalieStatsSeasonData2, goalieStatsSeasonData3],
    });
    iGoalieStatsSeasonLeadersOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching goalie stats season leaders:", error);
  }

  try {
    // Get Team Roster As of Now
    const teamRosterNowUrl = "https://api-web.nhle.com/v1/roster/TOR/current";
    const teamRosterNowData = await getRequest(teamRosterNowUrl);

    const iTeamRosterNowOutput = new Gen("ITeamRosterNowOutput", "./output/interfaces/team/roster/now", {
      backupOldFile: false,
      fileName: "TeamRosterNow",
      jsonVariations: [teamRosterNowData],
    });
    iTeamRosterNowOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching team roster now:", error);
  }

  try {
    // Get Team Roster by Season
    const teamRosterSeasonUrl1 = "https://api-web.nhle.com/v1/roster/TOR/20232024";
    const teamRosterSeasonData1 = await getRequest(teamRosterSeasonUrl1);

    const teamRosterSeasonUrl2 = "https://api-web.nhle.com/v1/roster/MTL/20222023";
    const teamRosterSeasonData2 = await getRequest(teamRosterSeasonUrl2);

    const teamRosterSeasonUrl3 = "https://api-web.nhle.com/v1/roster/BOS/20212022";
    const teamRosterSeasonData3 = await getRequest(teamRosterSeasonUrl3);

    const iTeamRosterSeasonOutput = new Gen("ITeamRosterSeasonOutput", "./output/interfaces/team/roster/season", {
      backupOldFile: false,
      fileName: "TeamRosterSeason",
      jsonVariations: [teamRosterSeasonData1, teamRosterSeasonData2, teamRosterSeasonData3],
    });
    iTeamRosterSeasonOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching team roster by season:", error);
  }

  try {
    // Get Roster Season for Team
    const rosterSeasonUrl1 = "https://api-web.nhle.com/v1/roster-season/TOR";
    const rosterSeasonData1 = await getRequest(rosterSeasonUrl1);

    const rosterSeasonUrl2 = "https://api-web.nhle.com/v1/roster-season/MTL";
    const rosterSeasonData2 = await getRequest(rosterSeasonUrl2);

    const rosterSeasonUrl3 = "https://api-web.nhle.com/v1/roster-season/BOS";
    const rosterSeasonData3 = await getRequest(rosterSeasonUrl3);

    const iRosterSeasonOutput = new Gen("IRosterSeasonOutput", "./output/interfaces/team/roster/season/info", {
      backupOldFile: false,
      fileName: "RosterSeason",
      jsonVariations: [rosterSeasonData1, rosterSeasonData2, rosterSeasonData3],
    });
    iRosterSeasonOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching roster season:", error);
  }

  try {
    // Get Team Prospects
    const teamProspectsUrl1 = "https://api-web.nhle.com/v1/prospects/TOR";
    const teamProspectsData1 = await getRequest(teamProspectsUrl1);

    const teamProspectsUrl2 = "https://api-web.nhle.com/v1/prospects/MTL";
    const teamProspectsData2 = await getRequest(teamProspectsUrl2);

    const teamProspectsUrl3 = "https://api-web.nhle.com/v1/prospects/BOS";
    const teamProspectsData3 = await getRequest(teamProspectsUrl3);

    const iTeamProspectsOutput = new Gen("ITeamProspectsOutput", "./output/interfaces/team/prospects", {
      backupOldFile: false,
      fileName: "TeamProspects",
      jsonVariations: [teamProspectsData1, teamProspectsData2, teamProspectsData3],
    });
    iTeamProspectsOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching team prospects:", error);
  }

  try {
    // Get Current Standings
    const currentStandingsUrl = "https://api-web.nhle.com/v1/standings/now";
    const currentStandingsData = await getRequest(currentStandingsUrl);

    const iCurrentStandingsOutput = new Gen("ICurrentStandingsOutput", "./output/interfaces/standings/current", {
      backupOldFile: false,
      fileName: "CurrentStandings",
      jsonVariations: [currentStandingsData],
    });
    iCurrentStandingsOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching current standings:", error);
  }

  try {
    // Get Standings by Date
    const standingsByDateUrl1 = "https://api-web.nhle.com/v1/standings/2023-11-10";
    const standingsByDateData1 = await getRequest(standingsByDateUrl1);

    const standingsByDateUrl2 = "https://api-web.nhle.com/v1/standings/2023-12-01";
    const standingsByDateData2 = await getRequest(standingsByDateUrl2);

    const standingsByDateUrl3 = "https://api-web.nhle.com/v1/standings/2023-01-15";
    const standingsByDateData3 = await getRequest(standingsByDateUrl3);

    const iStandingsByDateOutput = new Gen("IStandingsByDateOutput", "./output/interfaces/standings/by-date", {
      backupOldFile: false,
      fileName: "StandingsByDate",
      jsonVariations: [standingsByDateData1, standingsByDateData2, standingsByDateData3],
    });
    iStandingsByDateOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching standings by date:", error);
  }

  try {
    // Get Standings Information for Each Season
    const standingsSeasonUrl = "https://api-web.nhle.com/v1/standings-season";
    const standingsSeasonData = await getRequest(standingsSeasonUrl);

    const iStandingsSeasonOutput = new Gen("IStandingsSeasonOutput", "./output/interfaces/standings/season", {
      backupOldFile: false,
      fileName: "StandingsSeason",
      jsonVariations: [standingsSeasonData],
    });
    iStandingsSeasonOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching standings for season:", error);
  }

  try {
    // Get Team Scoreboard as of Now
    const teamScoreboardUrl1 = "https://api-web.nhle.com/v1/scoreboard/TOR/now";
    const teamScoreboardData1 = await getRequest(teamScoreboardUrl1);

    const teamScoreboardUrl2 = "https://api-web.nhle.com/v1/scoreboard/MTL/now";
    const teamScoreboardData2 = await getRequest(teamScoreboardUrl2);

    const teamScoreboardUrl3 = "https://api-web.nhle.com/v1/scoreboard/BOS/now";
    const teamScoreboardData3 = await getRequest(teamScoreboardUrl3);

    const iTeamScoreboardNowOutput = new Gen("ITeamScoreboardNowOutput", "./output/interfaces/team/scoreboard/now", {
      backupOldFile: false,
      fileName: "TeamScoreboardNow",
      jsonVariations: [teamScoreboardData1, teamScoreboardData2, teamScoreboardData3],
    });
    iTeamScoreboardNowOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching team scoreboard:", error);
  }

  try {
    // Get Club Stats by Season and Game Type
    const clubStatsSeasonUrl1 = "https://api-web.nhle.com/v1/club-stats/TOR/20232024/2";
    const clubStatsSeasonData1 = await getRequest(clubStatsSeasonUrl1);

    const clubStatsSeasonUrl2 = "https://api-web.nhle.com/v1/club-stats/MTL/20222023/2";
    const clubStatsSeasonData2 = await getRequest(clubStatsSeasonUrl2);

    const clubStatsSeasonUrl3 = "https://api-web.nhle.com/v1/club-stats/BOS/20212022/3";
    const clubStatsSeasonData3 = await getRequest(clubStatsSeasonUrl3);

    const iClubStatsSeasonOutput = new Gen("IClubStatsSeasonOutput", "./output/interfaces/club/stats/season", {
      backupOldFile: false,
      fileName: "ClubStatsSeason",
      jsonVariations: [clubStatsSeasonData1, clubStatsSeasonData2, clubStatsSeasonData3],
    });
    iClubStatsSeasonOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching club stats by season:", error);
  }

  try {
    // Get Current Schedule
    const currentScheduleUrl = "https://api-web.nhle.com/v1/schedule/now";
    const currentScheduleData = await getRequest(currentScheduleUrl);

    const iCurrentScheduleOutput = new Gen("ICurrentScheduleOutput", "./output/interfaces/schedule/current", {
      backupOldFile: false,
      fileName: "CurrentSchedule",
      jsonVariations: [currentScheduleData],
    });
    iCurrentScheduleOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching current schedule:", error);
  }

  try {
    // Get Schedule by Date
    const scheduleByDateUrl1 = "https://api-web.nhle.com/v1/schedule/2023-11-10";
    const scheduleByDateData1 = await getRequest(scheduleByDateUrl1);

    const scheduleByDateUrl2 = "https://api-web.nhle.com/v1/schedule/2023-12-15";
    const scheduleByDateData2 = await getRequest(scheduleByDateUrl2);

    const scheduleByDateUrl3 = "https://api-web.nhle.com/v1/schedule/2024-01-01";
    const scheduleByDateData3 = await getRequest(scheduleByDateUrl3);

    const iScheduleByDateOutput = new Gen("IScheduleByDateOutput", "./output/interfaces/schedule/by-date", {
      backupOldFile: false,
      fileName: "ScheduleByDate",
      jsonVariations: [scheduleByDateData1, scheduleByDateData2, scheduleByDateData3],
    });
    iScheduleByDateOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching schedule by date:", error);
  }

  try {
    // Get Play By Play
    const playByPlayUrl1 = "https://api-web.nhle.com/v1/gamecenter/2023020204/play-by-play";
    const playByPlayData1 = await getRequest(playByPlayUrl1);

    const playByPlayUrl2 = "https://api-web.nhle.com/v1/gamecenter/2023020205/play-by-play";
    const playByPlayData2 = await getRequest(playByPlayUrl2);

    const playByPlayUrl3 = "https://api-web.nhle.com/v1/gamecenter/2023020206/play-by-play";
    const playByPlayData3 = await getRequest(playByPlayUrl3);

    const iPlayByPlayOutput = new Gen("IPlayByPlayOutput", "./output/interfaces/gamecenter/play-by-play", {
      backupOldFile: false,
      fileName: "PlayByPlay",
      jsonVariations: [playByPlayData1, playByPlayData2, playByPlayData3],
    });
    iPlayByPlayOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching play by play data:", error);
  }

  try {
    // Get Landing
    const gameLandingUrl1 = "https://api-web.nhle.com/v1/gamecenter/2023020204/landing";
    const gameLandingData1 = await getRequest(gameLandingUrl1);

    const gameLandingUrl2 = "https://api-web.nhle.com/v1/gamecenter/2023020205/landing";
    const gameLandingData2 = await getRequest(gameLandingUrl2);

    const gameLandingUrl3 = "https://api-web.nhle.com/v1/gamecenter/2023020206/landing";
    const gameLandingData3 = await getRequest(gameLandingUrl3);

    const iGameLandingOutput = new Gen("IGameLandingOutput", "./output/interfaces/gamecenter/landing", {
      backupOldFile: false,
      fileName: "GameLanding",
      jsonVariations: [gameLandingData1, gameLandingData2, gameLandingData3],
    });
    iGameLandingOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching game landing data:", error);
  }

  try {
    // Get Boxscore
    const boxscoreUrl1 = "https://api-web.nhle.com/v1/gamecenter/2023020204/boxscore";
    const boxscoreData1 = await getRequest(boxscoreUrl1);

    const boxscoreUrl2 = "https://api-web.nhle.com/v1/gamecenter/2023020205/boxscore";
    const boxscoreData2 = await getRequest(boxscoreUrl2);

    const boxscoreUrl3 = "https://api-web.nhle.com/v1/gamecenter/2023020206/boxscore";
    const boxscoreData3 = await getRequest(boxscoreUrl3);

    const iBoxscoreOutput = new Gen("IBoxscoreOutput", "./output/interfaces/gamecenter/boxscore", {
      backupOldFile: false,
      fileName: "Boxscore",
      jsonVariations: [boxscoreData1, boxscoreData2, boxscoreData3],
    });
    iBoxscoreOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching boxscore data:", error);
  }

  try {
    // Get Game Story
    const gameStoryUrl1 = "https://api-web.nhle.com/v1/wsc/game-story/2023020204";
    const gameStoryData1 = await getRequest(gameStoryUrl1);

    const gameStoryUrl2 = "https://api-web.nhle.com/v1/wsc/game-story/2023020205";
    const gameStoryData2 = await getRequest(gameStoryUrl2);

    const gameStoryUrl3 = "https://api-web.nhle.com/v1/wsc/game-story/2023020206";
    const gameStoryData3 = await getRequest(gameStoryUrl3);

    const iGameStoryOutput = new Gen("IGameStoryOutput", "./output/interfaces/gamecenter/game-story", {
      backupOldFile: false,
      fileName: "GameStory",
      jsonVariations: [gameStoryData1, gameStoryData2, gameStoryData3],
    });
    iGameStoryOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching game story data:", error);
  }

  try {
    // Get TV Schedule for a Specific Date
    const tvScheduleByDateUrl1 = "https://api-web.nhle.com/v1/network/tv-schedule/2023-11-10";
    const tvScheduleByDateData1 = await getRequest(tvScheduleByDateUrl1);

    const tvScheduleByDateUrl2 = "https://api-web.nhle.com/v1/network/tv-schedule/2023-12-01";
    const tvScheduleByDateData2 = await getRequest(tvScheduleByDateUrl2);

    const tvScheduleByDateUrl3 = "https://api-web.nhle.com/v1/network/tv-schedule/2023-01-15";
    const tvScheduleByDateData3 = await getRequest(tvScheduleByDateUrl3);

    const iTvScheduleByDateOutput = new Gen("ITvScheduleByDateOutput", "./output/interfaces/network/tv-schedule", {
      backupOldFile: false,
      fileName: "TvScheduleByDate",
      jsonVariations: [tvScheduleByDateData1, tvScheduleByDateData2, tvScheduleByDateData3],
    });
    iTvScheduleByDateOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching TV schedule by date:", error);
  }

  try {
    // Get Streams
    const streamsUrl = "https://api-web.nhle.com/v1/where-to-watch";
    const streamsData = await getRequest(streamsUrl);

    const iStreamsOutput = new Gen("IStreamsOutput", "./output/interfaces/network/streams", {
      backupOldFile: false,
      fileName: "Streams",
      jsonVariations: [streamsData],
    });
    iStreamsOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching streams data:", error);
  }

  try {
    // Get Meta Information
    const metaInfoUrl1 = "https://api-web.nhle.com/v1/meta?players=8478402&teams=EDM,TOR";
    const metaInfoData1 = await getRequest(metaInfoUrl1);

    const metaInfoUrl2 = "https://api-web.nhle.com/v1/meta?players=8478403&teams=MTL,BOS";
    const metaInfoData2 = await getRequest(metaInfoUrl2);

    const metaInfoUrl3 = "https://api-web.nhle.com/v1/meta?players=8478404&teams=NYR,CHI";
    const metaInfoData3 = await getRequest(metaInfoUrl3);

    const iMetaInfoOutput = new Gen("IMetaInfoOutput", "./output/interfaces/meta/info", {
      backupOldFile: false,
      fileName: "MetaInfo",
      jsonVariations: [metaInfoData1, metaInfoData2, metaInfoData3],
    });
    iMetaInfoOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching meta info data:", error);
  }

  try {
    // Get Game Information
    const gameInfoUrl1 = "https://api-web.nhle.com/v1/meta/game/2023020204";
    const gameInfoData1 = await getRequest(gameInfoUrl1);

    const gameInfoUrl2 = "https://api-web.nhle.com/v1/meta/game/2023020205";
    const gameInfoData2 = await getRequest(gameInfoUrl2);

    const gameInfoUrl3 = "https://api-web.nhle.com/v1/meta/game/2023020206";
    const gameInfoData3 = await getRequest(gameInfoUrl3);

    const iGameInfoOutput = new Gen("IGameInfoOutput", "./output/interfaces/gamecenter/game-info", {
      backupOldFile: false,
      fileName: "GameInfo",
      jsonVariations: [gameInfoData1, gameInfoData2, gameInfoData3],
    });
    iGameInfoOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching game info data:", error);
  }

  // NHL Stats API

  try {
    // Get Player Information
    const statsPlayerInfoUrl1 = "https://api.nhle.com/stats/rest/en/players";
    const statsPlayerInfoData1 = await getRequest(statsPlayerInfoUrl1);

    const statsPlayerInfoUrl2 = "https://api.nhle.com/stats/rest/fr/players";
    const statsPlayerInfoData2 = await getRequest(statsPlayerInfoUrl2);

    const statsPlayerInfoUrl3 = "https://api.nhle.com/stats/rest/es/players";
    const statsPlayerInfoData3 = await getRequest(statsPlayerInfoUrl3);

    const iStatsPlayerInfoOutput = new Gen("IStatsPlayerInfoOutput", "./output/interfaces/stats/players/info", {
      backupOldFile: false,
      fileName: "StatsPlayerInfo",
      jsonVariations: [statsPlayerInfoData1, statsPlayerInfoData2, statsPlayerInfoData3],
    });
    iStatsPlayerInfoOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching stats player info:", error);
  }

  try {
    // Get Skater Leaders
    const statsSkaterLeadersUrl1 = "https://api.nhle.com/stats/rest/en/leaders/skaters/points";
    const statsSkaterLeadersData1 = await getRequest(statsSkaterLeadersUrl1);

    const statsSkaterLeadersUrl2 = "https://api.nhle.com/stats/rest/en/leaders/skaters/goals";
    const statsSkaterLeadersData2 = await getRequest(statsSkaterLeadersUrl2);

    const statsSkaterLeadersUrl3 = "https://api.nhle.com/stats/rest/en/leaders/skaters/assists";
    const statsSkaterLeadersData3 = await getRequest(statsSkaterLeadersUrl3);

    const iStatsSkaterLeadersOutput = new Gen("IStatsSkaterLeadersOutput", "./output/interfaces/stats/skaters/leaders", {
      backupOldFile: false,
      fileName: "StatsSkaterLeaders",
      jsonVariations: [statsSkaterLeadersData1, statsSkaterLeadersData2, statsSkaterLeadersData3],
    });
    iStatsSkaterLeadersOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching stats skater leaders:", error);
  }

  try {
    // Get Skater Milestones
    const statsSkaterMilestonesUrl1 = "https://api.nhle.com/stats/rest/en/milestones/skaters";
    const statsSkaterMilestonesData1 = await getRequest(statsSkaterMilestonesUrl1);

    const statsSkaterMilestonesUrl2 = "https://api.nhle.com/stats/rest/fr/milestones/skaters";
    const statsSkaterMilestonesData2 = await getRequest(statsSkaterMilestonesUrl2);

    const statsSkaterMilestonesUrl3 = "https://api.nhle.com/stats/rest/es/milestones/skaters";
    const statsSkaterMilestonesData3 = await getRequest(statsSkaterMilestonesUrl3);

    const iStatsSkaterMilestonesOutput = new Gen("IStatsSkaterMilestonesOutput", "./output/interfaces/stats/skaters/milestones", {
      backupOldFile: false,
      fileName: "StatsSkaterMilestones",
      jsonVariations: [statsSkaterMilestonesData1, statsSkaterMilestonesData2, statsSkaterMilestonesData3],
    });
    iStatsSkaterMilestonesOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching stats skater milestones:", error);
  }

  try {
    // Get Skater Stats
    const statsSkaterStatsUrl1 = "https://api.nhle.com/stats/rest/en/skater/summary?limit=72&start=17&sort=points&cayenneExp=seasonId=20232024";
    const statsSkaterStatsData1 = await getRequest(statsSkaterStatsUrl1);

    const statsSkaterStatsUrl2 = "https://api.nhle.com/stats/rest/en/skater/summary?limit=50&start=10&sort=goals&cayenneExp=seasonId=20222023";
    const statsSkaterStatsData2 = await getRequest(statsSkaterStatsUrl2);

    const statsSkaterStatsUrl3 = "https://api.nhle.com/stats/rest/en/skater/summary?limit=100&start=20&sort=assists&cayenneExp=seasonId=20212022";
    const statsSkaterStatsData3 = await getRequest(statsSkaterStatsUrl3);

    const iStatsSkaterStatsOutput = new Gen("IStatsSkaterStatsOutput", "./output/interfaces/stats/skaters/stats", {
      backupOldFile: false,
      fileName: "StatsSkaterStats",
      jsonVariations: [statsSkaterStatsData1, statsSkaterStatsData2, statsSkaterStatsData3],
    });
    iStatsSkaterStatsOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching stats skater stats:", error);
  }

  try {
    // Get Goalie Leaders
    const statsGoalieLeadersUrl1 = "https://api.nhle.com/stats/rest/en/leaders/goalies/gaa";
    const statsGoalieLeadersData1 = await getRequest(statsGoalieLeadersUrl1);

    const statsGoalieLeadersUrl2 = "https://api.nhle.com/stats/rest/en/leaders/goalies/save-percentage";
    const statsGoalieLeadersData2 = await getRequest(statsGoalieLeadersUrl2);

    const statsGoalieLeadersUrl3 = "https://api.nhle.com/stats/rest/en/leaders/goalies/wins";
    const statsGoalieLeadersData3 = await getRequest(statsGoalieLeadersUrl3);

    const iStatsGoalieLeadersOutput = new Gen("IStatsGoalieLeadersOutput", "./output/interfaces/stats/goalies/leaders", {
      backupOldFile: false,
      fileName: "StatsGoalieLeaders",
      jsonVariations: [statsGoalieLeadersData1, statsGoalieLeadersData2, statsGoalieLeadersData3],
    });
    iStatsGoalieLeadersOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching stats goalie leaders:", error);
  }

  try {
    // Get Goalie Stats
    const statsGoalieStatsUrl1 = "https://api.nhle.com/stats/rest/en/goalie/summary?limit=72&start=15&sort=wins&cayenneExp=seasonId=20232024";
    const statsGoalieStatsData1 = await getRequest(statsGoalieStatsUrl1);

    const statsGoalieStatsUrl2 = "https://api.nhle.com/stats/rest/en/goalie/summary?limit=50&start=10&sort=gaa&cayenneExp=seasonId=20222023";
    const statsGoalieStatsData2 = await getRequest(statsGoalieStatsUrl2);

    const statsGoalieStatsUrl3 =
      "https://api.nhle.com/stats/rest/en/goalie/summary?limit=100&start=20&sort=save-percentage&cayenneExp=seasonId=20212022";
    const statsGoalieStatsData3 = await getRequest(statsGoalieStatsUrl3);

    const iStatsGoalieStatsOutput = new Gen("IStatsGoalieStatsOutput", "./output/interfaces/stats/goalies/stats", {
      backupOldFile: false,
      fileName: "StatsGoalieStats",
      jsonVariations: [statsGoalieStatsData1, statsGoalieStatsData2, statsGoalieStatsData3],
    });
    iStatsGoalieStatsOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching stats goalie stats:", error);
  }

  try {
    // Get Draft Information
    const statsDraftInfoUrl1 = "https://api.nhle.com/stats/rest/en/draft";
    const statsDraftInfoData1 = await getRequest(statsDraftInfoUrl1);

    const statsDraftInfoUrl2 = "https://api.nhle.com/stats/rest/fr/draft";
    const statsDraftInfoData2 = await getRequest(statsDraftInfoUrl2);

    const statsDraftInfoUrl3 = "https://api.nhle.com/stats/rest/es/draft";
    const statsDraftInfoData3 = await getRequest(statsDraftInfoUrl3);

    const iStatsDraftInfoOutput = new Gen("IStatsDraftInfoOutput", "./output/interfaces/stats/draft", {
      backupOldFile: false,
      fileName: "StatsDraftInfo",
      jsonVariations: [statsDraftInfoData1, statsDraftInfoData2, statsDraftInfoData3],
    });
    iStatsDraftInfoOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching stats draft info:", error);
  }

  try {
    // Get Team Information
    const statsTeamInfoUrl1 = "https://api.nhle.com/stats/rest/en/team";
    const statsTeamInfoData1 = await getRequest(statsTeamInfoUrl1);

    const statsTeamInfoUrl2 = "https://api.nhle.com/stats/rest/fr/team";
    const statsTeamInfoData2 = await getRequest(statsTeamInfoUrl2);

    const statsTeamInfoUrl3 = "https://api.nhle.com/stats/rest/es/team";
    const statsTeamInfoData3 = await getRequest(statsTeamInfoUrl3);

    const iStatsTeamInfoOutput = new Gen("IStatsTeamInfoOutput", "./output/interfaces/stats/team/info", {
      backupOldFile: false,
      fileName: "StatsTeamInfo",
      jsonVariations: [statsTeamInfoData1, statsTeamInfoData2, statsTeamInfoData3],
    });
    iStatsTeamInfoOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching stats team info:", error);
  }

  try {
    // Get Team Stats
    const statsTeamStatsUrl1 =
      "https://api.nhle.com/stats/rest/en/team/summary?sort=shotsForPerGame&cayenneExp=seasonId=20232024%20and%20gameTypeId=2";
    const statsTeamStatsData1 = await getRequest(statsTeamStatsUrl1);

    const statsTeamStatsUrl2 =
      "https://api.nhle.com/stats/rest/en/team/summary?sort=goalsForPerGame&cayenneExp=seasonId=20222023%20and%20gameTypeId=2";
    const statsTeamStatsData2 = await getRequest(statsTeamStatsUrl2);

    const statsTeamStatsUrl3 =
      "https://api.nhle.com/stats/rest/en/team/summary?sort=shotsAgainstPerGame&cayenneExp=seasonId=20212022%20and%20gameTypeId=3";
    const statsTeamStatsData3 = await getRequest(statsTeamStatsUrl3);

    const iStatsTeamStatsOutput = new Gen("IStatsTeamStatsOutput", "./output/interfaces/stats/team/stats", {
      backupOldFile: false,
      fileName: "StatsTeamStats",
      jsonVariations: [statsTeamStatsData1, statsTeamStatsData2, statsTeamStatsData3],
    });
    iStatsTeamStatsOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching stats team stats:", error);
  }

  try {
    // Get Season Information
    const statsSeasonInfoUrl1 = "https://api.nhle.com/stats/rest/en/season";
    const statsSeasonInfoData1 = await getRequest(statsSeasonInfoUrl1);

    const statsSeasonInfoUrl2 = "https://api.nhle.com/stats/rest/fr/season";
    const statsSeasonInfoData2 = await getRequest(statsSeasonInfoUrl2);

    const statsSeasonInfoUrl3 = "https://api.nhle.com/stats/rest/es/season";
    const statsSeasonInfoData3 = await getRequest(statsSeasonInfoUrl3);

    const iStatsSeasonInfoOutput = new Gen("IStatsSeasonInfoOutput", "./output/interfaces/stats/season/info", {
      backupOldFile: false,
      fileName: "StatsSeasonInfo",
      jsonVariations: [statsSeasonInfoData1, statsSeasonInfoData2, statsSeasonInfoData3],
    });
    iStatsSeasonInfoOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching stats season info:", error);
  }

  try {
    // Get Game Information
    const statsGameInfoUrl1 = "https://api.nhle.com/stats/rest/en/game";
    const statsGameInfoData1 = await getRequest(statsGameInfoUrl1);

    const statsGameInfoUrl2 = "https://api.nhle.com/stats/rest/fr/game";
    const statsGameInfoData2 = await getRequest(statsGameInfoUrl2);

    const statsGameInfoUrl3 = "https://api.nhle.com/stats/rest/es/game";
    const statsGameInfoData3 = await getRequest(statsGameInfoUrl3);

    const iStatsGameInfoOutput = new Gen("IStatsGameInfoOutput", "./output/interfaces/stats/game/info", {
      backupOldFile: false,
      fileName: "StatsGameInfo",
      jsonVariations: [statsGameInfoData1, statsGameInfoData2, statsGameInfoData3],
    });
    iStatsGameInfoOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching stats game info:", error);
  }

  try {
    // Ping the Server
    const statsPingUrl = "https://api.nhle.com/stats/rest/ping";
    const statsPingData = await getRequest(statsPingUrl);

    const iStatsPingOutput = new Gen("IStatsPingOutput", "./output/interfaces/stats/server/ping", {
      backupOldFile: false,
      fileName: "StatsPing",
      jsonVariations: [statsPingData],
    });
    iStatsPingOutput.generateInterfaces();
  } catch (error) {
    console.error("Error pinging server:", error);
  }

  try {
    // Get Country Information
    const statsCountryInfoUrl1 = "https://api.nhle.com/stats/rest/en/country";
    const statsCountryInfoData1 = await getRequest(statsCountryInfoUrl1);

    const statsCountryInfoUrl2 = "https://api.nhle.com/stats/rest/fr/country";
    const statsCountryInfoData2 = await getRequest(statsCountryInfoUrl2);

    const statsCountryInfoUrl3 = "https://api.nhle.com/stats/rest/es/country";
    const statsCountryInfoData3 = await getRequest(statsCountryInfoUrl3);

    const iStatsCountryInfoOutput = new Gen("IStatsCountryInfoOutput", "./output/interfaces/stats/country/info", {
      backupOldFile: false,
      fileName: "StatsCountryInfo",
      jsonVariations: [statsCountryInfoData1, statsCountryInfoData2, statsCountryInfoData3],
    });
    iStatsCountryInfoOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching stats country info:", error);
  }

  try {
    // Get Shift Charts
    const statsShiftChartsUrl1 = "https://api.nhle.com/stats/rest/en/shiftcharts?cayenneExp=gameId=2021020001";
    const statsShiftChartsData1 = await getRequest(statsShiftChartsUrl1);

    const statsShiftChartsUrl2 = "https://api.nhle.com/stats/rest/en/shiftcharts?cayenneExp=gameId=2021020002";
    const statsShiftChartsData2 = await getRequest(statsShiftChartsUrl2);

    const statsShiftChartsUrl3 = "https://api.nhle.com/stats/rest/en/shiftcharts?cayenneExp=gameId=2021020003";
    const statsShiftChartsData3 = await getRequest(statsShiftChartsUrl3);

    const iStatsShiftChartsOutput = new Gen("IStatsShiftChartsOutput", "./output/interfaces/stats/game/shiftcharts", {
      backupOldFile: false,
      fileName: "StatsShiftCharts",
      jsonVariations: [statsShiftChartsData1, statsShiftChartsData2, statsShiftChartsData3],
    });
    iStatsShiftChartsOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching stats shift charts:", error);
  }

  try {
    // Get Glossary
    const statsGlossaryUrl1 = "https://api.nhle.com/stats/rest/en/glossary";
    const statsGlossaryData1 = await getRequest(statsGlossaryUrl1);

    const statsGlossaryUrl2 = "https://api.nhle.com/stats/rest/fr/glossary";
    const statsGlossaryData2 = await getRequest(statsGlossaryUrl2);

    const statsGlossaryUrl3 = "https://api.nhle.com/stats/rest/es/glossary";
    const statsGlossaryData3 = await getRequest(statsGlossaryUrl3);

    const iStatsGlossaryOutput = new Gen("IStatsGlossaryOutput", "./output/interfaces/stats/glossary", {
      backupOldFile: false,
      fileName: "StatsGlossary",
      jsonVariations: [statsGlossaryData1, statsGlossaryData2, statsGlossaryData3],
    });
    iStatsGlossaryOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching stats glossary:", error);
  }

  try {
    // Get Content Module
    const statsContentModuleUrl1 = "https://api.nhle.com/stats/rest/en/content/module";
    const statsContentModuleData1 = await getRequest(statsContentModuleUrl1);

    const statsContentModuleUrl2 = "https://api.nhle.com/stats/rest/fr/content/module";
    const statsContentModuleData2 = await getRequest(statsContentModuleUrl2);

    const statsContentModuleUrl3 = "https://api.nhle.com/stats/rest/es/content/module";
    const statsContentModuleData3 = await getRequest(statsContentModuleUrl3);

    const iStatsContentModuleOutput = new Gen("IStatsContentModuleOutput", "./output/interfaces/stats/content/module", {
      backupOldFile: false,
      fileName: "StatsContentModule",
      jsonVariations: [statsContentModuleData1, statsContentModuleData2, statsContentModuleData3],
    });
    iStatsContentModuleOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching stats content module:", error);
  }

  try {
    // Get Metadata for Content Module
    const statsContentModuleMetaUrl = "https://api.nhle.com/stats/rest/content/module/meta";
    const statsContentModuleMetaData = await getRequest(statsContentModuleMetaUrl);

    const iStatsContentModuleMetaOutput = new Gen("IStatsContentModuleMetaOutput", "./output/interfaces/stats/content/module/meta", {
      backupOldFile: false,
      fileName: "StatsContentModuleMeta",
      jsonVariations: [statsContentModuleMetaData],
    });
    iStatsContentModuleMetaOutput.generateInterfaces();
  } catch (error) {
    console.error("Error fetching stats content module metadata:", error);
  }
}

main();
