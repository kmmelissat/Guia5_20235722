import { useEffect, useState } from "react";
import { useAppStore } from "../store/useAppStore";

export default function SearchForm() {
    const fetchCategories=useAppStore(state=>state.fetchCategories)
    const categories=useAppStore(state=>state.categories)
    const searchRecipes=useAppStore(state=>state.searchRecipes)


    const handleSubmit = (e) => {
        e.preventDefault()
        if(Object.values(searchFilters).includes("")) {
            console.log('Todos los campos son obligatorios')
            return
        }
        
        searchRecipes(searchFilters)
    
    }

    useEffect(()=>{
        fetchCategories()
    }
    ,[])

    const [searchFilters, setSearchFilters] = useState({
        category: '',
        ingredient: ''
    })

    const handleChange = (e) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form
        onSubmit={handleSubmit}
        className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-16 p-10 rounded-lg shadow space-y-6">
            <div className="space-y-4">
                <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg">
                    Nombre o ingredientes
                </label>
                <input
                id="ingredient"
                type="text"
                onChange={handleChange}
                name="ingredient"
                value={searchFilters.ingredient}
                className="p-3 w-full rounded-lg focus:outline-none bg-white"
                placeholder="Nombre o ingredientes. Ej. Vodka, Tequila, Cafe">
                </input>
            </div>
            <div className="space-y-4">
                <label
                htmlFor="category"
                className="blocl text-white uppercase font-extrabold text-lg">
                    Categoria
                </label>
                <select
                id="category"
                onChange={handleChange}
                name="category"
                value={searchFilters.category}
                className="p-3 w-full rounded-lg focus:outline-none bg-white">
                    <option value=""> --Seleccione--- </option>
                    {categories.map(category=>(
                        <option value={category.strCategory} key={category.strCategory}>
                            {category.strCategory}
                        </option>
                    ))}
                </select>
            </div>
            <input
            type="submit"
            value="Buscar"
            className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold p-2 uppercase rounded-lg w-full">
            </input>
        </form>

    )
}