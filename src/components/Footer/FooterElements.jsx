import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
	background-color: #0d0909;
`;

export const FooterWrap = styled.div`
	padding: 16px 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1300px;
	margin: 0 auto;
`;

export const SocialMedia = styled.section`
	max-width: 1300px;
	width: 100%;
`;

export const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: left;
	max-width: 1100px;
	margin: 0px auto 0 auto;
	flex-direction: column;

	
`;

export const SocialLogo = styled(Link)`
	color: #fff;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	font-weight: bold;

	margin-bottom: 1rem;

	p {
		font-weight: normal;
		font-size: 0.7rem;
	}
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 240px;
	margin-bottom: 1rem;

`;



export const SocialIconLink = styled.a`
	color: #fff;
	font-size: ${props => props.fontSize || "24px"};
	padding: 0px 5px 0px 5px;
	

`;
