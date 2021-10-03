import { Page, Result } from "wikijs";

export type WikiJS = {
  findById(pageID: string): Promise<Page>;
  find(query: string, predicate?: (pages: Page[]) => Page): Promise<Page>;
  geoSearch(lat: number, lon: number, radius?: number): Promise<string[]>;
  page(title: string): Promise<Page>;
  allPages(): Promise<string[]>;
  random(limit?: number): Promise<string[]>;
  search(query: string, limit?: number): Promise<Result>;
  opensearch(query: string, limit?: number): Promise<string[]>;
  prefixSearch(query: string, limit?: number): Promise<Result>;
  mostViewed(): Promise<{ title: string; count: number }[]>;
  allPages(): Promise<string[]>;
  allCategories(): Promise<string[]>;
  pagesInCategory(category: string): Promise<string[]>;
};
