import { StyledTaskStatusToggleButton, TaskStatusToggleButtonDecor, TaskStatusToggleButtonText } from "./styles";

type Props = {
    children: string;
    activeToggle: boolean;
    onClick: () => void;
}

export const TaskStatusToggleButton: React.FC<Props> = ({ children, onClick, activeToggle }) => {
    return (
        <StyledTaskStatusToggleButton onClick={onClick} activeToggle={activeToggle} toggleName={children}>
            <TaskStatusToggleButtonDecor activeToggle={activeToggle} />
            <TaskStatusToggleButtonText activeToggle={activeToggle}>{children}</TaskStatusToggleButtonText>
        </StyledTaskStatusToggleButton>
    )
}