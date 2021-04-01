import HomePage from "../pages/home";
import BansosPage from "../pages/bansos";
import NewsPage from "../pages/news";

const publicRoutes = [
  {
    path: "/",
    page: HomePage,
  },
  {
    path: "/bansos",
    page: BansosPage,
  },
  {
    path: "/news",
    page: NewsPage,
  },
];

export { publicRoutes };
