import { Link, Outlet, redirect } from "react-router-dom"
import { makeLoader, useLoaderData } from "react-router-typesafe"
import { getParks } from "../../services/pn_api";
import { useParams } from "react-router-dom";
import SideNav from "../Footer/SideNav/SideNav";

const loader = makeLoader(async({ params })=>{
    
    if(params.stateCode === undefined) return redirect('/')
    const parks = await getParks(params.stateCode.toString());
    return parks
});
const Parks = () => {
    const parks = useLoaderData() ;
    const {stateCode} = useParams();
    console.log(stateCode)
    return (
        <div className="main">
            <SideNav stateCode={stateCode} parks={parks}/>
            <div className="parks-container">
                <h1>Parks Page</h1>
                <Outlet />
            </div>
        </div>
    )
}
Parks.loader = loader;
export default Parks