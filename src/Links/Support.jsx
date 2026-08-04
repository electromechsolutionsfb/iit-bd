import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Headset,
  PhoneCall,
  MessageCircle,
  Clock,
  ShieldCheck,
  Sparkles,
  X,
  User,
  Phone,
  FileText,
  ArrowRight,
  LifeBuoy,
  Loader2
} from "lucide-react";
import { useLanguage } from "../Context/LanguageContext";
import { texts } from "/src/utils/text";

const Support = () => {
  const { lang } = useLanguage();
  const [openForm, setOpenForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", issue: "" });

  const handleSupportSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const whatsappNumber = "8801919541752"; 
    const message = `*Support Request*%0A--------------------------%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Issue:* ${formData.issue}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    // WhatsApp-এ মেসেজ পাঠানো
    window.open(whatsappURL, "_blank");

    setTimeout(() => {
      setLoading(false);
      setOpenForm(false);
      setFormData({ name: "", phone: "", issue: "" });
    }, 1000);
  };

  return (
    <main className="min-h-screen pt-32 bg-[#f8fafc] text-[#0f172a] selection:bg-[#00e1bf]/30 transition-colors">

      {/* ===== HERO SECTION ===== */}
      <section className="relative max-w-7xl mx-auto px-6 text-center mb-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#00b89c]/10 rounded-full blur-[120px] -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-5 py-2 rounded-full shadow-sm">
            <Sparkles size={14} className="text-[#00b89c]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Always Here for You</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-[#0f172a]">
            {texts.supportTitle[lang]}<span className="text-[#00b89c]">.</span>
          </h1>

          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            {texts.supportSubtitle[lang]}
          </p>
        </motion.div>
      </section>

      {/* ===== SERVICE FEATURES GRID ===== */}
      <section className="max-w-7xl mx-auto px-6 mb-32 grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Clock size={28} />,
            title: texts.supportFast[lang].title,
            desc: texts.supportFast[lang].desc,
          },
          {
            icon: <PhoneCall size={28} />,
            title: texts.supportCall[lang].title,
            desc: texts.supportCall[lang].desc,
          },
          {
            icon: <ShieldCheck size={28} />,
            title: texts.supportExpert[lang].title,
            desc: texts.supportExpert[lang].desc,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white border border-gray-100 rounded-[2.5rem] p-10 text-center hover:shadow-2xl hover:shadow-[#00b89c]/10 transition-all duration-500 border-b-4 hover:border-b-[#00b89c]"
          >
            <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center rounded-2xl bg-[#f8fafc] text-[#00b89c] group-hover:bg-[#00b89c] group-hover:text-white transition-all duration-500 shadow-sm border border-gray-50">
              {item.icon}
            </div>
            <h3 className="text-2xl font-black mb-4 text-[#0f172a]">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* ===== SUPPORT CHANNELS ===== */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="relative rounded-[4rem] overflow-hidden shadow-2xl flex items-center min-h-[500px]">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://i.ibb.co.com/kVjGXkQs/12.jpg" 
              alt="Support Center" 
              className="w-full h-full object-cover opacity-30" 
            />
            <div className="absolute inset-0 bg-white/90 backdrop-blur-[4px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
          </div>

          <div className="relative z-10 p-10 md:p-20 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 text-left">
                <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] leading-tight">
                  {texts.supportChannels[lang]}
                </h2>
                <p className="text-gray-600 text-lg font-medium max-w-md leading-relaxed">
                   Choose your preferred method to connect with our technical support team. We are ready to assist with your inquiries.
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  { icon: <MessageCircle size={26} />, title: texts.supportChat[lang].title, desc: texts.supportChat[lang].desc },
                  { icon: <Headset size={26} />, title: texts.supportOneToOne[lang].title, desc: texts.supportOneToOne[lang].desc },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 bg-white/60 backdrop-blur-xl border border-white rounded-[2.5rem] p-8 group hover:shadow-xl transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-[#00b89c]/10 text-[#00b89c] flex items-center justify-center group-hover:bg-[#00b89c] group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <h4 className="text-xl font-black text-[#0f172a]">{item.title}</h4>
                      <p className="text-gray-500 text-sm font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="bg-white border border-gray-100 rounded-[4rem] p-12 md:p-20 text-center shadow-2xl shadow-[#00b89c]/5 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-2 bg-[#00b89c]" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00b89c]/5 rounded-bl-full -z-0 group-hover:scale-110 transition-transform duration-700" />
          
          <LifeBuoy className="w-20 h-20 mx-auto text-[#00b89c] mb-8 bg-[#00b89c]/10 p-4 rounded-3xl shadow-lg shadow-[#00b89c]/10" />
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#0f172a]">Need Direct Support?</h2>
          <p className="text-gray-500 text-lg mb-12 font-medium max-w-2xl mx-auto">
             If you have any specific technical issues, please fill out the request form. Our experts will contact you shortly via WhatsApp.
          </p>

          <button
            onClick={() => setOpenForm(true)}
            className="group bg-[#0f172a] text-white font-black px-12 py-5 rounded-2xl inline-flex items-center gap-3 hover:bg-[#00b89c] transition-all shadow-xl shadow-gray-200 active:scale-95"
          >
            {texts.supportRequest[lang]} <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>

      {/* ===== SUPPORT REQUEST MODAL ===== */}
      <AnimatePresence>
        {openForm && (
          <Modal title={texts.supportModalTitle[lang]} onClose={() => setOpenForm(false)}>
            <form className="space-y-5" onSubmit={handleSupportSubmit}>
              <div className="space-y-4">
                {/* Name */}
                <Input
                  icon={<User size={18} />}
                  placeholder={texts.fullName[lang]}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                {/* Phone - Only Numbers */}
                <div className="relative group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#00b89c] z-10">
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
                {/* Issue/Brief */}
                <div className="relative group">
                  <div className="absolute left-6 top-6 text-[#00b89c] z-10">
                    <FileText size={18} />
                  </div>
                  <textarea
                    required
                    rows="4"
                    placeholder={texts.issueBrief[lang]}
                    value={formData.issue}
                    onChange={(e) => setFormData({...formData, issue: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-14 pr-6 font-bold text-[#0f172a] outline-none focus:bg-white focus:border-[#00b89c] transition-all resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#00b89c] text-white font-black py-5 rounded-2xl hover:bg-[#0f172a] transition-all shadow-xl shadow-[#00b89c]/20 active:scale-95 flex items-center justify-center gap-3"
              >
                {loading ? <Loader2 className="animate-spin" /> : <>{texts.submitRequest[lang]} <ArrowRight size={20} /></>}
              </button>
            </form>
          </Modal>
        )}
      </AnimatePresence>
    </main>
  );
};

/* ===== REUSABLE COMPONENTS ===== */

const Modal = ({ title, children, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    className="fixed inset-0 z-[1000] bg-[#0f172a]/70 backdrop-blur-md flex items-center justify-center px-4"
  >
    <motion.div
      initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
      className="relative bg-white rounded-[3.5rem] p-10 md:p-14 max-w-lg w-full shadow-2xl"
    >
      <button onClick={onClose} className="absolute top-8 right-8 w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-red-500 transition-all">
        <X size={20} />
      </button>
      <h3 className="text-3xl font-black mb-10 text-center text-[#0f172a]">{title}</h3>
      {children}
    </motion.div>
  </motion.div>
);

const Input = ({ icon, placeholder, value, onChange }) => (
  <div className="relative group flex items-center">
    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#00b89c] z-10">{icon}</div>
    <input
      type="text"
      required
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-14 pr-6 font-bold text-[#0f172a] outline-none focus:bg-white focus:border-[#00b89c] transition-all"
    />
  </div>
);

export default Support;