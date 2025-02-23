import styled from "styled-components";
import { colors } from "../../themes/Colors";

export const StyledTask = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledTaskButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid ${colors.mainBorder};
  border-radius: 8px;
  background-color: transparent;
`;
