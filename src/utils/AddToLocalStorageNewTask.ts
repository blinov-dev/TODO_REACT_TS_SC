import { TASK } from "../types/task";

export function AddToLocalStorageNewTask(typeTasks: string, newTask: TASK) {
  const existingTasks = localStorage.getItem(typeTasks);

  let tasksArray: TASK[] = [];

  if (existingTasks) {
    tasksArray = JSON.parse(existingTasks);
  }

  tasksArray.push(newTask);

  localStorage.setItem(typeTasks, JSON.stringify(tasksArray));
}
