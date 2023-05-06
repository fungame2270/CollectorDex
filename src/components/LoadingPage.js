function LoadingPage(){
    return (
        <div className="grid w-full h-full content-center justify-items-center">
          <div className="flex space-x-4 py-3 text-gray-950">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <h2 className="text-center">Loading...</h2>
          </div>
        </div>
      )
}

export default LoadingPage;