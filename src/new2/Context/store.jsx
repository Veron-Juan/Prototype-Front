import React, { createContext, useState, useEffect } from 'react';

// Creamos el contexto
export const DataContext = createContext();

// Creamos el proveedor del contexto
export const DataProvider = ({ children }) => {
const [loading, setLoading] = useState(false)
  const [data, setData] = useState([]);

  

  useEffect(() => {
    const getData = async ()=> {
        try{
          setLoading(true);
          const response = await fetch("https://api.sandapi.com/user_HHg7Pn/crenein")
          const data = await response.json();
          setData(data)
        } catch(error){
          console.log(error)
        }
        finally {
          setLoading(false);
        }
      }
      getData();
  }, []);

  return (
    // Pasamos los datos al value del provider para que estén disponibles para todos los componentes hijos
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};