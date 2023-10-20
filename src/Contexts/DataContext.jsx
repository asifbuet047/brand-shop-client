import { createContext } from "react";

export const DataContext = createContext();

function DataContextProvider({ children }) {
    const data = {};
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContextProvider;