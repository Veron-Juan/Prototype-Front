import React, { createContext, useState, useEffect } from 'react';


export const DataContext = createContext();


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
    //data disponiblkes para todos los componentes hijos
    <DataContext.Provider value={{ data, setData, loading }}>
      {children}
    </DataContext.Provider>
  );
};