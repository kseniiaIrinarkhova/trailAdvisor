import { Favorite, Park } from "../vite-env.d";
import { getParksbyCode } from "./pn_api";

function getFavoriteStatus(parkCode: string): Boolean {
    const favLocalStorage = localStorage.getItem("favorites")
    if (favLocalStorage === null) return false;

    const favorites = JSON.parse(favLocalStorage) as Array<Favorite>;
    const favorite = favorites.find((fav) => fav.parkCode == parkCode)

    return (favorite) ? favorite.isFavorite : false;
}


async function setFavoriteStatus(favorite: Favorite): Promise<Boolean> {
    const favLocalStorage = localStorage.getItem("favorites")
    let favorites: Array<Favorite> = [];
    if (favLocalStorage !== null) favorites = JSON.parse(favLocalStorage) as Array<Favorite>;
    if (favorite.isFavorite) {
        if (!favorites.some((item) => item.parkCode === favorite.parkCode)) favorites.push(favorite)
    }
    else {
        favorites = favorites.filter((item) => item.parkCode !== favorite.parkCode)
    }
    localStorage.setItem("favorites", JSON.stringify(favorites))
    return true;
}

async function getAllFavorites(): Promise<Park[]> {
    const favLocalStorage = localStorage.getItem("favorites")
    let result: Park[] = [];
    if (favLocalStorage === null)  return result;

        const favorites = JSON.parse(favLocalStorage) as Array<Favorite>;

        const parkCodes = favorites.map((fav) => fav.parkCode);
        const parkCodesStr = parkCodes.join(',');
        const parks = await getParksbyCode(parkCodesStr);
     return parks;
}

export { getFavoriteStatus, setFavoriteStatus , getAllFavorites }