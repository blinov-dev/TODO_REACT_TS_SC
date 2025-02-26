import { TASK } from "../types/task";

export function AddToLocalStorageNewTask(
  typeTasks: string,
  taskValue: string
): TASK {
  const existingTasks = localStorage.getItem(typeTasks);

  let tasksArray: TASK[] = [];
  let currentId = 1;

  if (existingTasks && existingTasks.length > 0) {
    tasksArray = JSON.parse(existingTasks);
    const maxId = Math.max(
      ...tasksArray.map((task: { id: string }) => Number(task.id))
    );
    currentId = maxId + 1;
  }

  const newTask: TASK = {
    id: String(currentId),
    name: taskValue,
    status: `${typeTasks}`,
  };

  tasksArray.push(newTask);
  localStorage.setItem(typeTasks, JSON.stringify(tasksArray));

  return newTask;
}
