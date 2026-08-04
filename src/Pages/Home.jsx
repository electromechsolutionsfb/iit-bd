import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Gauge,
  ShieldCheck,
  Wrench,
  Award,
  Bell,
  Zap,
  Users,
  BookOpen,
  BadgeCheck,
  Clock3,
  Factory,
  Mail,
  HelpCircle,
  Quote,
  ArrowRight,
  X,
  Info,
  ChevronDown,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../Context/LanguageContext";
import { texts } from "/src/utils/text";
import { noticesData } from "../utils/noticesData";

/* ===== Data ===== */
const galleryImages = [
  "https://i.ibb.co.com/Y4WcMFpC/Whats-App-Image-2026-07-05-at-11-55-30-AM.jpg",
  "https://i.ibb.co.com/tTy3zjWT/Whats-App-Image-2026-06-06-at-4-05-06-PM.jpg",
  "https://i.ibb.co.com/fVM8j3cB/Whats-App-Image-2026-06-09-at-10-29-55-AM.jpg",
  "https://i.ibb.co.com/kVjGXkQs/12.jpg",
];

const features = [
  {
    icon: ShieldCheck,
    title: { en: "Industry Certified", bn: "ইন্ডাস্ট্রি সার্টিফাইড" },
    desc: {
      en: "Recognized by top industrial boards.",
      bn: "শীর্ষ ইন্ডাস্ট্রিয়াল বোর্ড দ্বারা স্বীকৃত।",
    },
  },
  {
    icon: Gauge,
    title: { en: "Hands-on Practical", bn: "ব্যবহারিক প্রশিক্ষণ" },
    desc: {
      en: "Learning by doing in our labs.",
      bn: "আমাদের ল্যাবে হাতে-কলমে শেখার সুযোগ।",
    },
  },
  {
    icon: Users,
    title: { en: "Expert Instructors", bn: "দক্ষ ইনস্ট্রাক্টর" },
    desc: {
      en: "Trained by industry veterans.",
      bn: "ইন্ডাস্ট্রির অভিজ্ঞ শিক্ষকদের সান্নিধ্য।",
    },
  },
  {
    icon: BadgeCheck,
    title: { en: "Job-Oriented Skills", bn: "চাকরি-মুখী দক্ষতা" },
    desc: {
      en: "Get ready for your career today.",
      bn: "আপনার ক্যারিয়ারের জন্য আজই প্রস্তুত হোন।",
    },
  },
];

const stats = [
  { value: "12K+", label: { en: "Students", bn: "শিক্ষার্থী" }, icon: Users },
  { value: "50+", label: { en: "Courses", bn: "কোর্স" }, icon: BookOpen },
  {
    value: "15+",
    label: { en: "Years Exp.", bn: "বছরের অভিজ্ঞতা" },
    icon: Clock3,
  },
  { value: "100%", label: { en: "Success", bn: "সাফল্য" }, icon: Sparkles },
];

const faqs = [
  {
    q: { bn: "ভর্তি কিভাবে করবো?", en: "How to apply?" },
    a: {
      bn: "আমাদের ওয়েবসাইট বা সরাসরি অফিসে এসে ভর্তি হওয়া যাবে।",
      en: "You can apply through our website or visit our office.",
    },
  },
  {
    q: { bn: "কোর্সের সময়কাল কত?", en: "What is the duration?" },
    a: {
      bn: "কোর্স ভেদে ৩ মাস থেকে ১ বছর পর্যন্ত।",
      en: "Depends on the course, usually 3 months to 1 year.",
    },
  },
  {
    q: { bn: "সার্টিফিকেট কি পাওয়া যাবে?", en: "Will I get a certificate?" },
    a: {
      bn: "হ্যাঁ, সফলভাবে কোর্স শেষ করলে ইন্ডাস্ট্রি-মান সার্টিফিকেট দেওয়া হবে।",
      en: "Yes, an industry-standard certificate will be provided.",
    },
  },
];

