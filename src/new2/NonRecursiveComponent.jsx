const NonRecursiveComponent = ({ data }) => {
    return (
      <div>
      {data.map((parent) => { // rendering parent data
        return (
          <div key={parent.name}>
            <span>{parent.name}</span>
            {parent.children.map((child) => { // rendering children of the parent
              return (
                <div key={child.name} style={{ paddingLeft: "20px" }}>
                  <span>{child.name}</span>
                  {child.children && // rendering grandchildren of the parent
                    child.children.map((grandChild) => {
                      return ( 
                        <div key={grandChild.name} style={{ paddingLeft: "20px" }}>
                          <span>{grandChild.name}</span>
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
    );
  };

export default NonRecursiveComponent