import { Board } from "../../components/Board/Board";
import { Container } from "../../components/Container/Container";
import { StyledPageContainer } from "../../components/Container/styles"
import { Title } from "../../components/UI/Title/Title";


export const MainPage: React.FC = () => {
    return (
        <StyledPageContainer>
            <Container as='section' $display="flex" $flexDirection="column" $gap="50px">
                <Title $fontSize="56px">Доска задач</Title>
                <Board />
            </Container>
        </StyledPageContainer>
    );
};