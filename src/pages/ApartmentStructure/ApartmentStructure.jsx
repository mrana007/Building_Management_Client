import { useEffect, useState } from "react";
import FloorTab from "./FloorTab";
import Name from "./Name/Name";
import { useSearchParams } from "react-router-dom";

const ApartmentStructure = () => {
  const [floorPlans, setFloorPlans] = useState([{}]);
  const [params] = useSearchParams();
    const name = params.get('name');
//   console.log(floorPlans);
  useEffect(() => {
    fetch("floorPlan.json")
      .then((res) => res.json())
      .then((data) => {
        if(name){
            const filtered = data.filter(floor=> floor.name === name)
            setFloorPlans(filtered)
        }
      });
  }, [name]);

  return (
    <div className="min-h-screen mt-16 max-w-screen-xl mx-auto">
        <Name></Name>
    <div className="grid grid-cols-1 gap-6 w-full pt-10">
            {
                floorPlans.map(floor => <FloorTab
                    key={floor.id}
                    floor={floor}
                    ></FloorTab>)
            }
    </div>
    </div>
  );
};

export default ApartmentStructure;
