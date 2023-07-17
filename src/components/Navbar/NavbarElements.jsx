import { NavLink as Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FaPizzaSlice } from 'react-icons/fa';

export const Nav = styled.nav`
	background: rgba(227,24,55,0.5);
	height: 80px;
	display: flex;
	
	justify-content: space-between;
	font-weight: 700;
	width: 100%;
	position: sticky;
	top: 0;
	
	z-index: 999;
`;

export const NavContentWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: left;
max-width: 1100px;
align-items: center;
width:100%;
margin: 0px auto 0 auto;
flex-direction: row;


`;

export const NavWrap = styled.div`
	padding: 16px 24px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	max-width: 1300px;
	width: 100%;
	margin: 0 auto;
`;

export const NavLink = styled(Link)`
	color: #fff;
	font-size: ${props => props.fontSize || '2rem'};
	
	display: flex;
	align-items: center;
	
	text-decoration: none;
	cursor: pointer;
	

	@media screen and (max-width: 400px) {
		
		font-size: ${props => props.fontSize || '1.8rem'};
	}
`;

export const NavIcon = styled.div`
	
	
	cursor: pointer;
	color: #fff;

`;

export const Bars = styled(FaPizzaSlice)`
	font-size: 2rem;
	transform: translate(-50%, -15%);
`;
