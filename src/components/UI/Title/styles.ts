import { styled } from "styled-components";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  $fontSize?: string;
  $fontWeight?: string;
  $color?: string;
  $maxWidth?: string;
  $textAlign?: string;
}

export const StyledTitle = styled.h1<TitleProps>`
  max-width: ${(props) => props.$maxWidth};
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
  text-align: ${(props) => props.$textAlign};
  color: ${(props) => props.$color};
  word-break: break-all;
`;
