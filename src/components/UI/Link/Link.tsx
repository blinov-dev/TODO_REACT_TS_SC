import { StyledMainLink } from "./styles";

type Props = {
    children: React.ReactNode;
    href?: string;
}

export const Link: React.FC<Props> = (props) => {
    const { children } = props;
    return <StyledMainLink {...props}> {children}</StyledMainLink >
}