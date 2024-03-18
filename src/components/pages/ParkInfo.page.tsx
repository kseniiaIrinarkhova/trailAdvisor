import { getParkContext } from "../../services/context";


const ParkInfo = () => {
  const park = getParkContext();
  return (
    <div>{park.name}</div>
  )
}
export default ParkInfo