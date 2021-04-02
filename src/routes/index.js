import HomePage from "../pages/home";
import BansosPage from "../pages/bansos";
import NewsPage from "../pages/news";
import AboutCovidPage from "../pages/about-covid";

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
    path: "/berita",
    page: NewsPage,
  },
  {
    path: "/tentang-covid-19",
    page: AboutCovidPage,
  },
];

export { publicRoutes };
