import { StyledContainer } from "./styles"

type Props = {
    children: React.ReactNode;
    width?: string;
    display?: string;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    margin?: string;
    padding?: string;
    gap?: string;
}

export const Container: React.FC<Props> = ({ children,
    width,
    display,
    gap,
    flexDirection,
    justifyContent,
    alignItems,
    margin, padding, }) => {
    return <StyledContainer
        width={width}
        display={display}
        gap={gap}
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        alignItems={alignItems}
        margin={margin}
        padding={padding}>{children}</StyledContainer>
}