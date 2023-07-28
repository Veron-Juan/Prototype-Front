import React from 'react';

const ModalOptions = ({ createNode}) => (
  <div className=" ">
    <div className="flex flex-col bg-[#1A1A27] gap-1 border border-black w-[130px] py-1 rounded-sm ">
      <button
        onClick={() => createNode("folder")}
        className=" text-white text-sm rounded hover:text-[#009ef7] flex items-center justify-center gap-2 "
      >
        <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-open"><path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"/></svg>
        Crear carpeta
      </button>
      <button
        onClick={() => createNode("file")}
        className=" text-white text-sm rounded hover:text-[#009ef7] flex items-center justify-center gap-2 "
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
        Crear archivo
      </button>

      

     
    </div>
  </div>
);

export default ModalOptions;