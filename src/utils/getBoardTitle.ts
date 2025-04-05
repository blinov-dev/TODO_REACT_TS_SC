export function getBoardTitle(typeTodos: string = "") {
  switch (typeTodos) {
    case "Новая":
      return "Новые";
    case "Выполнена":
      return "Выполненные";
    case "Отложена":
      return "Отложенные";
    default:
      return "Новые";
  }
}
