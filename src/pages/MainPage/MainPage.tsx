import { Board } from "../../components/Board/Board";
import { TaskStatusToggleButton } from "../../components/UI";
import { Container } from "../../components/UI/Container/Container";
import { StyledPageContainer } from "../../components/UI/Container/styles"
import { Title } from "../../components/UI/Title/Title";


export const MainPage: React.FC = () => {
    return (
        <StyledPageContainer>
            <Title $fontSize="56px">Доска задач</Title>
            <Container >
                <TaskStatusToggleButton>Выполненные</TaskStatusToggleButton>
                <TaskStatusToggleButton>Отложенные</TaskStatusToggleButton>
            </Container>
            <Container as='section' $display="flex" $flexDirection="column" $gap="50px">
                <Board typeTasks="Отложена" />
            </Container>
        </StyledPageContainer>
    );
};