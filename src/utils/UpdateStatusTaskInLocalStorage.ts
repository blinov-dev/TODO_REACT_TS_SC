import { TASK } from "../types/task";
import { AddToLocalStorageNewTask } from "./AddToLocalStorageNewTask";

export function UpdateStatusTaskInLocalStorage(
  task: TASK,
  newStatus: string
): boolean {
  const existingTasks = localStorage.getItem(task.status);
  if (!existingTasks) {
    return false;
  }

  const parsedTasks: TASK[] = JSON.parse(existingTasks);
  const filteredTasks = parsedTasks.filter((item: TASK) => item.id !== task.id);

  if (filteredTasks.length < parsedTasks.length) {
    localStorage.setItem(task.status, JSON.stringify(filteredTasks));

    AddToLocalStorageNewTask(newStatus, task.name);

    return true;
  }

  return false;
}
