import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Kanit", sans-serif;
    }

    #mainContainer{
        padding: 3rem;
        background-color: #000000;  
        overflow-x: hidden;
        display: flex;
        flex-direction:column;
        align-items: center;

    }

    
    .video-container {
        display: flex;
        justify-content: center;
        flex-wrap:wrap;
    }
    
    .video-container .video {
        height: 35rem;
        width: 20rem;
        margin: 2rem;
        box-shadow: 0 .5rem 1rem rgba(0,0,0,0.5);
        overflow: hidden;
        border-radius: 1rem;
    }
    
    .video-container .video video{
        heigth: 100%;
        width: 100%;
        object-fit: contain;
        outline: none;
        border: none;
        cursor: pointer;
        
    }

    .video-container .video video:hover{
        transition: .2s linear;
        transform: scale(1.3);
    }

    

    .video-container .video .active{
        // position: fixed;
        // top: 50%; 
        // left: 50%;
        // transform: translate(-50%, -50%);
        // width: auto;
        // height: 80%;
        // box-shadow: 0 0 0 100vhh rgba(0,0,0,.5);
        // z-index: 999;
        // border-radius:1rem;
    }

    // .video-container .video .active:hover{
    //     transition: none;
    //     transform: translate(-50%, -50%) scale(1);
    // }


`;
