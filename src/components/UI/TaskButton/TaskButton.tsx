import { StyledTaskButton, StyledTaskCheckButton, StyledTaskDeleteButton, StyledTaskPendingButton, StyledTaskSubmitButton } from "./styles";

type Props = {
    children?: string;
    type?: 'button' | 'submit';
    $name?: 'check' | 'delete' | 'addTask' | 'pending'
    onClick?: () => void;
    disabled: boolean;
}


export const TaskButton: React.FC<Props> = (props) => {
    const { children, type, $name, disabled, ...restProps } = props;

    if ($name === 'check') {
        return (
            <StyledTaskCheckButton type={type} {...props}>{children}</StyledTaskCheckButton>
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

    if ($name === 'pending') {
        return (
            <StyledTaskPendingButton type={type} disabled={disabled} {...restProps}>{children}</StyledTaskPendingButton>
        )
    }

    return <StyledTaskButton type={type} >{children}</StyledTaskButton>
}