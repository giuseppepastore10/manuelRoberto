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
  padding-top: 3rem;
  padding-bottom: 3rem;
  
  
`;

export const FeatureContainer = styled.div`
background: rgb(0,0,0) ;
background-position: center;
background-size: cover;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
color: #fff;
text-align: center;
min-height: 100vh;
padding-top:3rem;
padding-bottom:3rem;



	h1 {
		font-size: clamp(3rem, 5vw, 5rem);
	}

	p {
		margin-bottom: 1rem;
		font-size: clamp(1rem, 2vw, 2rem);
	}

  @media screen and (max-width: 900px) {
    flex-direction: ${props => props.reverse?'column-reverse':'column'};
  }


`;

