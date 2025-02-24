import React from "react";

const products = [
  {
    id: 1,
    name: "TMT BARS",
    description:
      "Whether you're residential, commercial spaces or infrastructure projects, we guarantee the reliability performance needed for exceptional structural integrity.",
    image:
      "https://static.wixstatic.com/media/823701_0e0f6c6fc9ce4725a0f5d872a28c31d3~mv2.jpg",
  },
  {
    id: 2,
    name: "CEMENT",
    description:
      "We provide high-quality cement for all your projects, ensuring durability and strength. Let us help you build a solid foundation!",
    image:
      "https://static.wixstatic.com/media/823701_8bb4709feabb45f3bfaeaf0944fa2e1e~mv2.jpg",
  },
  {
    id: 3,
    name: "CONSTRUCTION CHEMICALS",
    description:
      "Construction chemicals are essential for ensuring the durability and efficiency of buildings.",
    image:
      "https://static.wixstatic.com/media/823701_dab15c765aaf482cb798d1aea5749974~mv2.jpg",
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-12 flex justify-center items-center min-h-screen">
      {/* White Container for Products */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-3/5">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Our Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 bg-white rounded-md shadow-md text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
              <p className="text-gray-700">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
