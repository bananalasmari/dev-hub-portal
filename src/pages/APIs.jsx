import { Database, Globe2, ShieldCheck, PlugZap } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function APIs() {
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
        <Header />

        <div className="max-w-6xl mx-auto px-6 py-20 space-y-10">
          <h2 className="text-4xl almarai-bold text-center text-primary">مصادر الـ APIs</h2>
          <p className="text-center text-gray-600 text-lg mb-10">
            استعرض الواجهات المتاحة واطلع على تفاصيل الاستخدام مع أمثلة جاهزة.
          </p>

          <div className="space-y-6">
            {/* API Block */}
            <div className="border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <PlugZap className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl almarai-semibold text-gray-800">API التحقق من الهوية</h3>
                </div>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:underline almarai-semibold"
                >
                  عرض التوثيق →
                </a>
              </div>
              <p className="text-gray-600 mb-4">
                تستخدم هذه الواجهة للتحقق من هوية المستخدم عبر الرقم الوطني وتاريخ الميلاد.
              </p>
              <div className="bg-gray-100 text-sm p-4 rounded-xl font-mono overflow-x-auto">
                <pre>{`GET /api/v1/identity/verify?national_id=1234567890&dob=1990-01-01`}</pre>
              </div>
            </div>

            {/* API Block آخر */}
            <div className="border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <Globe2 className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl almarai-semibold text-gray-800">API المواقع الجغرافية</h3>
                </div>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:underline almarai-semibold"
                >
                  عرض التوثيق →
                </a>
              </div>
              <p className="text-gray-600 mb-4">
                توفر معلومات تفصيلية عن الموقع الجغرافي بناءً على الإحداثيات.
              </p>
              <div className="bg-gray-100 text-sm p-4 rounded-xl font-mono overflow-x-auto">
                <pre>{`POST /api/v1/location/details\n{\n  "latitude": 24.774265,\n  "longitude": 46.738586\n}`}</pre>
              </div>
            </div>
          </div>
        </div>

        <Footer />

      </div>
      
    </>
  );
}