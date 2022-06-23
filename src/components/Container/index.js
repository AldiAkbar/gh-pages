import StyledContainer from "./index.styled";

function Container(props) {
    return (
        <StyledContainer>{props.children}</StyledContainer>
    )
}

export default Container;