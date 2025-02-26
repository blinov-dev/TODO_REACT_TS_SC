import { TASK } from "../types/task";

export function UpdateStatusTaskInLocalStorage(
  task: TASK,
  newStatus: string
): void {
  const existingTasks = localStorage.getItem("tasks");
  if (!existingTasks) {
    return;
  }

  const parsedTasks: TASK[] = JSON.parse(existingTasks);
  const filteredTasks = parsedTasks.map((item: TASK) => {
    if (item.id === task.id) {
      return (item = {
        ...item,
        status: newStatus,
      });
    }
    return item;
  });

  localStorage.setItem("tasks", JSON.stringify(filteredTasks));
}
