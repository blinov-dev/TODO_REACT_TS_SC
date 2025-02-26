import { TASK } from "../types/task";

export function DeleteTasksInLocalStorage(id: string, typeTasks: string) {
  const tasks = localStorage.getItem(typeTasks);

  if (tasks) {
    const parsedTasks: TASK[] = JSON.parse(tasks);
    const filteredTasks = parsedTasks.filter((item: TASK) => item.id !== id);

    if (filteredTasks.length < parsedTasks.length) {
      localStorage.setItem(typeTasks, JSON.stringify(filteredTasks));
      return true;
    }
  }
  return false;
}
