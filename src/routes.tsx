import { RouteObject, createBrowserRouter } from "react-router-dom";
import { MainPage, NumbersGamePage } from "./pages";

enum Routes {
  root = "/",
  home = "/home",
  guess4 = "/guess4",
}

export const routes: RouteObject[] = [
  {
    path: Routes.root,
    element: <MainPage />,
    children: [
      {
        path: Routes.guess4,
        element: <NumbersGamePage />,
      },
    ],
  },
  {
    path: Routes.home,
    element: <MainPage />,
  },
];

export const router = createBrowserRouter(routes);
