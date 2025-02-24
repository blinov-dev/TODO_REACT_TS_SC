import { StyledTaskButton, StyledTaskCheckButton, StyledTaskDeleteButton, StyledTaskSubmitButton } from "./styles";

type Props = {
    children?: string;
    type?: 'button' | 'submit';
    $name?: 'check' | 'delete' | 'addTask'
    onClick?: () => void;
    disabled: boolean;
}


export const TaskButton: React.FC<Props> = (props) => {
    const { children, type = 'button', $name, disabled, ...restProps } = props;



    if ($name === 'check') {
        return (
            <StyledTaskCheckButton type={type} {...props} />
        )
    }

    if ($name === 'delete') {
        return (
            <StyledTaskDeleteButton type={type} {...props}>{children}</StyledTaskDeleteButton>
        )
    }

    if ($name === 'addTask') {
        return (
            <StyledTaskSubmitButton type={type} disabled={disabled} {...restProps}>{children}</StyledTaskSubmitButton>
        )
    }

    return <StyledTaskButton type={type} >{children}</StyledTaskButton>
}