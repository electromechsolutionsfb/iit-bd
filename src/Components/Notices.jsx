import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bell, 
  CalendarDays, 
  ChevronRight, 
  X, 
  Megaphone, 
  Info, 
  Clock, 
  ExternalLink 
} from "lucide-react";
// Your specific path
import { noticesData } from "../utils/noticesData";

const Notices = () => {
  const [activeNotice, setActiveNotice] = useState(null);

  return (
    <main className="bg-[#f8fafc] text-[#0f172a] min-h-screen pt-32 transition-colors">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative max-w-5xl mx-auto px-6 text-center mb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#00b89c]/5 rounded-full blur-3xl -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-[#00b89c]/10 text-[#00b89c] px-4 py-2 rounded-full text-sm font-bold mb-6 border border-[#00b89c]/20"
        >
          <Megaphone size={16} />
          Institutional Bulletin
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-[#0f172a] to-[#00b89c] bg-clip-text text-transparent"
        >
          Notice Board
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 text-xl max-w-2xl mx-auto font-medium"
        >
          Keep track of important announcements, batch updates, and academic schedules from BITI.
        </motion.p>
      </section>

      {/* ===== NOTICE LIST ===== */}
      <section className="max-w-6xl mx-auto px-6 pb-32 space-y-4">
        {noticesData.map((notice, i) => (
          <motion.div
            key={notice.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white border border-gray-100 rounded-[2.5rem] p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-2xl hover:shadow-[#00b89c]/10 hover:border-[#00b89c]/30 transition-all duration-500"
          >
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="bg-[#f1f5f9] text-[#0f172a] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-gray-200">
                  {notice.tag || "General"}
                </span>
                <div className="flex items-center gap-2 text-gray-400 text-xs font-bold">
                  <Clock className="w-4 h-4 text-[#00b89c]" />
                  {notice.date}
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-black mb-4 group-hover:text-[#00b89c] transition-colors leading-tight">
                {notice.title}
              </h3>

              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-4xl">
                {notice.desc}
              </p>
            </div>

            <button
              onClick={() => setActiveNotice(notice)}
              className="bg-[#0f172a] hover:bg-[#00b89c] text-white transition-all duration-300 font-black px-10 py-5 rounded-2xl inline-flex items-center justify-center gap-3 shadow-lg shadow-gray-200 hover:shadow-[#00b89c]/30 group/btn"
            >
              Details 
              <ChevronRight className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </section>

      {/* ===== NOTICE MODAL ===== */}
      <AnimatePresence>
        {activeNotice && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-[#0f172a]/80 backdrop-blur-xl flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="relative bg-white rounded-[3.5rem] p-8 md:p-16 max-w-3xl w-full shadow-2xl overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00b89c]/10 rounded-full blur-3xl" />

              <button
                onClick={() => setActiveNotice(null)}
                className="absolute top-8 right-8 w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-4 text-[#00b89c] mb-8">
                <div className="w-14 h-14 bg-[#00b89c]/10 rounded-2xl flex items-center justify-center">
                  <Info size={28} />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block mb-1">Notice Details</span>
                  <span className="text-sm font-bold text-[#0f172a]">{activeNotice.date}</span>
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-black mb-8 text-[#0f172a] leading-tight">
                {activeNotice.title}
              </h3>

              <div className="max-h-[40vh] overflow-y-auto pr-4 custom-scrollbar">
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                  {activeNotice.details}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-gray-100">
                <button 
                  onClick={() => setActiveNotice(null)}
                  className="bg-[#00b89c] text-white font-black px-10 py-4 rounded-2xl hover:shadow-xl hover:shadow-[#00b89c]/30 transition-all active:scale-95"
                >
                  Close Notice
                </button>

                {/* ডাইনামিক পিডিএফ বাটন */}
                {activeNotice.pdfUrl && (
                  <a 
                    href={activeNotice.pdfUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-[#0f172a] font-black px-6 py-4 hover:bg-gray-50 rounded-2xl transition-all group"
                  >
                    Download PDF <ExternalLink size={18} className="group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
};

export default Notices;