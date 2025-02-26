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
        const loadTasks = () => {
            const fetchedTasks = GetTasksInLocalStorage(typeTasks);
            const filteredTasks = fetchedTasks.filter((task: TASK) => task.status === typeTasks);
            setTasks(filteredTasks);
        };

        loadTasks();
    }, [typeTasks]);

    function updateTasks() {
        const fetchedTasks = GetTasksInLocalStorage(typeTasks);
        const filteredTasks = fetchedTasks.filter((task: TASK) => task.status === typeTasks);
        setTasks(filteredTasks);
    };

    function getBoardTitle(typeTasks: string) {
        switch (typeTasks) {
            case 'Новая':
                return 'Новые задачи'
            case 'Выполнена':
                return 'Выполненные задачи'
            default:
                return 'Новые задачи';
        }
    }

    const boardTitle = getBoardTitle(typeTasks);

    return (
        <StyledBoard>
            <BeforeBoard />
            <NewTask action="" onAddTask={updateTasks} typeTasks={typeTasks} />
            <StyledBoardList>
                {tasks && tasks.map((item: TASK) => (
                    <li key={item.id}><Task taskInfo={item} setTasks={setTasks} /></li>
                ))}
            </StyledBoardList>
            <AfterBoard><Title as="h2">{boardTitle}</Title></AfterBoard>
        </StyledBoard>
    )
}