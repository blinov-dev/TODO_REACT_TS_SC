import { createGlobalStyle } from "styled-components";

// Глобальные стили
export const GlobalStyle = createGlobalStyle`
    //сброс стилей
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        background-color: #70808d;
    }
    body {
        background-color: #a4aeb6;
    }
    ul{
        list-style: none;
    }
`;
