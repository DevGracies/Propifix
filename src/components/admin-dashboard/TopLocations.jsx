import Image from "next/image";

const locations = [
  { id: 1, name: "Ikeja", img: "/ikeja.jpg" },
  { id: 2, name: "Ikoyi", img: "/ikoyi.jpg" },
  { id: 3, name: "Lekki", img: "/lekki.jpg" },
  { id: 4, name: "Yaba", img: "/yaba.jpg" },
];

export default function TopLocations() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md h-[5%]">
      <h2 className="text-lg font-bold mb-2">Top Locations</h2>
      <div className="flex gap-4 overflow-x-auto">
        {locations.map((loc) => (
          <div
            key={loc.id}
            className="relative min-w-[150px] h-[100px] rounded-lg overflow-hidden"
          >
            <Image src={loc.img} alt={loc.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-2 text-white">
              <span className="font-bold">{loc.id}. {loc.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
