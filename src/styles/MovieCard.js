import styled from "styled-components";


export const MovieCard = styled.li`
    display: flex;
    flex-direction: column;
    align-items:center;
    
    gap:0;

    > img {
        width: 200px;
        border-radius: 10px;
        transition: scale 400ms;
    }

    img:hover {
        scale: 110%;
    }

    a {
        text-align:center;
        color: white;
        text-decoration: none;
        padding: 10px 20px;
        border-radius: 20px;
    }

    a:hover {
        color: white;
        background-color: red;
        padding: 10px 20px;
        border-radius: 20px;
        transition: 1s ease;
    }

    div {
        display:flex;
        width: 200px;
        align-items: center;
        justify-content: center;
        
        a {
            justify-content: center;
        }
    }

`
