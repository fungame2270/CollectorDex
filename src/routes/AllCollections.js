import { Link } from "react-router-dom";
import CollectionCard from '../components/CollectionCard';

function AllCollections() {
  return (
    <div className="mx-5 text-gray-950 text-center">
      <nav className="flex space-x-4 py-3">
        <ul><Link to="/">Home</Link></ul>
        <ul><Link to="/AllCollections">All Collections</Link></ul>
      </nav>
      <div className="my-12">
        <h1 className="text-4xl font-bold text-start">All Collections</h1>
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
