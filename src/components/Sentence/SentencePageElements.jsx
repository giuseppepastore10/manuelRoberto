import styled from 'styled-components';



export const FeatureContainer = styled.div`
background: rgb(0,0,0) ;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #fff;
text-align: center;

min-height: ${props => props.noWholeWindow? "" : "100vh"};
width:100%;

padding-top: 5rem;
padding-bottom: 5rem;

@media screen and (max-width: 650px) {
    padding-top: 20rem;
    padding-bottom: 20rem;
    
}




`;
