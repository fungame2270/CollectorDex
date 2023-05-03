import { Link } from "react-router-dom";
import CollectionCard from '../components/CollectionCard';


function Homepage() {
  return (
    <div className="mx-5 text-gray-950 text-center">
      <nav className="flex space-x-4 py-3">
        <ul><Link to="/">Home</Link></ul>
        <ul><Link to="/AllCollections">All Collections</Link></ul>
      </nav>
      <div className="my-12">
        <h1 className="text-4xl font-bold text-start">Home</h1>
      </div>
      <div className="grid grid-cols-4 py-3 gap-12 justify-items-center">
        < CollectionCard title="Arroz"/>
      </div>
    </div>
  );
}

export default Homepage;
