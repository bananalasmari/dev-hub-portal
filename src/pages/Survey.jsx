import { MessageSquareQuote, SendHorizonal } from "lucide-react";

export default function Survey() {
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
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4" dir="ltr">
              <h1 className="text-2xl almarai-bold text-black">بوابة المطورين</h1>
              <img
                src="/src/assets/sdaia-logo.png"
                alt="SDAIA Logo"
                className="w-50 h-14 object-contain border-l pl-4 border-gray-200"
              />
            </div>
            <nav className="flex gap-8 mt-4 md:mt-0 text-sm almarai-semibold">
              <a href="/tools" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">الأدوات</a>
              <a href="/components" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">المكونات</a>
              <a href="/apis" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">APIs</a>
              <a href="/survey" className="px-4 py-2 rounded-full bg-primary text-white">الاستبيان</a>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section className="relative py-24 text-center bg-gradient-to-b from-primary/10 via-primary/5 to-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-5xl almarai-bold mb-6 bg-gradient-to-r from-primaryDark to-primary bg-clip-text text-transparent pb-4">
              نرحب برأيك 💬
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ساعدنا في تحسين بوابة المطورين عبر مشاركتنا تجربتك وملاحظاتك من خلال هذا الاستبيان السريع.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="max-w-3xl mx-auto px-6 ">
          <form className="space-y-8 bg-white p-10 border border-gray-200 shadow-md rounded-3xl">
            {/* عنوان القسم */}
            <div className="text-center mb-8">
              <MessageSquareQuote className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-2xl almarai-bold text-gray-800">نموذج الاستبيان</h3>
              <p className="text-gray-500 mt-2 text-sm">
                جميع إجاباتك سرية وتُستخدم لتحسين تجربة البوابة.
              </p>
            </div>

            {/* سؤال التقييم */}
            <div>
              <label className="block mb-2 text-sm almarai-semibold text-gray-700">
                كيف تقيم تجربتك العامة؟
              </label>
              <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none text-gray-800 bg-white">
                <option>ممتازة</option>
                <option>جيدة</option>
                <option>متوسطة</option>
                <option>سيئة</option>
              </select>
            </div>

            {/* ماذا أعجبك */}
            <div>
              <label className="block mb-2 text-sm almarai-semibold text-gray-700">
                ما الذي أعجبك في البوابة؟
              </label>
              <textarea
                rows={4}
                placeholder="شاركنا أبرز المزايا التي لاحظتها..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none text-gray-800 bg-white resize-none"
              />
            </div>

            {/* اقتراحات التحسين */}
            <div>
              <label className="block mb-2 text-sm almarai-semibold text-gray-700">
                ما الذي يمكن تحسينه؟
              </label>
              <textarea
                rows={4}
                placeholder="اكتب اقتراحاتك أو ملاحظاتك بكل شفافية..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none text-gray-800 bg-white resize-none"
              />
            </div>

            {/* زر الإرسال */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-xl text-base almarai-semibold shadow hover:bg-primaryDark transition-all duration-300"
              >
                <SendHorizonal className="w-5 h-5" />
                إرسال الاستبيان
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}