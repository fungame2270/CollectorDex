import { Link } from "react-router-dom";
import CollectionCard from '../components/CollectionCard';
import Utilites from "../components/Utilites";

function AllCollections() {
  return (
    <div className="mx-12 text-gray-950 text-center">
      <nav className="flex space-x-4 py-3">
        <ul><Link to="/">Home</Link></ul>
        <ul><Link to="/AllCollections">All Collections</Link></ul>
      </nav>
      <Utilites title="All Collections" />
      <div className="grid grid-cols-3 py-3 gap-12 justify-items-center">
        < CollectionCard title="Woof" />
        < CollectionCard />
        < CollectionCard />
        < CollectionCard />
        < CollectionCard />
      </div>
    </div>
  );
}

export default AllCollections;
