

const Herosection = () => {
  return (
    <div className="min-h-screen mt-4 bg-white flex  flex-col md:flex-row items-center justify-center">
    {/* left */}
    <div className="bg-purple-100 flex flex-row justify-center items-center h-[720px] rounded-lg w-80">
    </div>
    {/* right */}
    <div className="bg-red-400 ml-5 h-[720px] w-2/3 flex flex-col gap-2">
  {/* Box Wrapper */}
  <div className="flex lg:flex-row flex-col gap-2  w-full ">
    {/* Box 1 */}
    <div className="bg-blue-400 h-[250px]  w-1/3  flex-1"></div>
    
    {/* Box 2 */}
    <div className="bg-green-400 h-[250px]  w-1/3  flex-1"></div>
    
    {/* Box 3 */}
    <div className="bg-yellow-400 h-[250px]  w-1/3  flex-1"></div>
  </div>
  
  <div className="flex lg:flex-row flex-col gap-2 w-full ">


  <div className="bg-blue-400 h-[200px]  w-1/4  flex-1"></div>
    
    {/* Box 2 */}
    <div className="bg-green-400 h-[200px]  w-1/4  flex-1"></div>
    
    {/* Box 3 */}
    <div className="bg-yellow-400 h-[200px]  w-1/4  flex-1"></div>

    <div className="bg-orange-400 h-[200px]  w-1/4  flex-1"></div>
    {/* Additional content */}
  </div>

  <div className="flex lg:flex-row flex-col gap-2 w-full ">

  <div className="bg-blue-400 h-[250px]  w-1/2  flex-1"></div>
    
    {/* Box 2 */}
    <div className="bg-green-400 h-[250px]  w-1/2  flex-1"></div>

  </div>
</div>
  </div>
  );
};
  
export default Herosection