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
