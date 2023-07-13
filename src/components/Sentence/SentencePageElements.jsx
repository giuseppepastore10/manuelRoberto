import styled from 'styled-components';


export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const FeatureContainer = styled.div`
background: rgb(0,0,0) ;
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #fff;
text-align: center;
padding-top:3rem;
padding-bottom:3rem;
min-height: ${props => props.noWholeWindow? "" : "100vh"};




	h1 {
		font-size: clamp(3rem, 5vw, 5rem);
	}

	p {
		margin-bottom: 1rem;
		font-size: clamp(1rem, 2vw, 2rem);
	}
`;
