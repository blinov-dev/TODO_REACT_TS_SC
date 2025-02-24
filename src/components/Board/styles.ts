import styled from "styled-components";
import { colors } from "../../themes/Colors";

export const StyledBoard = styled.div`
  position: relative;
  z-index: auto;
  width: 500px;
  height: 500px;
  border: 2px solid ${colors.mainBorder};
  border-radius: 20px;
  padding: 20px;
  padding-top: 45px;
  background-color: ${colors.boardBg};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BeforeBoard = styled.span`
  position: absolute;
  display: block;
  top: -10px;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 516px;
  background-color: ${colors.beforeBoardBg};
  border: 2px solid ${colors.mainBorder};
  border-radius: 26px;
`;
export const AfterBoard = styled.span`
  content: "";
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  background-color: ${colors.afterBoardBg};
  border: 2px solid ${colors.mainBorder};
  border-radius: 12px;
`;
