import { ChangeEvent, useState } from "react";
import { TaskButton } from "../UI/TaskButton/TaskButton"
import { StyledFormNewTask, StyledInputNewTask } from "./styles"
import { AddToLocalStorageNewTask } from "../../utils";

type Props = {
    action: string;
    typeTask?: string;
}


export const NewTask: React.FC<Props> = ({ action, typeTask = 'NEW' }) => {
    const [newTaskValue, setNewTaskValue] = useState('')

    function handleNewTaskValue(event: ChangeEvent<HTMLInputElement>): void {
        setNewTaskValue(event.target.value)
    }

    const addNewTask = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        let currentId = 1;
        const tasks = localStorage.getItem(typeTask);

        if (tasks) {
            const tasksArray = JSON.parse(tasks);
            const maxId = Math.max(...tasksArray.map((task: { id: string }) => Number(task.id)));
            currentId = maxId + 1;
        }

        const newTask = {
            id: String(currentId),
            task: newTaskValue,
        }


        AddToLocalStorageNewTask(typeTask, newTask);
        setNewTaskValue('');
    };

    return (
        <StyledFormNewTask action={action} onSubmit={addNewTask}>
            <TaskButton $name="addTask" type="submit" disabled={newTaskValue.length === 0 ? true : false}>Создать</TaskButton>
            <StyledInputNewTask type="text" value={newTaskValue} onInput={handleNewTaskValue} />
        </StyledFormNewTask>
    )
}