import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, BookOpen, CheckCircle, Sparkles, Send, ChevronDown, Loader2 } from "lucide-react";
import { useLanguage } from "../Context/LanguageContext";
import { texts } from "/src/utils/text";

const courses = [
  { en: "High-Pressure Boiler Operations", bn: "হাই-প্রেশার বয়লার অপারেশন" },
  { en: "Industrial Boiler Maintenance", bn: "ইন্ডাস্ট্রিয়াল বয়লার মেইনটেন্যান্স" },
  { en: "Thermal System & Energy Management", bn: "থার্মাল সিস্টেম ও এনার্জি ম্যানেজমেন্ট" },
  { en: "Boiler Safety & Compliance Training", bn: "বয়লার সেফটি ও কমপ্লায়েন্স ট্রেনিং" },
];

const AdmissionFormModal = ({ open, onClose }) => {
  const { lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCourse) return alert("Please select a course!");
    
    setLoading(true);

    // WhatsApp Message Formatting
    const whatsappNumber = "8801919541752"; 
    const message = `*New Admission Request*%0A--------------------------%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Course:* ${selectedCourse}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    // WhatsApp-এ মেসেজ পাঠানো
    window.open(whatsappURL, "_blank");

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setFormData({ name: "", phone: "" });
        setSelectedCourse("");
      }, 4000);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] bg-[#0f172a]/70 backdrop-blur-md flex items-center justify-center px-4"
        >
          <motion.div 
            initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }}
            className="relative bg-white rounded-[3.5rem] p-8 md:p-12 max-w-lg w-full shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00b89c]/5 rounded-bl-full" />
            
            <button onClick={onClose} className="absolute top-8 right-8 p-2 bg-gray-50 rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all z-20">
              <X size={20} />
            </button>

            {!submitted ? (
              <>
                <div className="text-center mb-10 space-y-3">
                  <div className="inline-flex items-center gap-2 bg-[#00b89c]/10 text-[#00b89c] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-[#00b89c]/20">
                    <Sparkles size={12} /> Secure Enrollment
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-[#0f172a] leading-tight px-4">
                    {texts.admissionTitle[lang]}<span className="text-[#00b89c]">.</span>
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  {/* Name Input */}
                  <div className="relative group">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#00b89c] transition-transform group-focus-within:scale-110">
                      <User size={18} />
                    </div>
                    <input
                      required
                      type="text"
                      placeholder={texts.fullName[lang]}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-14 pr-6 font-bold text-[#0f172a] outline-none focus:bg-white focus:border-[#00b89c] transition-all"
                    />
                  </div>

                  {/* Phone Input (Only Numbers Allowed) */}
                  <div className="relative group">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#00b89c] transition-transform group-focus-within:scale-110">
                      <Phone size={18} />
                    </div>
                    <input
                      required
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder={texts.contactNumber[lang]}
                      value={formData.phone}
                      onKeyDown={(e) => {
                        if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab' && e.key !== 'Enter' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
                          e.preventDefault();
                        }
                      }}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-14 pr-6 font-bold text-[#0f172a] outline-none focus:bg-white focus:border-[#00b89c] transition-all"
                    />
                  </div>

                  {/* PRO COURSE SELECTOR */}
                  <div className="relative group">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#00b89c] z-10">
                      <BookOpen size={18} />
                    </div>
                    <select
                      required
                      value={selectedCourse}
                      onChange={(e) => setSelectedCourse(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-14 pr-12 font-bold text-[#0f172a] outline-none focus:bg-white focus:border-[#00b89c] transition-all appearance-none cursor-pointer relative z-0"
                    >
                      <option value="" disabled>{lang === "bn" ? "কোর্স নির্বাচন করুন" : "Select Your Course"}</option>
                      {courses.map((course, i) => (
                        <option key={i} value={course[lang]} className="py-4 font-medium text-gray-700">
                          {course[lang]}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-transform group-focus-within:rotate-180">
                      <ChevronDown size={18} />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#0f172a] text-white font-black py-5 rounded-[1.8rem] flex items-center justify-center gap-3 transition-all shadow-xl hover:bg-[#00b89c] active:scale-95 disabled:opacity-70 group"
                  >
                    {loading ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <>
                        {texts.submitApplication[lang]}
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-24 h-24 bg-green-50 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 text-green-500 shadow-inner">
                  <CheckCircle size={48} strokeWidth={2.5} />
                </div>
                <h4 className="text-3xl font-black text-[#0f172a] mb-4">
                  {texts.applicationSuccess[lang]}
                </h4>
                <p className="text-gray-500 font-medium px-6 leading-relaxed">
                  {texts.applicationSuccessSub[lang]}
                </p>
                <div className="mt-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                  Application Logged Successfully
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdmissionFormModal;