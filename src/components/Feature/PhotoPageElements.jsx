import styled from 'styled-components';

export const ImageContainer = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: contain;
    width: 80%;
    border-radius: 3rem; 
  }

  @media screen and (min-width: 600px) {
    height: auto;
    max-width: 50%;
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
`;

