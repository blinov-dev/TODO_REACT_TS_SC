type Props = {
    children?: string;
    type: 'button' | 'submit';
}


export const TaskButton: React.FC<Props> = (props) => {
    const { type } = props;
    return (
        <button type={type} />
    )
}