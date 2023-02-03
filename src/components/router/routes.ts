import { Routes } from "../modul/types";

const routes: Routes[] = [
  {
    path: "/",
    getTemplate: () => "<h1>Main</h1>",
  },
  {
    path: "/results",
    getTemplate: () => "<h1>Results</h1>",
  },
  {
    path: "/game1",
    getTemplate: () => "<h1>Game 1</h1>",
  },
  {
    path: "/game2",
    getTemplate: () => "<h1>Game 2</h1>",
  },
  {
    path: "/game3",
    getTemplate: () => "<h1>Game 3</h1>",
  },
  {
    path: "/game4",
    getTemplate: () => "<h1>Game 4</h1>",
  },
];

export default routes;
