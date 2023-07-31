import { useState } from "react";
import NodeTypeModal from "../../New/NodeTypeModal";
import FolderIcon from "../../assets/FolderIcon.jsx"
const FolderComponent = ({ name, buttonType, onClick }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className="">
      <div className="flex items-center">
        <div
          onClick={onClick}
          className="flex items-center gap-3 cursor-pointer"
        >
          <FolderIcon/>
          <h1>{name}</h1>
        </div>

        <button className="p-1 ">
          <div>
            {buttonType === "parent" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-plus"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            ) : (
              <div
                onClick={toggleShow}
                className="hover:bg-gray-900 py-1 relative"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-more-vertical"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
                {show && <NodeTypeModal />}
              </div>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default FolderComponent;
