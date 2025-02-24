import { TASK } from "../../types/task";
import { TaskButton } from "../UI/TaskButton/TaskButton";
import { Title } from "../UI/Title/Title";
import { StyledTask } from "./styles";

type Props = {
  taskInfo: TASK;
};

export const Task: React.FC<Props> = ({ taskInfo }) => {

  return (
    <StyledTask>
      <TaskButton type="button" $name="check" disabled={false} />
      <Title as="h3">{taskInfo.task}</Title>
      <TaskButton type="button" $name="delete" disabled={false}>Удалить</TaskButton>
    </StyledTask>
  )

};
