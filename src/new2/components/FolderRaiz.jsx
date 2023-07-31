import React, { useEffect, useContext } from 'react'
import RecursiveComponent from '../RecursiveComponent'
import FolderIcon from '../../assets/FolderIcon'
import { DataContext } from '../Context/store'  // Asegúrate de que la ruta al archivo del store es correcta

export default function FolderRaiz({CategoryName, data}) {

  const { setData } = useContext(DataContext);

  useEffect(()=> {

    // Debes mover tu función addFile fuera de useEffect.
    
  }, [])

  const addFile = async (fileName) => {
    const url = "https://api.sandapi.com/user_HHg7Pn/crenein";
    const fileData = {
      id: "00000098989",
      isFolder: true,
      name: fileName,
      children: "[]"
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fileData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();

      // Actualizar tu data de estado después de realizar la solicitud POST
      setData(prevData => [...prevData, fileData]);
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = () => {
    const fileName = prompt("Add Something");
    if (fileName) {
      addFile(fileName);
    }
  };

  return (
    <div className='text-white'>
      <div className="flex items-center gap-3 mb-3">
        <FolderIcon/>
        <div className="flex items-center gap-3">
          <h3>{CategoryName? CategoryName : "Agregar Categoría"}</h3>
          <span className='hover:bg-slate-900 cursor-pointer' onClick={handleAdd} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          </span>
        </div> 
      </div>
      <RecursiveComponent data={data} /> 
    </div>
  );
}