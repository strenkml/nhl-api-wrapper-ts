import { IPlayersInput, IPlayersOutput } from "../../../interfaces/stats/players/Players";
import { BASE_URL, IResponse, sendGetRequest } from "../../../internal/Requests";

/**
 * Retrieve player information. Currently seems to return a truncated list with a total.
 * @param options The options to retrieve the player information.
 * @returns The player information.
 */
export async function getPlayers(options: IPlayersInput): Promise<IResponse<IPlayersOutput>> {
  return sendGetRequest<IPlayersOutput>(BASE_URL.STAT, "{lang}/players", options);
}
