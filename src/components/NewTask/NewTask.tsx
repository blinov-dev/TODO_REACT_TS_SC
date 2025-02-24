import { TaskButton } from "../UI/TaskButton/TaskButton"
import { StyledFormNewTask, StyledInputNewTask } from "./styles"

type Props = {
    action: string;
}


export const NewTask: React.FC<Props> = ({ action }) => {
    return (
        <StyledFormNewTask action={action}>
            <TaskButton $name="addTask">Создать</TaskButton>
            <StyledInputNewTask type="text" />
        </StyledFormNewTask>
    )
}