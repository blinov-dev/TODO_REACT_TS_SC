export function GetTasksInLocalStorage(typeTasks: string = "NEW") {
  const tasks = localStorage.getItem(typeTasks);
  if (tasks) {
    return JSON.parse(tasks);
  }
  return [];
}
