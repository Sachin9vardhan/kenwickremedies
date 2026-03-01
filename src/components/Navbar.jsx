import logo from "../assets/logos/logo.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-4xl mx-auto px-6 py-2 flex justify-between items-center">
        
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="text-xl font-bold text-sky-600">
            Kenwick Remedies  
          </span>
        </div>

        <div className="hidden md:flex gap-6 font-medium">
          <a href="#about" className="hover:text-sky-500">
            Home
          </a>
          <a href="#products" className="hover:text-sky-500">
            Products
          </a>

          <a href="#products" className="hover:text-sky-500">
            Gallery
          </a>

          <a href="#about" className="hover:text-sky-500">
            About
          </a>

          <a href="#contact" className="hover:text-sky-500">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}
