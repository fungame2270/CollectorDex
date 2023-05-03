import { Link } from "react-router-dom";
import CollectionCard from '../components/CollectionCard';
import Utilites from "../components/Utilites";

function Homepage() {
  return (
    <div className="mx-12 text-gray-950 text-center">
      <nav className="flex space-x-4 py-3">
        <ul><Link to="/">Home</Link></ul>
        <ul><Link to="/AllCollections">All Collections</Link></ul>
      </nav>
      <Utilites title = "Home"/>
      <div className="grid grid-cols-4 py-3 gap-12 justify-items-center">
        < CollectionCard title="Arroz"/>
        < CollectionCard title="Arroz"/>
        < CollectionCard title="Arroz"/>
        < CollectionCard title="Arroz"/>
      </div>
    </div>
  );
}

export default Homepage;
