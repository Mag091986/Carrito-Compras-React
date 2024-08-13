import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm, filteredData, setFilteredData }}>
            {children}
        </SearchContext.Provider>
    );
};
