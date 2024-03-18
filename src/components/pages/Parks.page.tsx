import { Outlet, redirect } from "react-router-dom"
import { makeLoader, useLoaderData } from "react-router-typesafe"
import { getParks } from "../../services/pn_api";
import { useParams } from "react-router-dom";
import SideNav from "../Footer/SideNav/SideNav";
import { Park } from "../../vite-env.d";



const loader = makeLoader(async({ params }): Promise<Park[] | Response>=>{
    
    if(params.stateCode === undefined) return redirect('/')
    const parks = await getParks(params.stateCode.toString());
    return parks
});
const Parks = () => {
    const parks = useLoaderData() as Park[];
    const {stateCode} = useParams();
   
    console.log(parks)
    return (
        <div className="main">
            <SideNav stateCode={(stateCode) ? stateCode : ""} 
            parks={(parks!== null) ? parks : [] }/>
                <Outlet />
        </div>
    )
}
Parks.loader = loader;
export default Parks