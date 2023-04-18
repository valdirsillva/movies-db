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
    }

    a:hover {
        color: red;
    }

`
