import Province from '../Province';
import StyledProvinces from './index.styled';
import { useSelector } from "react-redux";

function Provinces() {
    const dataProvinces = useSelector((store) => store.provinces.provinces);

    return (
        <StyledProvinces>
            <h1>Provinsi</h1>
            <h4>Data Covid Berdasarkan Provinsi</h4>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Provinsi</th>
                            <th>Positif</th>
                            <th>Sembuh</th>
                            <th>Dirawat</th>
                            <th>Meninggal</th>
                        </tr>
                    </thead>
                    <Province provinces={dataProvinces} />
                </table>
            </div>
        </StyledProvinces >
    );
}

export default Provinces;