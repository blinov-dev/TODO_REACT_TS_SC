import { styled } from "styled-components";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
}

const StyledH1 = styled.h1<TitleProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.fontSize};
`;

const StyledH2 = styled.h2<TitleProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.fontSize};
`;

const StyledH3 = styled.h3<TitleProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.fontSize};
`;

const StyledH4 = styled.h4<TitleProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.fontSize};
`;

const StyledH5 = styled.h5<TitleProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.fontSize};
`;

const StyledH6 = styled.h6<TitleProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.fontSize};
`;

export const StyledTitles = {
  h1: StyledH1,
  h2: StyledH2,
  h3: StyledH3,
  h4: StyledH4,
  h5: StyledH5,
  h6: StyledH6,
};
