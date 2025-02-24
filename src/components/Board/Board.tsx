import { NewTask } from "../NewTask/NewTask";
import { Task } from "../Task/Task";
import { AfterBoard, BeforeBoard, StyledBoard } from "./styles";

type Props = {
    children?: React.ReactNode;
}

export const Board: React.FC<Props> = (props) => {

    return (
        <StyledBoard {...props}>
            <BeforeBoard />
            <NewTask action="" />
            <Task taskName="Задача №1" />
            <AfterBoard>Доска задач</AfterBoard>
        </StyledBoard>
    )
}