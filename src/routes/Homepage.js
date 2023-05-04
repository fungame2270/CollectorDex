import CollectionCard from '../components/CollectionCard';
import Utilites from "../components/Utilites";
import NavBar from "../components/NavBar";

function Homepage() {
  return (
    <div className="text-gray-950 text-center">
      <NavBar></NavBar>
      <div className="mx-12 text-gray-950 text-center">
        <Utilites title = "Home"/>
        <div className="grid grid-cols-4 py-3 gap-12 justify-items-center">
          < CollectionCard title="Arroz"/>
          < CollectionCard title="Arroz"/>
          < CollectionCard title="Arroz"/>
          < CollectionCard title="Arroz"/>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
