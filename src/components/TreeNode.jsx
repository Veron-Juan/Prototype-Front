import React, { useState } from 'react';

const TreeNode = ({ name, children }) => {
  const [childNodes, setChildNodes] = useState(children);

  const addNode = () => {
    const newName = prompt("Introduce el nombre del nuevo nodo");
    setChildNodes((prevNodes) => [
      ...prevNodes,
      { id: Math.floor((1 + Math.random() * 0x10000)).toString(16).substring(1), name: newName, children: [] },
    ]);
  };

  const removeNode = (id) => {
    setChildNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
  };

  return (
    <div className="space-y-4 border border-gray-300 p-4 rounded">
      <h1>{name}</h1>
      <button onClick={addNode} className="p-1 bg-green-500 text-white rounded">Agregar nodo</button>
      {childNodes.map((node) => (
        <div key={node.id} className="mt-4 ml-8">
          <TreeNode name={node.name} children={node.children} />
          <button onClick={() => removeNode(node.id)} className="p-1 bg-red-500 text-white rounded">Eliminar nodo</button>
        </div>
      ))}
    </div>
  );
};

export default TreeNode;
