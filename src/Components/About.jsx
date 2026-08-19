import React from "react";
import { motion } from "framer-motion";
import { Target, Factory, CheckCircle2, Flame, Users, Calendar, ShieldCheck, ArrowRight, Sparkles, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="bg-[#f8fafc] text-[#0f172a] min-h-screen pt-32 pb-20 selection:bg-[#00e1bf]/30">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative max-w-7xl mx-auto px-6 text-center mb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#00b89c]/10 rounded-full blur-[100px] -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles size={14} className="text-[#00b89c]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">ইনস্টিটিউট অফ ইন্ডাস্ট্রিয়াল ট্রেনিং</span>
          </div> */}
          
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
            প্র্যাকটিক্যাল বয়লার ট্রেনিংয়ের নির্ভরযোগ্য প্রতিষ্ঠান<span className="text-[#00b89c]">.</span>
          </h1>

          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            আমরা ইন্ডাস্ট্রিয়াল বয়লার চালনায় শিক্ষার্থীদের নিখুঁত ও দক্ষ করে তুলতে প্রতিশ্রুতিবদ্ধ। প্রথম ব্যাচ সফলভাবে শেষ করার পর, এখন আমাদের ২য় ব্যাচে ভর্তি চলছে।
          </p>
        </motion.div>
      </section>

      {/* ===== MISSION & VISION WITH EXISTING IMAGES ===== */}
      <section className="max-w-7xl mx-auto px-6 mb-28">
        <div className="grid lg:grid-cols-2 gap-6">
          {[
            {
              icon: <Target className="w-8 h-8" />,
              title: "আমাদের লক্ষ্য",
              desc: "দক্ষ অপারেটরদের তত্ত্বাবধানে সরাসরি নিজস্ব বয়লারে হাতে-কলমে ট্রেনিং প্রদান করে শিক্ষার্থীদের ইন্ডস্ট্রির জন্য শতভাগ প্রস্তুত করা।",
              img: "https://i.ibb.co.com/kVjGXkQs/12.jpg",
              label: "Mission"
            },
            {
              icon: <Factory className="w-8 h-8" />,
              title: "আমাদের দৃষ্টিভঙ্গি",
              desc: "সহজতম পদ্ধতিতে হাই-প্রোফাইল অভিজ্ঞ শিক্ষকদের মাধ্যমে মানসম্পন্ন শিক্ষা নিশ্চিত করে দেশের শিল্পখাতে দক্ষ জনশক্তি তৈরি করা।",
              img: "https://i.ibb.co.com/M457FTD/00.jpg",
              label: "Vision"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="relative h-[400px] rounded-[3rem] overflow-hidden group shadow-xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-10 h-full flex flex-col justify-end">
                <div className="w-14 h-14 mb-6 rounded-2xl bg-[#00b89c] text-white flex items-center justify-center shadow-lg shadow-[#00b89c]/30">
                  {item.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00b89c] mb-2">{item.label}</span>
                <h3 className="text-3xl font-black text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-md">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-24 bg-white border-y border-gray-100 mb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] leading-tight">
                কেন আমাদের ট্রেনিং সেন্টার বেছে নেবেন?
              </h2>
            </div>
            <div className="h-px flex-1 bg-gray-100 hidden md:block mx-10 mb-4" />
            <div className="text-[#00b89c] font-black text-sm uppercase tracking-widest">IIT Training</div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "আমাদের নিজস্ব বয়লারে লাইভ প্র্যাকটিক্যাল ট্রেনিং",
              "দক্ষ ও অভিজ্ঞ অপারেটর দিয়ে হাতে-কলমে শেখানোর ব্যবস্থা",
              "হাই-প্রোফাইল ইঞ্জিনিয়ার ও অভিজ্ঞ শিক্ষক দ্বারা ক্লাস",
              "সহজ ও সাবলীল ভাষায় জটিল বিষয়গুলো শেখানোর কৌশল",
              "প্রতি ব্যাচে সর্বোচ্চ ৩৫ জন শিক্ষার্থী (সীমিত সিট)",
              "১ম ব্যাচ সফলভাবে সম্পন্ন এবং ২য় ব্যাচে ভর্তি চলছে"
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group flex items-center gap-5 bg-[#f8fafc] p-6 rounded-[2rem] border border-transparent hover:border-[#00b89c]/20 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#00b89c] shadow-sm group-hover:bg-[#00b89c] group-hover:text-white transition-colors">
                  <CheckCircle2 size={20} />
                </div>
                <p className="text-sm font-bold text-gray-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION WITH EXISTING IMAGE ===== */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-[#0f172a] rounded-[4rem] p-12 md:p-16 relative overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 opacity-20">
                <img src="https://i.ibb.co.com/sJM8ygRn/09.jpg" alt="Stats BG" className="w-full h-full object-cover" />
            </div>
            
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                    { icon: Flame, value: "১ম", label: "ব্যাচ সম্পন্ন" },
                    { icon: Calendar, value: "২য়", label: "ব্যাচে ভর্তি চলছে (সেপ্টেম্বর)" },
                    { icon: Users, value: "৩৫ জন", label: "সীমিত সিট (প্রতি ব্যাচ)" },
                    { icon: UserCheck, value: "১০০%", label: "প্র্যাকটিক্যাল ল্যাব" },
                ].map((item, i) => (
                    <div key={i} className="space-y-3">
                        <div className="flex justify-center text-[#00b89c] mb-2">
                          <item.icon size={28} />
                        </div>
                        <h3 className="text-3xl md:text-5xl font-black text-white">{item.value}</h3>
                        <p className="text-[#00b89c] text-[11px] font-bold uppercase tracking-widest">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* ===== ENROLLMENT CTA ===== */}
      <section className="max-w-4xl mx-auto px-6 text-center pt-8">
        <h2 className="text-3xl font-black text-[#0f172a] mb-3">২য় ব্যাচে আপনার সিট নিশ্চিত করুন</h2>
        <p className="text-gray-500 font-medium mb-8">সেপ্টেম্বর থেকে নতুন ব্যাচের ক্লাস শুরু হতে যাচ্ছে। প্রতি ব্যাচে আসন সংখ্যা মাত্র ৩৫টি।</p>
        <Link to="/admission" className="inline-flex items-center gap-3 bg-[#00b89c] text-white px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-lg shadow-[#00b89c]/30">
          এখনই ভর্তি হন <ArrowRight size={20} />
        </Link>
      </section>

    </main>
  );
};

export default About;