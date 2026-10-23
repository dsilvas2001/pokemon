
interface PokemonCardProps {
  pokemonData: pokemonData | null;

}

export const PokemonCard= ({ pokemonData }: PokemonCardProps) => {
  if (!pokemonData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold mb-2">{pokemonData?.name}</h2>
      <img
        src={pokemonData?.sprites.front_default}
        alt="Pokemon"
        className="w-32 h-32 mx-auto mb-2"
      />
      <p className="text-gray-700">Type: {pokemonData?.types[0].type.name}</p>
      <p className="text-gray-700">
        Abilities:{" "}
        {pokemonData?.abilities
          .map((ability: { ability: { name: string } }) => ability.ability.name)
          .join(", ")}
      </p>
    </div>
  );
}
