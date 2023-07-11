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
	padding-left: 3rem;
	padding-right: 3rem;
	z-index: 999;
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
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
	color: #fff;

	p {
		transform: translate(-50%, 100%);
		font-weight: bold;
	}
`;

export const Bars = styled(FaPizzaSlice)`
	font-size: 2rem;
	transform: translate(-50%, -15%);
`;
