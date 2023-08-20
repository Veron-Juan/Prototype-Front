// ChildComponent.js
import { useContext, useEffect, useState } from 'react';
import FolderRaiz from './components/FolderRaiz';
import Spinner from './components/Spinner';
import { DataContext } from './Context/store';

function ChildComponent() {
  
  const { data, setData, loading } = useContext(DataContext);

  return (
    <div className="flex space-x-4 ">
      <div className="flex-1  p-5 border border-gray-300 rounded-md">
        <FolderRaiz CategoryName={"Articulos"} data={data} />
        {loading && <Spinner />}
      </div>
      <div className="flex-1 p-5 border border-gray-300 rounded-md">
        <FolderRaiz CategoryName={"test"} />
      </div>
    </div>
  );
}

export default ChildComponent;
