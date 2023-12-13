
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

const NameTab = ({label, selected}) => {

    const [params] = useSearchParams();
    const navigate = useNavigate();
    const handleClick = () =>{
       let currentQuery = {}
       if(params){
        currentQuery = qs.parse(params.toString())
        }
        const updatedQuery= {...currentQuery, name:label}
        const url = qs.stringifyUrl({
            url: "/structure",
            query: updatedQuery
        })
        navigate(url)
       
    }
    params.get('name')

    return (
        <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-4 p-4 border-b-2 hover:text-neutral-800 transition cursor-pointer ${selected ? "border-b-black text-black" : ""}`}>
            {label}
        </div>
    );
};

export default NameTab;