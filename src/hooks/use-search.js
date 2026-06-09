import { useState } from "react";

export const useSearch = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    const performSearch = (value) => {
        setIsSearching(true);
        setSearchQuery(value);
        setSearchValue("");
    };

    const cancelSearch = () => {
        setIsSearching(false);
        setSearchValue("");
        setSearchQuery("");
    };

    return {
        searchValue,
        setSearchValue,
        searchQuery,
        isSearching,
        performSearch,
        cancelSearch,
    };
};
