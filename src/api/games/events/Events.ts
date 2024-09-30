import { IGameBoxscoreInput, IGameBoxscoreOutput } from "../../../interfaces/gamecenter/boxscore/GameBoxscore";
import { IGameLandingInput, IGameLandingOutput } from "../../../interfaces/gamecenter/landing/GameLanding";
import { IGamePlayByPlayInput, IGamePlayByPlayOutput } from "../../../interfaces/gamecenter/play-by-play/GamePlayByPlay";
import { IGameStoryInput, IGameStoryOutput } from "../../../interfaces/wsc/game-story/GameStory";
import { BASE_URL, IResponse, sendGetRequest } from "../../../internal/Requests";

/**
 * Retrieve the play-by-play for a specific game.
 * @param options The game ID to retrieve the play-by-play for.
 * @returns The play-by-play for the game.
 */
export async function getPlayByPlay(options: IGamePlayByPlayInput): Promise<IResponse<IGamePlayByPlayOutput>> {
  return await sendGetRequest<IGamePlayByPlayOutput>(BASE_URL.NORMAL, "gamecenter/{gameId}/play-by-play", options);
}

/**
 * Retrieve the landing page for a specific game.
 * @param options The game ID to retrieve the landing page for.
 * @returns The landing page for the game.
 */
export async function getGameLandingPage(options: IGameLandingInput): Promise<IResponse<IGameLandingOutput>> {
  return await sendGetRequest<IGameLandingOutput>(BASE_URL.NORMAL, "gamecenter/{gameId}/landing", options);
}

/**
 * Retrieve the box score for a specific game.
 * @param options The game ID to retrieve the box score for.
 * @returns The box score for the game.
 */
export async function getBoxScore(options: IGameBoxscoreInput): Promise<IResponse<IGameBoxscoreOutput>> {
  return await sendGetRequest<IGameBoxscoreOutput>(BASE_URL.NORMAL, "gamecenter/{gameId}/boxscore", options);
}

/**
 * Retrieve the game story for a specific game.
 * @param options The game ID to retrieve the game story for.
 * @returns The game story for the game.
 */
export async function getGameStory(options: IGameStoryInput): Promise<IResponse<IGameStoryOutput>> {
  return await sendGetRequest<IGameStoryOutput>(BASE_URL.NORMAL, "wsc/game-story/{gameId}", options);
}
