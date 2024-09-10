import { FaSpotify, FaHouse, FaMagnifyingGlass, FaUser } from "react-icons/fa6";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center px-4 py-2 text-white">
      <FaSpotify className="text-3xl mx-2"/>
      <div className="flex">
        <FaHouse className="text-3xl mx-2 m-auto"/>
        <div className="flex rounded-full bg-neutral-800 w-96 h-12 items-center justify-center p-2">
            <FaMagnifyingGlass className="text-2xl mx-2"/>
            <input type="text" placeholder="What do you want to listen to?" className="bg-transparent border-none focus:outline-none text-white w-full"/>
        </div>
      </div>
      <FaUser className="text-3xl mx-2"/>
      
    </div>  
  );
}