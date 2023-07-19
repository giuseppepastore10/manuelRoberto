import styled from 'styled-components';

export const ImageContainer = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: contain;
    width: 80%;
    border-radius: 1rem; 
  }

  
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;

  
  
`;

export const FeatureContainer = styled.div`
background: rgb(0,0,0) ;

display: flex;
color: #fff;
text-align: center;
min-height: 100vh;

padding-top: 5rem;
padding-bottom: 5rem;


	h1 {
		font-size: clamp(3rem, 5vw, 5rem);
	}

	

  @media screen and (max-width: 900px) {
    flex-direction: ${props => props.reverse?'column-reverse':'column'};
  }


`;

