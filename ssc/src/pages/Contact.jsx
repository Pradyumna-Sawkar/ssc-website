import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="px-6 py-16">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900">
          Contact Us
        </h1>
        <p className="text-slate-600 mt-3">
          Reach out to us for reliable and high-performance cutting tool solutions
        </p>
      </div>

      {/* CONTACT CARDS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mb-12">

        {/* Address */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition hover:-translate-y-1 text-center">
          <MapPin className="mx-auto text-blue-600 mb-3" size={28} />
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Address
          </h3>
          <p className="text-sm text-slate-600">
            Pimpri Chinchwad, Pune, Maharashtra, India
          </p>
        </div>

        {/* Phone */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition hover:-translate-y-1 text-center">
          <Phone className="mx-auto text-blue-600 mb-3" size={28} />
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Phone
          </h3>
          <a
            href="tel:+919823717890"
            className="text-sm text-blue-600 hover:underline"
          >
            +91 98237 17890
          </a>
        </div>

        {/* Email */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition hover:-translate-y-1 text-center">
          <Mail className="mx-auto text-blue-600 mb-3" size={28} />
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Email
          </h3>
          <a
            href="mailto:sales@sscorp.co.in"
            className="text-sm text-blue-600 hover:underline"
          >
            sales@sscorp.co.in
          </a>
        </div>

      </div>

      {/* MAP SECTION */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="w-full h-80 rounded-xl overflow-hidden shadow">
          <iframe
            title="location"
            src="https://maps.google.com/maps?q=Pimpri%20Chinchwad%20Pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="max-w-5xl mx-auto text-center bg-blue-600 text-white p-10 rounded-xl">

        <h2 className="text-2xl font-semibold mb-4">
          Need Immediate Assistance?
        </h2>

        <p className="mb-6">
          Call us directly for quick support and inquiries regarding our products and services.
        </p>

        <a
          href="tel:+919823717890"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          Call Now
        </a>

      </div>

    </div>
  );
}