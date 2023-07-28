import React from 'react';
import TreeNode from './TreeNode';

const Tree = ({ name, children }) => {
  return (
    <div className='' >
      <TreeNode name={name} children={children} />
    </div>
  );
};

export default Tree;