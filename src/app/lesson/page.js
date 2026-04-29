"use client";

import { useState } from "react";
import DataJson from "../../utils/data.json";

export default function Home() {
    const [search, setSearch] = useState("");

    const filteredData = DataJson.filter((item) =>
        item.first_name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search by name or email..."
                className="border p-2 mb-4 w-full rounded"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="grid grid-cols-6 gap-4">
                {filteredData.map((item, index) => (
                    <div key={index} className="bg-pink-200 h-120 w-full rounded overflow-hidden">
                        <img
                            src={item.image}
                            alt={item.first_name}
                            className="h-32 w-full object-cover"
                            onError={(e) => {
                                e.currentTarget.src = "/fallback.png";
                            }}
                        />

                        <div className="flex justify-between mt-2 px-2">
                            <p>{item.first_name}</p>
                            <p className="bg-purple-200 px-2 flex items-center justify-center rounded-xl text-xs">
                                {item.type}
                            </p>
                        </div>

                        <div className="text-xs mt-2 px-2">
                            <p className="font-bold">Email:</p>
                            <p>{item.email}</p>
                        </div>

                        <div className="text-xs mt-2 px-2">
                            <p className="font-bold">Age:</p>
                            <p>{item.age}</p>
                        </div>


                        <p className="text-xs mt-1 px-2">Point: {item.point}</p>
                        <p className="text-xs mt-1 px-2">Country: {item.country}</p>
                        <p className="text-xs mt-1 px-2">Created: {item.created_at}</p>

                        <div className="grid grid-cols-2 gap-1">
                            {item.item?.map((subItem) => (
                                 <img
                                    key={subItem.id}
                                    src={subItem.image}
                                    alt={subItem.name}
                                    className="h-24 w-full object-cover rounded"
                                 />
                            ))}
                        </div>

                        <button className="bg-red-600 text-white rounded-xl text-xs h-6 w-14 ml-2 mt-2">
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}