import icons from "./utils/icons";
import { useState } from "react";

export default function DefaultDirectory({ data, children }) {
    // Iconos predefinidos para 'folder' y 'file'
    const icons = {
      folder: { 
        main: '/src/assets/react.svg',
        close: '/src/assets/chevron-right.svg', 
        open: '/src/assets/chevron-down.svg', 
        options: '/src/assets/options.svg' 
      },
      file: { 
        main: '/path/to/file.svg',
        open: '/path/to/open.svg', 
        close: '/path/to/close.svg',
        options: '/path/to/file-options.svg' 
      },
  }
  
    // Estado para controlar si el componente children está desplegado o no
    const [isOpen, setIsOpen] = useState(false);
  
    // Selecciona los iconos según data.type
    const selectedIcons = icons[data.type] || icons.folder;  // Por defecto, usa los iconos de 'folder'
  
    // Funcionalidad para abrir/cerrar children
    const handleToggleClick = () => {
      setIsOpen(!isOpen);
    };
  
    // Funcionalidad para el icono de opciones
    const handleOptionsClick = () => {
      if (data.type === 'folder') {
        // Muestra modal de opciones para 'folder'
      } else if (data.type === 'file') {
        // Muestra modal de opciones para 'file'
      }
      // Añade más condiciones aquí para otros tipos de datos...
    };
  
    return(
      <div className="flex">
        <div onClick={handleToggleClick} className="flex items-center gap-2">
          <img src={isOpen ? selectedIcons.close : selectedIcons.open} alt="Icono abrir/cerrar" />
          <img src={selectedIcons.main} alt="Icono principal" />
          <p className="text-white" >{data[0].name}</p>
        </div>
        <img src={selectedIcons.options} onClick={handleOptionsClick} alt="Icono opciones" />
        {isOpen && children}
      </div>
    );
  }