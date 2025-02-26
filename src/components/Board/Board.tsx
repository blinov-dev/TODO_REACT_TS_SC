import { useEffect, useState } from "react";
import { TASK } from "../../types/task";
import { GetTasksInLocalStorage } from "../../utils";
import { NewTask } from "../NewTask/NewTask";
import { Task } from "../Task/Task";
import { AfterBoard, BeforeBoard, StyledBoard, StyledBoardList } from "./styles";
import { Title } from "../UI/Title/Title";

type Props = {
    children?: React.ReactNode;
    typeTasks: string;
}

export const Board: React.FC<Props> = ({ typeTasks }) => {
    const [tasks, setTasks] = useState<TASK[]>([]);

    useEffect(() => {
        const fetchedTasks = GetTasksInLocalStorage(typeTasks).filter((task: TASK) => task.status === typeTasks);
        setTasks(fetchedTasks);
    }, [typeTasks])


    function getBoardTitle(typeTasks: string) {
        switch (typeTasks) {
            case 'Новая':
                return 'Новые задачи'
            default:
                return 'Новые задачи';
        }
    }

    const boardTitle = getBoardTitle(typeTasks);

    return (
        <StyledBoard>
            <BeforeBoard />
            <NewTask action="" typeTasks={typeTasks} />
            <StyledBoardList>
                {tasks && tasks.map((item: TASK) => (
                    <li key={item.id}><Task taskInfo={item} setTasks={setTasks} /></li>
                ))}
            </StyledBoardList>
            <AfterBoard><Title as="h2">{boardTitle}</Title></AfterBoard>
        </StyledBoard>
    )
}