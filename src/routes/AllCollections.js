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
      
      setLoading(false);
    }

    loadData();

  }, [])

  if(loading) {
    return (
      <div className="grid w-full h-full content-center justify-items-center">
        <div className="flex space-x-4 py-3 text-gray-950">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <h2 className="text-center">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="text-gray-950 text-center">
      <NavBar></NavBar>
      <div className="mx-12 text-gray-950 text-center">
        <Utilites title="All Collections" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-3 gap-12 justify-items-center">
        {collections.length === 0 && <p>No collection yet! Click on "New" to create a new collection."</p>} {/* Dar fix desse p */}
          {collections.map(collections => (
            <CollectionCard title={collections.name} key={collections.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllCollections;
