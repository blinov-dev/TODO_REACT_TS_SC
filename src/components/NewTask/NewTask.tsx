import { ChangeEvent, useState } from "react";
import { TaskButton } from "../UI/TaskButton/TaskButton";
import { StyledFormNewTask, StyledInputNewTask } from "./styles";
import { AddToLocalStorageNewTask } from "../../utils";

type Props = {
    action: string;
    typeTasks: string;
}

export const NewTask: React.FC<Props> = ({ action, typeTasks }) => {
    const [newTaskValue, setNewTaskValue] = useState('');

    function handleNewTaskValue(event: ChangeEvent<HTMLInputElement>): void {
        setNewTaskValue(event.target.value);
    }

    const addNewTask = (): void => {
        if (newTaskValue.trim() === '') return;

        AddToLocalStorageNewTask(typeTasks, newTaskValue);
        setNewTaskValue('');
    };

    return (
        <StyledFormNewTask action={action} onSubmit={addNewTask}>
            <TaskButton $name="addTask" type="submit" disabled={newTaskValue.length === 0}>Создать</TaskButton>
            <StyledInputNewTask type="text" value={newTaskValue} onChange={handleNewTaskValue} />
        </StyledFormNewTask>
    );
};
