import { ReactComponent as Filter } from "../images/filter.svg";
import { AiOutlineSearch } from 'react-icons/ai';


function Utilites({title, searchOnly, addingOpen, closeAdding, openAdding, searchSet,hide}) {

    const handleSearchChange = (event) =>{
        searchSet(event.target.value);
    };

    if(searchOnly){
        return (
            <div className="grid md:grid-cols-2 mt-12 mb-20">
                <h1 className="text-4xl font-bold text-start">{title}</h1>
                <div className="flex flex-row-reverse gap-4 justify-items-end">
                    
                </div>
            </div>
        )
    }

    return (
    <div className="grid md:grid-cols-2 mt-12 mb-8 lg:mb-20">
        <h1 className="text-4xl font-bold text-start">{title}</h1>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:justify-items-end">
           <div className="flex flex-row justify-start gap-4">
                <button className="btn btn-primary w-28 drop-shadow" onClick={() => (addingOpen ? closeAdding() : openAdding())}>New +</button>
                <button className="btn btn-primary w-28 drop-shadow"> <p className="mr-2">Filter</p> <Filter></Filter> </button>
           </div>
           <div className="input-group drop-shadow float-right justify-start lg:justify-end">
                <input className="input w-full max-w-[70%]" placeholder="Search for collection..." onChange={handleSearchChange}></input>
                <button className="btn btn-secondary"><AiOutlineSearch></AiOutlineSearch></button>
           </div>
        </div>
    </div>
    )
}

export default Utilites
