import { useAppStore } from "../store/useAppStore"


export default function DrinkCard({drink}){

    const selectRecipe = useAppStore((state)=>state.selectRecipe)


    return (
        <div className="shadow-lg rounded-lg">
            <div className="overflow-hidden rounded-tr-lg rounded-tl-lg">
                <img src={drink.strDrinkThumb} 
                alt={`Imagen de ${drink.strDrink}`} 
                className="hover:scale-125 transition-transform hover:rotate-2"/>
            </div>
            <div className="p-5">
                <h2 className="text-2xl truncate font-black">
                    {drink.strDrink}
                </h2>
                

                <button
                type="button"
                className="bg-orange-400 hover:bg-orange-600 mt-5 w-full p-3 font-bold text-white text-lg"
                onClick={()=>selectRecipe(drink.idDrink)}>
                    Ver Receta
                </button>
            </div>
        </div>

    )
}
