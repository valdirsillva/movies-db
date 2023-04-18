import { HeaderContainer } from "../styles/HeaderContainer"
import { HeaderContent } from "../styles/HeaderContent"
import { InputSearch } from "../styles/InputSearch"
import { Topo } from "../styles/Topo"
import { MainMenu } from "./MainMenu"

export const Header = () => {
    return (
        <HeaderContainer>
            <Topo>Movies DB</Topo>
            <HeaderContent>
                <h2> Bem-vindo(a).</h2>
                <p>Milhões de filmes, séries e pessoas para descobrir. Explore já.</p>

                <InputSearch type="search"
                    placeholder="Pesquisar por filme, programa de tv, reality show..."
                />
            </HeaderContent>
            <MainMenu />
        </HeaderContainer>
    )
}