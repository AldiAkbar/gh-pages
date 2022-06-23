import styled from "styled-components";

const StyledSummary = styled.div`
    text-align: center;

    h1 {
        color: #06D6A0;
        padding: 5rem 0 1rem 0;
    }

    h4 {
        color: #118AB2;
        padding-bottom: 2rem;
    }

    img {
        max-width: 100%;
        filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25));
        border-radius: 20px;
        padding-bottom: 4rem;
    }

    @media (min-width: 992px) {
            max-width: 1200px;
            margin: 0 auto;

        img {
            max-width: 80%;
        }

    }
`;

export default StyledSummary;