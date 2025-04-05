import { getBoardTitle } from "../../../utils";
import { StyledTaskStatusToggleButton, TaskStatusToggleButtonDecor, TaskStatusToggleButtonText } from "./styles";

type Props = {
    children: string;
    activeToggle: boolean;
    onClick: () => void;
}

export const TaskStatusToggleButton: React.FC<Props> = ({ children, onClick, activeToggle }) => {
    const toggleName = getBoardTitle(children);

    return (
        <StyledTaskStatusToggleButton onClick={onClick} $activeToggle={activeToggle} $toggleName={toggleName}>
            <TaskStatusToggleButtonDecor $activeToggle={activeToggle} />
            <TaskStatusToggleButtonText $activeToggle={activeToggle}>{toggleName}</TaskStatusToggleButtonText>
        </StyledTaskStatusToggleButton>
    )
}