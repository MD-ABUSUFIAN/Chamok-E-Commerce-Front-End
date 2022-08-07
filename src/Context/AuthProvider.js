import React, { Children, createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export  const AuthContext=createContext();

const AuthProvider = () => {
    const allContext=useFirebase();
    return (
       <AuthContext.Provider value={allContext}>
        {Children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;