import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import CollectionCard from '../components/CollectionCard';
import Utilites from "../components/Utilites";
import NavBar from "../components/NavBar";

import API from "../index.js" 

function AllCollections() {

  const[collections, setCollections] = useState([]);
  const[name, setName] = useState("");
  const[description, setDescription] = useState("");
  const[tags, setTags] = useState([]);
  const[items, setItems] = useState([]);
  const[loading, setLoading] = useState(false);

  useEffect(() => {

    const loadData = async () => {

      setLoading(true);

      const response = await fetch(API + "/collections")
      .then(response => response.json())
      .then(data => data)
      .catch(err => console.log(err));

      setCollections(response);
      
      //setLoading(false);
    }

    loadData();

  }, [])

  if(loading) {
    return (
    <div className="container h-96 w-64 justify-center object-fill">
      <h2 >Carregando...</h2>
    </div>
    );
  }

  return (
    <div className="text-gray-950 text-center">
      <NavBar></NavBar>
      <div className="mx-20">
    <div className="mx-12 text-gray-950 text-center pb-24">
      <nav className="flex space-x-4 py-3">
        <ul><Link to="/">Home</Link></ul>
        <ul><Link to="/AllCollections">All Collections</Link></ul>
      </nav>
      <Utilites title="All Collections" />
      <div className="grid grid-cols-3 py-3 gap-12 justify-items-center">
      {collections.length === 0 && <p>No collection yet! Click on "New" to create a new collection."</p>}
        {collections.map(collections => (
          <CollectionCard title={collections.name} />
        ))}
      </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default AllCollections;
