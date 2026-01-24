export default function Footer() {
  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-text-offwhite mb-4">Social</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-text-muted hover:text-text-offwhite transition-colors duration-200 text-sm">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-text-offwhite transition-colors duration-200 text-sm">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-text-offwhite transition-colors duration-200 text-sm">
                  X
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-text-offwhite transition-colors duration-200 text-sm">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>

          {/* Tivora */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-text-offwhite mb-4">Tivora</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-text-muted hover:text-text-offwhite transition-colors duration-200 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-text-offwhite transition-colors duration-200 text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-text-offwhite transition-colors duration-200 text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-text-offwhite transition-colors duration-200 text-sm">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-text-offwhite mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-text-muted hover:text-text-offwhite transition-colors duration-200 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-text-offwhite transition-colors duration-200 text-sm">
                  Terms Of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-text-offwhite transition-colors duration-200 text-sm">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-text-offwhite mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:Hello@tivora@gmail.com" className="text-text-muted hover:text-text-offwhite transition-colors duration-200 text-sm">
                  Hello@tivora@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+12123456789" className="text-text-muted hover:text-text-offwhite transition-colors duration-200 text-sm">
                  +12-123456789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Large TIVORA wordmark */}
        <div className="relative mt-16 pt-8 border-t border-white/10">
          <div className="text-center">
            <h2 className="text-7xl sm:text-8xl md:text-9xl font-bold text-[#2a2419] opacity-30 select-none">
              TIVORA
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
}

