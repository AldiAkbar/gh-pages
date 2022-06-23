import Covid from "../../components/Covid";
import Hero from "../../components/Hero";
import ENDPOINTS from '../../utils/constants/endpoints';
import { useState, useEffect } from 'react';
import axios from "axios";
import Summary from "../../components/Summary";

function Home() {
    const [indonesia, setIndonesia] = useState([]);

    useEffect(() => {
        getCovidIndonesia();
    }, []);

    async function getCovidIndonesia() {
        const response = await axios(ENDPOINTS.INDONESIA);
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
        setIndonesia(covidData);
    }
    return (
        <div>
            <Hero />
            <Covid title="Indonesia" region={indonesia} />
            <Summary title="Indonesia" region={indonesia} />
        </div>
    );
}

export default Home;
