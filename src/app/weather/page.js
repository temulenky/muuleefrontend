export default function TestPage() {
  return (
    <div className="flex h-200 bg-[#0f172a] text-white">
      <div className="w-[80px] ml-4 mt-8 rounded-xl bg-[#1e293b] flex flex-col items-center py-6 space-y-10">
        <div className="text-2xl">💨</div>
        <div> weather</div>
        <div>cities</div>
        <div>map</div>
        <div>settings</div>
      </div>
      <div className="flex flex-1 p-8 gap-8">
        <div className="flex-1 space-y-6">
          <input
            type="text"
            placeholder="Search for cities"
            className="w-full p-3 rounded-xl bg-[#1e293b] outline-none"
          />
          <div className="bg-[#0f172a] rounded-2xl p-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Madrid</h1>
              <p className="text-gray-400 mb-6">Chance of rain: 0%</p>
              <h2 className="text-6xl font-bold">31°</h2>
            </div>
            <div className="text-9xl">☀️</div>
          </div>
          <div className="bg-[#1e293b] rounded-2xl p-6">
            <h3 className="text-2 mb-4 text-gray-300">TODAY S FORECAST</h3>
            <div className="flex justify-between text-center">
              {[
                { time: "6:00 AM", temp: "25°", icon: "☁️" },
                { time: "9:00 AM", temp: "28°", icon: "🌤️" },
                { time: "12:00 PM", temp: "33°", icon: "☀️" },
                { time: "3:00 PM", temp: "34°", icon: "☀️" },
                { time: "6:00 PM", temp: "32°", icon: "☀️" },
                { time: "9:00 PM", temp: "30°", icon: "🌥️" },
              ].map((item, i) => (
                <div key={i} className="space-y-2 border-r gap-4" >
                  <p className="text-sm text-gray-400">{item.time}</p>
                  <div className="text-2xl">{item.icon}</div>
                  <p className="font-semibold">{item.temp}</p>
                  
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#1e293b] rounded-2xl p-6">
            <h3 className="mb-4 text-gray-300">AIR CONDITIONS</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400">Real Feel</p>
                <p className="text-2xl font-bold">30°</p>
              </div>
              <div>
                <p className="text-gray-400">Wind</p>
                <p className="text-2xl font-bold">0.2 km/h</p>
              </div>
              <div>
                <p className="text-gray-400">Chance of rain</p>
                <p className="text-2xl font-bold">0%</p>
              </div>
              <div>
                <p className="text-gray-400">UV Index</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </div>

        </div>
        <div className="w-[350px] bg-[#1e293b] rounded-2xl p-6">
          <h3 className="mb-6 text-gray-300">7-DAY FORECAST</h3>

          {[
            { day: "Today", icon: "☀️", type: "Sunny", temp: "36/22" },
            { day: "Tue", icon: "☀️", type: "Sunny", temp: "37/21" },
            { day: "Wed", icon: "☀️", type: "Sunny", temp: "37/21" },
            { day: "Thu", icon: "☁️", type: "Cloudy", temp: "37/21" },
            { day: "Fri", icon: "☁️", type: "Cloudy", temp: "37/21" },
            { day: "Sat", icon: "🌧️", type: "Rainy", temp: "37/21" },
            { day: "Sun", icon: "⛈️", type: "Storm", temp: "37/21" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex mt-8 justify-between items-center py-3 border-b border-gray-700 last:border-none"
            >
              <p className="w-16">{item.day}</p>
              <div className="flex items-center gap-2">
                <span>{item.icon}</span>
                <span className="text-gray-400">{item.type}</span>
              </div>
              <p className="font-semibold">{item.temp}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
