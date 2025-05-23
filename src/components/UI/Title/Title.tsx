import { StyledTitle } from "./styles";


type Props = {
    children: string;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    $fontSize?: string;
    $fontWeight?: string;
    $color?: string;
    $maxWidth?: string;
    $textAlign?: string;
}


export const Title: React.FC<Props> = (props) => {
    const { children, as = 'h1' } = props;

    return <StyledTitle as={as} {...props}>{children}</StyledTitle>;
}