import React, { useState } from "react";
import FolderNode from "./FolderNode";
import FileNode from "./FileNode";
import ModalOptions from "./ModalOptions";

const TreeNode = ({ name, type, children, buttonType }) => {
  const [childNodes, setChildNodes] = useState(children);
  const [nodeType, setNodeType] = useState(type);
  const [isAdding, setIsAdding] = useState(false);
  const [currentNode, setCurrentNode] = useState(null);

  const addNode = () => {
    
    setIsAdding(!isAdding);
  };

  const createNode = (type) => {
    const newName = prompt("Introduce el nombre del nuevo nodo");
    setChildNodes((prevNodes) => [
      ...prevNodes,
      {
        id: Math.floor(1 + Math.random() * 0x10000)
          .toString(16)
          .substring(1),
        name: newName,
        type: type,
        children: [],
      },
    ]);
    setIsAdding(false);
  };

  const removeNode = (id) => {
    setChildNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
  };

  return (
    <div className="flex items-center relative">
      {nodeType === "folder" ? (
        <FolderNode
          name={name}
          onAddNode={addNode}
          buttonType={buttonType}
          childrenNodes={childNodes.map((node) => (
            <div
              key={node.id}
              className="  mt-4 ml-8 border-l-2 pl-4 border-gray-400"
            >
              <TreeNode
                name={node.name}
                type={node.type}
                children={node.children}
              />
              <button
                onClick={() => removeNode(node.id)}
                className="p-1 bg-red-500 text-white rounded"
              >
                Eliminar nodo
              </button>
            </div>
          ))}
        />
      ) : (
        <FileNode name={name} onRemoveNode={removeNode} />
      )}

      {isAdding && <ModalOptions createNode={createNode}  /> }
    </div>
  );
};

export default TreeNode;
