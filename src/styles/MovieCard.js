import styled from "styled-components";


export const MovieCard = styled.li`
    display: flex;
    flex-direction: column;
    align-items:center;
    gap:0;

    img {
        width: 300px;
        border-radius: 10px;
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
        width: 300px;
        align-items: center;
        justify-content: center;
        
        a {
            justify-content: center;
        }
    }

`
