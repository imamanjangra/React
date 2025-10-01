import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 w-full mt-12 relative">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">NotesApp</h3>
          <p className="text-gray-400 text-sm">
            NotesApp is your modern and professional note-taking application. 
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/notes" className="hover:text-white transition">Notes</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
          <p className="text-gray-400 text-sm">Email: info@notesapp.com</p>
          <p className="text-gray-400 text-sm">Phone: +91 1234567890</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition">🌐 Website</a>
            <a href="#" className="hover:text-white transition">🐦 Twitter</a>
            <a href="#" className="hover:text-white transition">📘 Facebook</a>
            <a href="#" className="hover:text-white transition">📸 Instagram</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center text-gray-500 py-4 text-sm">
        &copy; 2025 NotesApp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
