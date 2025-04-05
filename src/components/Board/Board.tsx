import { NewTask } from "../NewTask/NewTask";
import { StyledBoard, StyledBoardList } from "./styles";
import { Title } from "../UI/Title/Title";
import { useAppSelector } from "../../redux/hooks";
import { typeTodo } from "../../types";
import { Todo } from "../Todo";
import { getBoardTitle } from "../../utils";

type Props = {
    typeTodos: string;
}

export const Board: React.FC<Props> = ({ typeTodos }) => {
    const todos = useAppSelector((state) => state.todos);
    const filteredTodos = todos.filter(i => i.status === typeTodos);

    const boardTitle = getBoardTitle(typeTodos);

    return (
        <StyledBoard>
            <Title as="h2" $textAlign='center' >{boardTitle}</Title>
            <NewTask />
            <StyledBoardList>
                {filteredTodos.length > 0 ? filteredTodos.map((item: typeTodo) => (
                    <li key={item.id}>
                        <Todo todo={item} />
                    </li>
                )) :
                    <Title as="h3">В списке нет задач...</Title>
                }
            </StyledBoardList>
        </StyledBoard>
    )
}