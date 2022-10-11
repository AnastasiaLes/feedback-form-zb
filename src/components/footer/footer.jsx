import { FooterContainer, PinkSmile } from "./footer.styled";
import pinkSmile from '../../images/red_cartoon 3.png';

const Footer = () => {
    return (
        <FooterContainer>
            <PinkSmile src={pinkSmile} alt="Smile" />
        </FooterContainer>
    )
}

export default Footer;