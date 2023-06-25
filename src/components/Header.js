import { Fragment } from "react"
import { Topo } from "../styles/Topo"
import { MainMenu } from "./MainMenu"
import { InputSearch } from "../styles/InputSearch"
import { HeaderContainer } from "../styles/HeaderContainer"
import { HeaderContent } from "../styles/HeaderContent"

import { BsFillBagHeartFill } from 'react-icons/bs'

export const Header = ({ fieldSearch }) => {
    return (
        <HeaderContainer>
            <Topo>
                <h1>Movies DB</h1>

                <span>
                    <BsFillBagHeartFill size={25} />
                    Meus Favoritos
                </span>
            </Topo>

            <HeaderContent>
                {fieldSearch ?? (
                    <Fragment>
                        <h2> Bem-vindo(a).</h2>
                        <p>Milhões de filmes, séries e pessoas para descobrir. Explore já.</p>

                        <InputSearch type="search"
                            placeholder="Pesquisar por filme, programa de tv, reality show..."
                        />
                    </Fragment>
                )}
            </HeaderContent>
            <MainMenu />
        </HeaderContainer>
    )
}