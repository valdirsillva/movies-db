import { Fragment } from 'react'
import { Menu } from '../menu/menu'
import { BsFillBagHeartFill } from 'react-icons/bs'

export const Header = ({ fieldSearch }) => {
    return (
        <section className="flex text-center p-0">
            <header className="fixed top-0 bg-[#032541] w-full z-10 flex flex-row h-[65px] items-center justify-around px-7">
                <h1>Movies DB</h1>

                <span className="flex items-center gap-7">
                    <BsFillBagHeartFill size={25} /> Meus Favoritos
                </span>
            </header>

            <main className="md:w-full xs:w-full bg-image-header-top bg-top bg-cover bg-scroll transition-all p-28 md:p-40 ">
                {fieldSearch === true ? (
                    <Fragment>
                        <h2> Bem-vindo(a).</h2>
                        <p>Milhões de filmes, séries e pessoas para descobrir. Explore já.</p>

                        <input 
                            type="search"
                            className="md:w-10/12 xs:w-full rounded-lg border-none px-1 py-3 mt-4"
                            placeholder="Pesquisar por filme, programa de tv, reality show..."
                        />
                    </Fragment>
                ) : ''}
            </main>
            <Menu />
        </section>
    )
}