import { FooterContainer, PinkSmile, SocialList, GreenSmile, YellowSmile } from "./footer.styled";
import pinkSmile from '../../images/red_cartoon 6.png';
import greenSmile from '../../images/Group 80.png';
import yellowSmile from '../../images/red_cartoon 4 (1).png'
import icon from '../../images/sprite-defs.svg'

const Footer = () => {
    return (
        <FooterContainer>
            <PinkSmile src={pinkSmile} alt="Smile" />
            <SocialList>
                <li>
                    <a target='_blank' href="https://www.linkedin.com/" rel="noreferrer">
                        <svg width="18" height="18" style={{fill: '#787878'}}>
                        <use href={icon + '#icon-linkedin'} />
                    </svg>
                    </a>
                    
                </li>
                <li>
                    <a target='_blank' href="https://twitter.com/" rel="noreferrer">
                        <svg width="18" height="18" style={{fill: '#787878'}}>
                        <use href={icon + '#icon-twitter'} />
                    </svg>
                    </a>
                    
                </li>
                <li>
                    <a target='_blank' href="https://facebook.com/" rel="noreferrer">
                        <svg width="18" height="18" style={{fill: '#787878'}}>
                        <use href={icon + '#icon-facebook'} />
                    </svg>
                    </a>
                    
                </li>
                <li>
                    <a target='_blank' href="https://pinterest.com/" rel="noreferrer">
                         <svg width="18" height="18" style={{fill: '#787878'}}>
                        <use href={icon + '#icon-pinterest'} />
                    </svg>
                    </a>
                   
                </li>
            </SocialList>
            <GreenSmile src={greenSmile} alt="Smile" />
            <YellowSmile src={yellowSmile} alt="Smile" />
        </FooterContainer>
        
    )
}

export default Footer;