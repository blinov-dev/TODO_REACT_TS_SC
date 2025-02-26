import { TASK } from "../types/task";
import { AddToLocalStorageNewTask } from "./AddToLocalStorageNewTask";

export function CompleteTasksInLocalStorage(task: TASK) {
  const completeTask = {
    ...task,
    status: "Выполнена",
  };
  AddToLocalStorageNewTask(completeTask.status, completeTask.task);

  const existingTasks = localStorage.getItem(task.status);
  if (existingTasks) {
    const parsedTasks: TASK[] = JSON.parse(existingTasks);
    const filteredTasks = parsedTasks.filter(
      (item: TASK) => item.id !== task.id
    );

    if (filteredTasks.length < parsedTasks.length) {
      localStorage.setItem(task.status, JSON.stringify(filteredTasks));
      return true;
    }
  }
}
