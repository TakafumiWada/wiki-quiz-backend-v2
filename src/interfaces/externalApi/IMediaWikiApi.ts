import { WikiJS } from "../../infrastructure/types";

export interface IMediaWikiApi {
  execute: () => WikiJS;
}
