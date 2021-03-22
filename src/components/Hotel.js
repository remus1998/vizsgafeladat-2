import HotelOne from "./HotelOne";

export default function Hotel(props) {

  return <div>
    {props.data.map((item, index) => <HotelOne key={index} data={item} />)}
  </div>
}