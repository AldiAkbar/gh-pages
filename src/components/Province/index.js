import StyledProvince from './index.styled';

function Province(props) {
    // console.log(props);
    const { provinces } = props;
    let i = 1;
    const dataTable = provinces.map((province, index) => (
        <tr key={index}>
            <StyledProvince>{i++}</StyledProvince>
            <StyledProvince>{province.kota}</StyledProvince>
            <StyledProvince>{province.kasus}</StyledProvince>
            <StyledProvince>{province.sembuh}</StyledProvince>
            <StyledProvince>{province.dirawat}</StyledProvince>
            <StyledProvince>{province.meninggal}</StyledProvince>
        </tr>
    ));
    return <tbody>{dataTable}</tbody>;
}

export default Province;