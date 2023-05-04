import { Link } from "react-router-dom";
import CollectionCard from '../components/CollectionCard';
import Utilites from "../components/Utilites";
import NavBar from "../components/NavBar";

function AllCollections() {
  return (
    <div className="text-gray-950 text-center">
      <NavBar></NavBar>
      <div className="mx-20">
      <Utilites title="All Collections" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-3 gap-12 justify-items-center">
        < CollectionCard title="Woof" />
        < CollectionCard />
        < CollectionCard />
        < CollectionCard />
        < CollectionCard />
      </div>
      </div>
    </div>
  );
}

export default AllCollections;
