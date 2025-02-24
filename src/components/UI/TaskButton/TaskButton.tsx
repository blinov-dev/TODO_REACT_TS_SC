import { StyledTaskCheckButton, StyledTaskDeleteButton } from "./styles";

type Props = {
    children?: string;
    type?: 'button' | 'submit';
    $name?: 'check' | 'delete'
    onClick?: () => void;
}


export const TaskButton: React.FC<Props> = (props) => {
    const { type = 'button', $name } = props;

    if ($name === 'check') {
        return (
            <StyledTaskCheckButton type={type} {...props} />
        )
    }

    if ($name === 'delete') {
        return (
            <StyledTaskDeleteButton type={type} {...props}>Удалить</StyledTaskDeleteButton>
        )
    }
}