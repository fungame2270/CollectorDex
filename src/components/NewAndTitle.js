import { ReactComponent as Filter } from "../images/filter.svg";
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from "react-router-dom";

function NewAndTitle({title, ID, searchSet}){

    const handleSearchChange = (event) =>{
        searchSet(event.target.value);
    };

    return(
        <div className="grid md:grid-cols-2 mt-12 mb-20">
        <h1 className="text-4xl font-bold text-start">{title}</h1>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:justify-items-end">
           <div className="flex flex-row justify-start gap-4">
                <Link to={"/AddItem/" + ID + "/" + title } ><button className="btn btn-primary w-28 drop-shadow">New +</button></Link>
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


export default NewAndTitle