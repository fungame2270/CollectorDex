import { motion } from "framer-motion";
import BackDrop from "./BackDrop";
import { AiFillStar } from 'react-icons/ai';
import { Link } from "react-router-dom";

const CollectionCardModal = ({handleclose , props}) => {

    return (
        <BackDrop onClick={handleclose}>
            <div
                onClick={(e)=> e.stopPropagation()}
                className="bg-bgblue rounded-lg max-h-full p-10 max-w-[900px]"
                >
                <div className="grid grid-cols-3 items-center">
                    <div className="">
                      <div className="flex justify-between p-2">
                        <p className="font-bold text-left text-4xl">{props.name}</p>
                        <AiFillStar className="text-3xl place-self-end" />
                      </div>
                      <img className="rounded-lg object-cover" src={props.img} alt="Shoes" />
                    </div>
                    <div className="col-span-2 pl-[50px]">
                        <p className="font-bold text-left text-3xl">Description:</p>
                        <p className="text-left text-2xl">{props.description}</p>
                        <div className="flex justify-around mt-7">
                          <Link to={props.id} class="btn btn-primary drop-shadow">View</Link>
                          <button class="btn btn-primary drop-shadow">Share</button>
                        </div>
                    </div>
                </div>
            </div>
        </BackDrop>
    );
};

export default CollectionCardModal;