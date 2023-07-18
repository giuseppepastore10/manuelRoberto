import { Link } from 'react-router-dom';
import styled from 'styled-components';



export const FooterWrap = styled.div`
background-color: #0d0909;

display: flex;
justify-content: space-between;

align-items: center;
width:100%;
flex-direction: row;
padding: 1vh 3rem;
`;



export const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: left;
	width:100%;
	flex-direction: column;
	padding: 1vh 3rem;
	
`;

export const SocialLogo = styled(Link)`
	color: #fff;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: clamp(1.5rem, 10vw, 3rem);
	display: flex;
	align-items: center;
	font-weight: bold;

	margin-bottom: 1rem;

	
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	margin-bottom: 1rem;

`;



export const SocialIconLink = styled.a`
	color: #fff;
	font-size: ${props => props.fontSize || "24px"};
	padding: 0 0.5rem 0 0.5rem;

	@media screen and (max-width: 750px) {
		font-size: ${props => props.fontSize?"6rem": "10px"};
	}
	

`;
