import { Outlet, redirect} from "react-router-dom"
import SideNav from "../components/SideNav/SideNav"
import { makeLoader, useLoaderData } from "react-router-typesafe";
import { Park } from "../vite-env";
import { getAllFavorites } from "../services/utilities";

const loader = makeLoader(async (): Promise<Park[] | Response> => {
  const parks = await getAllFavorites();
  return parks
});

const MyList = () => {
  const parks = useLoaderData() as Park[];
  return (
    <div className="main">
      <SideNav root='/favorites' stateCode={""}
        parks={(parks !== null) ? parks : []} />
      <Outlet />
    </div>
  )
}
MyList.loader = loader;

export default MyList