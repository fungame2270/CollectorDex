import NavBar from "../components/NavBar";
import NewAndTitle from "../components/NewAndTitle";
import img_placeholder from "../images/img_placeholder.jpeg"
import { useParams, Link } from "react-router-dom";





function AddItem() {


    const {title} = useParams();

  return (
    <div className="text-gray-950 text-center bg-bgblue">
        <NavBar></NavBar>
        <h1 className="m-20 text-4xl font-bold text-start">Adding to {title}</h1>
        <div className="grid md:grid-cols-2 mt-12 mb-20 mx-24 text-gray-950 text-center">

        <div className="pr-[20%]">
            <img src={img_placeholder}/>
        </div>

        <div className="form-control w-full max-w-sm" style={{fontSize: 18}}>
            <label className="label">
              <span className="text-gray-500" >Name:</span>
            </label>
            <input type="text" placeholder="Item name" className="input input-bordered w-full" />

            <label className="label">
              <span className="text-gray-500">Descripition:</span>
            </label>
            <textarea className="textarea textarea-bordered h-24" placeholder="Item description"></textarea>

            <label className="label">
              <span className="text-gray-500">Tags:</span>
            </label>
            <textarea className="textarea textarea-bordered h-24 mb-0" placeholder="#Tag"></textarea>

            <div className="mb-10 ">
                <button class="mr-3 mt-10 btn btn-active btn-primary">Create</button>
                <button class="mt-10 btn btn-active btn-primary">Create and Share</button>
                <button class="mt-5 btn btn-active w-[70%]">Create</button>
                
            </div>
            
            
            
            

            
            
        </div>

        </div>
      </div>
    
  );
}

export default AddItem;