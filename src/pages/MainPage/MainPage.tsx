import { Board } from "../../components/Board/Board";
import { TaskStatusToggleButton } from "../../components/UI";
import { Container } from "../../components/UI/Container/Container";
import { StyledContainer, StyledPageContainer } from "../../components/UI/Container/styles"
import { Title } from "../../components/UI/Title/Title";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { GetUniqueTodosStatus } from "../../utils";
import { changeBoard } from "../../redux/board/boardSlice";

export const MainPage: React.FC = () => {
    const boardName = useAppSelector(state => state.boards);
    const dispatch = useAppDispatch();

    const todos = useAppSelector((state) => state.todos);
    const uniqueTodosStatus = GetUniqueTodosStatus(todos)

    const changeBoardName = (name: string) => {
        dispatch(changeBoard(name))
    }

    return (
        <StyledPageContainer $display="flex" $gap="50px">
            <StyledContainer>
                <Title $fontSize="56px">Доска задач</Title>
                <Container as='section' $display="flex" $flexDirection="column" $gap="50px">
                    <Board typeTodos={boardName} />
                </Container>
            </StyledContainer >
            <StyledContainer $display="flex" $flexDirection="column">
                <Title $fontSize="56px">Типы задач</Title>
                <Container $display="flex" $flexDirection="column" $gap="20px" $margin="50px 0">
                    {uniqueTodosStatus && uniqueTodosStatus.map((item: string, index: number) =>
                        <TaskStatusToggleButton key={index + item}
                            activeToggle={item === boardName}
                            onClick={() => changeBoardName(item)}>{item}</TaskStatusToggleButton>
                    )}
                </Container>
            </StyledContainer >
        </StyledPageContainer>
    );
};