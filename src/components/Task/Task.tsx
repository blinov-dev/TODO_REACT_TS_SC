import { TASK } from "../../types/task";
import { CompleteTasksInLocalStorage, DeleteTasksInLocalStorage, GetTasksInLocalStorage } from "../../utils";
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
    CompleteTasksInLocalStorage(task)
    const updatedTasks = GetTasksInLocalStorage(taskInfo.status);
    setTasks(updatedTasks);
  }

  return (
    <StyledTask>
      <TaskButton type="button" $name="check" disabled={false} onClick={() => completeTask(taskInfo)} />
      <Title as="h3">{taskInfo.task}</Title>
      <TaskButton type="button" $name="delete" disabled={false} onClick={() => deleteTask(taskInfo.id)}>Удалить</TaskButton>
    </StyledTask>
  )

};
