import { createGlobalStyle } from "styled-components";
import { colors } from "./Colors";

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
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background-color: #a4aeb6;
        font-family: 'Comic Sans MS', sans-serif, 'Arial';
        color: ${colors.mainText};
        z-index: 1;
    }
    ul{
        list-style: none;
    }
    a {
        text-decoration: none;
        color: inherit;
        &:hover, &:active {
            color: inherit;
        }
    }

    ::before, ::after{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    button, input {
        border: none;
        font-family: 'Comic Sans MS', sans-serif, 'Arial';
    }

    /* Стили для всего скроллбара */
    ::-webkit-scrollbar {
        width: 12px; /* ширина вертикального скроллбара */
        height: 12px; /* высота горизонтального скроллбара */
}
/* Стили для трека (фона) скроллбара */
    ::-webkit-scrollbar-track {
        background: ${colors.bodyBg}; /* цвет фона */
        border-radius: 8px; /* закругленные края */
}
/* Стили для ползунка (thumb) скроллбара */
    ::-webkit-scrollbar-thumb {
        background-color: ${colors.afterBoardBg}; /* цвет ползунка */
        border-radius: 8px;
        border: 1px solid ${colors.mainText}; /* добавим отступ внутри ползунка */
}
/* Стили для ползунка при наведении */
    ::-webkit-scrollbar-thumb:hover {
        background-color:${colors.complete}; /* цвет ползунка при наведении */
}
`;
