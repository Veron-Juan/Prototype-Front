import React, { useState } from 'react';
import NodeTypeModal from './NodeTypeModal';
import TreeNode from './TreeNode';

const Folder = ({ name, removeSelf }) => {
    const [children, setChildren] = useState([]);
    const [isAdding, setIsAdding] = useState(false);

    const createNode = (type) => {
        const name = prompt(`Introduce el nombre del nuevo ${type}`);
        const newNode = { name, type, children: [] };
        setChildren([...children, newNode]);
        setIsAdding(false);
    };

    const removeNode = (index) => {
        setChildren(children.filter((_, i) => i !== index));
    };

    const openModal = () => {
        setIsAdding(true);
    };

    return (
        <div className="border-gray-300 p-4 rounded text-white">
            <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-open"><path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"/></svg>

                <h1>{name}</h1>
                <button onClick={openModal} className="p-1 mt-2 text-white">
                    +
                </button>
                <button onClick={removeSelf} className="p-1 mt-2 bg-red-500 text-white rounded">Eliminar</button>
            </div>
            {children.map((child, index) => (
                <div key={index}>
                    <TreeNode {...child} />
                </div>
            ))}
            {isAdding && <NodeTypeModal createNode={createNode} removeNode={() => removeNode(index)} />}
        </div>
    );
};

export default Folder;