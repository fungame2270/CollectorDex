import NavBar from "../components/NavBar";
import NewAndTitle from "../components/NewAndTitle";
import img_placeholder from "../images/img_placeholder.jpeg"
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import LoadingPage from '../components/LoadingPage';
import Swal from 'sweetalert2';

import API from "../index.js" 



function AddItem() {

    const[loading, setLoading] = useState(false);
    const [name, setName] = useState("");  
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);
    const [image, setImage] = useState("");
    const [Items, setItems] = useState([]);
    const [Collection, setCollection] = useState([]);


    const {colid, title} = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(API + "/collections/" + colid)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.log(err));
        
        setCollection(response);
        setItems(response.items);

    
        const Item = {
          id: Item.length + 1 + "",
          name: e.target.elements.name.value,
          img: "https://www.pngkey.com/png/detail/233-2332677_ega-png.png",
          description: e.target.elements.desc.value,
          tags: []
        }

        setItems( (prevState) => [...prevState, Item]);
        setItems( (prevState) => [...prevState, Item]);
        
        setLoading(true);
    
        await fetch(API + "/collections/" + colid, {
          method: "POST",
          body: JSON.stringify(Item),
          headers: {
            "Content-Type": "application/json",
          }
        });
    
        setItems( (prevState) => [...prevState, Item]);
    
        setLoading(false);
    
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
    <div className="text-gray-950 text-center bg-bgblue">
        <NavBar></NavBar>
        <h1 className="m-20 text-4xl font-bold text-start">Adding to {title}</h1>
        <div className="grid md:grid-cols-2 mt-12 mb-20 mx-24 text-gray-950 text-center">

        <div className="pr-[20%]">
            <img src={img_placeholder}/>
        </div>

        <form className="form-control w-full max-w-sm" style={{fontSize: 18}} onSubmit={handleSubmit}>
            <label className="label">
              <span className="text-gray-500" >Name:</span>
            </label>
            <input type="text" placeholder="Item name" name="name" className="input input-bordered w-full" value={"" || name} onChange={(e) => setName(e.target.value)} required/>

            <label className="label">
              <span className="text-gray-500">Descripition:</span>
            </label>
            <textarea className="textarea textarea-bordered h-24" name="desc" placeholder="Item description" value={"" || description} onChange={(e) => setDescription(e.target.value)}></textarea>

            <label className="label">
              <span className="text-gray-500">Tags:</span>
            </label>
            <textarea className="textarea textarea-bordered h-24 mb-0" name="name" placeholder="#Tag" value={"" || tags} onChange={(e) => setTags(e.target.value.split(/#\s,/))}></textarea>

            <div className="mb-10 ">
                
            <input type="submit" class="mr-3 mt-10 btn btn-active btn-primary"value="create"/>
            <input class="mt-10 btn btn-active btn-primary" value="Create and Share"/>
            <input class="mt-5 btn btn-active btn-primary w-[95%]" value={"Create and back to " + title}/ >
                
            </div>
            
                     

            
            
        </form>

        </div>
      </div>
    
  );
}

export default AddItem;