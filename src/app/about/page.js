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
            src="/potato.logo.avif"
          />
          <h1>
            potato
          </h1>

        </div>
        <div className="flex gap-6 ml-80 items-center">
         
          <p> Home </p>
          <Link href="/404444"> Service </Link>
          <p> About Us </p>
          <Link href="/contact">Contact Us</Link>
          <p> Faq </p>
        </div>
        <div className="flex items-center gap-4 ml-8">
          <button className="bg-pink-300  hover:bg-pink-600 p-2 rounded-xl"> Sign in </button>
          <button className="bg-pink-300 hover:bg-pink-600 p-2 rounded-xl"> Sign up </button>

        </div>
      </div>
      <div class="h-150 w-280 bg-pink-100 grid grid-cols-2 ">
        <div class="ml-8 mt-5 h-130 w-130 bg-white rounded-xl">
            <div class=" ml-5 mt-5 h-10 w-100 bg-white">
                <p class="text-orange-500 font-bold text-xl">How it started</p>
            </div>
            <div className="mt-5 ml-3 h-28 w-120 bg-white flex justify-start items-start">
                <h1 className="text-5xl flex justify-center items-start text-center">Our Dream is Global Learning Transformation </h1>
            </div>
            <div class=" mt-20 ml-5  h-30 w-120 bg-white">
                <p>Our team is made up of experienced professionals who bring creativity, expertise, and commitment to every project. We believe that success comes from collaboration, continuous improvement, and a genuine focus on customer satisfaction.
                     Since our founding, our mission has remained the same: to provide reliable solutions, build lasting relationships, and create value for our community. We take pride in our work and are driven by a desire to grow, adapt, and lead in our industry.</p>
            </div>

        </div>
        <div className="mt-5 h-130 w-130 bg-white rounded-xl">
           <div>
             <Image
                src="/paris.avif"
                alt="Paris"
                width={420}
                height={50}
                className="ml-12 mt-5 mb-5 rounded-xl"
             />
           </div>
           <div class="grid grid-cols-2 bg-white h-20 w-130">
            <div class="ml-12 h-20 w-50 rounded-xl bg-pink-100">
                <h1 class="font-bold ml-5 mt-2 text-3xl">3.5</h1>
                <h3 class="ml-5 mt-2" >Years Experience</h3>
            </div>
             <div class="mr-12 h-20 w-50 rounded-xl bg-pink-100">
                <h1 class="font-bold ml-5 mt-2 text-3xl">23</h1>
                <h3 class="ml-5 mt-2">Project Challenge</h3>
            </div>
             <div class="grid mt-5 grid-cols-2 bg-white h-20 w-130">
            <div class="ml-12 h-20 w-50 rounded-xl bg-pink-100">
                <h1 class="font-bold ml-5 mt-2 text-3xl">3.5</h1>
                <h3 class="ml-5 mt-2" >Years Experience</h3>
            </div>
             <div class="mr-5 h-20 w-50 rounded-xl bg-pink-100">
                <h1 class="font-bold ml-5 mt-2 text-3xl">23</h1>
                <h3 class="ml-5 mt-2">Project Challenge</h3>
            </div>
            </div>
            
            
            
            

           </div>
        </div> 
      </div>

      <div className="flex gap-6 ml-80 items-center">
    
     
      
</div>
    </div>
);
}