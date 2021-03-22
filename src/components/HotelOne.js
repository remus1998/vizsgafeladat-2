import { useState } from "react";
import Subscription from "./Subscription";

export default function HotelOne(props) {
  const [open, setOpen] = useState(false)
  const [openSub, setOpenSub] = useState(false)
  const { data, key } = props;

  const handleClick = () => {
    setOpen(!open);
  }

  const handleClickSub = () => {
    setOpenSub(!openSub);
  }

  return <div className="hotel">
    <div>{data.name}</div>
    <button onClick={handleClick}>{open ? 'Less more' : 'Show more'}</button>
    {
      open && <div>
        <div>{data.city} ({data.stars})</div>
        {

          <>
            <button onClick={handleClickSub}>Request more info</button>
            {openSub && <Subscription setOpenSub={setOpenSub} id={data.key} hotelName={data.name} />}
          </>
        }
      </div>
    }
  </div>
}