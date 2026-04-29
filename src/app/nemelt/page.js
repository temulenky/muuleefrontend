import DataJson from "../../utils/nem.json";
export default function Nemelt() {
    console.log(DataJson)
    return(
        <div className="grid grid-cols-4 gap-4 ">
            {DataJson.map((item)=>(
                <div key={item.id} class="bg-pink-200 p-6 h-full flex justify-center items-center hover:bg-sky-200   w-full rounded">
                    <div class="flex items-center rounded ">
                          <p class="">{item.Aimag}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
