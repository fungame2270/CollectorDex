import { useState, useEffect } from 'react';
import CollectionCard from '../components/CollectionCard';
import Utilites from "../components/Utilites";
import NavBar from "../components/NavBar";
import LoadingPage from '../components/LoadingPage';
import CollectionCardModal from '../components/CollectionCardModal';
import { motion, AnimatePresence } from 'framer-motion';
import useScrollBlock from "../lock";

import API from "../index.js" 

function Homepage() {
  const[collections, setCollections] = useState([]);
  const[name, setName] = useState("");
  const[description, setDescription] = useState("");
  const[tags, setTags] = useState([]);
  const[items, setItems] = useState([]);
  const[loading, setLoading] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const[collectionOpen,setCollectionOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(null)
  const closeCollection = () => {
    setCollectionOpen(false);
    setSelectedCollection(null);
    allowScroll();
  };
  
  const openCollection = (id) => {
    setCollectionOpen(true);
    setSelectedCollection(id);
    blockScroll();    
  };

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
      <div className="mx-24 text-gray-950 text-center">
        <Utilites title = "Home" searchOnly={true}/>
        <h1 className="text-4xl text-start mb-5">Recent</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-3 gap-12 justify-items-center">
        {collections.length === 0 && !{loading} && <p>No collection yet! Click on "New" to create a new collection."</p>} {/* Dar fix desse p */}
          {collections.map(collection => (
            <CollectionCard collection={collection} key={collection.id} onClick={() => (collectionOpen ? closeCollection() : openCollection(collection))}/>
          ))}
        </div>
        <h1 className="text-4xl text-start mb-5 mt-12">Favorites</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-3 gap-12 justify-items-center">
        {collections.length === 0 && !{loading} && <p>No collection yet! Click on "New" to create a new collection."</p>} {/* Dar fix desse p */}
          {collections.map(collection => (
            <CollectionCard collection={collection} key={collection.id} onClick={() => (collectionOpen ? closeCollection() : openCollection(collection))}/>
          ))}
        </div>
      </div>
      <AnimatePresence
        initial={false}
        mode='wait'
      >
        {collectionOpen && <CollectionCardModal handleclose={closeCollection} collection={selectedCollection}></CollectionCardModal>}
      </AnimatePresence>
    </div>
  );
}

export default Homepage;
