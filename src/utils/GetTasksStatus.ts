import { TASK } from "../types/task";

export function GetTasksStatus() {
  const tasks = localStorage.getItem("tasks");
  if (tasks) {
    const parsedTasks = JSON.parse(tasks);
    return [...new Set([...parsedTasks.map((item: TASK) => item.status)])];
  }
  return [];
}
