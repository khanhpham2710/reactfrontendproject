import Gallery from "../pages/Gallery/Gallery";
import AnimePage from "../pages/AnimePage/AnimePage";
import Genre from "../pages/Genre/Genre";
import Homepage from "../pages/Homepage/Homepage";
import Login from '../pages/Login/Login';
import Payment from "../pages/Payment/Payment";
import Profile from '../pages/Profile/Profile';
import Watch from "../pages/Watch/Watch";
import NotFound from "../pages/NotFound/NotFound";
import LandingPage from "../pages/LandingPage/LandingPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import BookTicket from "../pages/BookTicket/BookTicket";
import NoSlider from "../layouts/NoSlider";
import AnimesDisplay from "../pages/AnimesDisplay/AnimesDisplay";
import TopAnimesPage from "../pages/TopAnimesPage/TopAnimesPage";

const publicRoutes = [
    { path: "/", component: LandingPage, layout: null },
    { path: "/home", component: Homepage},
    { path: "/login", component: Login, layout: null },
    { path: "/payment", component: Payment },
    { path: "/profile", component: Profile },
    { path: "/top/:param", component: TopAnimesPage, layout: NoSlider},
    { path: "/animes/:param", component: AnimesDisplay, layout: NoSlider },
    { path: "/watch/:animeId", component: Watch, layout: NoSlider },
    { path: "/genre/:genreId", component: Genre, layout: null },
    { path: "/search/:searchTerm", component: SearchPage},
    { path: "/anime/:animeId", component: AnimePage, layout: NoSlider },
    { path: "/character/:characterId", component: Gallery },
    { path: "/book/:id", component: BookTicket, layout: null },
    { path: "*", component: NotFound },
];

const privateRoutes = [
    
];

export { publicRoutes, privateRoutes };
