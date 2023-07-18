import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

export const SidebarContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 30%;
	height: 100%;
	background: #ffc500;
	display: grid;
	align-items: center;
	top: 0;
	overflow: hidden;
	transition: 0.3s ease-in-out;
	right: ${({ isOpen }) => (isOpen ? '0' : '-10000px')};

	@media screen and (max-width: 400px) {
		width: 100vw;
		right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
	}
`;

export const CloseIcon = styled(FaTimes)`
	color: #000;
`;

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	border: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;

export const SidebarMenu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	height: 50%;
	
	grid-template-rows: repeat(4,5rem);
	text-align: center;

	@media screen and (max-width: 400px) {
		height: 40%;
	}
`;

export const SidebarLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2.5rem;
	@media screen and (max-width: 400px) {
		font-size: 6rem;
	}
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	color: #000;
	cursor: pointer;

	&:hover {
		color: #e31837;
		transition: 0.2s ease-in-out;
	}
`;

