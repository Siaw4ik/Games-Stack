/* eslint-disable no-underscore-dangle */
import { IRouter, Routes } from "../modul/types";

class Router implements IRouter {
  routes: Routes[];

  constructor(routes: Routes[]) {
    this.routes = routes;
    this._loadInitialRoute();
  }

  loadRoute(...urlSegments: string[]) {
    const matchedRoute = this._matchUrlToRoute(urlSegments);
    const url = `/${urlSegments.join("/")}`;

    window.history.pushState({}, "", url);

    const routerOutletElement = <HTMLElement>(
      document.querySelectorAll("[data-router-outlet]")[0]
    );

    if (routerOutletElement && matchedRoute.getTemplate) {
      routerOutletElement.innerHTML = matchedRoute.getTemplate(
        matchedRoute.params
      );
    }
  }

  _matchUrlToRoute(urlSegments: string[]) {
    const routeParams: Record<string, string> = {};

    const matchedRoute = this.routes.find((route: Routes) => {
      const routePathSegments = route.path.split("/").slice(1);

      if (routePathSegments.length !== urlSegments.length) {
        return false;
      }

      const match = routePathSegments.every((routePathSegment, i: number) => {
        return (
          routePathSegment === urlSegments[i] || routePathSegment[0] === ":"
        );
      });

      if (match) {
        routePathSegments.forEach((segment, i: number) => {
          if (segment[0] === ":") {
            const propName = segment.slice(1);
            routeParams[propName] = decodeURIComponent(urlSegments[i]);
          }
        });
      }
      return match;
    });
    return { ...matchedRoute, params: routeParams };
  }

  _loadInitialRoute() {
    const pathNameSplit = window.location.pathname.split("/");
    const pathSegments = pathNameSplit.length > 1 ? pathNameSplit.slice(1) : "";

    this.loadRoute(...pathSegments);
  }
}

export default Router;
