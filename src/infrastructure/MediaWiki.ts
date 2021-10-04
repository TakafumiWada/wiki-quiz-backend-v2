import wikiApi from "wikijs";
import { MEDIAWIKI_API_URL } from "../config";
import { WikiJS } from "../interfaces/types";
import { IMediaWikiApi } from "../interfaces/externalApi/IMediaWikiApi";

type UserAgent = Record<string, string>;

export class MediaWikiApi implements IMediaWikiApi {
  private apiUrl: string;
  private hedaers: UserAgent;

  constructor(userAgent: string) {
    this.apiUrl = MEDIAWIKI_API_URL;
    this.hedaers = {
      "User-Agent": userAgent,
    };
  }

  execute(): WikiJS {
    return wikiApi({
      apiUrl: this.apiUrl,
      headers: this.hedaers,
    });
  }
}
