import { Wrench, TerminalSquare, MonitorPlay, BookOpenCheck } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Tools() {
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

      <div className="bg-white min-h-screen text-gray-900 almarai-regular overflow-hidden" dir="rtl">
      <div className="bg-white min-h-screen text-gray-900 almarai-regular overflow-hidden" dir="rtl">
        {/* Header */}
                    <Header />
      {/* Page Title */}
      <section className="relative py-24 text-center bg-gradient-to-b from-primary/10 via-primary/5 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl almarai-bold mb-6 bg-gradient-to-r from-primaryDark to-primary bg-clip-text text-transparent pb-3">
            أدوات وبيئات التطوير
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            مجموعة من الأدوات والبيئات التي تساعدك على تسريع تطويرك وتحسين تجربتك كمبرمج.
          </p>
        </div>
      </section>

      {/* Tools List */}
      <section className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tool Card 1 */}
          <div className="group relative p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl almarai-semibold text-purple-700 mb-4 group-hover:text-purple-800 transition-colors">
              أداة توليد الواجهات
            </h4>
            <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
              أنشئ مكونات واجهة المستخدم بشكل سريع باستخدام إعدادات مخصصة.
            </p>
          </div>

          {/* Tool Card 2 */}
          <div className="group relative p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <TerminalSquare className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl almarai-semibold text-blue-700 mb-4 group-hover:text-blue-800 transition-colors">
              بيئة تطوير متكاملة
            </h4>
            <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
              محرر كود مباشر لتجربة الأدوات والمكونات دون مغادرة الصفحة.
            </p>
          </div>

          {/* Tool Card 3 */}
          <div className="group relative p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <MonitorPlay className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl almarai-semibold text-green-700 mb-4 group-hover:text-green-800 transition-colors">
              عروض تفاعلية
            </h4>
            <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
              شروحات تفاعلية وأمثلة تطبيقية تساعدك على فهم أسرع.
            </p>
          </div>

          {/* Tool Card 4 */}
          <div className="group relative p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <BookOpenCheck className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl almarai-semibold text-yellow-700 mb-4 group-hover:text-yellow-800 transition-colors">
              دليل الاستخدام
            </h4>
            <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
              وثائق مرجعية محدثة تساعدك على التعامل مع جميع الأدوات بكفاءة.
            </p>
          </div>
        </div>
      </section>
    </div>
    <Footer />

      </div>

    </>
  );
}