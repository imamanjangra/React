import { useState , useEffect } from "react";

let imgages = [
    "https://i.ibb.co/bjyDbzgD/4e6443b2-867f-4733-9da5-b2186504ba0e.jpg",
    "https://i.ibb.co/gFBXh166/9fbb8767-3cce-4ca2-883c-799aaad6043d.jpg",
    "https://i.ibb.co/cm3GC05/645efffc-5348-4056-8b12-12db871e927f.jpg"
  ]
function Home() {
 
   const [imgchage, setimgchage] = useState(imgages[0]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % imgages.length; // move index forward
      setimgchage(imgages[index]); // update state
      console.log("Showing:", imgages[index]);
    }, 10000);

    return () => clearInterval(interval); // cleanup
  }, []);

  
  return (
    <>
      <div className="min-h-screen bg-[#181818] flex flex-col md:flex-row justify-center md:justify-evenly items-center md:items-start px-4 sm:px-6 md:px-10 py-6 md:py-10 gap-8">
       
        <div className="flex flex-row md:flex-col justify-center items-center w-full md:w-auto gap-6 md:gap-0">
         
          <div className="h-20 w-20 sm:h-24  sm:w-24 md:h-32 md:w-32 rounded-2xl bg-white/30 backdrop-blur-md border border-white/20 flex items-center justify-center p-2 sm:p-3 shadow-lg transition-transform duration-500 hover:scale-110 hover:shadow-2xl hover:bg-white/40">
            <img
              src="https://i.ibb.co/LdDXnVnT/air-jodon-logo-removebg-preview.png"
              alt="logo"
              className="object-contain h-full w-full "
            />
          </div>

      
          <div className="flex md:mt-10 flex-row md:flex-col gap-4 md:gap-5 justify-center items-center h-auto md:h-80 w-auto md:w-20 border md:border border-white/20 bg-white/5 backdrop-blur-md rounded-2xl shadow-md px-4 md:px-0 py-2 md:py-0">
                <div className="border border-white/20 bg-white/10 rounded-2xl h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-12 hover:bg-white/20 transition">
                    <img
                    src="https://i.ibb.co/QjnDyWMP/Air-joden-blue-removebg-preview.png"
                    className="h-full w-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    alt="Product"
                  />
                </div>

                <div className="border border-white/20 bg-white/10 rounded-2xl h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 hover:bg-white/20 transition">
                    <img
                    src="https://i.ibb.co/pB3m4wS2/air-joden-1-removebg-preview.png"
                    className="h-full w-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    alt="Product"
                  />
                </div>

                <div className="border border-white/20 bg-white/10 rounded-2xl h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 hover:bg-white/20 transition">
                    <img
                    src="https://i.ibb.co/DDTvzRYh/air-j-removebg-preview.png"
                    className="h-full w-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    alt="Product"
                  />
                </div>

                <div className="border border-white/20 bg-white/10 rounded-2xl h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 hover:bg-white/20 transition">
                    <img
                    src="https://i.ibb.co/gFj9yDn0/air-p-removebg-preview.png"
                    className="h-full w-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    alt="Product"
                  />
              </div>
           
            
          </div>
        </div>

        <div className="relative h-[250px] sm:h-[350px] md:h-[500px] w-full sm:w-[400px] md:w-[700px] rounded-2xl overflow-hidden shadow-xl group mt-6 md:mt-0">
          <img
            src={imgchage}
            className="h-full w-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
            alt="Product"
          />

       
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

        
          <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-3 sm:left-4 md:left-5">
            <button className="px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-xl text-white text-sm sm:text-base md:text-lg font-semibold bg-white/20 backdrop-blur-md border border-white/30 shadow-md hover:bg-white/30 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Home;

