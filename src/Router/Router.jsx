import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Category from "../pages/Category/Category";
import Quizpage from "../pages/Quizpage/Quizpage";
import TestPage from "../pages/TestsPage/TestPage";
import RandomPage from "../pages/Random/Random";
import PopularPage from "../pages/Popular/PopularPage";
import Quizes from "../pages/Quizes/Quizes";


const router = createBrowserRouter(
    [
        { path:'/',
        element:<Home/>
        },
        {path:'/category',
        element:<Category/>
        },
        {path:"/quizpage/:id",
        element:<Quizpage/>
        },
        {path:"/new/quizpage/:id",
        element:<Quizpage/>
        },
        {path:"/category/test/:id",
        element:<TestPage/>
        },
        {path:"/page-random",
        element:<RandomPage/>
        },
        {path:"/popular",
        element:<PopularPage/>
        
        },
        {path:"/popular",
        element:<PopularPage/>
        },
        {path:"/quizzes",
        element:<Quizes/>
        },
    ]
)
export default router;