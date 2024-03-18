import { getParkContext } from "../../services/context";
import Carousel, { Image } from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import './ParkInfo.page.css'


const ParkInfo = () => {
  const park = getParkContext();

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
export default ParkInfo