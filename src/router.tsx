import { typesafeBrowserRouter } from "react-router-typesafe";


//Components
import Park from "./components/pages/Park.page";
import App from "./App";
import Favorite from "./components/pages/Favorite.page";

const { router, href } = typesafeBrowserRouter([
    { path: "/", 
    Component: App,
 },
    { path: "/parks/:stateCode", 
    Component: Park },
    {
        path: "/favorite",
        Component: Favorite
    },
]);


export {router, href}