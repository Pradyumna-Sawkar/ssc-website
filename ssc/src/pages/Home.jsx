import { NavLink } from "react-router-dom";
import cutting_tools from "../assets/cutting_tools.png"

export default function Home() {
  return (
    <div>

      {/* ================= HERO ================= */}
      <section className="bg-slate-100 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Precision Solid Carbide Cutting Solutions
            </h1>

            <p className="text-slate-600 mb-6">
              Manufacturing, re-grinding, coating, and industrial tooling solutions
              designed for accuracy, durability, and performance.
            </p>

            <div className="flex gap-4">
              <NavLink
                to="/products"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                View Products
              </NavLink>

              <NavLink
                to="/contact"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Contact Us
              </NavLink>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src={cutting_tools}
              alt="Cutting tools"
              className="rounded-xl shadow-md"
            />
          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-semibold text-slate-900">
            Our Services
          </h2>
          <p className="text-slate-600 mt-2">
            Comprehensive solutions for all your cutting tool needs
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            "Manufacturing",
            "Re-grinding",
            "Coating",
            "Trading",
          ].map((service) => (
            <div
              key={service}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-medium text-slate-900 mb-2">
                {service}
              </h3>
              <p className="text-sm text-slate-600">
                High-quality {service.toLowerCase()} services ensuring precision and reliability.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-semibold text-slate-900">
            Our Products
          </h2>
          <p className="text-slate-600 mt-2">
            Explore our wide range of industrial cutting tools
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            "Drills",
            "End Mills",
            "Reamers",
            "Chamfer Tools",
          ].map((product) => (
            <div
              key={product}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center"
            >
              <h3 className="text-lg font-medium text-slate-900 mb-3">
                {product}
              </h3>

              <NavLink
                to="/products"
                className="text-blue-600 hover:underline text-sm"
              >
                View More →
              </NavLink>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">
            About Us
          </h2>

          <p className="text-slate-600 mb-6">
            Solutions Sales Corporation specializes in delivering precision cutting
            tools and industrial solutions. With expertise in manufacturing,
            re-grinding, coating, and trading, we ensure quality and performance
            in every product.
          </p>

          <NavLink
            to="/about"
            className="text-blue-600 font-medium hover:underline"
          >
            Learn More →
          </NavLink>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Need Precision Cutting Solutions?
        </h2>

        <p className="mb-6">
          Get in touch with us for reliable and high-quality industrial tools.
        </p>

        <NavLink
          to="/contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          Contact Us
        </NavLink>
      </section>

    </div>
  );
}