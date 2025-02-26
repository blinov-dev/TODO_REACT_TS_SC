import { ChangeEvent, useState } from "react";
import { TaskButton } from "../UI/TaskButton/TaskButton";
import { StyledFormNewTask, StyledInputNewTask } from "./styles";
import { AddToLocalStorageNewTask } from "../../utils";

type Props = {
    action: string;
    onAddTask: () => void;
}

export const NewTask: React.FC<Props> = ({ action, onAddTask }) => {
    const [newTaskValue, setNewTaskValue] = useState('');

    function handleNewTaskValue(event: ChangeEvent<HTMLInputElement>): void {
        setNewTaskValue(event.target.value);
    }

    const addNewTask = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if (newTaskValue.trim() === '') return;

        AddToLocalStorageNewTask(newTaskValue);
        setNewTaskValue('');
        onAddTask();
    };

    return (
        <StyledFormNewTask action={action} onSubmit={addNewTask}>
            <TaskButton $name="addTask" type="submit" disabled={newTaskValue.length === 0}>Создать</TaskButton>
            <StyledInputNewTask type="text" value={newTaskValue} onChange={handleNewTaskValue} />
        </StyledFormNewTask>
    );
};
