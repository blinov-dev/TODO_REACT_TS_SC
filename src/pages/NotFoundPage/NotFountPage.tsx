import { Link } from "react-router-dom";
import { Container } from "../../components/UI/Container/Container";
import { StyledPageContainer } from "../../components/UI/Container/styles"
import { Title } from "../../components/UI/Title/Title";


export const NotFoundPage: React.FC = () => {
    return (
        <StyledPageContainer>
            <Container as='section' $display="flex" $flexDirection="column" $alignItems="center" $gap="50px">
                <Title $fontSize="56px">Упс, данной страницы не существует</Title>
                <Link to='/'>Перейти на главную</Link>
            </Container>
        </StyledPageContainer>
    );
};