import { Title } from "../UI/Title/Title";
import { StyledTask, StyledTaskButton } from "./styles";

type Props = {
  taskName: string;
};

export const Task: React.FC<Props> = (props) => {
  const { taskName } = props;

  return (
    <StyledTask>
      <StyledTaskButton type="button" />
      <Title as="h3">{taskName}</Title>
    </StyledTask>
  )

};
