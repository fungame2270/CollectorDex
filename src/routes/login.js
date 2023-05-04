import { ReactComponent as Logo } from "../images/Logo.svg";


const Login = () => {
    return(
      
        <div className="container mx-auto mb-10 flex flex-1 flex-col justify-center pb-96">

          
        <div style={{margin: '50px 0px 100px 0px',position: 'relative',left: '25%'}}>
            <Logo/>
        </div>
          
        

         <div style={{margin: '0px 500px 0px 500px'}}>
           <form className="space-y-6" action="#" method="POST">
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
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500" style={{color: '#58287F'}}>
                    Forgot password?
                  </a>
                </div>
              </div>

              </div>
             </div>

             <div>
              <button
                style={{backgroundColor: '#58287F'}}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm text-gray-400">
            Don't have account?{' '}
            <a href="#" className="font-semibold">
              Register here
            </a>
          </p>
        </div>
      </div>



    )
}

export default Login;