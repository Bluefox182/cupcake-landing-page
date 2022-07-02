import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-size: 1rem;
    overflow-x: hidden;
}

body, html {
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    background-color: #fff2f2;
}
`;
