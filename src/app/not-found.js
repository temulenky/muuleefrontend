import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
     <div className="bg-white h-screen pt-4 flex flex-col mt-20 items-center">    
      <div className="mt-5 h-16 border border-black hover:bg-gray-200 w-50 bg-white flex justify-center items-center">
          <h3 class="font-bold text-5xl ">404</h3>
      </div>
        <div class="h-60 w-80 bg-pink-200 rounded-xl mt-10">
          <div class="ml-5 mt-5 bg-pink-200">
            <h3 class="font-bold text-5xl">Sorry, This page cannot be found</h3>
          </div>
             <div className=" mt-5 ml-5 h-10 ml-5 w-70 bg-pink-200 flex justify-center items-center">
                <h4>if you need help or have a question, were here for you kkk</h4>
            </div>
         
          </div>
     

     
     </div> ) }