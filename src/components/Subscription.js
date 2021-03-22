import { useState } from "react";
import LoadingMask from "./LoadingMask";

export default function Subscription(props) {
  const [dis, setDis] = useState(true);
  const [view, setView] = useState(true);
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.indexOf("@") > -1 && value.indexOf(".") > -1) setDis(false);
    else setDis(true);
  }
  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setView(false);
    const sub = {
      "email": e.target[0].value,
      "hotel": e.target[0].attributes.hotelname.value
    }

    async function postData(url = '', data = {}) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      return response.json();
    }

    postData('api/hotels/subscribe', sub)
      .then(data => {
        console.log(data);
        setLoading(false);
        setTimeout(function () { props.setOpenSub(false) }, 2000);
      });

    console.log(sub)
  }

  return <div>
    <form onSubmit={handleClick}>
      {loading && <LoadingMask />}
      {(!view && !loading) && "Subscribed"}
      {
        view && <>
          <input hotelname={props.hotelName} type="text" onChange={handleChange} />
          <button disabled={dis} type="submit">Submit</button>
        </>
      }
    </form>
  </div>;
}