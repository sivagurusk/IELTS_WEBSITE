export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 py-10 mt-10 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">IELTS Academy</h2>
          <p className="text-sm leading-relaxed">
            Your trusted partner for IELTS preparation. With expert trainers, 
            AI-powered mock tests, and personalized feedback, we help you achieve 
            your dream band score.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#courses" className="hover:text-neonBlue">Courses</a></li>
            <li><a href="#features" className="hover:text-neonBlue">Features</a></li>
            <li><a href="#pricing" className="hover:text-neonBlue">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-neonBlue">Testimonials</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-sm">📍 123 Learning Street, London, UK</p>
          <p className="text-sm">📞 +44 123 456 7890</p>
          <p className="text-sm">✉️ support@ieltsacademy.com</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
          <p className="text-sm mb-3">Subscribe to get free IELTS tips & practice resources.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full px-3 py-2 rounded-l-lg focus:outline-none text-dark"
            />
            <button 
              type="submit" 
              className="bg-neonBlue px-4 py-2 rounded-r-lg text-dark font-bold hover:bg-neonPink hover:text-white transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm">
        <p>© {new Date().getFullYear()} IELTS Academy. All rights reserved.</p>
        <p className="mt-2 text-xs text-gray-500">
          Designed with ❤️ to help students achieve success.
        </p>
      </div>
    </footer>
  );
}
