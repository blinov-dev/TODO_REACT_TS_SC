import { StyledMainContainer } from "../UI/Container/styles";
import { MainLogo } from "../UI";
import { Link } from "../UI/Link/Link";
import { StyledFooter } from "./styles";

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <StyledMainContainer $alignItems="center" $padding="10px 0" $justifyContent="center" $gap="20%">
                <MainLogo href="/">To-Do List</MainLogo>

                <Link href="/">BlinovDev</Link>
            </StyledMainContainer>
        </StyledFooter>
    );
}

export default Footer;