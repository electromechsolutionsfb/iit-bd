import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageSquare, Sparkles, Clock, ArrowRight, ShieldCheck, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../Context/LanguageContext";
import { texts } from "/src/utils/text";

const Contact = () => {
  const { lang } = useLanguage();
  
  // Form State Management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleWhatsAppSend = (e) => {
    e.preventDefault();

    // 1. WhatsApp Number formatting (No '+', no spaces, no dashes)
    const myWhatsAppNumber = "8801845772839"; 
    
    // 2. Structured WhatsApp Message Template
    const rawText = `*New Contact Inquiry*\n--------------------------\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}`;
    
    // 3. Properly URL Encode the text to prevent broken links
    const encodedText = encodeURIComponent(rawText);
    
    // 4. Standard WhatsApp Web / App API Link
    const whatsappURL = `https://api.whatsapp.com/send?phone=${myWhatsAppNumber}&text=${encodedText}`;
    
    // Redirect to WhatsApp
    window.open(whatsappURL, "_blank");
  };

  const googleMapsUrl = "https://www.google.com/maps/place/Institute+of+Industrial+Technology+(IIT)/@23.8687396,90.3663088,17z";

  return (
    <main className="bg-[#f8fafc] text-[#0f172a] min-h-screen pt-32 pb-20 selection:bg-[#00e1bf]/30">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative text-center max-w-4xl mx-auto px-6 mb-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#00b89c]/10 rounded-full blur-[100px] -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-5 py-2 rounded-full shadow-sm">
            <Sparkles size={14} className="text-[#00b89c]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Get in Touch</span>
          </div> */}
          
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-[#0f172a]">
            {texts.contactTitle[lang]}
            <span className="text-[#00b89c]">.</span>
          </h1>

          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            {texts.contactSubtitle[lang]}
          </p>
        </motion.div>
      </section>

      {/* ===== INTERACTIVE INFO CARDS ===== */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 mb-24">
        {[
          { icon: <MapPin className="w-6 h-6" />, data: texts.contactCards.address, label: "Location" },
          { icon: <Phone className="w-6 h-6" />, data: texts.contactCards.phone, label: "Call Support" },
          { icon: <Mail className="w-6 h-6" />, data: texts.contactCards.email, label: "Email Us" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white border border-gray-100 rounded-[2.5rem] p-10 text-center hover:shadow-2xl hover:shadow-[#00b89c]/10 transition-all duration-500 border-b-4 hover:border-b-[#00b89c]"
          >
            <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center rounded-2xl bg-[#f8fafc] text-[#00b89c] group-hover:bg-[#00b89c] group-hover:text-white transition-all duration-500 shadow-sm">
              {item.icon}
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00b89c] mb-2 block">{item.label}</span>
            <h3 className="text-xl font-black mb-4 text-[#0f172a]">
              {item.data.title[lang]}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              {item.data.desc[lang]}
            </p>
          </motion.div>
        ))}
      </section>

      {/* ===== FORM SECTION ===== */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,184,156,0.2)] flex items-center justify-center min-h-[700px]">
          
          <div className="absolute inset-0 z-0">
            <img 
              src="https://i.ibb.co.com/kVjGXkQs/12.jpg" 
              alt="Industrial Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/80 backdrop-blur-[4px]" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-12 p-8 md:p-16 w-full items-center">
            
            <div className="lg:col-span-5 space-y-8">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                <div className="w-16 h-16 bg-[#00b89c]/10 rounded-3xl flex items-center justify-center text-[#00b89c]">
                    <ShieldCheck size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] leading-tight">
                  Start your <span className="text-[#00b89c]">technical</span> <br /> journey with us.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  Have questions? Send us a message and our experts will reply directly to your WhatsApp.
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white/60 backdrop-blur-xl border border-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl"
            >
              <form onSubmit={handleWhatsAppSend} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Full Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder={texts.contactForm.name[lang]}
                      className="w-full bg-white/80 border border-gray-100 px-6 py-4 rounded-2xl outline-none focus:border-[#00b89c] transition-all font-bold"
                    />
                  </div>
                  {/* Email Address */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder={texts.contactForm.email[lang]}
                      className="w-full bg-white/80 border border-gray-100 px-6 py-4 rounded-2xl outline-none focus:border-[#00b89c] transition-all font-bold"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">WhatsApp / Phone</label>
                  <input
                    required
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={formData.phone}
                    onKeyDown={(e) => {
                      if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab' && e.key !== 'Enter' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
                        e.preventDefault();
                      }
                    }}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder={texts.contactForm.phone[lang]}
                    className="w-full bg-white/80 border border-gray-100 px-6 py-4 rounded-2xl outline-none focus:border-[#00b89c] transition-all font-bold"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Your Inquiry</label>
                  <textarea
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder={texts.contactForm.message[lang]}
                    className="w-full bg-[#ffffff]/80 border border-gray-100 px-6 py-4 rounded-2xl outline-none focus:border-[#00b89c] transition-all resize-none font-bold"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00b89c] hover:bg-[#0f172a] text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-[#00b89c]/30 active:scale-95 group"
                >
                  {texts.contactForm.submit[lang]}
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ===== GOOGLE MAP SECTION ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-100 p-6 md:p-8 rounded-[3.5rem] shadow-xl space-y-6"
        >
          {/* Map Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-4">
            <div>
              <div className="inline-flex items-center gap-2 text-[#00b89c] font-black text-[10px] uppercase tracking-[0.2em] mb-1">
                <MapPin size={14} />
                <span>Locate Us</span>
              </div>
              <h3 className="text-2xl font-black text-[#0f172a]">
                Institute of Industrial Technology (IIT)
              </h3>
              <p className="text-gray-500 text-sm font-medium mt-1">
                V998+FGV, Dia Bari Rd, Dhaka 1230
              </p>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#0f172a] hover:bg-[#00b89c] text-white text-sm font-bold px-6 py-3.5 rounded-2xl transition-all shadow-md group whitespace-nowrap"
            >
              <span>Get Directions</span>
              <Navigation size={16} className="group-hover:rotate-45 transition-transform duration-300" />
            </a>
          </div>

          {/* Interactive Google Map iFrame */}
          <div className="relative w-full h-[450px] rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-inner">
            <iframe
              title="IIT Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4026365406734!2d90.36373387602377!3d23.868744484530055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c30063a4bbdb%3A0xdd9fe8bef3723b9c!2sInstitute%20of%20Industrial%20Technology%20(IIT)!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>
      </section>

    </main>
  );
};

export default Contact;