import { StyledPageContainer } from "../../components/Container/styles"
import { Title } from "../../components/UI/Title/Title";


export const MainPage: React.FC = () => {
    return (
        <StyledPageContainer>
            <section>
                <Title fontSize="56px">Доска задач</Title>
            </section>
        </StyledPageContainer>
    );
};