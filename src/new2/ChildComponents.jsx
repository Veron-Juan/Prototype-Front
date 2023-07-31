// ChildComponent.js
import { useContext, useEffect, useState } from 'react';
import FolderRaiz from './components/FolderRaiz';
import Spinner from './components/Spinner';
import { DataContext } from './Context/store';

function ChildComponent() {
  const [loading, setLoading] = useState(false);
  const { data, setData } = useContext(DataContext);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.sandapi.com/user_HHg7Pn/crenein");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
