import { Link } from "react-router-dom"
import { Park } from "../../../vite-env.d"

interface IProps {
    stateCode: string,
    parks: Array<Park>
}

const SideNav = ({ stateCode, parks }: IProps) => {

    return (
        <div className="side-nav">
            <nav>
                {parks.length ? (
                    <ul>
                        {parks.map((park: Park) => (
                            <li key={park.id}>
                                <Link to={`/${stateCode}/parks/${park.parkCode}`}>
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
    )
}

export default SideNav