import { useState } from "react";
import {
  User, Mail, Lock, UserPlus, CheckCircle2, X, Rocket,
  Wrench,
  Puzzle
} from "lucide-react";

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
    setShowSuccess(true);
  };

  return (
    <>
      {/*   */}
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

      {/*  */}
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
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="w-6 h-6 text-primary" />
                <h2 className="text-2xl almarai-bold">مرحباً بك في بوابة المطورين!</h2>
              </div>
              <p className="text-gray-700">ابدأ رحلتك مع أدوات ومصادر تلهمك.</p>
            </>
          )}
          {step === 2 && (
            <>
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl almarai-bold">اختر أدوات التطوير</h2>
              </div>
              <p className="text-gray-700">حدد الأدوات أو بيئة التطوير التي تفضلها.</p>
            </>
          )}

          {step === 3 && (
            <>
              <h3 className="text-2xl almarai-bold text-primary mb-4 flex items-center gap-2">
                <UserPlus className="w-6 h-6 text-primaryDark" />
                إنشاء حساب جديد
              </h3>
              <p className="text-gray-600 mb-6">
                قم بإنشاء حسابك الآن للبدء في استخدام بوابة المطورين بسهولة وسرعة.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-3.5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="الاسم الكامل"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="البريد الإلكتروني"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-3.5 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    placeholder="كلمة المرور"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white rounded-xl hover:bg-primaryDark transition-all duration-300"
                >
                  إنشاء حساب
                </button>
              </form>
            </>
          )}

          {/*   */}
          {step < 3 && (
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep((s) => Math.max(1, s - 1))}
                className={`px-4 py-2 rounded-lg ${step === 1
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