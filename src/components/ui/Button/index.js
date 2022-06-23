import styled, { css } from "styled-components";

const Button = styled.button`
    padding: 8px 10px;
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;

  // PROPS VARIANT
  background-color: ${(props) =>
        props.theme.colors[props.variant] || props.theme.colors["primary"]};

  // PROPS FULL
  ${(props) =>
        props.full &&
        css`
      display: block;
      width: 100%;
    `}

    // PROPS SIZE
    font-size: ${(props) =>
        props.theme.size[props.size] || props.theme.size["md"]};

    // PROPS PADDING 
    padding: ${(props) =>
        props.theme.padding[props.padding] || props.theme.padding["md"]};
`;

export default Button;