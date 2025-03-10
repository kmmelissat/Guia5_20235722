import { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import { useNotificationStore } from '../store/notificationSlice';

export default function SearchForm() {
  const fetchCategories = useAppStore((state) => state.fetchCategories);
  const categories = useAppStore((state) => state.categories);
  const searchRecipes = useAppStore((state) => state.searchRecipes);
  const addNotification = useNotificationStore((state) => state.addNotification);

  const [searchFilters, setSearchFilters] = useState({
    category: '',
    ingredient: ''
  });

  const handleChange = (e) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(searchFilters).includes('')) {
      addNotification('Por favor, ingrese todos los campos de búsqueda', 'error');
      return;
    }
    searchRecipes(searchFilters);
  };

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <form onSubmit={handleSubmit} className='md:w-1/2 2xl:w-1/3 bg-orange-400 my-16 p-10 rounded-lg shadow space-y-6'>
      <div className='space-y-4'>
        <label htmlFor="ingredient" className='block text-white uppercase font-extrabold text-lg'>
          Nombre o Ingredientes
        </label>
        <input
          id='ingredient'
          type='text'
          name='ingredient'
          value={searchFilters.ingredient}
          onChange={handleChange}
          className='p-3 w-full rounded-lg focus:outline-none bg-white'
          placeholder='Nombre o Ingrediente. Ej. Vodka, Tequila, Café'
        />
      </div>
      <div className='space-y-4'>
        <label htmlFor="category" className='block text-white uppercase font-extrabold text-lg'>
          Categoría
        </label>
        <select
          id='category'
          name='category'
          value={searchFilters.category}
          onChange={handleChange}
          className='p-3 w-full rounded-lg focus:outline-none bg-white'
        >
          <option value="">-- Seleccione --</option>
          {categories.map((category) => (
            <option key={category.strCategory} value={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
        </select>
      </div>
      <input
        type='submit'
        value='Buscar Recetas'
        className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase'
      />
    </form>
  );
}
