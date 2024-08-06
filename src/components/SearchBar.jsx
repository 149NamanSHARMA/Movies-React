import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center items-center mt-5 mb-5">
      <div className="relative">
        <input
          type="search"
          id="s"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for movies"
          className="w-full pl-10 pr-20 py-3 rounded-full transition-all duration-300 ease-in-out focus:w-full focus:cursor-text bg-gray-800 text-white placeholder-gray-400"
        />
        <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
          <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
