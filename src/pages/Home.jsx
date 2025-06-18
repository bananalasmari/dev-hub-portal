export default function Home() {
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
                <header className="relative bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center gap-4" dir="ltr">

                        <h1 className="text-2xl almarai-bold text-blackish">
  بوابة المطورين
</h1>
                            <img
                                src="/src/assets/sdaia-logo.png"
                                alt="SDAIA Logo"
                                className="w-50 h-14 object-contain border-l pl-4 border-gray-300"
                            />
                        </div>
                        <nav className="flex gap-8 mt-4 md:mt-0 text-sm almarai-semibold">
                            <a href="/tools" className="relative group px-4 py-2 rounded-full transition-all duration-300 hover:bg-blue-50">
                                <span className="relative z-10 text-blue-700 group-hover:text-blue-800 transition-colors">الأدوات</span>
                            </a>
                            <a href="/components" className="relative group px-4 py-2 rounded-full transition-all duration-300 hover:bg-purple-50">
                                <span className="relative z-10 text-purple-700 group-hover:text-purple-800 transition-colors">المكونات</span>
                            </a>
                            <a href="/apis" className="relative group px-4 py-2 rounded-full transition-all duration-300 hover:bg-green-50">
                                <span className="relative z-10 text-green-700 group-hover:text-green-800 transition-colors">APIs</span>
                            </a>
                            <a href="/survey" className="relative group px-4 py-2 rounded-full transition-all duration-300 hover:bg-blue-50">
                                <span className="relative z-10 text-blue-700 group-hover:text-blue-800 transition-colors">الاستبيان</span>
                            </a>
                        </nav>
                    </div>
                </header>

                {/* Hero */}
                <section className="relative py-32 text-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-purple-50">
                    <div className="relative max-w-5xl mx-auto px-6">
                        <div className="mb-8 inline-block">
                            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-2xl shadow-lg animate-pulse">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-6xl md:text-7xl almarai-bold mb-8 leading-tight">
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                                مرحباً بك في
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-primary bg-clip-text text-transparent">
                                بوابة المطورين
                            </span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                            هذه البوابة تم تصميمها لتسهيل انضمام المطورين، واكتشاف الأدوات والمكونات وواجهات البرمجة الأكثر فاعلية.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-primary rounded-2xl almarai-semibold text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <span className="relative z-10">ابدأ الاستكشاف</span>
                            </button>
                            <button className="group px-8 py-4 bg-white border-2 border-gray-200 rounded-2xl almarai-semibold text-lg text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 hover:scale-105">
                                تعرف على المزيد
                            </button>
                        </div>
                    </div>
                </section>

                {/* Sections Grid */}
                <section className="relative max-w-7xl mx-auto px-6 py-20">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl almarai-bold bg-gradient-to-r from-blue-600 to-primary bg-clip-text text-transparent mb-4">
                            استكشف الأقسام
                        </h3>
                        <p className="text-gray-600 text-lg">اختر القسم الذي يناسب احتياجاتك التطويرية</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <a href="/tools" className="group relative p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl">📦</span>
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
                                    <span className="text-2xl">🧩</span>
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
                                    <span className="text-2xl">🔌</span>
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
                                    <span className="text-2xl">📝</span>
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
                                <h3 className="text-3xl almarai-bold bg-gradient-to-r from-blue-600 to-primary bg-clip-text text-transparent mb-4">
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
                        <div className="bg-gradient-to-r from-blue-600 to-primary rounded-3xl p-12 text-white">
                            <h3 className="text-3xl almarai-bold mb-4">ابق على اطلاع بآخر التحديثات</h3>
                            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                                اشترك في نشرتنا الإخبارية لتصلك أحدث الأدوات والمكونات والتقنيات المتاحة للمطورين
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="البريد الإلكتروني"
                                    className="flex-1 px-6 py-3 rounded-xl text-gray-900 almarai-regular focus:outline-none focus:ring-2 focus:ring-white"
                                />
                                <button className="px-8 py-3 bg-white text-blue-600 rounded-xl almarai-semibold hover:bg-gray-50 transition-colors">
                                    اشتراك
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="relative py-12 bg-gray-50 border-t border-gray-100">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                            <div className="flex items-center mb-6 md:mb-0">
                              
                     
                            <img
                                src="/src/assets/sdaia-logo.png"
                                alt="SDAIA Logo"
                                className="w-30 h-14 object-contain border-l px-4 border-gray-300"
                            />
                               <h1 className="text-1xl almarai-bold px-4 text-blackish">
  بوابة المطورين
</h1>
                            </div>
                            <div className="flex space-x-6 space-x-reverse">
                                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-gray-600 almarai-regular mb-4">
                                منصة شاملة للمطورين العرب لاكتشاف أحدث الأدوات والتقنيات
                            </p>
                            <div className="border-t border-gray-200 pt-8">
                                <p className="text-gray-500 text-sm almarai-regular">
                                    &copy; 2025 بوابة المطورين - جميع الحقوق محفوظة
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}