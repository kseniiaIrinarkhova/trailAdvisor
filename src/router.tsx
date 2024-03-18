import { makeLoader, redirect, typesafeBrowserRouter } from "react-router-typesafe";


//Components
import Parks from "./pages/Parks.page";
import App from "./App";
import Favorite from "./pages/Favorite.page";
import ErrorPage from "./error-page";
import Index from "./pages/Index.page";
import ParksIndex from "./pages/ParksIndex.page";
import ParkInfo from "./pages/ParkInfo.page";
import { ParkProvider } from "./services/context";
import FavoriteForm from "./components/FavoriteForm/FavoriteForm";

const { router, href } = typesafeBrowserRouter([
    {
        path: "/",
        Component: App,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Index /> },
            {
                path: '/parks',
                loader: makeLoader(async ({ request }) => {
                    //get url from get method of form
                    let url = new URL(request.url);
                    //form sends stateCode parameters
                    let stateCode = url.searchParams.get("stateCode");
                    //redirect to state parks
                    return redirect(`/${stateCode}/parks`);
                })
            },
            {
                path: "/:stateCode/parks",
                element: <ParkProvider><Parks/></ParkProvider>,
                loader: Parks.loader,
                children: [
                    { index: true, element: <ParksIndex /> },
                    {
                        path: "/:stateCode/parks/:parkCode",
                        action: FavoriteForm.action,
                        Component: ParkInfo,
                    }
                ]
            },
            {
                path: "/favorite",
                Component: Favorite,
                loader: Favorite.loader
            },
        ]
    },

]);


export { router, href }