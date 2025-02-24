import { TaskButton } from "../UI/TaskButton/TaskButton";
import { Title } from "../UI/Title/Title";
import { StyledTask } from "./styles";

type Props = {
  taskName: string;
};

export const Task: React.FC<Props> = (props) => {
  const { taskName } = props;

  return (
    <StyledTask>
      <TaskButton type="button" $name="check" />
      <Title as="h3">{taskName}</Title>
      <TaskButton type="button" $name="delete">Удалить</TaskButton>
    </StyledTask>
  )

};
