import React from "react";

const NodeTypeModal = () => (
  <div className="absolute left-[12px]  ">
    <div className="flex flex-col bg-[#1A1A27] gap-1 border border-black w-[80px] py-1 rounded-sm ">
      <button className="text-white text-sm rounded hover:text-[#009ef7] flex items-center justify-center gap-2">
        Agregar
      </button>
      <button className="text-white text-sm rounded hover:text-[#009ef7] flex items-center justify-center gap-2">
        Editar
      </button>
      <button className="text-white text-sm rounded hover:text-[#009ef7] flex items-center justify-center gap-2">
        Eliminar
      </button>
      <button className="text-white text-sm rounded hover:text-[#009ef7] flex items-center justify-center gap-2">
        Mover a
      </button>
    </div>
  </div>
);

export default NodeTypeModal;
