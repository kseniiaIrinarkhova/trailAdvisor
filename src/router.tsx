import { typesafeBrowserRouter } from "react-router-typesafe";


//Components
import Parks from "./components/pages/Parks.page";
import App from "./App";
import Favorite from "./components/pages/Favorite.page";
import ErrorPage from "./error-page";
import Index from "./components/pages/Index.page";
import ParksIndex from "./components/pages/ParksIndex.page";
import ParkInfo from "./components/pages/ParkInfo.page";

const { router, href } = typesafeBrowserRouter([
    {
        path: "/",
        Component: App,
        errorElement: <ErrorPage />,
        children :[
            { index: true, element: <Index /> },
            {
                path: "/:stateCode/parks",
                Component: Parks,
                children:[
                    { index: true, element: <ParksIndex /> },
                    {
                        path: "/:stateCode/parks/:parkId",
                        Component: ParkInfo,
                    }
                ]
            },
            { 
                path: "/favorite",
                Component: Favorite
            },
        ]
    },
    
]);


export { router, href }