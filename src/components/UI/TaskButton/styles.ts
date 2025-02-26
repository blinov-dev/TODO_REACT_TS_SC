import styled from "styled-components";
import { colors } from "../../../themes/Colors";

export const StyledTaskButton = styled.button`
  height: min-content;
  cursor: pointer;
  border: 1px solid ${colors.mainBorder};
  background-color: transparent;
  padding: 5px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: opacity 0.5s ease;
`;

export const StyledTaskCheckButton = styled(StyledTaskButton)`
  min-width: 30px;
  min-height: 30px;
  width: 30px;
  height: 30px;

  &::before {
    content: "";
    width: 80%;
    height: 80%;
    border-radius: 8px;
    background-color: ${colors.complete};
  }
`;

export const StyledTaskDeleteButton = styled(StyledTaskButton)`
  background-color: ${colors.hightPriority};
`;

export const StyledTaskPendingButton = styled(StyledTaskButton)`
  background-color: ${colors.pending};
`;

export const StyledTaskSubmitButton = styled(StyledTaskButton)`
  height: 100%;
  background-color: ${colors.hightPriority};

  &:disabled {
    opacity: 0.3;
  }
`;
