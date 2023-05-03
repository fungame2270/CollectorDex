import { ReactComponent as Filter } from "../images/filter.svg";
import { AiOutlineSearch } from 'react-icons/ai';

function Utilites({title}) {
    return (
    <div className="grid grid-cols-2 mt-12 mb-20">
        <h1 className="text-4xl font-bold text-start">{title}</h1>
        <div className="flex flex-row-reverse gap-4 justify-items-end">
           <button className="btn btn-primary w-20 drop-shadow">New +</button>
           <button className="btn btn-primary w-28 drop-shadow"> <p className="mr-2">Filter</p> <Filter></Filter> </button>
           <div className="input-group drop-shadow">
                <input className="input w-full" placeholder="Search for collection..."></input>
                <button className="btn btn-secondary"><AiOutlineSearch></AiOutlineSearch></button>
           </div>
        </div>
    </div>
    )
}

export default Utilites
