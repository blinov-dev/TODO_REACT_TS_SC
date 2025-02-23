import { Task } from "../Task/Task";
import { AfterBoard, BeforeBoard, StyledBoard } from "./styles";

type Props = {
    children?: React.ReactNode;
}

export const Board: React.FC<Props> = (props) => {

    return (
        <StyledBoard {...props}>
            <BeforeBoard />
            <Task taskName="Задача №1" />
            <AfterBoard>Доска задач</AfterBoard>
        </StyledBoard>
    )
}