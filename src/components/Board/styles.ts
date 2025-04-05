import styled from "styled-components";
import { colors } from "../../themes/Colors";

export const StyledBoard = styled.div`
  border: 2px solid ${colors.mainBorder};
  width: 800px;
  border-radius: 20px;
  padding: 20px;
  background-color: ${colors.boardBg};
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 50px 0;
`;

export const StyledBoardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  padding-right: 20px;
`;
