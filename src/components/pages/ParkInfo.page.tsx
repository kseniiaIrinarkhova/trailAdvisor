import { getParkContext } from "../../services/context";
import Carousel, { Image } from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import './ParkInfo.page.css'
import { makeLoader, redirect, useLoaderData } from "react-router-typesafe";
import { Park } from "../../vite-env.d";
import { getParksbyCode } from "../../services/pn_api";


// const loader = makeLoader(async ({ params }): Promise<Park | Response> =>{
//   // let park = getParkContext() as Park;

//   // if(park) return park;
//   console.log(params)
//   if (params.parkCode === undefined ) return redirect('/')
//    let park = await getParksbyCode(params.parkCode.toString());
//   return park;
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
console.log(images)

  return (
      <div className="parks-container">
      <div className="park-title"><h1>{park.name}</h1></div>      
      <Carousel className="park-gallery" images={images} />
      <div className="park-description">{park.description}</div>
      </div>
  )
}
ParkInfo.loader=loader;
export default ParkInfo