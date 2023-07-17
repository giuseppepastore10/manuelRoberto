import styled from 'styled-components';

export const ProductsContainer = styled.div`
	/* width: 100vw; */
		
	padding: 5rem calc((100vw - 1300px) / 2);
	background: #000000;
	color: #fff;
`;

export const ProductsWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 auto;
	min-height: 20rem;

	@media screen and (max-width: 1200px) {
		flex-direction: column;
	  }
	
`;

export const ProductsCard = styled.div`
	margin: 0 2rem;
	line-height: 2;
	display:flex;
	flex-direction: column;
	justify-content: center;

	

`;

export const ProductsImg = styled.img`
	height: 300px;
	min-width: 300px;
	max-width: 100%;
	box-shadow: 8px 8px #fdc500;
`;

export const ProductsHeading = styled.h1`
	font-size: clamp(2rem, 2.5vw, 3rem);
	text-align: center;
	margin-bottom: ${props => props.marginBottom || '3rem'};

	@media screen and (max-width: 600px) {
		font-size: clamp(2rem, 2.5vw, 2rem);
	  }
`;

export const ProductsTitle = styled.h2`
	font-weight: 400;
	font-size: clamp(2rem, 2.5vw, 3rem);
`;

export const ProductsInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	min-height: 8rem;
	font-size: ${props => props.fontSize || ''}; 
	text-align: ${props => props.textAlign || 'left'};
	white-space: ${props => props.wSpace || 'normal'}; 

	@media screen and (max-width: 1200px) {
		min-height: ${props => props.zeroMargin? '0':"8rem"};
	  }
`;

export const ProductsInfoVideo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 20rem;
	min-height: 8rem;
	font-size: ${props => props.fontSize || ''}; 
	text-align: ${props => props.textAlign || 'center'};

	@media screen and (max-width: 1200px) {
		min-height: ${props => props.zeroMargin? '0':"8rem"};
	  }

	
`;

export const ProductsDesc = styled.p`
	padding: 2rem;
	text-align: ${props => props.textAlign || 'left'};
`;

export const ProductsPrice = styled.p`
	margin-bottom: 1rem;
	
	font-size: 2rem;
`;

export const ProductsButton = styled.button`
	font-size: 1rem;
	padding: 1rem 4rem;
	border: none;
	background: #e31837;
	color: #fff;
	transition: 0.2s ease-out;

	&:hover {
		background: #ffc500;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
	}
`;
