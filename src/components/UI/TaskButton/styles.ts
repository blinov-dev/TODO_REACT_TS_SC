import styled from "styled-components";
import { colors } from "../../../themes/Colors";

export const StyledTaskButton = styled.button`
  cursor: pointer;
  border: 1px solid ${colors.mainBorder};
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: opacity 0.5s ease;
`;

export const StyledTaskCheckButton = styled(StyledTaskButton)`
  width: 30px;
  height: 30px;
  border-radius: 8px;

  &::before {
    content: "";
    width: 80%;
    height: 80%;
    border-radius: 8px;
    background-color: ${colors.complete};
  }
`;

export const StyledTaskDeleteButton = styled(StyledTaskButton)`
  padding: 5px;
  border-radius: 8px;
  background-color: ${colors.hightPriority};
  margin-left: auto;
`;

export const StyledTaskSubmitButton = styled(StyledTaskButton)`
  height: 100%;
  padding: 5px;
  border-radius: 8px;
  background-color: ${colors.hightPriority};
  margin-left: auto;

  &:disabled {
    opacity: 0.3;
  }
`;
