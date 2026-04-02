export default function Services() {
  const services = [
    {
      title: "Manufacturing",
      desc: "We manufacture high-precision solid carbide cutting tools designed for durability and performance in industrial applications.",
    },
    {
      title: "Re-grinding",
      desc: "Extend tool life with our expert re-grinding services, restoring performance and reducing operational costs.",
    },
    {
      title: "Coating",
      desc: "Advanced coating solutions to improve tool lifespan, reduce wear, and enhance cutting efficiency.",
    },
    {
      title: "Trading",
      desc: "We supply a wide range of industrial cutting tools and accessories from trusted manufacturers.",
    },
  ];

  return (
    <div className="px-6 py-16">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900">
          Our Services
        </h1>
        <p className="text-slate-600 mt-3">
          Comprehensive solutions for all your cutting tool needs
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition hover:-translate-y-1"
          >
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              {service.title}
            </h2>

            <p className="text-sm text-slate-600">
              {service.desc}
            </p>
          </div>
        ))}

      </div>

      {/* MAGNETIC FIXTURES & LIFTERS */}
<div className="max-w-7xl mx-auto mt-16">

  <h2 className="text-3xl font-semibold text-slate-900 mb-6 text-center">
    Magnetic Fixtures & Lifters
  </h2>

  <p className="text-center text-slate-600 mb-10">
    Advanced magnetic solutions for secure positioning and efficient handling in industrial environments.
  </p>

  <div className="grid md:grid-cols-2 gap-6">

    {/* Magnetic Fixtures */}
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-slate-900 mb-3">
        Magnetic Fixtures
      </h3>

      <p className="text-sm text-slate-600 mb-3">
        High-performance magnetic fixtures designed for precision machining and secure workpiece holding.
      </p>

      <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
        <li>VMC (Vertical Machining Center)</li>
        <li>HMC (Horizontal Machining Center)</li>
        <li>VTL (Vertical Turning Lathe)</li>
        <li>Surface Grinding</li>
        <li>EDM Applications</li>
      </ul>
    </div>

    {/* Magnetic Lifters */}
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-slate-900 mb-3">
        Magnetic Lifters
      </h3>

      <p className="text-sm text-slate-600 mb-3">
        Efficient lifting solutions for handling heavy metal components safely and effortlessly.
      </p>

      <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
        <li>Conventional Magnetic Lifters</li>
        <li>Battery Operated Lifters</li>
        <li>Safe & Secure Handling</li>
      </ul>
    </div>

  </div>
</div>

      {/* CTA SECTION */}
      <div className="max-w-5xl mx-auto mt-16 text-center bg-slate-100 p-10 rounded-xl">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Need Custom Tool Solutions?
        </h2>

        <p className="text-slate-600 mb-6">
          Contact us for reliable, high-performance cutting tools tailored to your requirements.
        </p>

        <a
          href="tel:+919823717890"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Call Now
        </a>
      </div>

    </div>
  );
}