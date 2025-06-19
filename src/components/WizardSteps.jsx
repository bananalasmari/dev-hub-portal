import { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

function WizardSteps({ onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("بيانات التسجيل:", formData);
    setShowSuccess(true); // عرض رسالة النجاح
  };

  return (
    <>
      {/* نافذة النجاح */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 text-center shadow-xl w-full max-w-md">
            <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl almarai-bold text-green-700 mb-2">تم التسجيل بنجاح!</h2>
            <p className="text-gray-600 mb-6">شكراً لانضمامك لبوابة المطورين، نتمنى لك تجربة تطوير مميزة!</p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primaryDark"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}

      {/* المعالج */}
      {!showSuccess && (
        <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-lg mx-auto relative">
          <button
            onClick={onClose}
            className="absolute top-4 left-4 text-gray-400 hover:text-red-500"
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-2xl almarai-bold mb-4">خطوة {step} من 3</h2>

          {step === 1 && (
            <>
              <h3 className="text-xl almarai-semibold mb-2">مرحباً بك!</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                منصة بوابة المطورين ترحب بك! بتكون دليلك لاكتشاف الأدوات والمكونات بسهولة.
              </p>
            </>
          )}

          {step === 2 && (
            <>
              <h3 className="text-xl almarai-semibold mb-2">ماذا ستجد هنا؟</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                أدوات تطوير، مكتبة مكونات جاهزة، مصادر APIs، واستبيانات تساعدنا نخدمك أفضل.
              </p>
            </>
          )}

          {step === 3 && (
            <>
              <h3 className="text-xl almarai-semibold mb-4">سجّل الآن وابدأ رحلتك</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="الاسم الكامل"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="البريد الإلكتروني"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="كلمة المرور"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primaryDark transition"
                >
                  إنشاء حساب
                </button>
              </form>
            </>
          )}

          {/* أزرار التنقل */}
          {step < 3 && (
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep((s) => Math.max(1, s - 1))}
                className={`px-4 py-2 rounded-lg ${
                  step === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                disabled={step === 1}
              >
                السابق
              </button>
              <button
                onClick={() => setStep((s) => Math.min(3, s + 1))}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primaryDark transition"
              >
                التالي
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default WizardSteps;