import { useState } from "react";
import FolderComponent from "./components/FolderComponent";
import FileComponent from "./components/FileComponent";

const RecursiveComponent = ({ data }) => {

    const [showNested, setShowNested] = useState({});

    const toggleNested = (name) => {
        setShowNested({ ...showNested, [name]: !showNested[name] });
      };

    return (
        <div className="pl-[20px]">
      
      {!Array.isArray(data) || data.length === 0 ? <p>Empty</p> : data.map((parent) => {
        return (
          <div key={parent.id}>
            {/* rendering folders */}
            {parent.isFolder && 
            <FolderComponent 
            onClick={() => toggleNested(parent.name)}
            name={parent.name}
            />
            }
            {/* rendering files */}
            {!parent.isFolder && <FileComponent name={parent.name} />}
            <div className={!showNested[parent.name] ? 'hidden' : ''}  >
              {parent.children && <RecursiveComponent data={parent.children} />}
            </div>
          </div>
        );
      })}
    </div>
  );
};
   
 


export default RecursiveComponent