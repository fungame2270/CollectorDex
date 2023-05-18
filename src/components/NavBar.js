import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/LogoNavBar.svg";

function NavBar({}) {
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/Home" className="btn text-sky-900 hover:bg-white hover:border-white hover:-translate-y-0.5 normal-case text-xl"> <Logo/></Link>
          <div className="invisible sm:visible" >
            <Link to="/Home"className="btn hover:bg-white hover:border-white hover:-translate-y-0.5 " style={{color: '#58287F'}}> Home</Link>
            <Link to="/AllCollections"className="btn hover:bg-white hover:border-white hover:-translate-y-0.5" style={{color: '#58287F'}}> All Collections</Link>
          </div> 
        </div>
        <div className="flex-none sm:invisible">
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn m-1 hover:bg-white hover:border-white"><svg viewBox="0 0 100 80" width="20" height="20"><rect width="100" height="20" rx="8"></rect><rect y="30" width="100" height="20" rx="8"></rect><rect y="60" width="100" height="20" rx="8"></rect></svg></label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 drop-shadow-lg">
                <li><Link className="font-semibold" to="/Home">Home</Link></li>
                <li><Link className="font-semibold" to="/AllCollections">All Collections</Link></li>
            </ul>
            </div>
        </div>
      </div>
    );
}

export default NavBar;