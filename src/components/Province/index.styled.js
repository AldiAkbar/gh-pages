import styled from "styled-components";

const StyledProvince = styled.td`
        border: 1px solid #64748B;
        padding: 0.25rem;

    /* Medium Screen */
    @media (min-width: 768px) {
        padding: 0.5rem;
    }

    @media (min-width: 992px) {
        padding: 1rem 1.5rem;
    }

    @media (min-width: 1025px) {
        padding: 1rem 2rem;
    }
`;

export default StyledProvince;