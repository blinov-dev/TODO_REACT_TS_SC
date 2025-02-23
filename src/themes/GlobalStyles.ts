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
        height: 100%;
    }
    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background-color: #a4aeb6;
        font-family: 'Comic Sans MS', sans-serif, 'Arial';
    }
    ul{
        list-style: none;
    }
    a {
        text-decoration: none;
        color: inherit;
        &:hover,&:active {
            color: inherit;
        }
    }
`;
