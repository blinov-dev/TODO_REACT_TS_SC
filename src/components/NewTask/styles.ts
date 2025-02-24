import styled from "styled-components";
import { colors } from "../../themes/Colors";

export const StyledFormNewTask = styled.form`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const StyledInputNewTask = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid ${colors.mainBorder};
  font-size: 18px;
  padding: 5px;
`;
