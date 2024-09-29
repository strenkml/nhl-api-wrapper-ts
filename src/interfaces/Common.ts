/* -------------------------------------------------------------------------- */
/*                                Common Inputs                               */
/* -------------------------------------------------------------------------- */
export interface IPlayerInput {
  /**
   * Player ID
   */
  playerId: number;
}

export interface ITeamInput {
  /**
   * Three-letter team code
   */
  team: string;
}

export interface ITeamSeasonGameTypeInput {
  /**
   * Three-letter team code
   */
  team: string;

  /**
   * Season in YYYYYYYY format, where the first four digits represent the start year of the season, and the last four digits represent the end year.
   */
  season: number;

  /**
   * Game type
   */
  gameType: GAME_TYPE;
}

export interface ITeamSeasonInput {
  /**
   * Three-letter team code
   */
  team: string;

  /**
   * Season in YYYYYYYY format, where the first four digits represent the start year of the season, and the last four digits represent the end year.
   */
  season: number;
}

export interface ITeamMonthInput {
  /**
   * Three-letter team code
   */
  team: string;

  /**
   * Month in YYYY-MM format.
   */
  month: string;
}

export interface ITeamDateInput {
  /**
   * Three-letter team code
   */
  team: string;

  /**
   * Date in YYYY-MM-DD format
   */
  date: string;
}

export interface IPlayerSeasonGameTypeInput {
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

export interface ICategoriesLimitInput {
  /**
   * The categories of stats.
   */
  categories?: string[];

  /**
   * The number of rows to return. A limit of -1 will return all stats
   */
  limit?: number;
}

export interface ISeasonGameTypeCategoriesLimitInput extends ICategoriesLimitInput {
  /**
   * Season in YYYYYYYY format, where the first four digits represent the start year of the season, and the last four digits represent the end year.
   */
  season: number;

  /**
   * Game type
   */
  gameType: GAME_TYPE;
}

export interface IDateInput {
  /**
   * Date in YYYY-MM-DD format
   */
  date: string;
}

export interface IGameIdInput {
  /**
   * Game ID
   */
  gameId: number;
}

export interface ISeasonInput {
  /**
   * Season in YYYYYYYY format, where the first four digits represent the start year of the season, and the last four digits represent the end year.
   */
  season: number;
}

export interface IYearInput {
  /**
   * Year in YYYY format
   */
  year: number;
}

export interface ILangInput {
  /**
   * Language code
   */
  lang: string;
}

export interface ILangAttrInput {
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
