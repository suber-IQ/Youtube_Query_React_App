import React, { createContext, useState, useEffect, Dispatch, SetStateAction } from "react";
import { fetchDataFromApi } from "../utils/api";

interface AppContextProps {
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    searchResults: any[];
    selectedCategory: string;
    setSelectedCategory: Dispatch<SetStateAction<string>>;
    mobileMenu: boolean;
    setMobileMenu: Dispatch<SetStateAction<boolean>>;
}

const defaultAppContext: AppContextProps = {
    loading: false,
    setLoading: () => {},
    searchResults: [],
    selectedCategory: "New",
    setSelectedCategory: () => {},
    mobileMenu: false,
    setMobileMenu: () => {},
};

export const Context = createContext<AppContextProps>(defaultAppContext);

type Props = {
    children: React.ReactNode;
}

export const AppContext = ({ children }: Props)=> {
    const [loading, setLoading] = useState<boolean>(false);
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("New");
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);

    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);

    const fetchSelectedCategoryData = (query: string) => {
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
            console.log(contents);
            setSearchResults(contents);
            setLoading(false);
        });
    };

    const value = {
        loading,
        setLoading,
        searchResults,
        selectedCategory,
        setSelectedCategory,
        mobileMenu,
        setMobileMenu,
    }

    return (
      <>
       <Context.Provider value={value}>
        {children}
       </Context.Provider>
      </>
    )
};
