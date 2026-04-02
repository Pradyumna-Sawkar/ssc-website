import flat_drills from "../assets/flat_drills.png"
import centre_drills from "../assets/centre_drills.png"
import step_drills from "../assets/step_drills.png"
import flat_endmills from "../assets/flat_endmills.png"
import flute_ball_nose_endmills from "../assets/flute_ball_nose_endmills.png"
import hole_mills from "../assets/hole_mills.png"
import reamers from "../assets/reamers.png"
import chamfer from "../assets/chamfer.png"
import { useState } from "react";



export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const categories = [
    {
      title: "Drills",
      items: [
        {
          name: "Flat Drills",
          image: flat_drills,
        },
        {
          name: "Step Drills",
          image: step_drills,
        },
        {
          name: "Centre Drills",
          image: centre_drills,
        },
      ],
    },
    {
      title: "End Mills",
      items: [
        {
          name: "Flute Ball Nose",
          image: flute_ball_nose_endmills,
        },
        
        {
          name: "Flat End Mills",
          image: flat_endmills,
        },
        {
          name: "Hole Mills",
          image: hole_mills,
        },
      ],
    },
    {
      title: "Reamers",
      items: [
        {
          name: "Precision Reamers",
          image: reamers,
        },
      ],
    },
    {
      title: "Chamfer Tools",
      items: [
        {
          name: "Chamfer Tools",
          image: chamfer,
        },
      ],
    },
  ];

  
  return (
    <div className="px-6 py-16">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-slate-900">
          Our Products
        </h1>
        <p className="text-slate-600 mt-3">
          Explore our range of precision cutting tools designed for industrial performance.
        </p>
      </div>

      {/* CATEGORIES */}
      <div className="max-w-7xl mx-auto space-y-12">

        {categories.map((category) => (
          <div key={category.title}>

            {/* Category Title */}
            <h2 className="text-2xl font-semibold text-slate-900 mb-6 border-b pb-2">
              {category.title}
            </h2>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

              {category.items.map((item) => (
                <div
                  key={item.name}
                  onClick={() => setSelectedProduct(item)}
                  className="bg-white rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer"
                >
                  {/* Image */}
                  <div className="h-40 bg-slate-100 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-slate-900 mb-2">
                      {item.name}
                    </h3>

                    <p className="text-sm text-slate-600">
                      High precision {item.name.toLowerCase()} designed for durability and performance.
                    </p>
                    <p className="text-blue-600 text-sm mt-2">
                      View Details →
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        ))}

      </div>

      {/* OTHER TOOLS */}
<div className="max-w-7xl mx-auto mt-16">

  <h2 className="text-2xl font-semibold text-slate-900 mb-6 border-b pb-2">
    Other Tools
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    {[
      {
        title: "Turning Tools",
        desc: "Carbide inserts for turning operations.",
        items: ["TNMG", "CNMG", "SNMG", "WNMG", "VNMG", "DNMG"],
      },
      {
        title: "Milling Tools",
        desc: "High-performance milling inserts.",
        items: ["SNMX", "XPKX", "APMT", "APKT", "High Feed", "Ball Nose"],
      },
      {
        title: "Grooving Tools",
        desc: "Precision grooving inserts.",
        items: ["MGMN"],
      },
      {
        title: "Threading Tools",
        desc: "Threading solutions for industrial use.",
        items: ["Threading Inserts"],
      },
    ].map((tool) => (
      <div
        key={tool.title}
        className="bg-white p-5 rounded-xl shadow hover:shadow-md transition"
      >
        <h3 className="text-lg font-medium text-slate-900 mb-2">
          {tool.title}
        </h3>

        <p className="text-sm text-slate-600 mb-3">
          {tool.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {tool.items.map((item) => (
            <span
              key={item}
              className="text-xs bg-slate-100 px-2 py-1 rounded"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ))}

  </div>
  </div>

    {selectedProduct && (
  <div
    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    onClick={() => setSelectedProduct(null)}
  >
    <div
      className="bg-white rounded-xl max-w-3xl w-full mx-4 p-6 relative"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={() => setSelectedProduct(null)}
        className="absolute top-4 right-4 text-slate-500 hover:text-black"
      >
        ✕
      </button>

      <div className="grid md:grid-cols-2 gap-6 items-center">

        {/* Image */}
        <div className="bg-slate-100 flex items-center justify-center h-60 rounded-lg">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="max-h-full object-contain"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">
            {selectedProduct.name}
          </h2>

          <p className="text-slate-600 mb-4">
            High precision {selectedProduct.name.toLowerCase()} designed for industrial performance and durability.
          </p>

          {/* Applications */}
          <div>
            <h3 className="font-medium text-slate-900 mb-2">
              Applications:
            </h3>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
              <li>CNC Machining</li>
              <li>Metal Cutting</li>
              <li>Industrial Manufacturing</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-4">
            <a
              href="tel:+919823717890"
              className="text-blue-600 font-medium hover:underline"
            >
              📞 Call for Details
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
)}
    </div>
  );
}