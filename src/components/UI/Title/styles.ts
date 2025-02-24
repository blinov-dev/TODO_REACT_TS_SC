import { styled } from "styled-components";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  $fontSize?: string;
  $fontWeight?: string;
  $color?: string;
}

export const StyledTitle = styled.h1<TitleProps>`
  font-size: ${(props) => props.$fontSize || "inherit"};
  font-weight: ${(props) => props.$fontWeight || "normal"};
  color: ${(props) => props.$color || "inherit"};
  word-wrap: break-word;
`;
