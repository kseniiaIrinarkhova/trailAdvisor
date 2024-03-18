import axios, { HeadersDefaults } from 'axios';
import { Park } from '../vite-env.d';

//Adding API key to headers
interface CommonHeaderProperties extends HeadersDefaults {
    "X-Api-Key": string;
}
(axios.defaults.headers as unknown as Record<string, CommonHeaderProperties>).common["X-Api-Key"] = import.meta.env.VITE_API_KEY;

const API_URL = import.meta.env.VITE_API_URL

async function getParks(stateCode: string) : Promise<Park[]> {
    const url = `${API_URL}/parks?stateCode=${stateCode.toString()}`
    const response = await axios.get(url);
    console.log(response)
    const parks: Park[] = response.data.data.map((park:any)=>{
        return {
            id: park.id,
            activities: park.activities,
            description: park.description,
            entranceFees: park.entranceFees,
            fullName: park.fullName,
            images: park.images,
            name: park.name,
            parkCode: park.parkCode,

        } as Park
    })
    console.log(parks)
    if (parks) return parks
    else throw new Error("There is some issue to get parks for this state")
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