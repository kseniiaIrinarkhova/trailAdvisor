import { Favorite } from "../vite-env.d";

function getFavoriteStatus(parkCode: string): Boolean {
    console.log("getFavorites")
    const favLocalStorage = localStorage.getItem("favorites")
    console.log(`str: ${favLocalStorage}`)
    if (favLocalStorage === null) return false;

    const favorites = JSON.parse(favLocalStorage) as Array<Favorite>;
    const favorite = favorites.find((fav) => fav.parkCode == parkCode)

    return (favorite) ? favorite.isFavorite : false;
}


async function setFavoriteStatus(favorite: Favorite): Promise<Boolean> {
    localStorage.clear();
    console.log("SetFavoriteStatus function")
    console.log(favorite)
    const favLocalStorage = localStorage.getItem("favorites")
    console.log(`favLocalStorage: ${favLocalStorage}`)
    let favorites: Array<Favorite> = [];
    if (favLocalStorage !== null) favorites = JSON.parse(favLocalStorage) as Array<Favorite>;
    if (favorite.isFavorite) {
        if (!favorites.some((item) => item.parkCode === favorite.parkCode)) favorites.push(favorite)
    }
    else {
        favorites = favorites.filter((item) => item.parkCode !== favorite.parkCode)
    }
    console.log(`favorites: ${JSON.stringify(favorites) }`)
    localStorage.setItem("favorites", JSON.stringify(favorites))
    return true;
}

export { getFavoriteStatus, setFavoriteStatus }