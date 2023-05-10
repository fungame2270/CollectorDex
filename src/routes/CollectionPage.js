import ItemCard from "../components/ItemCard.js"
import { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";
import LoadingPage from '../components/LoadingPage';
import { useParams, Link } from "react-router-dom";
import NewAndTitle from "../components/NewAndTitle.js";

import API from "../index.js"


function CollectionPage() {
    
    const[collection, setCollection] = useState([]);
    const[items, setItems] = useState([]);
    const[itemsF, setItemsF] = useState([]);
    const[loading, setLoading] = useState(false);

    const {id} = useParams();

    const choseSearch = (text) => {
      if(text.length > 0){
          setItemsF(items.filter(item => item.name.toUpperCase().includes(text.toUpperCase())));
      }else{
        setItemsF(items);
      }
    };
  
    useEffect(() => {
       
      const loadData = async () => {
  
        setLoading(true);
  
        const response = await fetch(API + "/collections/" + id)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.log(err));

        console.log(response);
  
        setCollection(response);
        setItems(response.items);
        setItemsF(response.items);
        
        setLoading(false);
      }
  
      loadData();
  
    }, [id])
  
    if(loading) {
      return(<LoadingPage></LoadingPage>)
    }
  
    return (
      <div className="text-gray-950 text-center bg-bgblue">
        <NavBar></NavBar>
        <div className="mx-24 text-gray-950 text-center">
            <NewAndTitle ID={collection.id} title={collection.name}></NewAndTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-3 gap-12 justify-items-center">
          { items.length === 0 && !{loading} && <p>No collection yet! Click on "New" to create a new collection."</p>} {/* Dar fix desse p */}
            { itemsF.map(item => (
              <Link to={item.id}> <ItemCard item={item} key={item.id}/> </Link>
            ))  }
          </div>
        </div>
      </div>
    );
  }
  
  export default CollectionPage;
  