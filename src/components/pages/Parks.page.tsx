import { Link, Outlet, redirect } from "react-router-dom"
import { makeLoader, useLoaderData } from "react-router-typesafe"
import { getParks } from "../../services/pn_api";

const loader = makeLoader(async({ params })=>{
    
    if(params.stateCode === undefined) return redirect('/')
    const parks = await getParks(params.stateCode.toString());
    return parks
});
const Parks = () => {
    const parks = useLoaderData();
    
    return (
        <div className="main">
            <div className="side-nav">
                <nav>
                    {parks.length ? (
                        <ul>
                            {parks.map((park) => (
                                <li key={park.id}>
                                    <Link to={`/${park.parkCode}`}>
                                        {park.name ? (
                                            <>
                                                {park.name}
                                            </>
                                        ) : (
                                            <i>No Name</i>
                                        )}{" "}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No contacts</i>
                        </p>
                    )}
                </nav>
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