import { Container } from "../Container/Container";
import { StyledMainContainer } from "../Container/styles";
import { StyledHeader, StyledLogo, StyledUserMenuLink, StyledThemeButton } from "./styles";

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <StyledMainContainer alignItems="center">
                <StyledLogo>To-Do List</StyledLogo>
                <Container width="max-content" margin="0 0 0 auto" padding="10px 0" gap='20px'>
                    <StyledUserMenuLink />
                    <StyledThemeButton>Ночной режим</StyledThemeButton>
                </Container>
            </StyledMainContainer>
        </StyledHeader>
    );
}

export default Header;