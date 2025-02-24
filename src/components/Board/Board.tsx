import { TASK } from "../../types/task";
import { GetTasksInLocalStorage } from "../../utils";
import { NewTask } from "../NewTask/NewTask";
import { Task } from "../Task/Task";
import { AfterBoard, BeforeBoard, StyledBoard } from "./styles";

type Props = {
    children?: React.ReactNode;
}

export const Board: React.FC<Props> = (props) => {
    const tasks = GetTasksInLocalStorage();

    return (
        <StyledBoard {...props}>
            <BeforeBoard />
            <NewTask action="" />
            <ul>
                {tasks && tasks.map((item: TASK) => (
                    <li key={item.id}><Task taskInfo={item} /></li>
                ))}
            </ul>
            <AfterBoard>Доска задач</AfterBoard>
        </StyledBoard>
    )
}