import { motion } from "framer-motion";
import BackDrop from "./BackDrop";

const CollectionCardModal = ({handleclose , props}) => {

    return (
        <BackDrop onClick={handleclose}>
            <div
                onClick={(e)=> e.stopPropagation()}
                className="bg-white rounded-lg max-h-full p-10"
                >
                <div className="grid grid-cols-3 items-center">
                    <div className="">
                      <p className="font-bold text-left text-4xl p-2">{props.name}</p>
                      <div style={{ backgroundImage: `url("${props.img}")`}}></div>
                    </div>
                    <div className="col-span-2 pl-[50px]">
                        <p className="font-bold text-left text-3xl">Description:</p>
                        <p className="text-left text-2xl">{props.description}</p>
                        <div className="">

                        </div>
                    </div>
                </div>
            </div>
        </BackDrop>
    );
};

export default CollectionCardModal;