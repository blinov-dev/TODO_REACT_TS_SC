import { TASK } from "../../types/task";
import { UpdateStatusTaskInLocalStorage, DeleteTasksInLocalStorage, GetTasksInLocalStorage } from "../../utils";
import { Container } from "../UI/Container/Container";
import { TaskButton } from "../UI/TaskButton/TaskButton";
import { Title } from "../UI/Title/Title";
import { StyledTask } from "./styles";

type Props = {
  taskInfo: TASK;
  setTasks: (tasks: TASK[]) => void;
};

export const Task: React.FC<Props> = ({ taskInfo, setTasks }) => {

  function deleteTask(id: string) {
    DeleteTasksInLocalStorage(id, taskInfo.status)
    const updatedTasks = GetTasksInLocalStorage(taskInfo.status);
    setTasks(updatedTasks);
  }

  function completeTask(task: TASK) {
    UpdateStatusTaskInLocalStorage(task, 'Выполнена');
    const updatedTasks = GetTasksInLocalStorage(taskInfo.status);
    setTasks(updatedTasks);
  }
  function pendingTask(task: TASK) {
    UpdateStatusTaskInLocalStorage(task, 'Отложена');
    const updatedTasks = GetTasksInLocalStorage(taskInfo.status);
    setTasks(updatedTasks);
  }

  return (
    <StyledTask>
      <TaskButton type="button" $name="check" disabled={false} onClick={() => completeTask(taskInfo)} />
      <Title as="h3">{taskInfo.name}</Title>
      <Container $display="flex" $gap="20px" $margin="0 0 0 auto">
        <TaskButton type="button" $name="pending" disabled={false} onClick={() => pendingTask(taskInfo)}>Отложить</TaskButton>
        <TaskButton type="button" $name="delete" disabled={false} onClick={() => deleteTask(taskInfo.id)}>Удалить</TaskButton>
      </Container>
    </StyledTask>
  )

};
