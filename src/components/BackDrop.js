import { motion } from "framer-motion";

const BackDrop = ({ children , onClick}) => {

    return(
        <motion.div 
            className="absolute  left-0 top-0 h-full w-full bg-[#000000e1] flex items-center justify-center overflow-y-hidden" 
            initial={{opacity: 0}} 
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={onClick}
        >
            {children}

        </motion.div>
    );

};

export default BackDrop;