import axios, {HeadersDefaults} from 'axios';

//Adding API key to headers
interface CommonHeaderProperties extends HeadersDefaults {
    "X-Api-Key": string;
}
(axios.defaults.headers as unknown as Record<string, CommonHeaderProperties>).common["X-Api-Key"] = import.meta.env.VITE_API_KEY ;

const API_URL = import.meta.env.VITE_API_URL

async function getParks(stateCode: string) {
    const url = `${API_URL}/parks?stateCode=${stateCode.toString()}`
const response = await axios.get(url);
console.log("GetParks")
console.log(response.data)
    return response;
}

// async function getStarships() {
//     //create simple url
//     const url = `${API_URL}/starships/`;
//     //get first 10 starships
//     const response = await axios.get(url);
//     //return response data
//     return response.data
// }

// async function getShip(shipId) {
//     //create simple url
//     const url = `${API_URL}/starships/${shipId}`;
//     //get star ship data
//     const response = await axios.get(url);
//     console.log(response)
//     //return response data
//     return response.data
// }

export { getParks };