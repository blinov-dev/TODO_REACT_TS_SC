import { JSX } from "react";
import styled from "styled-components";

type StyledContainerProps = {
  as?: keyof JSX.IntrinsicElements;
  $width?: string;
  $display?: string;
  $flexDirection?: string;
  $justifyContent?: string;
  $alignItems?: string;
  $margin?: string;
  $padding?: string;
  $gap?: string;
};

export const StyledContainer = styled.div<StyledContainerProps>`
  width: ${(props) => props.$width};
  display: ${(props) => props.$display};
  gap: ${(props) => props.$gap};
  flex-direction: ${(props) => props.$flexDirection};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
`;

export const StyledMainContainer = styled(StyledContainer)`
  width: 90%;
  display: flex;
  margin: 0 auto;
`;

export const StyledPageContainer = styled(StyledMainContainer)`
  min-height: 100%;
  flex-direction: column;
  flex: 1;
  gap: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const StyledSectionBord = styled(StyledContainer)`
  border: 1px solid;
`;
