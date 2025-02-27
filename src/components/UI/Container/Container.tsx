import { StyledContainer } from "./styles"

type Props = {
    children: React.ReactNode;
    as?: string;
    $maxWidth?: string;
    $width?: string;
    $display?: string;
    $flexDirection?: string;
    $justifyContent?: string;
    $alignItems?: string;
    $margin?: string;
    $padding?: string;
    $gap?: string;
    $flexWrap?: string;
}

export const Container: React.FC<Props> = (props) => {
    const { children } = props;

    return <StyledContainer {...props}>{children}</StyledContainer>
}