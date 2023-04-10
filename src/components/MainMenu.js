import { Link } from "react-router-dom";
import { MainMenuContainer } from "../styles/MainMenuContainer"

export const MainMenu = () => {
    return (
        <MainMenuContainer>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Sobre</Link></li>
            </ul>
        </MainMenuContainer>
    )
}