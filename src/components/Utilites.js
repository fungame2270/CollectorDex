import { ReactComponent as Filter } from "../images/filter.svg";
import { AiOutlineSearch } from 'react-icons/ai';

function Utilites({title, searchOnly}) {

    if(searchOnly){
        return (
            <div className="grid md:grid-cols-2 mt-12 mb-20">
                <h1 className="text-4xl font-bold text-start">{title}</h1>
                <div className="flex flex-row-reverse gap-4 justify-items-end">
                    <div className="input-group drop-shadow float-right justify-end">
                        <input className="input w-full max-w-[50%]" placeholder="Search for collection..."></input>
                        <button className="btn btn-secondary"><AiOutlineSearch></AiOutlineSearch></button>
                    </div>
                </div>
            </div>
        )
    }

    return (
    <div className="grid md:grid-cols-2 mt-12 mb-20">
        <h1 className="text-4xl font-bold text-start">{title}</h1>
        <div className="flex flex-row-reverse gap-4 justify-items-end">
           <div><button className="btn btn-primary w-28 drop-shadow">New +</button></div>
           <div><button className="btn btn-primary w-28 drop-shadow"> <p className="mr-2">Filter</p> <Filter></Filter> </button></div>
           <div className="input-group drop-shadow float-right justify-end">
                <input className="input w-full max-w-[50%]" placeholder="Search for collection..."></input>
                <button className="btn btn-secondary"><AiOutlineSearch></AiOutlineSearch></button>
           </div>
        </div>
    </div>
    )
}

export default Utilites
