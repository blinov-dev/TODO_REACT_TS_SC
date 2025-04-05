// import { useState } from "react";
import { Board } from "../../components/Board/Board";
// import { TaskStatusToggleButton } from "../../components/UI";
import { Container } from "../../components/UI/Container/Container";
import { StyledPageContainer } from "../../components/UI/Container/styles"
import { Title } from "../../components/UI/Title/Title";



export const MainPage: React.FC = () => {

    // const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // const handleToggle = (index: number) => {
    //     setActiveIndex(index === activeIndex ? null : index);
    // };


    return (
        <StyledPageContainer>
            <Title $fontSize="56px">Доска задач</Title>
            {/* <Container $display="flex" $flexWrap="wrap" $gap="20px">
                {tasksTypes && tasksTypes.map((item: string, index: number) =>
                    <TaskStatusToggleButton key={index}
                        activeToggle={activeIndex === index}
                        onClick={() => handleToggle(index)}>{item}</TaskStatusToggleButton>
                )}
            </Container> */}
            <Container as='section' $display="flex" $flexDirection="column" $gap="50px">
                <Board typeTodos="Новая" />
                <Board typeTodos="Выполнена" />
                <Board typeTodos="Отложена" />
            </Container>
        </StyledPageContainer >
    );
};