import { JSX } from "react";
import styled from "styled-components";

type StyledContainerProps = {
  as?: keyof JSX.IntrinsicElements;
  $maxWidth?: string;
  $width?: string;
  $display?: string;
  $gridTemplateColumns?: string;
  $flexDirection?: string;
  $justifyContent?: string;
  $alignItems?: string;
  $margin?: string;
  $padding?: string;
  $gap?: string;
  $flexWrap?: string;
};

export const StyledContainer = styled.div<StyledContainerProps>`
  max-width: ${(props) => props.$maxWidth};
  width: ${(props) => props.$width};
  display: ${(props) => props.$display};
  grid-template-columns: ${(props) => props.$gridTemplateColumns};
  gap: ${(props) => props.$gap};
  flex-direction: ${(props) => props.$flexDirection};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  flex-wrap: ${(props) => props.$flexWrap};
`;

export const StyledMainContainer = styled(StyledContainer)`
  width: 90%;
  display: flex;
  margin: 0 auto;
`;

export const StyledPageContainer = styled(StyledContainer)`
  width: 90%;
  margin: 0 auto;
  min-height: 100%;
  flex: 1;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const StyledSectionBord = styled(StyledContainer)`
  border: 1px solid;
`;
