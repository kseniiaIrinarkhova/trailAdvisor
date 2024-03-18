import { Favorite } from "../vite-env.d";

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

export { getFavoriteStatus, setFavoriteStatus }