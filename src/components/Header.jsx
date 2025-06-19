import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-4" dir="ltr">
          <a href="/" className="flex items-center gap-4">
          <h1 className="text-xl md:text-2xl almarai-bold text-black">بوابة المطورين</h1>
            <img
              src="/assets/sdaia-logo.png"
              alt="SDAIA Logo"
              className="w-50 h-14 object-contain border-l pl-4 border-gray-200"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm almarai-semibold">
          <a href="/" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">الرئيسية</a>
          <a href="/tools" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">الأدوات</a>
          <a href="/components" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">المكونات</a>
          <a href="/apis" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">APIs</a>
          <a href="/survey" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">الاستبيان</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Side Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white border-t border-gray-100 shadow-sm">
          <nav className="flex flex-col gap-4 text-sm almarai-semibold">
            <a href="/" className="py-2 rounded hover:bg-gray-100">الرئيسية</a>
            <a href="/tools" className="py-2 rounded hover:bg-gray-100">الأدوات</a>
            <a href="/components" className="py-2 rounded hover:bg-gray-100">المكونات</a>
            <a href="/apis" className="py-2 rounded hover:bg-gray-100">APIs</a>
            <a href="/survey" className="py-2 rounded hover:bg-gray-100">الاستبيان</a>
          </nav>
        </div>
      )}
    </header>
  );
}