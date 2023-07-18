import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Kanit", sans-serif;
        
    }

    html {
        font-size: 1vw;
    }

    #mainContainer{
        padding: 3rem;
        overflow-x: hidden;
        background: #000;

        
    }

    
    .video-container {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        @media screen and (max-width: 1000px) {
            justify-content: center;
        }

        flex-wrap:wrap;
        width:100%;
    }

    .video-c {        display: flex,
        flexDirection: column,

        margin:0;

        @media screen and (max-width: 1000px) {
           
            margin-left: 0rem;
            margin-right: 0rem;
            margin-top: 2rem;
            margin-bottom: 2rem;

        }


    }
    
    

    
    
    .video-container .video video{
      
        object-fit: contain;
        outline: none;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        width:100%;
        
    }

    .video-container .video video:hover{
        transition: .2s linear;
        transform: scale(1.3);
    }

    

   


`;
