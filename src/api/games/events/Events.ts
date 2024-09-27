import {
  IGameBoxScoreInput,
  IGameBoxScoreOutput,
  IGameLandingPageInput,
  IGameLandingPageOutput,
  IPlaybyPlayInput,
  IPlaybyPlayOutput,
} from "../../../interfaces/Games";
import { BASE_URL, IResponse, sendGetRequest } from "../../../internal/Requests";

/**
 * Retrieve the play-by-play for a specific game.
 * @param options The game ID to retrieve the play-by-play for.
 * @returns The play-by-play for the game.
 */
export async function getPlayByPlay(options: IPlaybyPlayInput): Promise<IResponse<IPlaybyPlayOutput>> {
  return await sendGetRequest<IPlaybyPlayOutput>(BASE_URL.NORMAL, "gamecenter/{game-id}/play-by-play", options);
}

/**
 * Retrieve the landing page for a specific game.
 * @param options The game ID to retrieve the landing page for.
 * @returns The landing page for the game.
 */
export async function getGameLandingPage(options: IGameLandingPageInput): Promise<IResponse<IGameLandingPageOutput>> {
  return await sendGetRequest<IGameLandingPageOutput>(BASE_URL.NORMAL, "gamecenter/{game-id}/landing", options);
}

/**
 * Retrieve the box score for a specific game.
 * @param options The game ID to retrieve the box score for.
 * @returns The box score for the game.
 */
export async function getBoxScore(options: IGameBoxScoreInput): Promise<IResponse<IGameBoxScoreOutput>> {
  return await sendGetRequest<IGameBoxScoreOutput>(BASE_URL.NORMAL, "gamecenter/{game-id}/boxscore", options);
}
