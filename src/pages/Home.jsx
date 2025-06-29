import { Box, Puzzle, PlugZap, FileText } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import WizardSteps from "../components/WizardSteps";

export default function Home() {
    const [showWizard, setShowWizard] = useState(false);
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
                {/* Animated Background Elements */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-40 animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-40 animate-pulse animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-green-100 rounded-full opacity-30 animate-bounce animation-delay-4000"></div>
                </div>

                {/* Header */}
                <Header />

                {/* Hero */}
                <section className="relative py-32 text-center overflow-hidden bg-gradient-to-b from-primary/10 via-primary/5 to-white">
                    <div className="relative max-w-5xl mx-auto px-6">
                        <div className="mb-8 inline-block">
                            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-primary rounded-2xl shadow-lg animate-pulse">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                        </div>

                        <motion.h2
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="text-4xl md:text-6xl almarai-bold mb-30 leading-tight text-black"
>
  <span>اكتشف، جرّب، وابتكر في</span>
  <br />
  <motion.span
    initial={{ backgroundPosition: "0% 50%" }}
    animate={{ backgroundPosition: "100% 50%" }}
    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    className="bg-gradient-to-r from-primaryDark via-primary to-primaryDark bg-[length:200%_200%] bg-clip-text text-transparent inline-block pb-6"
  >
    بوابة المطورين
  </motion.span>
</motion.h2>

                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                            هذه البوابة تم تصميمها لتسهيل انضمام المطورين، واكتشاف الأدوات والمكونات وواجهات البرمجة الأكثر فاعلية.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button
  onClick={() => setShowWizard(true)}
  className="group relative px-8 py-4 bg-primary rounded-2xl almarai-semibold text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
>
  <span className="relative z-10">ابدأ الاستكشاف</span>
</button>
                            <button className="group px-8 py-4 bg-white border-2 border-primary rounded-2xl almarai-semibold text-lg text-primary hover:bg-primary/10 hover:border-primaryDark transition-all duration-300 hover:scale-105">
                                تعرف على المزيد
                            </button>
                        </div>
                    </div>
                </section>

                {/* Sections Grid */}
                <section className="relative max-w-7xl mx-auto px-6 py-20">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl almarai-bold bg-gradient-to-r from-primaryDark to-primary bg-clip-text text-transparent mb-4">
                            استكشف الأقسام
                        </h3>
                        <p className="text-gray-600 text-lg">اختر القسم الذي يناسب احتياجاتك التطويرية</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <a href="/tools" className="group relative p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
  <Box className="w-8 h-8 text-white" />
</div>
                                <h4 className="text-2xl almarai-semibold text-blue-700 mb-4 group-hover:text-blue-800 transition-colors">أدوات وبيئات التطوير</h4>
                                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                                    تعرف على الأدوات المهمة للمطورين الجدد والمحترفين في رحلتك التطويرية.
                                </p>
                                <div className="mt-6 flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                                    <svg className="w-5 h-5 ml-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    <span className="almarai-semibold">استكشف الآن</span>
                                </div>
                            </div>
                        </a>

                        <a href="/components" className="group relative p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
  <Puzzle className="w-8 h-8 text-white" />
</div>

                                <h4 className="text-2xl almarai-semibold text-purple-700 mb-4 group-hover:text-purple-800 transition-colors">مكتبة المكونات</h4>
                                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                                    مكونات جاهزة وقابلة لإعادة الاستخدام مع عرض حي وأكواد تفاعلية.
                                </p>
                                <div className="mt-6 flex items-center text-primary group-hover:text-purple-700 transition-colors">
                                    <svg className="w-5 h-5 ml-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    <span className="almarai-semibold">تصفح المكونات</span>
                                </div>
                            </div>
                        </a>

                        <a href="/apis" className="group relative p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
  <PlugZap className="w-8 h-8 text-white" />
</div>


                                <h4 className="text-2xl almarai-semibold text-green-700 mb-4 group-hover:text-green-800 transition-colors">مصادر APIs</h4>
                                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                                    اكتشف مصادر APIs المتنوعة وروابط التوثيق الشاملة الخاصة بها.
                                </p>
                                <div className="mt-6 flex items-center text-green-600 group-hover:text-green-700 transition-colors">
                                    <svg className="w-5 h-5 ml-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    <span className="almarai-semibold">اكتشف APIs</span>
                                </div>
                            </div>
                        </a>

                        <a href="/survey" className="group relative p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
  <FileText className="w-8 h-8 text-white" />
</div>
                                <h4 className="text-2xl almarai-semibold text-blue-700 mb-4 group-hover:text-blue-800 transition-colors">استطلاع رأي</h4>
                                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                                    ساهم في تطوير البوابة وتحسينها من خلال تعبئة الاستبيان التفاعلي.
                                </p>
                                <div className="mt-6 flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                                    <svg className="w-5 h-5 ml-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    <span className="almarai-semibold">شارك رأيك</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="relative py-20 bg-gradient-to-r from-blue-50 via-white to-purple-50">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-gray-100 p-12 shadow-lg">
                            <div className="text-center mb-12">
                                <h3 className="text-3xl almarai-bold bg-gradient-to-r from-primaryDark to-primary bg-clip-text text-transparent mb-4">
                                    إحصائيات البوابة
                                </h3>
                                <p className="text-gray-600">نفخر بالأرقام التي حققناها في خدمة المطورين</p>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                <div className="text-center">
                                    <div className="text-4xl almarai-bold bg-gradient-to-r from-blue-600 to-primary bg-clip-text text-transparent mb-2">150+</div>
                                    <div className="text-gray-600 almarai-regular">أداة تطوير</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl almarai-bold bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent mb-2">75+</div>
                                    <div className="text-gray-600 almarai-regular">مكون جاهز</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl almarai-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">200+</div>
                                    <div className="text-gray-600 almarai-regular">API متاح</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl almarai-bold bg-gradient-to-r from-blue-600 to-primary bg-clip-text text-transparent mb-2">1K+</div>
                                    <div className="text-gray-600 almarai-regular">مطور نشط</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="relative py-20">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <div className="bg-gradient-to-r from-primary via-blueMain to-greenMain rounded-3xl p-12 text-white shadow-xl">
                            <h3 className="text-3xl almarai-bold mb-4">ابق على اطلاع بآخر التحديثات</h3>
                            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                اشترك في نشرتنا الإخبارية لتصلك أحدث الأدوات والمكونات والتقنيات المتاحة للمطورين
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="البريد الإلكتروني"
                                    className="flex-1 px-6 py-3 rounded-xl text-gray-900 almarai-regular focus:outline-none focus:ring-2 focus:ring-white"
                                />
                                <button className="px-8 py-3 bg-white text-primary rounded-xl almarai-semibold hover:bg-gray-50 hover:scale-105 transition-all duration-300">
                                    اشتراك
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                
                {showWizard && (
  <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full">
      <WizardSteps onClose={() => setShowWizard(false)} />
    </div>
  </div>
)}
                <Footer />
            </div>
        </>
    );
}

