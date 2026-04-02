import { NavLink } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Solutions Sales Corporation
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Providing precision solid carbide cutting tools along with
            re-grinding, coating, and industrial machining solutions.
          </p>
        </div>

        {/* Quick Links (React Router) */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" className="hover:text-blue-400 transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="hover:text-blue-400 transition">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-blue-400 transition">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-blue-400 transition">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-blue-400 transition">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact + Map */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">
            Contact Us
          </h3>

          {/* Address */}
          <div className="flex items-start gap-2 text-sm mb-2">
            <MapPin size={16} className="mt-1 text-blue-400" />
            <span>
              Pimpri Chinchwad, Pune, Maharashtra, India
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 text-sm mb-2">
            <Phone size={16} className="text-blue-400" />
            <a
              href="tel:+919823717890"
              className="hover:text-blue-400 transition"
            >
              +91 98237 17890
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 text-sm mb-4">
            <Mail size={16} className="text-blue-400" />
            <a
              href="mailto:sales@sscorp.co.in"
              className="hover:text-blue-400 transition"
            >
              sales@sscorp.co.in
            </a>
          </div>

          {/* Google Map */}
          <div className="w-full h-40 rounded-lg overflow-hidden border border-slate-700">
            <iframe
              title="SSC Location"
              src="https://maps.google.com/maps?q=Pimpri%20Chinchwad%20Pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 text-center text-sm py-4 text-slate-400">
        © {new Date().getFullYear()} Solutions Sales Corporation. All rights reserved.
      </div>
    </footer>
  );
}