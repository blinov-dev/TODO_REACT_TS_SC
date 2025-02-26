import { useEffect, useState } from "react";
import { TASK } from "../../types/task";
import { GetTasksInLocalStorage } from "../../utils";
import { NewTask } from "../NewTask/NewTask";
import { Task } from "../Task/Task";
import { AfterBoard, BeforeBoard, StyledBoard, StyledBoardList } from "./styles";
import { Title } from "../UI/Title/Title";

type Props = {
    children?: React.ReactNode;
    typeTasks?: string;
}

export const Board: React.FC<Props> = ({ typeTasks }) => {
    const [tasks, setTasks] = useState<TASK[]>([]);

    useEffect(() => {
        const loadTasks = () => {
            const fetchedTasks = GetTasksInLocalStorage(typeTasks);
            setTasks(fetchedTasks);
        };

        loadTasks();
    }, [typeTasks]);

    function updateTasks() {
        const fetchedTasks = GetTasksInLocalStorage(typeTasks);
        setTasks(fetchedTasks);
    };

    function getBoardTitle(typeTasks: string = '') {
        switch (typeTasks) {
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

    const boardTitle = getBoardTitle(typeTasks);

    return (
        <StyledBoard>
            <BeforeBoard />
            <NewTask action="" onAddTask={updateTasks} />
            <StyledBoardList>
                {tasks && tasks.map((item: TASK) => (
                    <li key={item.id}><Task taskInfo={item} setTasks={setTasks} /></li>
                ))}
            </StyledBoardList>
            <AfterBoard><Title as="h2">{boardTitle}</Title></AfterBoard>
        </StyledBoard>
    )
}