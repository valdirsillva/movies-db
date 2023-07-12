

export function GenresMovies({ genres }) {
    return (
        <aside className="min-w-[350px] flex justify-start flex-col ">
            <h3 className="text-4xl mb-10 ml-5">Generos</h3>
            <div className="flex flex-row flex-wrap gap-3 mb-10 px-5 " >
                {genres.map(({ id, name }) => {
                    return (
                        <div className=" w-auto px-2 bg-gray-500 flex items-center rounded-2xl cursor-pointer active:bg-violet-800" key={id}>
                            {name}
                        </div>
                    )
                })}

                <button type="button" className="w-full bg-violet-900 p-2 mt-10 rounded-2xl">
                    Pesquisar
                </button>
            </div>
        </aside >
    )
}