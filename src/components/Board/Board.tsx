import { NewTask } from "../NewTask/NewTask";
import { AfterBoard, BeforeBoard, StyledBoard, StyledBoardList } from "./styles";
import { Title } from "../UI/Title/Title";
import { useAppSelector } from "../../redux/hooks";
import { typeTodo } from "../../types";
import { Todo } from "../Todo";

type Props = {
    typeTodos: string;
}

export const Board: React.FC<Props> = ({ typeTodos }) => {
    const todos = useAppSelector((state) => state.todos);
    const filteredTodos = todos.filter(i => i.status === typeTodos);

    function getBoardTitle(typeTodos: string = '') {
        switch (typeTodos) {
            case 'Новая':
                return 'Новые'
            case 'Выполнена':
                return 'Выполненные'
            case 'Отложена':
                return 'Отложенные'
            default:
                return 'Новые';
        }
    }

    const boardTitle = getBoardTitle(typeTodos);

    return (
        <StyledBoard>
            <BeforeBoard />
            <NewTask />
            <StyledBoardList>
                {filteredTodos && filteredTodos.map((item: typeTodo) => (
                    <li key={item.id}>
                        <Todo todo={item} />
                    </li>
                ))}
            </StyledBoardList>
            <AfterBoard><Title as="h2">{boardTitle}</Title></AfterBoard>
        </StyledBoard>
    )
}