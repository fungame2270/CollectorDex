import { ReactComponent as Logo } from "../images/Logo.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("submit");
      navigate('/Home');
  } 

    return(
      
        <div className="grid flex-1 flex-col justify-center">
      
          <div className="grid content-center justify-items-center pl-20"style={{margin: '50px 0px 100px 0px'}}>
              <Logo/>
          </div>
          
         <div style={{margin: '0px 250px 0px 250px'}}>
           <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              
              <div className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                <input
                style={{paddingLeft: '10px', backgroundColor: 'white', height: '50px' }}
                  id="email"
                  name="email"
                  type="email"  
                  autoComplete="email"
                  required
                  placeholder="Email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
             </div>

             <div>
              
              <div className="mt-2">
                <input
                  style={{paddingLeft: '10px', backgroundColor: 'white', height: '50px'}}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />

                <div className="mt-2 flex items-center justify-between">
                <div className="text-sm">
                 {/*  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500" style={{color: '#58287F'}}>
                    Forgot password?
                  </a> */}
                </div>
              </div>

              </div>
             </div>

             <div>
              
              <button
                type="submit"
                className="btn btn-accent flex w-full justify-center rounded-md px-3 py-1.5 font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onSubmit={handleSubmit}
              >
                Sign In
              </button>
            
             
            </div>
          </form>

          {/*<p className="mt-5 text-center text-sm text-gray-400">
            Don't have an account?{' '}
            {/* <a href="#" className="font-semibold">
              Register here
            </a> 
          </p>*/}
        </div>
      </div>

    )
}

export default Login;