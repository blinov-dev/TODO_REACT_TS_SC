import styled from "styled-components";
import { colors } from "../../../themes/Colors";

type Props = {
  $activeToggle?: boolean;
  $toggleName?: string;
};

export const StyledTaskStatusToggleButton = styled.button<Props>`
  position: relative;
  height: 50px;
  cursor: pointer;
  display: block;
  background-color: ${(props) => {
    if (props.$activeToggle) {
      if (props.$toggleName === "Новая") {
        return props.$toggleName ? colors.boardBg : colors.mainBorder;
      }
      if (props.$toggleName === "Выполнена") {
        return props.$toggleName ? colors.hightPriority : colors.boardBg;
      }
      if (props.$toggleName === "Отложена") {
        return props.$toggleName ? colors.pending : colors.boardBg;
      }
      return colors.boardBg;
    }
    return colors.beforeBoardBg;
  }};
  padding: 10px;
  border-radius: 20px;
  border: 1px solid ${colors.mainText};
`;

export const TaskStatusToggleButtonDecor = styled.span<Props>`
  position: absolute;
  z-index: 2;
  top: -1px;
  left: ${(props) => (props.$activeToggle ? "86%" : "-2%")};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${colors.mainText};
  background-color: ${(props) =>
    props.$activeToggle ? colors.complete : colors.boardBg};
  transition: left 1s ease, background-color 1s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TaskStatusToggleButtonText = styled.span<Props>`
  opacity: ${(props) => (props.$activeToggle ? "1" : "0.6")};
  transition: opacity 1s ease;
`;
