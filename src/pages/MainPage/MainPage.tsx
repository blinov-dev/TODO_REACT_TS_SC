import { Container } from "../../components/Container/Container";
import { StyledPageContainer } from "../../components/Container/styles"
import { Title } from "../../components/UI/Title/Title";


export const MainPage: React.FC = () => {
    return (
        <StyledPageContainer>
            <Container as='section'>
                <Title $fontSize="56px">Доска задач</Title>
            </Container>
        </StyledPageContainer>
    );
};