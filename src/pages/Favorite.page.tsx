import { Outlet, redirect, useLoaderData } from "react-router-dom"
import SideNav from "../components/SideNav/SideNav"
import { makeLoader } from "react-router-typesafe";
import { Park } from "../vite-env";
import { getAllFavorites } from "../services/utilities";

const loader = makeLoader(async ({ params }): Promise<Park[] | Response> => {

  // if (params.stateCode === undefined) return redirect('/')
  const parks = await getAllFavorites();
console.log(parks)
  return parks
});

const Favorite = () => {
  const parks = useLoaderData() as Park[];
  console.log(parks)
  return (
    <div className="main">
      <SideNav stateCode={""}
        parks={(parks !== null) ? parks : []} />
      <Outlet />
    </div>
  )
}
 Favorite.loader = loader;

export default Favorite