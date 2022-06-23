import StyledSummary from "./index.styled";

function Summary(props) {
    const { title } = props

    return (
        <StyledSummary>
            <h1>{title} Summary</h1>
            <h4>Summary Data {title}</h4>
            <img src={title === "Indonesia" ? "https://covid19.mathdro.id/api/countries/indonesia/og" : "https://covid19.mathdro.id/api/og"} alt="" />
        </StyledSummary>
    );
}

export default Summary;