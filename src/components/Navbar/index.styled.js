import styled from "styled-components";

const StyledNavbar = styled.div`
    background-color: #06D6A0;
    padding: 1rem;
    color: #fff;

    nav {
        display: flex;
        flex-direction: column;
    }

    h1 {
        font-size: 2.4rem;
        margin-bottom: 1rem;
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
        nav {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        h1 {
            margin-bottom: 0;
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
        nav {
            max-width: 1200px;
            margin: 0 auto;
        }
    }
`;

export default StyledNavbar;