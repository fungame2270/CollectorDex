import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import LoadingPage from '../components/LoadingPage';
import { FaPencilAlt } from "react-icons/fa"
import { MdSell, MdDeleteForever } from "react-icons/md"
import { BsFillShareFill } from "react-icons/bs"

import API from "../index.js"


const ItemPage = () => {

    const[item, setItem] = useState([]);
    const[loading, setLoading] = useState(false);
    const[ tags, setTags] = useState([]);

    const { colID, itemID } = useParams();
  
    useEffect(() => {
       
      const loadData = async () => {
  
        setLoading(true);
  
        const response = await fetch(API + "/collections/" + colID)
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
        <div className="bg-bgblue h-full">
            <NavBar></NavBar>
            <div className="grid md:grid-cols-2  text-black bg-bgblue pt-10 mx-20">
                <div className=" place-self-center">
                    <div className="flex flex-col place-items-center">
                        <p className=" font-bold text-5xl text-left pb-4">{item.name}</p>
                        <img className=" aspect-square rounded-2xl w-[60%] object-cover place-self-center" src={item.img} alt={item.name}></img>
                    </div>
                    <div className="flex justify-between mx-[20%] pt-10 gap-10">
                        <button className="btn btn-primary drop-shadow-md">Share <BsFillShareFill className="ml-2"></BsFillShareFill></button>
                        <button className="btn btn-primary drop-shadow-md">Add to whishlist</button>
                        <button className="btn btn-primary drop-shadow-md">Mark as “to sell” <MdSell className="ml-2"></MdSell></button>
                    </div>
                </div>
                <div className="  mt-20 mr-20">
                    <div className=" h-[60%]">
                        <p className=" text-3xl font-bold pb-2">Description:</p>
                        <p className=" text-xl bg-white rounded-2xl p-2 h-[85%] drop-shadow-md">{item.description}</p>
                    </div>
                    <p className="text-3xl font-bold pb-2">Tags:</p>
                    <div className="grid grid-cols-3 md:grid-cols-6 justify-around gap-y-2">
                       {item.tags && item.tags.map(tag => (
                            <div key={tag} className=" bg-green-300 max-w-[90%] min-w-[10%] rounded-3xl text-lg border-green-600 border-solid border-2 text-center">{tag}</div>
                       ))} 
                    </div>
                    <div className="flex flex-row justify-around p-[9%]">
                        <button className="btn btn-primary drop-shadow-md">Edit <FaPencilAlt className="ml-2 text-lg"></FaPencilAlt></button>
                        <button className="btn btn-primary drop-shadow-md">Delete <MdDeleteForever className="ml-2 text-2xl"></MdDeleteForever></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemPage;