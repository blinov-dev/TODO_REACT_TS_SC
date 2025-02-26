export function GetTasksInLocalStorage(typeTasks: string) {
  const tasks = localStorage.getItem(typeTasks);
  if (tasks) {
    return JSON.parse(tasks);
  }
  return [];
}
