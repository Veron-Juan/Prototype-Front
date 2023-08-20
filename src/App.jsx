
import "./App.css";

import { DataProvider } from "./new2/Context/store";

import ChildComponent from "./new2/ChildComponents";
import DefaultDirectory from "./treeStructure/DefaultDirectory";


const data = [
  {
    type:"folder",
    name:"prueba",
  }
]

function App() {
  return (
    <>
      {/* <DataProvider>
        <div className="App">
          <div className="flex space-x-4 ">
            <div className="flex-1  p-5 border border-gray-300 rounded-md">
              <ChildComponent />
            </div>
          </div>
        </div>
      </DataProvider> */}
      <DefaultDirectory data={data}  />
    </>
  );
}

export default App;
