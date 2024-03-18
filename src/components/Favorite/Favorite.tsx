import { Form } from 'react-router-dom';

interface IProps{
    parkCode:string
}

const Favorite = ({parkCode}:IProps) => {
    let isFavorite = true; //localStorage for favorites

  return (
      <Form method="post">
          <button
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
      </Form>
  )
}

export default Favorite;