import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
    }

    body {
        background-color: #1E192C;
        color: #FFFFFF;
    }

    *:focus {
        outline: none;
    }
`