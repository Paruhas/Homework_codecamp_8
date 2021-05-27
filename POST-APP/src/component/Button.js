/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from '@emotion/styled';

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: khaki;
  height: 40px;
  width: 120px;
  color: ${function(props) { if (props.primary) {
    return 'crimson'
  } return 'cornflowerblue'}};
`;

function Button(props) {
    // return <StyledButton onClick={props.onClick} primary={props.primary} {...props}>{props.children}</StyledButton>
    return <StyledButton {...props}>{props.children}</StyledButton>
}

export default Button