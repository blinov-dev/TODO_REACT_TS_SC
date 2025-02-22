import styled from "styled-components";

type StyledContainerProps = {
  width?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  margin?: string;
  padding?: string;
  gap?: string;
};

export const StyledContainer = styled.div<StyledContainerProps>`
  width: ${(props) => props.width || "100%"};
  display: ${(props) => props.display || "flex"};
  gap: ${(props) => props.gap || "0"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "stretch"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

export const StyledMainContainer = styled(StyledContainer)`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;
