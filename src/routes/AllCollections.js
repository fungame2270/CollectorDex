import { useState, useEffect } from 'react';
import CollectionCard from '../components/CollectionCard';
import Utilites from "../components/Utilites";
import NavBar from "../components/NavBar";
import LoadingPage from '../components/LoadingPage';

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
    return(<LoadingPage></LoadingPage>)
  }

  return (
    <div className="text-gray-950 text-center bg-bgblue">
      <NavBar></NavBar>
      <div className="mx-12 text-gray-950 text-center">
        <Utilites title="All Collections" searchOnly={false}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-3 gap-12 justify-items-center">
        {collections.length === 0 && !{loading} && <p>No collection yet! Click on "New" to create a new collection."</p>} {/* Dar fix desse p */}
          {collections.map(collection => (
            <CollectionCard collection={collection} key={collection.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllCollections;
