import styled from "styled-components";

const StyledHero = styled.div`
    margin: 1rem;

    section {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    h1 {
        color: #06D6A0;
        margin-bottom: 1rem;
    }

    h4 {
        color: #118AB2;
        margin-bottom: 1rem;
    }

    p {
        color: #64748B;
        margin-bottom: 1rem;
    }

    button {
        padding: 0.8rem 2rem;
        border: none;
        font-size: 1rem;
        border-radius: 10px;
        background-color: #06D6A0;
        color: #fff;
        cursor: pointer;
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 25px;
    }

    /* Medium Screen */
    @media (min-width: 768px) {
        /*
    * Nothing TODO Here.
    * We dont change style Hero. 
    */
    }

    /* Large Screen */
    @media (min-width: 992px) {
        max-width: 1200px;
        margin: 3rem auto;

        section {
            margin: 0 1rem;
            padding: 1rem 0;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
        }

        img {
            max-width: 90%;
        }

        p {
            margin: 2rem 0;
        }

        button {
            padding: 1rem 3rem;
        }
    }

    @media (min-width: 1025px) {
        section {
            margin: 0;
            padding: 1rem 0;
        }

        img {
            max-width: 100%;
        }
    }
`;

const StyledHeroLeft = styled.div`
    margin-bottom: 1rem;
    @media (min-width: 992px) {
        flex-basis: 40%;
    }
`;

const StyledHeroRight = styled.div`
    @media (min-width: 992px) {
        flex-basis: 60%;
        display: flex;
        justify-content: flex-end;
    }
`;

export { StyledHero, StyledHeroLeft, StyledHeroRight };
