function Women() {
  const shoes = [
    {
      id: 1,
      s_name: "Air Joden 1",
      price: "₹9000",
      img: "https://i.ibb.co/pB3m4wS2/air-joden-1-removebg-preview.png",
    },
    {
      id: 2,
      s_name: "Air Joden 2",
      price: "₹7000",
      img: "https://i.ibb.co/QjnDyWMP/Air-joden-blue-removebg-preview.png",
    },
    {
      id: 3,
      s_name: "Air Joden 3",
      price: "₹7000",
      img: "https://i.ibb.co/gFj9yDn0/air-p-removebg-preview.png",
    },
    {
      id: 4,
      s_name: "Nike Dunk Low Next Nature",
      price: "MRP : ₹ 8 295.00",
      img: "https://i.ibb.co/GfJgJn0X/g-1-removebg-preview.png",
    },
  ];

  return (
    <>
      <div className="bg-[#121212] min-h-screen p-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          Women’s Shoes
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {shoes.map((sho) => (
            <div
              key={sho.id}
              className="bg-[#1E1E1E] shadow-md rounded-2xl p-4 flex flex-col items-center hover:scale-102 hover:shadow-lg hover:shadow-gray-800 transition-transform duration-300"
            >
              <img
                src={sho.img}
                alt={sho.s_name}
                className="h-70 object-contain mb-4 opacity-90 hover:opacity-100 transition duration-300"
              />
              <h2 className="text-lg font-semibold text-white">{sho.s_name}</h2>
              <p className="text-gray-400">{sho.price}</p>
              <button className="mt-4 bg-white text-black px-5 py-2 rounded-lg hover:bg-gray-300 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Women;
