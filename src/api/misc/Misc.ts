import { ILocationOutput } from "../../interfaces/location/Location";
import { IConfigInput, IConfigOutput } from "../../interfaces/stats/config/Config";
import { ICountryInput, ICountryOutput } from "../../interfaces/stats/country/Country";
import { IGlossaryInput, IGlossaryOutput } from "../../interfaces/stats/glossary/Glossary";
import { BASE_URL, IResponse, sendGetRequest, sendGetRequestWithoutParams } from "../../internal/Requests";

/**
 * Ping the server
 * @returns The response from the server
 */
async function pingServer(): Promise<IResponse<undefined>> {
  return sendGetRequestWithoutParams<undefined>(BASE_URL.STAT, "ping");
}

/**
 * Returns country code that the webserver thinks the user is in
 * @returns The location information
 */
async function getLocation(): Promise<IResponse<ILocationOutput>> {
  return sendGetRequestWithoutParams<ILocationOutput>(BASE_URL.NORMAL, "location");
}

/**
 * Retrieve configuration information
 * @param options The options to retrieve the configuration information
 * @returns The configuration information
 */
async function getConfig(options: IConfigInput): Promise<IResponse<IConfigOutput>> {
  return sendGetRequest<IConfigOutput>(BASE_URL.STAT, "{lang}/config", options);
}

/**
 * Retrieve country information. Returns list of all countries with a hockey presence(?)
 * @param options The options to retrieve the country information
 * @returns The country information
 */
async function getCountryInfo(options: ICountryInput): Promise<IResponse<ICountryOutput>> {
  return sendGetRequest<ICountryOutput>(BASE_URL.STAT, "{lang}/country", options);
}

/**
 * Retrieve the glossary for a specific language
 * @param options The options to retrieve the glossary
 * @returns The glossary
 */
async function getGlossary(options: IGlossaryInput): Promise<IResponse<IGlossaryOutput>> {
  return sendGetRequest<IGlossaryOutput>(BASE_URL.STAT, "{lang}/glossary", options);
}

export default {
  pingServer,
  getLocation,
  getConfig,
  getCountryInfo,
  getGlossary,
};
