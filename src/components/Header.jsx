// src/components/Header.jsx
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-4" dir="ltr">
          <a href="/" className="flex items-center gap-4">
            <h1 className="text-2xl almarai-bold text-black">بوابة المطورين</h1>
            <img
              src="/src/assets/sdaia-logo.png"
              alt="SDAIA Logo"
              className="w-50 h-14 object-contain border-l pl-4 border-gray-200"
            />
          </a>
        </div>
        <nav className="flex gap-8 mt-4 md:mt-0 text-sm almarai-semibold">
          <a href="/" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">الرئيسية</a>
          <a href="/tools" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">الأدوات</a>
          <a href="/components" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">المكونات</a>
          <a href="/apis" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">APIs</a>
          <a href="/survey" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">الاستبيان</a>
        </nav>
      </div>
    </header>
  );
}