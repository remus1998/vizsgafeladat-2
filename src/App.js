import { useState, useEffect } from "react";
import './App.css'
import LoadingMask from "./components/LoadingMask";
import Hotel from "./components/Hotel";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('api/hotels')
      .then(response => response.json())
      .then(d => {
        setData(d);
        console.log(d);
      });
    setLoading(false);
  }, [])


  return (
    <div className="App">
      <h1>Hotels</h1>
      {loading && <LoadingMask />}
      <Hotel data={data} />
    </div>
  )
}

export default App
