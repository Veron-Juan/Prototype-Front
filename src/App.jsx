import { useState } from 'react';
import './App.css'
import Tree from './components/Tree';

function App() {
  
   

  return (
    <>
      <div className="App">
      <div className="flex space-x-4 ">
      <div className="flex-1  p-5 border border-gray-300 rounded-md">
        <Tree name="Árbol 1" children={[]} />
      </div>
      <div className="flex-1 p-5 border border-gray-300 rounded-md">
        <Tree name="Árbol 2" children={[]} />
      </div>
      <div className="flex-1 p-5 border border-gray-300 rounded-md">
        <Tree name="Árbol 3" children={[]} />
      </div>
    </div>
      
    </div>
      

    </>
  )
}

export default App
