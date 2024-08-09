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
import BookTicket from "../pages/BookTicket/BookTicket";
import NoSlider from "../layouts/NoSlider";
import TopAnimesPage from "../pages/TopAnimesPage/TopAnimesPage";
import TopAnimesPageWithParam from "../pages/TopAnimesPageWithParam/TopAnimesPageWithParam";
import Cart from "../pages/Cart/Cart";


const publicRoutes = [
    { path: "/", component: LandingPage, layout: null },
    { path: "/home", component: Homepage},
    { path: "/login", component: LoginPage, layout: null },
    { path: "/payment", component: Payment, layout: NoSlider },
    { path: "/profile", component: Profile, layout: NoSlider },
    { path: "/cart", component: Cart, layout:NoSlider} ,
    { path: "/top", component: TopAnimesPage, layout: NoSlider},
    { path: "/top/:filter", component: TopAnimesPageWithParam, layout: NoSlider},
    { path: "/watch/:animeId", component: Watch, layout: NoSlider },
    { path: "/genre/:genreId", component: Genre, layout: null },
    { path: "/search/:searchTerm", component: SearchPage,layout: NoSlider},
    { path: "/anime/:animeId", component: AnimePage, layout: null },
    { path: "/character/:characterId", component: Gallery },
    { path: "/book/:movieId", component: BookTicket, layout: null },
    { path: "*", component: NotFound },
];

const privateRoutes = [
    
];

export { publicRoutes, privateRoutes };