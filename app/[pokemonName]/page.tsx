import { getPokemon } from "@/lib/pokemonAPI";
import { PokemonImage } from "@/components/pokemon-image";

export default async function PokemonPage({ params } : { params: { pokemonName: string } }) {

    const { pokemonName } = params;
    const pokemonObject = await getPokemon(pokemonName);

    console.log(pokemonObject);

    return (
        <>
            <h1 className="text-4xl text-bold pt-4">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h1>
            <div className="m-4" style={{ position: "relative", width: '200px', height: '200px'}}>
                <PokemonImage 
                    image={pokemonObject.sprites.other['showdown'].front_default }
                    name={pokemonName}
                />
            </div>
            <h3 className="text-xl">#: {pokemonObject.id} </h3> 
            <h3 className="text-xl">Weight: {pokemonObject.weight} </h3> 
            <h3 className="text-xl">height: {pokemonObject.height} </h3> 
            <div className="flex justify-center" style={{width: "100%"}}> 
                <div className="flex flex-col items-center" style={{width: "500px"}}>
                    {pokemonObject.types.map( (typeObject : any) => {
                        const typeName = typeObject.type.name
                        const typeValue = typeObject.name;

                        return (
                            <div className="flex items-stretch" style={{width: "500px"}} key={typeValue}>
                                <h3 className="p-3 w-2/4 text-xl">type: {typeName}</h3> 
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
