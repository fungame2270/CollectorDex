import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import LoadingPage from '../components/LoadingPage';

import API from "../index.js"


const ItemPage = () => {

    const[item, setItem] = useState([]);
    const[loading, setLoading] = useState(false);

    const { itemID } = useParams();
  
    useEffect(() => {
       
      const loadData = async () => {
  
        setLoading(true);
  
        const response = await fetch(API + "/collections/" + itemID)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.log(err));  
        setItem(response.items[itemID-1]);
        
        setLoading(false);
      }
  
      loadData();
  
    }, [ itemID ])
    
    if(loading) {
    return(<LoadingPage></LoadingPage>)
    }

    return(
        <div>
            <NavBar></NavBar>
            <div className="grid md:grid-cols-2 items-center text-black bg-bgblue pt-10 mx-10">
                <div>
                    <div className="flex flex-col place-items-center">
                        <p className=" font-bold text-5xl text-left pb-4">{item.name}</p>
                        <img className=" aspect-square rounded-2xl max-w-[60%] object-cover place-self-center" src={item.img} alt={item.name}></img>
                    </div>
                    <div className="flex justify-around mx-[20%] pt-10">
                        <button class="btn btn-primary drop-shadow-md">Share</button>
                        <button class="btn btn-primary drop-shadow-md">Add to whishlist</button>
                        <button class="btn btn-primary drop-shadow-md">Mark as “to sell”</button>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-row">
                        <p className=" text-3xl">Description</p>
                        <button class="btn btn-primary drop-shadow-md">Add to whishlist</button>
                        <button class="btn btn-primary drop-shadow-md">Mark as “to sell”</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemPage;