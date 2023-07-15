import styled, { keyframes } from 'styled-components';
import copertina from '../../images/main/copertina.jpg';

export const HeroContainer = styled.div`
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
		url(${copertina});
	height: 100vh;
	background-position: center top;
	background-size: cover;
	padding-top: 100px;

	@media screen and (min-width: 650px) {
		background-position: right top; /* Impostato su "right" per mantenere l'immagine sulla destra */
		background-repeat: no-repeat; /* Impostato su "no-repeat" per evitare la ripetizione dell'immagine */
		background-color: black; /* Impostato il colore di sfondo a nero */
		background-size: auto;
	}
`;

export const HeroContent = styled.div`
	height: calc(100vh-80px);
	max-height: 100%;
	/* width: 100vw; */
	padding: 0rem calc((100vw - 1300px) / 2);
	
	display: flex;
	justify-content: right;
`;

export const HeroItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	max-height: 100%;
	padding: 0 2rem;
	width: 650px;
	color: #fff;
	text-transform: uppercase;
	line-height: 1;
	font-weight: bold;

	
	

	@media screen and (min-width: 650px) {
		width: 100%;
		align-items: flex-start;
	}
`;

const fadeIn = keyframes`
	from {
		opacity: 0;
		transform: translateY(100px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

export const HeroH1 = styled.h1`
	font-size: clamp(2.5rem, 10vw, 5rem);
	margin-bottom: 1rem;
	box-shadow: 3px 5px #e9ba23;
	letter-spacing: 3px;
	opacity: 0;
	animation: ${fadeIn} 1s ease-in-out forwards;
	animation-delay: 0.25s;
	
`;


export const HeroH2 = styled.p`
	font-size: clamp(4rem, 15vw, 10rem);
	box-shadow: ${props => props.textAlign === 'left' ? "-3px 5px #e9ba23" : "3px 5px #e9ba23"};
	letter-spacing: 5px;
	padding: 1rem;
	text-align: ${props => props.textAlign || 'left'};

	
	

`;

export const HeroP = styled.p`
	font-size: clamp(2rem, 2.5vw, 3rem);
	margin-bottom: 2rem;
	opacity: 0;
	animation: ${fadeIn} 1s ease-in-out forwards;
	animation-delay: 0.5s;
`;

export const HeroBtn = styled.button`
	font-size: 1.4rem;
	padding: 1rem 4rem;
	border: none;
	background: #e31837;
	color: #fff;
	transition: 0.2s ease-out;
	opacity: 0;
	animation: ${fadeIn} 1s ease-in-out forwards;
	animation-delay: 1s;
	border-radius: 10rem;

	&:hover {
		background: #ffc500;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
	}
`;
