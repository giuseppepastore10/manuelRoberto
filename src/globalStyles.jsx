import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Kanit", sans-serif;
    }

    #mainContainer{
        padding: 3rem;
        background-color: #000000;  
        overflow-x: hidden;
        display: flex;
        flex-direction:column;
        align-items: center;

    }

`;
