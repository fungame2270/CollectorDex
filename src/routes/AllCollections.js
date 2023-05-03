import { Link } from "react-router-dom";
import CollectionCard from '../components/CollectionCard';
import { ReactComponent as Filter } from "../images/filter.svg";

function AllCollections() {
  return (
    <div className="mx-5 text-gray-950 text-center">
      <nav className="flex space-x-4 py-3">
        <ul><Link to="/">Home</Link></ul>
        <ul><Link to="/AllCollections">All Collections</Link></ul>
      </nav>
      <div className="grid grid-cols-2 my-12">
        <h1 className="text-4xl font-bold text-start">All Collections</h1>
        <div className="flex flex-row-reverse gap-4 justify-items-end">
           <button className="btn btn-primary w-20 drop-shadow">New +</button>
           <button className="btn btn-primary w-28 drop-shadow"> <p className="mr-2">Filter</p> <Filter></Filter> </button>
           <form className=""></form>
        </div>
      </div>
      <div className="grid grid-cols-3 py-3 gap-12 justify-items-center">
        < CollectionCard />
        < CollectionCard />
        < CollectionCard />
        < CollectionCard />
        < CollectionCard />
      </div>
    </div>
  );
}

export default AllCollections;
