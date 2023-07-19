import styled from 'styled-components';

export const ProductsContainer = styled.div`
	/* width: 100vw; */
	

`;

export const ProductsWrapper = styled.div`
	display: flex;
	justify-content: center;
	
	min-height: 20rem;

	@media screen and (max-width: 1200px) {
		flex-direction: column;
	  }
	
`;

export const ProductsCard = styled.div`
	margin: 2rem;
	
	display:flex;
	flex-direction: column;
	justify-content: center;

	

`;

export const ProductsHeading = styled.h1`
	font-size: clamp(2rem, 2.5vw, 3rem);
	text-align: center;
	margin-bottom: ${props => props.marginBottom || '3rem'};

	// COMMENTED
	// @media screen and (max-width: 600px) {
	// 	font-size: clamp(2rem, 2.5vw, 2rem);
	//   }
`;

export const ProductsTitle = styled.h2`
	font-weight: 400;
	font-size: clamp(2rem, 2.5vw, 3rem);
`;

export const ProductIconContainer = styled.div`
	display:flex;
	width:100%; 
	justifyContent:center;
	align-items:center;
	
`;

export const ProductIcon = styled.span`
font-size: clamp(2rem, 8vw, 2rem);

padding: 3rem;


@media screen and (max-width: 650px) {
	font-size: clamp(1rem, 8vw, 1rem);
	padding: 0;
	// margin-top: 5rem;
	// margin-bottom: 5rem;

	
}
		
	
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
		// COMMENTED min-height: ${props => props.zeroMargin? '0':"8rem"};
	  }
`;

export const ProductsInfoVideo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 20rem;
	
	font-size: ${props => props.fontSize || ''}; 
	text-align: ${props => props.textAlign || 'center'};

	@media screen and (max-width: 1200px) {
		// COMMENTE min-height: ${props => props.zeroMargin? '0':"8rem"};
	  }

	
`;

