import { NavLink as Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FaPizzaSlice } from 'react-icons/fa';

export const Nav = styled.nav`
	background: rgba(227,24,55,0.5);
	height: auto;
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

align-items: center;
width:100%;
flex-direction: row;
padding: 1vh 3rem;

`;


export const NavLink = styled(Link)`
	color: #fff;
	font-size: ${props => props.fontSize || 'clamp(1.5rem, 10vw, 3rem);'};
	
	display: flex;
	
	text-decoration: none;
	cursor: pointer;
	

	
`;

export const NavIcon = styled.div`
	
	font-size: ${props => props.fontSize || 'clamp(1.5rem, 10vw, 1.5rem);'};

	cursor: pointer;
	color: #fff;

`;

export const Bars = styled(FaPizzaSlice)`
	font-size: 2rem;
	transform: translate(-50%, -15%);
`;
