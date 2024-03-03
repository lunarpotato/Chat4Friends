const Page = () => {
    const welcomeTextStyle = {
      fontFamily: 'Malayalam Sangam MN, sans-serif', // Fallback auf generische Sans-Serif-Schriftart
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl" style={welcomeTextStyle}>
            Log In to {' '}
            <img
              src="/chat4frnds.svg" 
              alt="Chat4Friends"
              className="inline-block w-auto h-17" 
            />
          </h1>
         
            
            <button className="text-white hover:underline">Login</button>
         
        </div>
      </div>
    );
  };
  
  export default Page;
  