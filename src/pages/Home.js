import Covid from "../components/Covid";
import Hero from "../components/Hero";
import ENDPOINTS from '../utils/constants/endpoints';
import { useState, useEffect } from 'react';
import axios from "axios";
import Summary from "../components/Summary";

function Home() {
  const [global, setGlobal] = useState([]);

  useEffect(() => {
    getCovidGlobal();
  }, []);
  async function getCovidGlobal() {
    const response = await axios(ENDPOINTS.GLOBAL);
    // buat object array of object lagi dengan data sesuai yang diinginkan
    // snippet rekomendasi kak aufa 
    const covidData = [
      {
        status: "Confirmed",
        ...response.data.confirmed
      },
      {
        status: "Deaths",
        ...response.data.deaths
      },
      {
        status: "Recovered",
        ...response.data.recovered
      }
    ]
    setGlobal(covidData);
  }
  return (
    <div>
      <Hero />
      <Covid title="Global" region={global} />
      <Summary title="Global" region={global} />
    </div>
  );
}

export default Home;
