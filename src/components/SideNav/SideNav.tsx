import { NavLink } from "react-router-dom"
import { Park } from "../../vite-env"
import './SideNav.css'
import { useContext } from "react"
import { ParkContext} from "../../services/context"

interface IProps {
    stateCode: string,
    parks: Array<Park>| null
}

const SideNav = ({ stateCode, parks }: IProps) => {
const {setPark} = useContext(ParkContext);
    return (
        <div id="side-nav">
            <nav>
                {(parks !== null && parks.length) ? (
                    <ul>
                        {parks.map((park: Park) => (
                            <li key={park.id}>
                                <NavLink to={`/${(park.stateCode)? park.stateCode : stateCode}/parks/${park.parkCode}`}
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? "active"
                                            : isPending
                                                ? "pending"
                                                : ""
                                    } onClick={() => { setPark({ ...park, stateCode: (park.stateCode) ? park.stateCode : stateCode })}}>
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