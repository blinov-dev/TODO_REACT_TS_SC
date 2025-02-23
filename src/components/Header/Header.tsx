import { Container } from "../Container/Container";
import { StyledMainContainer } from "../Container/styles";
import { MainLogo } from "../UI";
import { StyledHeader, StyledUserMenuLink, StyledThemeButton } from "./styles";

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <StyledMainContainer $alignItems="center" $padding="10px 0">
                <MainLogo href="/">To-Do List</MainLogo>
                <Container $display="flex" $width="max-content" $margin="0 0 0 auto" $padding="10px 0" $gap='20px'>
                    <StyledUserMenuLink />
                    <StyledThemeButton>Ночной режим</StyledThemeButton>
                </Container>
            </StyledMainContainer>
        </StyledHeader>
    );
}

export default Header;