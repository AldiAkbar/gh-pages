import styled from "styled-components";

const StyledProvinces = styled.section`
        margin: 1rem;
        text-align: center;

    h1 {
        color: #06D6A0;
        padding: 5rem 0 1rem 0;
    }

    h4 {
        color: #118AB2;
        padding-bottom: 4rem;
    }

    div {
        display: flex;
        justify-content: center;
        padding-bottom: 6rem;
    }

    table,
    th {
        border: 1px solid #64748B;
        padding: 0.25rem;
    }

    th {
        color: #fff;
        background-color: #06D6A0;
    }

    table {
        max-width: 100%;
        border-collapse: collapse;
    }

    /* Medium Screen */
    @media (min-width: 768px) {

        table,
        th {
            padding: 0.5rem;
        }
    }

    @media (min-width: 992px) {
            max-width: 1200px;
            margin: 0 auto;

        table,
        th {
            padding: 1rem 1.5rem;
        }
    }

    @media (min-width: 1025px) {

        table,
        th {
            padding: 1rem 4rem;
        }
    }
`;

export default StyledProvinces;