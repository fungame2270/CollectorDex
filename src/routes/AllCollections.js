import { useState, useEffect } from 'react';
import CollectionCard from '../components/CollectionCard';
import Utilites from "../components/Utilites";
import NavBar from "../components/NavBar";
import CollectionCardModal from '../components/CollectionCardModal';
import { AnimatePresence } from 'framer-motion';
import LoadingPage from '../components/LoadingPage';
import useScrollBlock from "../lock";
import Swal from 'sweetalert2';

import API from "../index.js" 

function AllCollections() {

  const[collections, setCollections] = useState([]);
  const[collectionF , setCollectionF] = useState([]);
  const [blockScroll, allowScroll] = useScrollBlock();


  const choseSearch = (text) => {
    if(text.length > 0){
        setCollectionF(collections.filter(collection => collection.name.toUpperCase().includes(text.toUpperCase())));
    }else{
        setCollectionF(collections);
    }
  };

  const[loading, setLoading] = useState(false);
  const[collectionOpen,setCollectionOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(null);

  const[addingOpen,setAddingOpen] = useState(false);

  const closeAdding = () => {
      setAddingOpen(false);
  };
  
  const openAdding = () => {
      setAddingOpen(true);
  };

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
      setCollectionF(response);
      
      setLoading(false);
    }
    
    loadData();
    
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const collection = {
      id: collections.length + 1 + "",
      name: e.target.elements.name.value,
      img: "https://www.pngkey.com/png/detail/233-2332677_ega-png.png",
      description: e.target.elements.desc.value,
      items: []
    }  
    
    setLoading(true);

    await fetch(API + "/collections", {
      method: "POST",
      body: JSON.stringify(collection),
      headers: {
        "Content-Type": "application/json",
      }
    });

    setCollections( (prevState) => [...prevState, collection]);

    setLoading(false);

    closeAdding();
    Swal.fire({
      title: "Collection created successfully!",
      icon: "success",
      timer: 2000,
      position: 'top',
      showConfirmButton: false,
    });
  };
  
  if(loading) {
    return(<LoadingPage></LoadingPage>)
  }

  return (
    <div className="text-gray-950 text-center bg-bgblue ">
      <NavBar></NavBar>
      <div className="mx-6 md:mx-24 text-gray-950 text-center">
        <Utilites title="All Collections" searchOnly={false} addingOpen={addingOpen} openAdding={openAdding} closeAdding={closeAdding} searchSet={choseSearch}/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:py-3 gap-7 md:gap-12 justify-items-center">
        {collections.length === 0 && !{loading} && <p>No collection yet! Click on "New" to create a new collection."</p>} 
          {collectionF.map(collection => {
                return <CollectionCard collection={collection} key={collection.id} onClick={() => (collectionOpen ? closeCollection() : openCollection(collection))}/>
          })}
        </div>
      </div>
      <AnimatePresence
        initial={false}
        mode='wait'
      >
        {collectionOpen && <CollectionCardModal handleclose={closeCollection} collection={selectedCollection} adding={false} handleSubmit={null}></CollectionCardModal>}
      </AnimatePresence>
      <AnimatePresence
        initial={false}
        mode='wait'
      >
        {addingOpen && <CollectionCardModal handleclose={closeAdding} collection={null} adding={true} handleSubmit={handleSubmit} ></CollectionCardModal>}
      </AnimatePresence>
    </div>
  );
}

export default AllCollections;
