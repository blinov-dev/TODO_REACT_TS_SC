type Props = {
    children: string;
    toggle?: boolean;
    onClick?: () => void;
}


export const TaskStatusToggleButton: React.FC<Props> = ({ children }) => {
    return <button>{children}</button>
}