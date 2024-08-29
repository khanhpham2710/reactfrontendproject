import Gallery from "../pages/Gallery/Gallery";
import AnimePage from "../pages/AnimePage/AnimePage";
import Genre from "../pages/Genre/Genre";
import Homepage from "../pages/Homepage/Homepage";
import LoginPage from '../pages/LoginPage/LoginPage';
import Payment from "../pages/Payment/Payment";
import Profile from '../pages/Profile/Profile';
import Watch from "../pages/Watch/Watch";
import NotFound from "../pages/NotFound/NotFound";
import LandingPage from "../pages/LandingPage/LandingPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import NoSlider from "../layouts/NoSlider";
import TopAnimesPage from "../pages/TopAnimesPage/TopAnimesPage";
import CartPage from "../pages/CartPage/CartPage";
import BookTicket from "../pages/BookTicketV2.js/BookTicket";


const publicRoutes = [
    { path: "/", component: LandingPage, layout: null },
    { path: "/reactfrontendproject", component: LandingPage, layout: null },
    { path: "/home", component: Homepage},
    { path: "/login", component: LoginPage, layout: null },
    { path: "/payment", component: Payment, layout: NoSlider },
    { path: "/profile", component: Profile, layout: NoSlider },
    { path: "/mycart", component: CartPage, layout:NoSlider} ,
    { path: "/top", component: TopAnimesPage, layout: NoSlider},
    { path: "/top/:filterParam", component: TopAnimesPage, layout: NoSlider},
    { path: "/watch", component: Watch, layout: null },
    { path: "/genres", component: Genre, layout: NoSlider },
    { path: "/genres/:genreId", component: Genre, layout: NoSlider },
    { path: "/search/:searchTerm", component: SearchPage,layout: NoSlider},
    { path: "/anime/:animeId", component: AnimePage, layout: null },
    { path: "/character/:animeId/:characterId", component: Gallery, layout: NoSlider },
    { path: "/book/:movieId", component: BookTicket, layout: null },
    { path: "*", component: NotFound, layout: null },
];

const privateRoutes = [
    
];

export { publicRoutes, privateRoutes };