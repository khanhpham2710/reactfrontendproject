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
import TV from "../pages/TV/TV";
import Movie from "../pages/Movie/Movie";
import BookTicket from "../pages/BookTicket/BookTicket";

const publicRoutes = [
    { path: "/", component: LandingPage, layout: null },
    { path: "/home", component: Homepage},
    { path: "/login", component: Login, layout: null },
    { path: "/payment", component: Payment },
    { path: "/profile", component: Profile },
    { path: "/watch/:animeId", component: Watch, layout: null },
    { path: "/genre/:genreId", component: Genre, layout: null },
    { path: "/anime", component: TV},
    { path: "/movie", component: Movie},
    { path: "/search/:searchTerm", component: SearchPage},
    { path: "/anime/:animeId", component: AnimePage, layout: null },
    { path: "/character/:characterId", component: Gallery },
    { path: "/book/:id", component: BookTicket, layout: null },
    { path: "*", component: NotFound },
];

const privateRoutes = [
    
];

export { publicRoutes, privateRoutes };
