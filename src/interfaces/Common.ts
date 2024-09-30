/* -------------------------------------------------------------------------- */
/*                                Common Inputs                               */
/* -------------------------------------------------------------------------- */
export interface ICommonPlayerInput {
  /**
   * Player ID
   */
  playerId: number;
}

export interface ICommonTeamInput {
  /**
   * Three-letter team code
   */
  team: TEAM_TRI_CODE;
}

export interface ICommonTeamSeasonGameTypeInput {
  /**
   * Three-letter team code
   */
  team: TEAM_TRI_CODE;

  /**
   * Season in YYYYYYYY format, where the first four digits represent the start year of the season, and the last four digits represent the end year.
   */
  season: number;

  /**
   * Game type
   */
  gameType: GAME_TYPE;
}

export interface ICommonTeamSeasonInput {
  /**
   * Three-letter team code
   */
  team: TEAM_TRI_CODE;

  /**
   * Season in YYYYYYYY format, where the first four digits represent the start year of the season, and the last four digits represent the end year.
   */
  season: number;
}

export interface ICommonTeamMonthInput {
  /**
   * Three-letter team code
   */
  team: TEAM_TRI_CODE;

  /**
   * Month in YYYY-MM format.
   */
  month: string;
}

export interface ICommonTeamDateInput {
  /**
   * Three-letter team code
   */
  team: TEAM_TRI_CODE;

  /**
   * Date in YYYY-MM-DD format
   */
  date: string;
}

export interface ICommonPlayerSeasonGameTypeInput {
  /**
   * Player ID
   */
  playerId: number;

  /**
   * Season in YYYYYYYY format, where the first four digits represent the start year of the season, and the last four digits represent the end year.
   */
  season: number;

  /**
   * Game type
   */
  gameType: GAME_TYPE;
}

export interface ICommonCategoriesLimitInput {
  /**
   * The categories of stats.
   */
  categories?: string[];

  /**
   * The number of rows to return. A limit of -1 will return all stats
   */
  limit?: number;
}

export interface ICommonSeasonGameTypeCategoriesLimitInput extends ICommonCategoriesLimitInput {
  /**
   * Season in YYYYYYYY format, where the first four digits represent the start year of the season, and the last four digits represent the end year.
   */
  season: number;

  /**
   * Game type
   */
  gameType: GAME_TYPE;
}

export interface ICommonDateInput {
  /**
   * Date in YYYY-MM-DD format
   */
  date: string;
}

export interface ICommonGameIdInput {
  /**
   * Game ID
   */
  gameId: number;
}

export interface ICommonSeasonInput {
  /**
   * Season in YYYYYYYY format, where the first four digits represent the start year of the season, and the last four digits represent the end year.
   */
  season: number;
}

export interface ICommonYearInput {
  /**
   * Year in YYYY format
   */
  year: number;
}

export interface ICommonLangInput {
  /**
   * Language code
   */
  lang: string;
}

export interface ICommonLangAttrInput {
  /**
   * Language code
   */
  lang: string;

  /**
   * Attribute
   */
  attribute: string;
}

/* -------------------------------------------------------------------------- */
/*                                    Enums                                   */
/* -------------------------------------------------------------------------- */
export enum GAME_TYPE {
  PRESEASON = 1,
  REGULAR_SEASON = 2,
  POSTSEASON = 3,
}

export enum PROSPECT_CATEGORY {
  NORTH_AMERICAN_SKATER = 1,
  INTERNATIONAL_SKATER = 2,
  NORTH_AMERICAN_GOALIE = 3,
  INTERNATIONAL_GOALIE = 4,
}

export enum TEAM_TRI_CODE {
  ATLANTA_THRASHERS = "ATL",
  HARTFORD_WHALERS = "HFD",
  QUEBEC_NORDIQUES = "QUE",
  WINNIPEG_JETS_1979 = "WIN",
  COLORADO_ROCKIES = "CLR",
  OTTAWA_SENATORS_1917 = "SEN",
  HAMILTON_TIGERS = "HAM",
  PITTSBURGH_PIRATES = "PIR",
  PHILADELPHIA_QUAKERS = "QUA",
  DETROIT_COUGARS = "DCG",
  MONTREAL_WANDERERS = "MWN",
  QUEBEC_BULLDOGS = "QBD",
  MONTREAL_MAROONS = "MMR",
  NEW_YORK_AMERICANS = "NYA",
  ST_LOUIS_EAGLES = "SLE",
  OAKLAND_SEALS = "OAK",
  ATLANTA_FLAMES = "AFM",
  KANSAS_CITY_SCOUTS = "KCS",
  DETROIT_FALCONS = "DFL",
  BROOKLYN_AMERICANS = "BRK",
  TORONTO_ARENAS = "TAN",
  TORONTO_ST_PATRICKS = "TSP",
  NHL = "NHL",
  DETROIT_RED_WINGS = "DET",
  BOSTON_BRUINS = "BOS",
  PITTSBURGH_PENGUINS = "PIT",
  TAMPA_BAY_LIGHTNING = "TBL",
  PHILADELPHIA_FLYERS = "PHI",
  CAROLINA_HURRICANES = "CAR",
  CALGARY_FLAMES = "CGY",
  MONTREAL_CANADIENS = "MTL",
  WASHINGTON_CAPITALS = "WSH",
  VANCOUVER_CANUCKS = "VAN",
  COLORADO_AVALANCHE = "COL",
  NASHVILLE_PREDATORS = "NSH",
  ANAHEIM_DUCKS = "ANA",
  VEGAS_GOLDEN_KNIGHTS = "VGK",
  DALLAS_STARS = "DAL",
  PHOENIX_COYOTES = "PHX",
  CHICAGO_BLACKHAWKS = "CHI",
  NEW_YORK_RANGERS = "NYR",
  FLORIDA_PANTHERS = "FLA",
  EDMONTON_OILERS = "EDM",
  MINNESOTA_WILD = "MIN",
  ST_LOUIS_BLUES = "STL",
  NEW_YORK_ISLANDERS = "NYI",
  LOS_ANGELES_KINGS = "LAK",
  TBD = "TBD",
  BUFFALO_SABRES = "BUF",
  OTTAWA_SENATORS = "OTT",
  TORONTO_MAPLE_LEAFS = "TOR",
  NEW_JERSEY_DEVILS = "NJD",
  WINNIPEG_JETS = "WPG",
  SEATTLE_KRAKEN = "SEA",
  SAN_JOSE_SHARKS = "SJS",
  ARIZONA_COYOTES = "ARI",
  UTAH_HOCKEY_CLUB = "UTA",
  COLUMBUS_BLUE_JACKETS = "CBJ",
  MINNESOTA_NORTH_STARS = "MNS",
  CLEVELAND_BARONS = "CLE",
  CALIFORNIA_GOLDEN_SEALS = "CGS",
}
