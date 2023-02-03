/* eslint-disable no-unused-vars */
export type Settings = {
  lang: string;
  style: string;
  volume: boolean;
};

export type TypeUser = {
  username: string;
  password: string;
};

export type AnswerRecordUser = {
  success: boolean;
  message: string;
};

export interface IRouter {
  loadRoute(): void;
  _matchUrlToRoute(urlSegments: string[]): void;
  _loadInitialRoute(): void;
}

type Params = {
  productId?: string;
};

type templateCallback = (params: Record<string, string>) => string;

export type Routes = {
  path: string;
  param?: Params;
  getTemplate: templateCallback;
};
