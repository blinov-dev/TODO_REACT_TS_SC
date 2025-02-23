import { styled } from "styled-components";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  fontSize?: string;
}

const StyledH1 = styled.h1<TitleProps>`
  font-size: ${(props) => props.fontSize || "36px"};
  color: blue; // Пример стиля
`;

const StyledH2 = styled.h2<TitleProps>`
  color: green; // Пример стиля
`;

const StyledH3 = styled.h3<TitleProps>`
  color: red; // Пример стиля
`;

const StyledH4 = styled.h4<TitleProps>`
  color: purple; // Пример стиля
`;

const StyledH5 = styled.h5<TitleProps>`
  color: orange; // Пример стиля
`;

const StyledH6 = styled.h6<TitleProps>`
  color: brown; // Пример стиля
`;
export const StyledTitles = {
  h1: StyledH1,
  h2: StyledH2,
  h3: StyledH3,
  h4: StyledH4,
  h5: StyledH5,
  h6: StyledH6,
};
