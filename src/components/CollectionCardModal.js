import BackDrop from "./BackDrop";
import { AiFillStar } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useState} from 'react';
import ImagePlaceholder from "../images/img_placeholder.jpeg";

const CollectionCardModal = ({handleclose ,collection, adding, handleSubmit}) => {

    const [name, setName] = useState("");  
    const [description, setDescription] = useState("");

    if(adding){
      return(
        <BackDrop onClick={handleclose}>
            <div
                onClick={(e)=> e.stopPropagation()}
                className="bg-bgblue rounded-lg max-h-full p-16 max-w-[900px]"
                >
                <div className="grid grid-cols-2 items-center">
                    <div className="">
                      <div className="flex justify-between p-2">
                        <p className="font-bold text-left text-4xl">New collection</p>
                      </div>
                      <img className="rounded-lg object-cover" src={ImagePlaceholder} alt="Placeholder"  />
                    </div>
                    <form className="form-control content-start justify-start text-left ml-20 mt-20" onSubmit={handleSubmit}>
                        <label className="text-left text-2xl" htmlFor="title">Name:</label>
                        <input className="input" type="text" name="name" placeholder="Type name here..." value={"" || name} onChange={(e) => setName(e.target.value)} required/>
                        <label className="text-left text-2xl"  htmlFor="title">Description:</label>
                        <textarea className="textarea" type="textarea" name="desc" placeholder="Type a description..." value={"" || description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        <input className="btn btn-accent" type="submit" value="Create" />
                    </form>
                </div>
            </div>
        </BackDrop>
      );
    }

    return (
        <BackDrop onClick={handleclose}>
            <div
                onClick={(e)=> e.stopPropagation()}
                className="bg-bgblue rounded-lg max-h-full p-10 max-w-[900px]"
                >
                <div className="grid grid-cols-3 items-center">
                    <div className="">
                      <div className="flex justify-between p-2">
                        <p className="font-bold text-left text-4xl">{collection.name}</p>
                        <AiFillStar className="text-3xl place-self-end" />
                      </div>
                      <img className="rounded-lg object-cover" src={collection.img} alt="Shoes" />
                    </div>
                    <div className="col-span-2 pl-[50px]">
                        <p className="font-bold text-left text-3xl">Description:</p>
                        <p className="text-left text-2xl">{collection.description}</p>
                        <div className="flex justify-around mt-7">
                          <Link to={collection.id} class="btn btn-primary drop-shadow">View</Link>
                          <button class="btn btn-primary drop-shadow">Share</button>
                        </div>
                    </div>
                </div>
            </div>
        </BackDrop>
    );
};

export default CollectionCardModal;