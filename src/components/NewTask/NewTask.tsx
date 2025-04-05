import { ChangeEvent, useState } from "react";
import { TaskButton } from "../UI/TaskButton/TaskButton";
import { StyledFormNewTask, StyledInputNewTask } from "./styles";

import { addTodo } from "../../redux/todos/todosSlice";
import { useDispatch } from 'react-redux';

export const NewTask: React.FC = () => {
    const [newTaskValue, setNewTaskValue] = useState('');
    const dispatch = useDispatch();

    function handleNewTaskValue(event: ChangeEvent<HTMLInputElement>): void {
        setNewTaskValue(event.target.value);
    }

    const addNewTask = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (newTaskValue.trim() === '') return;
        setNewTaskValue('');
        dispatch(addTodo(newTaskValue));
    };

    return (
        <StyledFormNewTask onSubmit={addNewTask}>
            <TaskButton $name="addTask" type="submit" disabled={newTaskValue.length === 0}>Создать</TaskButton>
            <StyledInputNewTask type="text" value={newTaskValue} onChange={handleNewTaskValue} />
        </StyledFormNewTask>
    );
};
