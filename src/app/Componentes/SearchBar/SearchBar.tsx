'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <>
   <div className='flex flex-row justify-between'>
   <form
      onSubmit={handleSubmit}
      className="relative w-[42rem]   "
    >
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border border-gray-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
      />
      <Search className="absolute left-3 top-2.5 text-gray-500" />
    </form>
   

   </div>
    </>
  );
}
