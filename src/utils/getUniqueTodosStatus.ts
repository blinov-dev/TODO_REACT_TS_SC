import { typeTodo } from "../types";

export function GetUniqueTodosStatus(todos: typeTodo[]) {
  return todos
    ? [...new Set([...todos.map((item: typeTodo) => item.status)])]
    : [];
}
