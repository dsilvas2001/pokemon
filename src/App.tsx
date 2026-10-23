import { useEffect, useState } from 'react'

import './App.css'

import {PokemonCard} from './components' 

function App() {
  // const [count, setCount] = useState(0)

  const [pokemonData, setPokemonData] = useState([])
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

  const fetchPokemons = async (id)=> {
    try {
      const res = await fetch(`${BASE_URL}${id}`)
      const data = await res.json()
      console.log(data)
      setPokemonData((V_pokemonData) => [...V_pokemonData, data]);
    } catch (error) {
      console.log(error)
    }
  }
  const fetchAllPokemons= async() => {
    for(let i=1; i <=19; i++)
    {
      await fetchPokemons(i);
    }
  }
  useEffect(() => {
    fetchAllPokemons()
  }, [])

  return (
    <>
    <h1>Pokemon Data</h1>
    <div className='px-5'>
      <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          pokemonData.map((pokemon, index) => (
            <PokemonCard key={index} pokemonData={pokemon} />
          ))
        }
      </div>
    </div>
    </>
  )
}

export default App
