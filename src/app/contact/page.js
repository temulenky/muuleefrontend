import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
     <div className="bg-white h-screen pt-4 flex flex-col items-center">
      {/*header*/}
      <div className="flex items-center h-14 p-4 container mx-auto bg-white rounded-xl ">
        <div className="flex gap-4 items-center">
          <img 
          className="rounded-full h-10 w-10"
          scr="/potato.logo.avif"
          />
          <h1>
            potato
          </h1>

        </div>
        <div className="flex gap-6 ml-80 items-center">
         
          <p> Home </p>
          <p> Service </p>
          <Link href="/about">About Us</Link>
          <p> Contact Us </p>
          <p> Faq </p>
        </div>
        <div className="flex items-center gap-4 ml-8">
          <button className="bg-pink-300  hover:bg-pink-600 p-2 rounded-xl"> Sign in </button>
          <button className="bg-pink-300 hover:bg-pink-600 p-2 rounded-xl"> Sign up </button>

        </div>
      </div>
      <div className="mt-5 h-8 border border-black hover:bg-gray-200 w-50 bg-white flex justify-center items-center">
          <h3>CONTACT PAGE</h3>
      </div>
      <div className="mt-5 h-28 w-150 bg-white flex justify-center items-start">
          <h1 className="text-5xl flex justify-center items-start text-center">Get in touch with us for more information</h1>
      </div>
      <div className=" mt-5 h-10  w-150 bg-white flex justify-center items-center">
          <h4>if you need help or have a question, we"re here for you kkk</h4>
      </div>
      <div className="mt-10 h-80 w-255 bg-white grid grid-cols-3">
        <div class="h-60 ml-5 w-80 bg-pink-200 rounded-xl">
          <div class="ml-5 mt-5 bg-pink-200">
            <h3 class="font-bold text-xl">San Francisco</h3>
          </div>
          <hr className="m-5"></hr>
          <div class="ml-5 mt-5 bg-pink-200">
            <h3>sanfrancisco@flowbase.com</h3>
          </div>
          <div class="ml-5 mt-5 bg-pink-200">
            <h3>(415) 931-1616</h3>
          </div>
          <div className="mt-5 ml-5 h-10 border border-black w-70 rounded-xl bg-white flex justify-center items-center">
            <h3>view location</h3>
          </div>
          </div>
        <div class="h-60 ml-5 w-80 bg-pink-200 rounded-xl">
          <div class="ml-5 mt-5 bg-pink-200">
            <h3 class="font-bold text-xl">Paris</h3>
          </div>
          <hr className="m-5"></hr>
          <div class="ml-5 mt-5 bg-pink-200">
            <h3>paris@flowbase.com</h3>
          </div>
          <div class="ml-5 mt-5 bg-pink-200">
            <h3>(415) 931-1616</h3>
          </div>
          <div className="mt-5 ml-5 h-10 border border-black w-70 rounded-xl bg-white flex justify-center items-center">
            <h3>view location</h3>
          </div>
          </div>
        <div class="h-60 ml-5 w-80 bg-pink-200 rounded-xl">
          <div class="ml-5 mt-5 bg-pink-200">
            <h3 class="font-bold text-xl">Egypt</h3>
          </div>
          <hr className="m-5"></hr>
          <div class="ml-5 mt-5 bg-pink-200">
            <h3>egypt@flowbase.com</h3>
          </div>
          <div class="ml-5 mt-5 bg-pink-200">
            <h3>(415) 931-1616</h3>
          </div>
          <div className="mt-5 ml-5 h-10 border border-black w-70 rounded-xl bg-white flex justify-center items-center">
            <h3>view location</h3>
          </div>
          </div>

      </div>

    </div>
  );
}
