import BackDrop from "./BackDrop";
import { AiFillStar } from 'react-icons/ai';
import { Link } from "react-router-dom";
import ImagePlaceholder from "../images/img_placeholder.jpeg";

const CollectionCardModal = ({handleclose , collection, adding}) => {

    if(adding){
      return(
        <BackDrop onClick={handleclose}>
            <div
                onClick={(e)=> e.stopPropagation()}
                className="bg-bgblue rounded-lg max-h-full p-10 max-w-[900px]"
                >
                <div className="grid grid-cols-3 items-center">
                    <div className="">
                      <div className="flex justify-between p-2">
                        <p className="font-bold text-left text-4xl">New Collection</p>
                      </div>
                      <img className="rounded-lg object-cover" src={ImagePlaceholder} alt="Image placeholder"  />
                    </div>
                    <div className="col-span-1 pl-[50px] content-start justify-start text-left mt-2">
                        <label className="text-left text-2xl">Description:</label>
                        <textarea className="textarea" placeholder="Description"></textarea>
                    </div>
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