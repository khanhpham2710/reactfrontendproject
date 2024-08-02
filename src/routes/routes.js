import Gallery from "../pages/Gallery/Gallery";
import AnimeItem from "../pages/AnimeItem/AnimeItem";
import Genre from "../pages/Genre/Genre";
import Homepage from "../pages/Homepage/Homepage";
import Login from '../pages/Login/Login';
import Payment from "../pages/Payment/Payment";
import Profile from '../pages/Profile/Profile';
import Watch from "../pages/Watch/Watch";
import NotFound from "../pages/NotFound/NotFound";
import SideBar from "../layouts/SideBar";
import LandingPage from "../pages/LandingPage/LandingPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import TV from "../pages/TV/TV";
import Movie from "../pages/Movie/Movie";

const publicRoutes = [
    { path: "/", component: LandingPage, layout: null },
    { path: "/home", component: Homepage},
    { path: "/login", component: Login, layout: null },
    { path: "/payment", component: Payment },
    { path: "/profile", component: Profile },
    { path: "/watch/:animeId", component: Watch },
    { path: "/genre/:genreId", component: Genre, layout: SideBar },
    { path: "/anime", component: TV},
    { path: "/movie", component: Movie},
    { path: "/search/:searchTerm", component: SearchPage},
    { path: "/anime/:animeId", component: AnimeItem },
    { path: "/character/:characterId", component: Gallery },
    { path: "*", component: NotFound }
];

const privateRoutes = [
    
];

export { publicRoutes, privateRoutes };
