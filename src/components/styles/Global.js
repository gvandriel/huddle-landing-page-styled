import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");

*{
    box-sizing:border-box
}

body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192,100%,9%);
    font-family: 'Poppins', sans-serif;
    font-family: 1.15em;
}

`;
