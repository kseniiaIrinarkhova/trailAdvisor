import { Outlet, redirect } from "react-router-dom"
import { makeLoader } from "react-router-typesafe"
import { getParks } from "../../services/pn_api";

const loader = makeLoader(async({ params })=>{
    
    if(params.stateCode === undefined) return redirect('/')
    const parks = await getParks(params.stateCode.toString());
console.log("loader")
console.log(parks)
    return {parks}
});
const Parks = () => {
    return (
        <div className="main">
            <div className="side-nav">

            </div>
            <div className="parks-container">
                <h1>Parks Page</h1>
                <Outlet />
            </div>
        </div>
    )
}
Parks.loader = loader;
export default Parks