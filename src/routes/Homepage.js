import CollectionCard from '../components/CollectionCard';
import Utilites from "../components/Utilites";
import NavBar from "../components/NavBar";

const card = {
  "id": "1",
  "name": "Vinyl",
  "img": "https://images.unsplash.com/photo-1629726211447-3df75890f372?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "description": "vinyl records",
  "tags": [],
  "items": []
};

function Homepage() {
  return (
    <div className="text-gray-950 text-center">
      <NavBar></NavBar>
      <div className="mx-12 text-gray-950 text-center">
        <Utilites title = "Home"/>
        <div className="grid grid-cols-4 py-3 gap-12 justify-items-center">
          < CollectionCard collection={card}/>
          < CollectionCard collection="Arroz"/>
          < CollectionCard collection="Arroz"/>
          < CollectionCard collection="Arroz"/>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
