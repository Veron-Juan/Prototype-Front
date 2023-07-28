import React from 'react';
import TreeNode from './TreeNode';

const Tree = ({ name, type, children, buttonType }) => {
  return (
    <div className="flex-1  p-5 border border-gray-300 rounded-md text-white">
      <TreeNode name={name} type={type} children={children} buttonType={buttonType} />
    </div>
  );
};

export default Tree;