import { useEffect, useState } from 'react';
import './App.css'
import FolderRaiz from './new2/components/FolderRaiz';
import Spinner from './new2/components/Spinner';
import { useContext } from 'react';
import { DataProvider } from './new2/Context/store';
import { DataContext } from './new2/Context/store';
import ChildComponent from './new2/ChildComponents';


function App() {

  // const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false);
  

  //  const getData = async ()=> {
  //   try{
  //     setLoading(true);
  //     const response = await fetch("https://api.sandapi.com/user_HHg7Pn/crenein")
  //     const data = await response.json();
  //     setData(data)
  //   } catch(error){
  //     console.log(error)
  //   }
  //   finally {
  //     setLoading(false);
  //   }
  // }
  
  // useEffect(()=> {

    

  //   getData()

  // }, [])
  

  return (
    <>
        <DataProvider>
      <div className="App">
        <div className="flex space-x-4 ">
      <div className="flex-1  p-5 border border-gray-300 rounded-md">
        <ChildComponent/>
      {/* <FolderRaiz CategoryName={"Articulos"} data={data} />
        {loading && <Spinner/>} */}
    </div>
    {/* <div className="flex-1 p-5 border border-gray-300 rounded-md">
      <FolderRaiz CategoryName={"test"}  />
    </div> */}

    </div>
    




      {/* <div className="flex space-x-4 ">
      <div className="flex-1  p-5 border border-gray-300 rounded-md">
      <Tree name="Raíz" type="folder" buttonType={"parent"} children={[]} />
      </div>
      <div className="flex-1 p-5 border border-gray-300 rounded-md">
      <Tree name="Raíz" type="folder" children={[]} />
      </div>
      <div className="flex-1 p-5 border border-gray-300 rounded-md">
      <Tree name="Raíz" type="folder" children={[]} />
      </div>
    </div> */}
      
    </div>
    </DataProvider>

    </>
  )
}

export default App
