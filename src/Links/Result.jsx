import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  X,
  Award,
  User,
  BookOpen,
  ShieldCheck,
  Search,
  Filter,
  FileText,
  AlertCircle,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "../Context/LanguageContext";
import { texts } from "/src/utils/text";

/* ===== Result Data (Frontend Managed) ===== */
const resultData = [
  // {
  //   roll: "IIT-101",
  //   name: { en: "Md. Rahim Uddin", bn: "মোঃ রহিম উদ্দিন" },
  //   course: { en: "High-Pressure Boiler Operations", bn: "হাই-প্রেশার বয়লার অপারেশন" },
  //   status: "pass",
  //   grade: "A",
  //   remarks: { en: "Excellent technical performance.", bn: "চমৎকার টেকনিক্যাল পারফরম্যান্স।" },
  // },
  // {
  //   roll: "IIT-102",
  //   name: { en: "Md. Kamal Hossain", bn: "মোঃ কামাল হোসেন" },
  //   course: { en: "Industrial Boiler Maintenance", bn: "ইন্ডাস্ট্রিয়াল বয়লার মেইনটেন্যান্স" },
  //   status: "pass",
  //   grade: "B",
  //   remarks: { en: "Good operational understanding.", bn: "ভালো অপারেশনাল জ্ঞান।" },
  // },
  // {
  //   roll: "IIT-103",
  //   name: { en: "Md. Sajib Mia", bn: "মোঃ সাজিব মিয়া" },
  //   course: { en: "Industrial Safety Training", bn: "ইন্ডাস্ট্রিয়াল সেফটি ট্রেনিং" },
  //   status: "waiting",
  //   grade: "-",
  //   remarks: { en: "Result is under process.", bn: "রেজাল্ট প্রক্রিয়াধীন রয়েছে।" },
  // },
  // {
  //   roll: "IIT-104",
  //   name: { en: "Abdur Rahman", bn: "আব্দুর রহমান" },
  //   course: { en: "High-Pressure Boiler Operations", bn: "হাই-প্রেশার বয়লার অপারেশন" },
  //   status: "pass",
  //   grade: "A+",
  //   remarks: { en: "Outstanding skills.", bn: "অসাধারণ দক্ষতা।" },
  // },
];

