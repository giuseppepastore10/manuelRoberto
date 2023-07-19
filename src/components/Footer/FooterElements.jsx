import { Link } from 'react-router-dom';
import styled from 'styled-components';



export const FooterWrap = styled.div`
background-color: #0d0909;

display: flex;
justify-content: space-between;

align-items: center;
width:100%;
flex-direction: row;

`;



export const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: left;
	width:100%;
	flex-direction: column;
	padding: 1vh 10vw;
	
	
`;

export const SocialLogo = styled(Link)`
color: #fff;
font-size: clamp(1rem, 8vw, 1.8rem);

display: flex;

text-decoration: none;
cursor: pointer;

// COMMENTED
@media screen and (max-width: 650px) {
	font-size: clamp(1rem, 8vw, 1.5rem);

	
}

	
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;


`;



export const SocialIconLink = styled.a`
	color: #fff;
	
	padding: 0 0.5rem 0 0;
	font-size: ${props => props.fontSize?props.fontSize:"clamp(1rem, 8vw, 1.8rem);"};

	// COMMENTED
	// @media screen and (max-width: 750px) {
	// 	font-size: ${props => props.fontSize?"6rem": "10px"};
	// }
	

`;

export const SocialTextLink = styled.a`
	color: #fff;
	
	padding: 0 0.5rem 0 0;
	font-size: ${props => props.fontSize?props.fontSize:"clamp(1rem, 8vw, 1rem);"};

	// COMMENTED
	@media screen and (max-width: 650px) {
		font-size: ${props => props.fontSize?props.fontSize: "clamp(0.8rem, 8vw, 0.8rem);"};
	}
	

`;
