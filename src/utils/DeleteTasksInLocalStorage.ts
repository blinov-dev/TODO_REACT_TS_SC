import { TASK } from "../types/task";

export function DeleteTasksInLocalStorage(id: string) {
  const tasks = localStorage.getItem("tasks");

  if (tasks) {
    const parsedTasks: TASK[] = JSON.parse(tasks);
    const filteredTasks = parsedTasks.filter((item: TASK) => item.id !== id);

    if (filteredTasks.length < parsedTasks.length) {
      localStorage.setItem("tasks", JSON.stringify(filteredTasks));
      return true;
    }
  }
  return false;
}
