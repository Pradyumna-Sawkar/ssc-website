export default function About() {
  return (
    <div className="px-6 py-16">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900">
          About Us
        </h1>
        <p className="text-slate-600 mt-3">
          Delivering precision cutting solutions for modern industrial needs
        </p>
      </div>

      {/* COMPANY OVERVIEW */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <p className="text-slate-600 leading-relaxed">
          Solutions Sales Corporation is a trusted provider of solid carbide
          cutting tools and industrial solutions. We specialize in delivering
          high-performance tools designed for precision, durability, and efficiency
          across a wide range of machining applications.
        </p>

        <p className="text-slate-600 mt-4 leading-relaxed">
          With expertise in manufacturing, re-grinding, coating, and trading,
          we offer complete solutions under one roof, ensuring quality and
          reliability in every product we deliver.
        </p>
      </div>

      {/* WHAT WE DO */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-slate-900 text-center mb-10">
          What We Do
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            "Manufacturing",
            "Re-grinding",
            "Coating",
            "Trading",
          ].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <h3 className="text-lg font-medium text-slate-900">
                {item}
              </h3>
            </div>
          ))}

        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-slate-900 text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            "High Precision Tools",
            "Reliable Quality",
            "Expert Re-grinding",
            "Complete Solutions",
          ].map((point) => (
            <div
              key={point}
              className="bg-slate-100 p-6 rounded-xl text-center"
            >
              <p className="text-slate-700 font-medium">{point}</p>
            </div>
          ))}

        </div>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto text-center bg-blue-600 text-white p-10 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">
          Looking for Reliable Cutting Solutions?
        </h2>

        <p className="mb-6">
          Get in touch with us for high-quality tools and expert support.
        </p>

        <a
          href="tel:+919823717890"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </div>

    </div>
  );
}