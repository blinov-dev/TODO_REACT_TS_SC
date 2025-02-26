import { TASK } from "../types/task";

export function GetTasksInLocalStorage(typeTasks?: string) {
  const tasks = localStorage.getItem("tasks");

  if (tasks) {
    const parsedTasks = JSON.parse(tasks);

    if (typeTasks) {
      return parsedTasks.filter((task: TASK) => task.status === typeTasks);
    }
    return parsedTasks;
  }
  return [];
}
