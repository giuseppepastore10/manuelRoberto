import styled from 'styled-components';


// export const ContentContainer = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
  
  
// `;

export const FeatureContainer = styled.div`
background: rgb(0,0,0) ;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #fff;
text-align: center;
padding: 3rem;
min-height: ${props => props.noWholeWindow? "" : "100vh"};
width:100%;

@media screen and (max-width: 650px) {
    padding-top: 30rem;
    padding-bottom: 30rem;
    
}




`;
