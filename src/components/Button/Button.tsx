import styled, { type DefaultTheme } from "styled-components";
import { TextPreset2Bold } from "../Typography/Typography";

interface ButtonProps {
  children: React.ReactNode;
  bgcolor: keyof DefaultTheme["colors"];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}


const Button: React.FC<ButtonProps> = ({ children, bgcolor, onClick }) => {
  return (
    <ButtonBox bgcolor={bgcolor} onClick={onClick}>
      <TextPreset2Bold color="white">{children}</TextPreset2Bold>
    </ButtonBox>
  );
};

export default Button;


const ButtonBox = styled.button<{ bgcolor: keyof DefaultTheme["colors"]}>`
    width: 100%;
    /* padding: 16px 48px; */
    padding: 16px 0px;
    border: none;
    border-radius: 8px;

    background: ${ ( {theme, bgcolor }) => theme.colors[bgcolor]};
`;