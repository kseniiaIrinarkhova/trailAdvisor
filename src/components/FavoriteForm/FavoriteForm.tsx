import { Form, useFetcher } from 'react-router-dom';
import { getFavoriteStatus, setFavoriteStatus } from '../../services/utilities';
import { makeAction } from 'react-router-typesafe';
import { Favorite } from '../../vite-env.d';

interface IProps{
    parkCode:string,
    stateCode: string
}
const action = makeAction(async ({ request, params }) => {
    let formData = await request.formData();
    return setFavoriteStatus({
        parkCode: params.parkCode,
        isFavorite: formData.get("favorite") === "true"
    } as Favorite);
});

const FavoriteForm = ({parkCode, stateCode}:IProps) => {
    const fetcher = useFetcher();
    let isFavorite = getFavoriteStatus(parkCode);
    if (fetcher.formData) {
        isFavorite = fetcher.formData.get("isFavorite") === "true";
    }


  return (
      <fetcher.Form method="post" action={`/${stateCode}/parks/${parkCode}`} >
          <button
          type='submit'
              name="favorite"
              value={isFavorite ? "false" : "true"}
              aria-label={
                  isFavorite
                      ? "Remove from favorites"
                      : "Add to favorites"
              }
          >
              {isFavorite ? "★" : "☆"}
          </button>
      </fetcher.Form>
  )
}
FavoriteForm.action = action;
export default FavoriteForm;