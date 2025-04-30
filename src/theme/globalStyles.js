// src/theme/globalStyles.js
import { createGlobalStyle } from 'styled-components'; // Ensure this import is correct

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.dark};
    overflow-x: hidden;
  }
`;
