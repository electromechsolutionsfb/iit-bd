import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, CheckCircle, Sparkles, Send, Loader2 } from "lucide-react";

const AdmissionFormModal = ({ open, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  // সিলেবাস অনুযায়ী কোর্স নাম
  const courseTitle = "বয়লার অপারেশন অ্যান্ড মেইনটেন্যান্স (গ্রেড-৩ লাইসেন্সি)";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // WhatsApp Message Formatting
    const whatsappNumber = "8801845772839"; 
    const message = `*নতুন ভর্তি আবেদন*%0A----------------------------------%0A*কোর্স:* ${courseTitle}%0A*নাম:* ${formData.name}%0A*ফোন:* ${formData.phone}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setFormData({ name: "", phone: "" });
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
                <div className="text-center mb-8 space-y-3">
                  <div className="inline-flex items-center gap-2 bg-[#00b89c]/10 text-[#00b89c] px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest border border-[#00b89c]/20">
                    <Sparkles size={12} /> এডমিশন ফর্ম
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-[#0f172a] leading-tight px-2">
                    {courseTitle}
                  </h3>
                  <p className="text-xs font-semibold text-gray-400">
                    মেয়াদ: ১ মাস (১২০ ঘণ্টা)
                  </p>
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
                      placeholder="আপনার সম্পূর্ণ নাম"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-14 pr-6 font-bold text-[#0f172a] outline-none focus:bg-white focus:border-[#00b89c] transition-all"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="relative group">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#00b89c] transition-transform group-focus-within:scale-110">
                      <Phone size={18} />
                    </div>
                    <input
                      required
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="মোবাইল নম্বর"
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

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#0f172a] text-white font-black py-5 rounded-[1.8rem] flex items-center justify-center gap-3 transition-all shadow-xl hover:bg-[#00b89c] active:scale-95 disabled:opacity-70 group"
                  >
                    {loading ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <>
                        আবেদন জমা দিন
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
                  আবেদন সফল হয়েছে!
                </h4>
                <p className="text-gray-500 font-medium px-6 leading-relaxed">
                  আপনার তথ্য সফলভাবে গ্রহণ করা হয়েছে। খুব শীঘ্রই আমরা আপনার সাথে যোগাযোগ করব।
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdmissionFormModal;