import { StyledMainLogo } from "./styles";

type Props = {
    children: React.ReactNode | string;
    href?: string;
}

export const MainLogo: React.FC<Props> = (props) => {
    const { children } = props;
    return <StyledMainLogo {...props}>{children}</StyledMainLogo>
}