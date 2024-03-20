// ShopAPIProvider.js
import React, { createContext } from 'react';
import all_products from '../Components/Assets/all_products.js';

export const ShopApiContext = createContext(null);

const ShopAPIProvider = (props) => {
    // Restore the data and functions that you want to access using the context
    const apiValue = { all_products };
    return (
        <ShopApiContext.Provider value={apiValue}>
            {props.children}
        </ShopApiContext.Provider>
    );
};

export default ShopAPIProvider;