const Home = () => {
  const { lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const [activeNotice, setActiveNotice] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const recentNotices = noticesData.slice(0, 3);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((p) => (p + 1) % galleryImages.length),
      4500,
    );
    return () => clearInterval(t);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "8801919541752";
    const message = `*Newsletter Subscription Request*%0A--------------------------%0A*Email:* ${newsletterEmail}%0A*Status:* Wants to join the future industry.`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
    setNewsletterEmail("");
  };

  return (
    <main className="bg-[#f8fafc] text-[#0f172a] selection:bg-[#00e1bf]/30">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[95vh] flex items-center pt-28 md:pt-32 lg:pt-36 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,225,191,0.08),_transparent_40%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 pb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#00e1bf]/10 text-[#00b89c] px-4 py-2 rounded-full text-sm font-bold mb-6 border border-[#00e1bf]/20">
              <Zap size={16} fill="#00e1bf" />
              {lang === "bn"
                ? "ভবিষ্যৎ গড়ুন আমাদের সাথে"
                : "Build Your Future with Excellence"}
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] bg-gradient-to-r from-[#0f172a] to-[#00b89c] bg-clip-text text-transparent">
              {texts.heroTitle[lang]}
            </h1>

            <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg">
              {texts.heroSubtitle[lang]}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/training"
                className="group inline-flex items-center gap-3 bg-[#00ccad] text-white px-10 py-5 rounded-2xl font-black transition-all hover:scale-[1.03] hover:shadow-[0_25px_50px_-12px_rgba(0,225,191,0.45)]"
              >
                {texts.exploreTraining[lang]}
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-white border border-gray-200 hover:border-[#00e1bf]/40 hover:bg-[#00e1bf]/5 px-10 py-5 rounded-2xl font-black transition-all"
              >
                {lang === "bn" ? "যোগাযোগ করুন" : "Get in Touch"}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white h-[600px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={galleryImages[index]}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8 }}
                />
              </AnimatePresence>
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-xl z-20 flex items-center gap-5 border border-gray-50">
              <div className="w-14 h-14 bg-[#00e1bf] rounded-2xl flex items-center justify-center text-black shadow-lg shadow-[#00e1bf]/30">
                <Award size={30} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Certified
                </p>
                <p className="font-black text-lg text-[#0f172a]">
                  ISO 9001:2015
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= GORGEOUS FEATURES ================= */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0f172a] mb-4">
              {lang === "bn" ? "আমাদের বিশেষত্ব" : "Our Excellence Features"}
            </h2>
            <div className="h-1.5 w-20 bg-[#00e1bf] mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -12 }}
                className="relative p-8 bg-[#f8fafc] rounded-[2.5rem] border border-gray-100 hover:border-[#00e1bf]/30 transition-all duration-500 group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#00e1bf]/5 rounded-bl-[4rem] transition-colors" />
                <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <f.icon className="text-[#00b89c]" size={28} />
                </div>
                <h4 className="font-black text-lg mb-3 text-[#0f172a]">
                  {f.title[lang]}
                </h4>
                <p className="text-gray-500 leading-relaxed text-xs">
                  {f.desc[lang]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NOTICE BOARD ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-black flex items-center gap-3 text-[#0f172a]">
            <span className="w-12 h-12 bg-[#00b89c]/10 text-[#00b89c] rounded-2xl flex items-center justify-center animate-pulse">
              <Bell size={24} />
            </span>
            {texts.noticeBoard[lang]}
          </h2>
          <Link
            to="/notices"
            className="text-[#00b89c] font-bold flex items-center gap-2 hover:underline"
          >
            {lang === "bn" ? "সবগুলো দেখুন" : "View All"}{" "}
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-4">
          {recentNotices.map((notice) => (
            <motion.div
              whileHover={{ x: 10 }}
              key={notice.id}
              onClick={() => setActiveNotice(notice)}
              className="bg-white p-6 rounded-2xl border-l-4 border-l-[#00e1bf] border border-gray-100 shadow-sm flex items-center justify-between group cursor-pointer"
            >
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-gray-400 uppercase">
                  {notice.date}
                </span>
                <p className="font-bold text-gray-700 group-hover:text-[#00b89c] transition-colors">
                  {notice.title}
                </p>
              </div>
              <ChevronRight className="text-gray-300 group-hover:text-[#00b89c]" />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activeNotice && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] bg-[#0f172a]/80 backdrop-blur-xl flex items-center justify-center px-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-white rounded-[3rem] p-8 md:p-12 max-w-2xl w-full shadow-2xl"
              >
                <button
                  onClick={() => setActiveNotice(null)}
                  className="absolute top-6 right-6 w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:text-red-500 transition-all"
                >
                  <X size={24} />
                </button>
                <div className="flex items-center gap-3 text-[#00b89c] mb-6">
                  <div className="w-12 h-12 bg-[#00b89c]/10 rounded-2xl flex items-center justify-center">
                    <Info size={24} />
                  </div>
                  <span className="text-sm font-bold">{activeNotice.date}</span>
                </div>
                <h3 className="text-3xl font-black mb-6 text-[#0f172a]">
                  {activeNotice.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {activeNotice.details}
                </p>
                <button
                  onClick={() => setActiveNotice(null)}
                  className="bg-[#00b89c] text-white font-black px-8 py-4 rounded-xl"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ================= STATS WITH IMAGE ================= */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-fixed bg-center"
          style={{
            backgroundImage: `url('https://i.ibb.co.com/sJM8ygRn/09.jpg')`,
          }}
        />
        <div className="absolute inset-0 z-10 bg-[#0f172a]/85 backdrop-blur-[2px]" />
        <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex w-16 h-16 bg-[#00e1bf]/10 rounded-2xl items-center justify-center text-[#00e1bf] mb-6 group-hover:scale-110 transition-all duration-500">
                <s.icon size={30} />
              </div>
              <h3 className="text-5xl font-black text-white mb-2">{s.value}</h3>
              <p className="text-[#00e1bf] font-bold uppercase tracking-widest text-xs">
                {s.label[lang]}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CORE PROGRAMS ================= */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-black mb-4">
            {texts.corePrograms[lang]}
          </h2>
          <div className="h-1.5 w-24 bg-[#00e1bf] mx-auto rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Gauge,
              title: { bn: "বয়লার অপারেশন", en: "Boiler Operation" },
            },
            { icon: Wrench, title: { bn: "মেইনটেন্যান্স", en: "Maintenance" } },
            {
              icon: ShieldCheck,
              title: { bn: "ইন্ডাস্ট্রিয়াল সেফটি", en: "Industrial Safety" },
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group p-10 rounded-[2.5rem] bg-[#f8fafc] border border-transparent hover:border-[#00e1bf]/20 hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <item.icon className="text-[#00b89c]" size={32} />
              </div>
              <h3 className="font-black text-2xl mb-4 text-[#0f172a]">
                {item.title[lang]}
              </h3>
              <p className="text-gray-500 mb-8 leading-relaxed text-sm">
                {lang === "bn"
                  ? "বিশ্বমানের ল্যাব এবং ইন্ডাস্ট্রি এক্সপার্টদের মাধ্যমে হাতে-কলমে প্রশিক্ষণ।"
                  : "Hands-on training with world-class labs and industry experts."}
              </p>
              <Link
                to="/training"
                className="inline-flex items-center gap-2 font-black text-sm uppercase tracking-wider text-[#00b89c] group-hover:gap-4 transition-all"
              >
                {lang === "bn" ? "বিস্তারিত" : "Learn More"}{" "}
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WORLD-CLASS PREMIUM FAQ SECTION ================= */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00b89c]/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 bg-[#00b89c]/10 text-[#00b89c] px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-[#00b89c]/20">
                  <HelpCircle size={16} />
                  Support Center
                </div>

                <h2 className="text-5xl md:text-6xl font-black text-[#0f172a] leading-tight">
                  Everything you <br />
                  <span className="text-[#00b89c]">need to know.</span>
                </h2>

                <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                  Have questions about our training programs, certification, or
                  admission process? We've got the answers right here.
                </p>

                <div className="pt-8 border-t border-gray-100 mt-10">
                  <p className="text-[#0f172a] font-bold mb-4">
                    Still have questions?
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-[#00b89c] font-black hover:gap-4 transition-all"
                  >
                    Contact our support team <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`group rounded-[2rem] border transition-all duration-500 ${
                    openFaq === i
                      ? "bg-white border-[#00b89c] shadow-[0_20px_40px_-15px_rgba(0,184,156,0.15)]"
                      : "bg-[#f8fafc] border-transparent hover:border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-7 md:p-9 text-left outline-none"
                  >
                    <div className="flex items-center gap-5">
                      <span
                        className={`text-xl font-black transition-colors duration-300 ${
                          openFaq === i ? "text-[#00b89c]" : "text-[#0f172a]"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                          openFaq === i ? "text-[#0f172a]" : "text-gray-600"
                        }`}
                      >
                        {faq.q[lang]}
                      </span>
                    </div>

                    <div
                      className={`shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        openFaq === i
                          ? "bg-[#00b89c] text-white rotate-180"
                          : "bg-white text-gray-400"
                      }`}
                    >
                      <ChevronDown size={24} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <div className="px-7 md:px-9 pb-9 ml-14">
                          <div className="h-px w-full bg-gray-100 mb-6" />
                          <p className="text-gray-500 text-lg leading-relaxed italic">
                            {faq.a[lang]}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMPACT & PRO CTA ================= */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-[3rem] min-h-[420px] flex items-center justify-center overflow-hidden group shadow-[0_30px_60px_-15px_rgba(0,184,156,0.2)]">
            <div
              className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[1500ms] group-hover:scale-110"
              style={{
                backgroundImage: `url('https://i.ibb.co.com/kVjGXkQs/12.jpg')`,
              }}
            />
            <div className="absolute inset-0 z-10 bg-[#0f172a]/80 backdrop-blur-[2px]" />
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0f172a] via-transparent opacity-70" />
            <div className="relative z-20 text-center px-6 max-w-3xl">
              <motion.div className="inline-flex items-center gap-2 bg-[#00b89c]/20 text-[#00e1bf] px-5 py-1.5 rounded-full text-xs font-black mb-6 border border-[#00b89c]/30 backdrop-blur-md">
                <Sparkles size={14} />
                {lang === "bn" ? "ভর্তি চলছে" : "ADMISSIONS OPEN"}
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                {texts.ctaTitle[lang]}
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                {lang === "bn"
                  ? "শিল্প কারখানার আধুনিক প্রযুক্তিতে নিজেকে দক্ষ করে তুলুন আমাদের বিশেষজ্ঞ মেন্টরদের তত্ত্বাবধানে।"
                  : "Master modern industrial technologies under the guidance of our expert mentors."}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/admission"
                  className="bg-[#00b89c] text-white px-10 py-4 rounded-2xl font-black text-lg shadow-xl shadow-[#00b89c]/40 active:scale-95 transition-all"
                >
                  {texts.applyAdmission[lang]}
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-white/20 transition-all"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PREMIUM INDUSTRY NEWSLETTER ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-[3rem] p-8 md:p-14 shadow-2xl overflow-hidden group border border-gray-100">
            <div
              className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-105"
              style={{
                backgroundImage: `url('https://i.ibb.co.com/M457FTD/00.jpg')`,
              }}
            />
            <div className="absolute inset-0 z-10 bg-[#0f172a]/85 backdrop-blur-[3px]" />
            <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="text-left space-y-4 max-w-xl">
                <div className="flex items-center gap-2 text-[#00e1bf]">
                  <div className="h-1 w-8 bg-[#00e1bf] rounded-full" />
                  <span className="text-xs font-black uppercase tracking-[0.3em]">
                    Stay Informed
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                  Join the Future of <br />{" "}
                  <span className="text-[#00e1bf]">Industry</span>
                </h2>
                <p className="text-gray-300 text-lg font-medium leading-relaxed">
                  Get exclusive access to training updates, industrial
                  workshops, and career opportunities delivered to your inbox.
                </p>
              </div>
              <div className="w-full lg:max-w-md">
                <form className="relative" onSubmit={handleNewsletterSubmit}>
                  <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white/10 border border-white/20 rounded-[2.5rem] focus-within:border-[#00e1bf]/50 focus-within:bg-white/15 transition-all backdrop-blur-md">
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="flex-1 bg-transparent text-white px-6 py-4 outline-none placeholder:text-gray-400 text-lg"
                      required
                    />
                    <button 
                      type="submit"
                      className="bg-[#00e1bf] text-[#0f172a] px-8 py-4 rounded-[1.8rem] font-black text-lg hover:scale-[1.03] shadow-lg shadow-[#00e1bf]/20 transition-all flex items-center justify-center gap-2"
                    >
                      Join <ArrowRight size={18} />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mt-4 ml-4">
                    <CheckCircle2 size={14} className="text-[#00e1bf]" />
                    <p className="text-gray-400 text-xs font-medium">
                      Join 12k+ professionals. We value your privacy.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;