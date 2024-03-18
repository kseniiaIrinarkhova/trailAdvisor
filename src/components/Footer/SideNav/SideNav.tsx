import { NavLink } from "react-router-dom"
import { Park } from "../../../vite-env.d"
import './SideNav.css'

interface IProps {
    stateCode: string,
    parks: Array<Park>| null
}

const SideNav = ({ stateCode, parks }: IProps) => {

    return (
        <div id="side-nav">
            <nav>
                {(parks !== null && parks.length) ? (
                    <ul>
                        {parks.map((park: Park) => (
                            <li key={park.id}>
                                <NavLink to={`/${stateCode}/parks/${park.parkCode}`}
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? "active"
                                            : isPending
                                                ? "pending"
                                                : ""
                                    }>
                                    {park.name}
                                </NavLink>
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