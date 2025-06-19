import {
  Code2,
  LibraryBig,
  Layers,
  Sparkles,
  LayoutGrid,
  MoveUpRight,
  Component
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Components() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap');

        .almarai-bold {
          font-family: 'Almarai', sans-serif;
          font-weight: 800;
        }

        .almarai-semibold {
          font-family: 'Almarai', sans-serif;
          font-weight: 700;
        }

        .almarai-regular {
          font-family: 'Almarai', sans-serif;
          font-weight: 400;
        }

        .almarai-light {
          font-family: 'Almarai', sans-serif;
          font-weight: 300;
        }
      `}</style>

      <div className="bg-white min-h-screen text-gray-900 almarai-regular" dir="rtl">
        {/* Header */}
                                 <Header />
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-primary/10 via-primary/5 to-white text-center ">
          <h2 className="text-5xl almarai-bold bg-gradient-to-r from-primaryDark to-primary bg-clip-text text-transparent mb-6 pb-4">
            مكتبة المكونات
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            استعرض مجموعة من المكونات الجاهزة القابلة لإعادة الاستخدام، مدعومة بتصميم حديث وسهل الدمج.
          </p>
        </section>

         {/* Components List */}
      <section className="relative max-w-7xl mx-auto px-6 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Cards */}
          {[
            { title: "React", icon: <Component />, color: "from-blue-500 to-blue-600" },
            { title: "Angular", icon: <Code2 />, color: "from-red-500 to-red-600" },
            { title: "Vue.js", icon: <LibraryBig />, color: "from-green-500 to-green-600" },
            { title: "Tailwind CSS", icon: <Layers />, color: "from-teal-500 to-teal-600" },
            { title: "Bootstrap", icon: <LayoutGrid />, color: "from-purple-500 to-purple-600" },
            { title: "Material UI", icon: <Sparkles />, color: "from-indigo-500 to-indigo-600" },
            { title: "Next.js", icon: <MoveUpRight />, color: "from-gray-700 to-black" },
            { title: "Svelte", icon: <Sparkles />, color: "from-orange-500 to-orange-600" },
            { title: "مكتبة الحكومة الرقمية", icon: <Component />, color: "from-violet-600 to-primary" }
          ].map((lib, idx) => (
            <div key={idx} className="group relative p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className={`w-16 h-16 bg-gradient-to-r ${lib.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {lib.icon}
              </div>
              <h4 className="text-2xl almarai-semibold text-gray-800 mb-4 group-hover:text-primary transition-colors">
                {lib.title}
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                مكتبة شهيرة لتطوير واجهات المستخدم تُستخدم في العديد من المشاريع التقنية الحديثة.
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />

      </div>

    </>
  );
}