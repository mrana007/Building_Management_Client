import { useSearchParams } from "react-router-dom";
import { names } from "./NameData";
import NameTab from "./NameTab";


const Name = () => {
    const [params] = useSearchParams();
    const name = params.get('name');
    console.log(name);
    return (
        <div className="pt-2 flex items-center justify-between overflow-x-auto">
            {
                names.map(nameItem=> <NameTab
                key={nameItem.label}
                label={nameItem.label}
                selected={name === nameItem.label}
                ></NameTab> )
            }
        </div>
    );
};

export default Name;