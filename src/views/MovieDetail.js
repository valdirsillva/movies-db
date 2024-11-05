import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/header/header'
import { MovieService } from '../services/MovieService'
import { Trailler } from '../components/modal/Trailler'
import { SpanPercent } from '../styles/SpanPercent'

export const MovieDetail = () => {
   const { id } = useParams();

   const [movie, setMovie] = useState({});

   const fetchMovie = async () => {
      const { data } = await MovieService.getMovieById(id)
      console.log(data)
      setMovie(data)
   }

   const getDetailsMovie = async (id) => {
      const response = await MovieService.getDetailsMovieById(id)

      if (response.data.results[1]) {
         const dubbedTrailer = response.data.results[1].key
         // Retorna key p/ trailler dublado
         return dubbedTrailer
      }

      if (response.data.results[0]) {
         const subtitledTrailer = response.data.results[0].key
         // Retorna key p/ trailler legendado
         return subtitledTrailer
      }
   }

   const viewTraillerMovie = async () => {
      const response = await getDetailsMovie(movie.id)
      return response
   }

   useEffect(() => {
      fetchMovie()
   }, [])

   return (
      <>
         <Header
            fieldSearch={false}
         />

         <section className="w-full md:flex flex-col flex-wrap">
            <main className="flex md:flex-row xs:w-full xs:flex-col xs:flex-wrap xs:mt-10 gap-10 md:px-8 md:py-14 ">
               <img
                  loading="lazy"
                  className='xs:w-full xs:flex xs:items-center xs:justify-center  h-[500px] rounded-lg'
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
               />

               <article className='w-full md:flex flex-col md:items-start'>
                  <section className='w-full flex flex-col flex-wrap'>
                     <div className="md:w-full flex md:flex-row xs:flex-col md:justify-evenly">
                        <h1 className='w-full text-violet-500 text-5xl pb-2 font-medium'>{movie.title}</h1>
                        <a href='/'
                           className="text-violet hover:bg-mauve3 inline-flex h-[35px] items-center justify-center border-violet-800 rounded-[4px] bg-violet-800 px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                           Voltar
                        </a>
                     </div>

                     <div className="w-full flex flex-row items-center gap-2 ml-2 mb-3">
                        <p>{movie.release_date} - </p>
                        {movie.genres?.map(({ id, name }) => {
                           return (
                              <span key={id}>{name}</span>
                           )
                        })}
                     </div>

                     <div className="w-full flex flex-row items-center ml-2 mt-3 gap-4">
                        <SpanPercent>
                           {movie.vote_average}%
                        </SpanPercent>
                        <span className="h-[80px]">Avaliação dos usuários</span>
                     </div>
                  </section>

                  <section className="w-full">
                     <div className='w-full flex flex-col gap-4 '>
                        <h2 className="text-xl mt-5 ml-0">Sinopse</h2>
                        {movie.overview}
                     </div>
                  </section>

                  <Trailler
                     handleOnClick={viewTraillerMovie}
                     title={movie.title}
                  />

               </article>
            </main>
         </section>
      </>
   )
}