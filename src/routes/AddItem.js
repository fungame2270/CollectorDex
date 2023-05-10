import NavBar from "../components/NavBar";
import img_placeholder from "../images/img_placeholder.jpeg"
import { useParams, Link } from "react-router-dom";
import { useState } from 'react';
import LoadingPage from '../components/LoadingPage';
import Swal from 'sweetalert2';

import API from "../index.js" 


function AddItem() {

    const[loading, setLoading] = useState(false);
    const [name, setName] = useState("");  
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);
    //const [image, setImage] = useState("");

    const {colid, title} = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(API + "/collections/" + colid)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.log(err));
        
        console.log(response.items);
        const items = response.items;

        console.log(items.length);
    
        const Item = {
          id: items.length + 1 + "",
          name: e.target.elements.name.value,
          img: "https://www.pngkey.com/png/detail/233-2332677_ega-png.png",
          description: e.target.elements.desc.value,
          tags: []
        }

        items.push(Item)

        const updatedCollection = {
          id: colid,
          name: title,
          img: response.img,
          description: response.description,
          items: items
        }  

        console.log(updatedCollection)

        setLoading(true);
    
        await fetch(API + "/collections/" + colid , {
          method: "PUT",
          body: JSON.stringify(updatedCollection),
          headers: {
            "Content-Type": "application/json",
          }
        });
    
        setLoading(false);
    
        Swal.fire({
          title: "Item added successfully!",
          icon: "success",
          timer: 1500,
          position: 'middle',
          showConfirmButton: false,
        });
      };

      if(loading) {
        return(<LoadingPage></LoadingPage>)
      }
      

  return (
    <div className="text-gray-950 text-center bg-bgblue h-screen">
        <NavBar></NavBar>
        <h1 className="m-20 text-4xl font-bold text-start">Adding to {title}</h1>
        <div className="grid md:grid-cols-2 mt-12 mb-20 mx-24 text-gray-950 text-center">

          <div className="pr-[20%]">
              <img src={img_placeholder} alt="placeholder"/>
          </div>

          <form className="form-control w-full max-w-sm" style={{fontSize: 18}} onSubmit={handleSubmit}>
              <label className="label">
                <span className="text-gray-500" >Name:</span>
              </label>
              <input placeholder="Item name" name="name" className="input input-bordered w-full drop-shadow-md" value={"" || name} onChange={(e) => setName(e.target.value)} required/>

              <label className="label">
                <span className="text-gray-500">Descripition:</span>
              </label>
              <textarea className="textarea textarea-bordered h-24 drop-shadow-md" name="desc" placeholder="Item description" value={"" || description} onChange={(e) => setDescription(e.target.value)}></textarea>

              <label className="label">
                <span className="text-gray-500">Tags:</span>
              </label>
              <textarea className="textarea textarea-bordered h-24 mb-0 drop-shadow-md" name="tags" placeholder="#Tag" value={"" || tags} onChange={(e) => setTags(e.target.value.split(/#\s,/))}></textarea>

            <div className="mb-10 ">
                
            <input type="submit" className="mr-3 mt-10 btn btn-accent drop-shadow-md" value="create" readOnly/>
            <input type="submit" className="mt-10 btn btn-accent drop-shadow-md" value="Create and Share" readOnly/>
            <Link to={"/AllCollections/" + colid} className="mt-5 btn btn-outline btn-error w-[95%] drop-shadow-md">Cancel and go back to {title}</Link>
                
            </div>
            
        </form>

        </div>
      </div>
    
  );
}

export default AddItem;