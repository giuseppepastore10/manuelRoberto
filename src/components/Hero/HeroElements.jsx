import styled, { keyframes } from 'styled-components';
import copertina from '../../images/main/copertina.png';

export const HeroContainer = styled.div`
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
		url(${copertina});
	height: 100vh;
	background-position: center top;
	background-size: cover;
	margin-top: -7rem;
	
	// @media screen and (min-width: 650px) {
	// 	background-position: right top; /* Impostato su "right" per mantenere l'immagine sulla destra */
	// 	background-repeat: no-repeat; /* Impostato su "no-repeat" per evitare la ripetizione dell'immagine */
	// 	background-color: black; /* Impostato il colore di sfondo a nero */
	// 	background-size: auto;
	// }
`;



export const HeroItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	
	height: 100vh;
	max-height: 100%;
	padding: 0 3rem;
	width: 100%; 
	color: #fff;

	line-height: 2;
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
	font-size: clamp(3rem, 10vw, 10rem);
	margin-bottom: 3rem;
	box-shadow: 3px 5px #e9ba23;
	letter-spacing: 0.5rem;
	
	text-align: ${props => props.textAlign || ''};
	animation: ${fadeIn} 1s ease-in-out forwards;
	animation-delay: 0.25s;

	@media screen and (max-width: 650px) {
		font-size: clamp(2rem, 8vw, 2rem);
		
	}


	
`;

export const HeroH1NoAnim = styled.h1`
	font-size: ${props=>props.fontSize?props.fontSize:"clamp(3rem, 10vw,8rem);"};
	margin-bottom: 3rem;
	
	letter-spacing: 0.5rem;

	// COMMENTED
	@media screen and (max-width: 650px) {
		font-size: ${props=>props.fontSize?"clamp(2rem, 8vw, 3rem);":"clamp(3rem, 8vw, 3rem);"};
		
	}

`;


export const HeroH2 = styled.p`
	box-shadow: ${props => props.textAlign === 'left' ? "-3px 5px #e9ba23" : "3px 5px #e9ba23"};
	padding: 2rem;
	

	font-size: clamp(3rem, 5vw, 5rem);
	margin-bottom: 3rem;
	
	letter-spacing: 0.5rem;
	text-align: ${props => props.textAlign || ''};

	@media screen and (max-width: 650px) {
		font-size: clamp(2rem, 8vw, 2rem);
		
	}


`;

export const HeroVideo = styled.p`
	
padding: 2rem;

@media screen and (min-width: 1000px) {
	min-height: 15vw;
	 }


font-size: clamp(2rem, 5vw, 2rem);

// COMMENTED
@media screen and (max-width: 650px) {
	font-size: ${props=>props.fontSize?"clamp(2rem, 8vw, 3rem);":"clamp(2rem, 8vw, 2rem);"};
	
}

text-align: ${props => props.textAlign || ''};

	

`;

export const PlaceLink = styled.a`

	
	text-decoration: none;
	font-weight: bold;
	color: white;
	overflow: hidden;
  
`;


export const HeroP = styled.p`
	font-size: clamp(1rem, 8vw, 1.8rem);
	margin-bottom: 3rem;
	opacity: 0;
	animation: ${fadeIn} 1s ease-in-out forwards;
	animation-delay: 0.5s;
	font-family: sans-serif;
	color: #949494;

	text-align: ${props => props.textAlign || ''};
	
	// COMMENTED
	@media screen and (max-width: 650px) {
		font-size: clamp(1rem, 8vw, 1.5rem);
		text-align: center;
		
	}
`;

export const HeroBtn = styled.button`
	font-size: clamp(2rem, 10vw, 2rem);
	padding: 1rem 4rem;
	border: none;
	background: #e31837;
	color: #fff;
	transition: 0.2s ease-out;
	opacity: 0;
	animation: ${fadeIn} 1s ease-in-out forwards;
	animation-delay: 1s;
	border-radius: 10rem;

	// COMMENTED
	@media screen and (max-width: 650px) {
		font-size: clamp(1rem, 8vw, 1rem);
		
	}

	&:hover {
		background: #ffc500;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
	}
`;
