import styled from "styled-components";
import { TextPreset2Bold } from "../Typography/Typography";
import { useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ children,  onClick }) => {

  const [hover, setHover] = useState(false);
  return (
    <ButtonBox onMouseEnter={ () => { setHover(true)} } onMouseLeave={ ()=> { setHover(false)}} hover={hover} onClick={onClick}>
      <TextPreset2Bold color="white">{children}</TextPreset2Bold>
    </ButtonBox>
  );
};

export default Button;

const ButtonBox = styled.button<{ hover?: boolean}>`
  width: 100%;
  padding: 16px 0px;
  border: none;
  border-radius: 8px;

  box-shadow: ${(props) =>
    (props.hover) ? "0 16px 32px rgba(255, 97, 85, 0.5)" : "none"};

  /* box-shadow: 0 16px 32px rgba(255, 97, 85, 0.5); */

  background: ${({ theme, hover }) => hover ? theme.colors["gradient-4"] : theme.colors["blue-800"]};
`;
