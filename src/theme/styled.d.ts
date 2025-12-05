import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      grey: string;
      "blue-800": string;
      "blue-700": string;
      red: string;
      "fade-red" : string;
      "gradient-4": string;
    };
  }
}
