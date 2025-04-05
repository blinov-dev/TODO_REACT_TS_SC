import { useAppDispatch } from "../../redux/hooks";
import { changeTodoStatus, deleteTodo } from "../../redux/todos/todosSlice";
import { typeTodo } from "../../types";
import { Container } from "../UI/Container/Container";
import { TaskButton } from "../UI/TaskButton/TaskButton";
import { Title } from "../UI/Title/Title";
import { StyledTask } from "./styles";

type Props = {
  todo: typeTodo;
};

export const Todo: React.FC<Props> = ({ todo }) => {
  const dispatch = useAppDispatch();

  function changeStatus(todo: typeTodo, status: string) {
    dispatch(changeTodoStatus({ id: todo.id, status }))
  }

  function removeTodo(id: string) {
    dispatch(deleteTodo(id))
  }

  return (
    <StyledTask>
      <Container $display="flex" $gap="20px">
        <TaskButton type="button" $name="check" disabled={false} onClick={() => changeStatus(todo, 'Выполнена')} >Выполнить</TaskButton>
      </Container>
      <Title as="h3">{todo.text}</Title>
      <Container $display="flex" $gap="20px" $margin="0 0 0 auto">
        <TaskButton type="button" $name="pending" disabled={todo.status === 'Отложена' ? true : false} onClick={() => changeStatus(todo, 'Отложена')}>Отложить</TaskButton>
        <TaskButton type="button" $name="delete" disabled={false} onClick={() => removeTodo(todo.id)}>Удалить</TaskButton>
      </Container>
    </StyledTask>
  )

};
