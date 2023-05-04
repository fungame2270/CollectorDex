import { Link } from "react-router-dom";
import  cena  from "../images/img.jpg"
import  cena2  from "../images/CollectorDex.png"



function Home() {
  return (
    <div className="text-gray-950 text-center">
    <nav className="mx-5 flex space-x-4 py-3">
        <ul><Link to="/">Home</Link></ul>
        <ul><Link to="/AllCollections">All Collections</Link></ul>
      </nav>
    <div className="flex static">
      <img className="grow absolute" src={cena2}></img>
      <img className="grow" src={cena}></img>
    </div>
    </div>
  );
}

export default Home;
