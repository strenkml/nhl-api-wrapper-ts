import { IPlaybyPlayInput, IPlaybyPlayOutput } from "../../../interfaces/Games";
import { BASE_URL, IResponse, sendGetRequest } from "../../../internal/Requests";

export async function getPlayByPlay(options: IPlaybyPlayInput): Promise<IResponse<IPlaybyPlayOutput>> {
  return await sendGetRequest<IPlaybyPlayOutput>(BASE_URL.NORMAL, "gamecenter/{game-id}/play-by-play", options);
}