const Result = () => {
  const { lang } = useLanguage();
  const [activeResult, setActiveResult] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResults = resultData.filter(
    (r) => 
      r.roll.toLowerCase().includes(searchTerm.toLowerCase()) || 
      r.name[lang].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen pt-32 bg-[#f8fafc] text-[#0f172a] selection:bg-[#00e1bf]/30 transition-colors">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative max-w-7xl mx-auto px-6 text-center mb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#00b89c]/10 rounded-full blur-[100px] -z-10" />
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-5 py-2 rounded-full shadow-sm">
            <ShieldCheck size={16} className="text-[#00b89c]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Official Result Portal</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            Academic <span className="text-[#00b89c]">Results.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Check the performance and certification status of our technical trainees.
          </p>
        </motion.div>
      </section>

      {/* ===== SEARCH & FILTER BAR ===== */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="Search by Name or Roll..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#f8fafc] border border-transparent focus:border-[#00b89c] focus:bg-white py-4 pl-14 pr-6 rounded-2xl outline-none transition-all font-bold"
            />
          </div>
          <div className="flex items-center gap-3 pr-4">
             <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Total: {filteredResults.length}</span>
          </div>
        </div>
      </section>

      {/* ===== RESULTS TABLE/LIST ===== */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl overflow-hidden min-h-[400px]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-gray-100">
                  <th className="p-8 text-xs font-black uppercase tracking-widest text-gray-400">Trainee Info</th>
                  <th className="p-8 text-xs font-black uppercase tracking-widest text-gray-400 hidden md:table-cell">Course</th>
                  <th className="p-8 text-xs font-black uppercase tracking-widest text-gray-400">Status</th>
                  <th className="p-8 text-xs font-black uppercase tracking-widest text-gray-400 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredResults.map((result, i) => (
                  <motion.tr 
                    key={result.roll}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-gray-50 hover:bg-[#f8fafc]/50 transition-colors group cursor-pointer"
                    onClick={() => setActiveResult(result)}
                  >
                    <td className="p-8">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#00b89c]/10 text-[#00b89c] flex items-center justify-center font-black">
                           {result.name[lang].charAt(0)}
                        </div>
                        <div>
                          <p className="font-black text-[#0f172a]">{result.name[lang]}</p>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{result.roll}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-8 hidden md:table-cell">
                       <p className="font-bold text-gray-500 text-sm italic">{result.course[lang]}</p>
                    </td>
                    <td className="p-8">
                      <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        result.status === "pass" 
                        ? "bg-green-50 text-green-500 border border-green-100" 
                        : "bg-amber-50 text-amber-500 border border-amber-100"
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${result.status === "pass" ? "bg-green-500" : "bg-amber-500"}`} />
                        {result.status}
                      </span>
                    </td>
                    <td className="p-8 text-right">
                      <button 
                        className="p-3 bg-gray-50 rounded-xl text-gray-400 hover:bg-[#00b89c] hover:text-white transition-all shadow-sm group-hover:scale-110"
                      >
                        <FileText size={20} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* ===== NOT FOUND STATE ===== */}
          {filteredResults.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-24 text-center"
            >
              <div className="w-20 h-20 bg-gray-50 rounded-[2rem] flex items-center justify-center mx-auto mb-6 text-gray-300 border border-gray-100">
                 <Search size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black text-[#0f172a] mb-2">No Results Found</h3>
              <p className="text-gray-400 font-medium max-w-xs mx-auto mb-8 text-sm">
                We couldn't find any trainee matching your search "{searchTerm}".
              </p>
              <button 
                onClick={() => setSearchTerm("")}
                className="text-[#00b89c] font-black uppercase tracking-widest text-[10px] hover:underline"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ===== DETAILED RESULT MODAL ===== */}
      <AnimatePresence>
        {activeResult && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-[#0f172a]/70 backdrop-blur-md flex items-center justify-center px-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[3.5rem] p-10 md:p-14 max-w-xl w-full shadow-2xl relative overflow-hidden text-center"
            >
              <button onClick={() => setActiveResult(null)} className="absolute top-8 right-8 p-2 bg-gray-50 rounded-xl hover:bg-red-50 hover:text-red-500 transition-all">
                <X size={20} />
              </button>

              <div className="flex flex-col items-center space-y-6">
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center shadow-lg ${
                  activeResult.status === "pass" ? "bg-[#00b89c] text-white" : "bg-amber-500 text-white"
                }`}>
                  <Award size={40} />
                </div>
                
                <div>
                  <h3 className="text-3xl font-black text-[#0f172a]">{activeResult.name[lang]}</h3>
                  <p className="text-[#00b89c] font-black tracking-widest uppercase text-xs mt-2">{activeResult.roll}</p>
                </div>

                <div className="w-full grid grid-cols-2 gap-4">
                  <div className="bg-[#f8fafc] p-5 rounded-2xl border border-gray-100 text-left">
                     <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Program</p>
                     <p className="font-bold text-[#0f172a] text-sm leading-tight">{activeResult.course[lang]}</p>
                  </div>
                  <div className="bg-[#f8fafc] p-5 rounded-2xl border border-gray-100 text-left">
                     <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Final Grade</p>
                     <p className="font-black text-[#0f172a] text-xl">{activeResult.grade}</p>
                  </div>
                </div>

                <div className="w-full bg-[#f8fafc] p-6 rounded-3xl border border-gray-100 text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Remarks</p>
                  <p className="text-gray-600 font-bold italic text-sm">"{activeResult.remarks[lang]}"</p>
                </div>

                <button className="w-full bg-[#0f172a] text-white py-5 rounded-2xl font-black hover:bg-[#00b89c] transition-all shadow-xl flex items-center justify-center gap-3">
                   Download Marksheet <FileText size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
};

export default Result;