import { getParkContext } from "../../services/context";
import Carousel, { Image } from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import './ParkInfo.page.css'
import FavoriteForm from "../FavoriteForm/FavoriteForm";
import { makeAction } from "react-router-typesafe";
import { setFavoriteStatus } from "../../services/utilities";
import { Favorite } from "../../vite-env.d";

// const action = makeAction(async ({ request, params }) => {
//   let formData = await request.formData();
//   console.log("makeAction!")
//   console.log(formData)
//   const result = await setFavoriteStatus({
//     parkCode: params.parkCode,
//     isFavorite: formData.get("favorite") === "true"
//   } as Favorite);
//   return result;
// });

const ParkInfo = () => {
  let park = getParkContext();
  // if (park === null) park = useLoaderData() as Park; //need to do something, the error when try to open park page directly

  if(! park.images) park.images=[];

  let images = park.images.map((img)=>{
return {
  src: img.url,
  alt: img.altText
} as Image

  })

  return (
      <div className="parks-container">
      <div className="park-title"><h1>{park.name} <FavoriteForm parkCode={park.parkCode} stateCode={(park.stateCode) ? park.stateCode : ""} /></h1></div>      
      <Carousel className="park-gallery" images={images} />
      <div className="park-description">{park.description}</div>
      </div>
  )
}

// ParkInfo.action = action;
export default ParkInfo