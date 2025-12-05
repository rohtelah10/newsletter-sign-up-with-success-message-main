import styled, { type DefaultTheme } from "styled-components";

interface TextPresetProps {
    color?: keyof DefaultTheme["colors"];
    children: React.ReactNode;
}

export const TextPreset1 = styled.p<TextPresetProps>`
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0px;

  color : ${ ( {theme, color} ) => color ? theme.colors[color] : theme.colors["grey"]};

  @media (min-width: 600px) {
    font-size: 56px;
  }
`;

export const TextPreset2Bold = styled.p<TextPresetProps>`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0px;

  color : ${ ( {theme, color} ) => color ? theme.colors[color] : theme.colors["grey"]};
`;

export const TextPreset2Regular = styled.p<TextPresetProps>`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0px;

  color : ${ ( {theme, color} ) => color ? theme.colors[color] : theme.colors["grey"]};
`;

export const TextPreset3 = styled.p<TextPresetProps>`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0px;

  color : ${ ( {theme, color} ) => color ? theme.colors[color] : theme.colors["grey"]};
`;


