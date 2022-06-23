import styled from "styled-components";

const StyledFooter = styled.div`
    background-color: #06D6A0;
    padding: 1rem;
    color: #fff;

    footer {
        display: flex;
        flex-direction: column;
    }
    
    h4 {
        margin-bottom: 1rem;
    }
    
    p {
        margin-bottom: 4rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
    }
    
    li {
        margin-bottom: 1rem;
    }

    a {
        color: #fff;
        text-decoration: none;
    }
    
    /* Medium Screen */
    @media (min-width: 768px) {
        footer {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
    
        h4 {
            margin: 1rem 0;
        }
    
        p {
            margin-bottom: 1rem;
        }

        ul {
            flex-direction: row;
        }
    
        li {
            margin: 0 1rem;
        }
    }
    
    /* Large Screen */
    @media (min-width: 992px) {
        footer {
            max-width: 1200px;
            margin: 0 auto;
        }
    }
`;

const StyledFooterLeft = styled.div`
    text-align: center;
    @media (min-width: 768px) {
        .footer__left {
            text-align: left;
        }
    }
`;

export { StyledFooter, StyledFooterLeft };