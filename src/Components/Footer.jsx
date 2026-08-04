import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Youtube,
  Twitter,
  MessageCircle,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

import { useLanguage } from "../Context/LanguageContext";
import { texts } from "/src/utils/text";

const Footer = () => {
  const { lang } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12 text-gray-500 transition-colors selection:bg-[#00e1bf]/30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">

        {/* ===== Institute Info (Spans 4 columns) ===== */}
        <div className="lg:col-span-4 space-y-8">
          <div className="space-y-4">
            <h3 className="text-[#0f172a] font-black text-2xl tracking-tight flex items-center gap-2">
              <div className="w-8 h-8 bg-[#00b89c] rounded-lg flex items-center justify-center text-white">
                <ShieldCheck size={20} />
              </div>
              {texts.footerInstituteName[lang]}
            </h3>
            <p className="text-sm leading-relaxed max-w-sm font-medium">
              {texts.footerDescription[lang]}
            </p>
          </div>

          <div className="space-y-5">
            <ContactItem 
              icon={<Phone size={18} />} 
              text={texts.footerPhone[lang]} 
            />
            <ContactItem 
              icon={<Mail size={18} />} 
              text="info@IITbd.com" 
            />
            <ContactItem 
              icon={<MapPin size={18} />} 
              text={texts.footerAddress[lang]} 
            />
          </div>

          {/* ===== Social Links ===== */}
          <div className="flex items-center gap-3 pt-4">
            <SocialIcon href="https://facebook.com" icon={<Facebook size={18} />} />
            <SocialIcon href="https://youtube.com" icon={<Youtube size={18} />} />
            <SocialIcon href="https://wa.me/+8801919541752" icon={<MessageCircle size={18} />} />
            <SocialIcon href="https://x.com" icon={<Twitter size={18} />} />
          </div>
        </div>

        {/* ===== Links Sections (Each spans 2-3 columns) ===== */}
        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
          <FooterLinks
            title={texts.footerQuickLinks[lang]}
            links={[
              { to: "/", label: texts.nav.home[lang] },
              { to: "/about", label: texts.nav.about[lang] },
              { to: "/facility", label: texts.nav.facilities[lang] },
              { to: "/training", label: texts.nav.training[lang] },
              { to: "/curriculam", label: texts.nav.curriculum[lang] },
            ]}
          />

          <FooterLinks
            title={texts.footerStudents[lang]}
            links={[
              { to: "/admission", label: texts.nav.admission[lang] },
              { to: "/result", label: texts.nav.result[lang] },
              { to: "/job", label: texts.nav.job[lang] },
              { to: "/contact", label: texts.nav.contact[lang] },
            ]}
          />

          <FooterLinks
            title={texts.footerSupport[lang]}
            links={[
              { to: "/start-training", label: texts.nav.startTraining[lang] },
              { to: "/support", label: texts.nav.support[lang] },
            ]}
          />
        </div>
      </div>

      {/* ===== Bottom Copyright Area ===== */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} {texts.footerCopyright[lang]}
          </p>
          <div className="flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-gray-400">
            <button className="hover:text-[#00b89c] transition-colors">Privacy Policy</button>
            <button className="hover:text-[#00b89c] transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ===== Internal Sub-Components for Professional Look ===== */

const ContactItem = ({ icon, text }) => (
  <div className="flex items-center gap-4 group cursor-pointer">
    <div className="w-10 h-10 rounded-xl bg-[#f8fafc] flex items-center justify-center text-gray-400 group-hover:bg-[#00b89c] group-hover:text-white transition-all duration-300 shadow-sm border border-gray-50">
      {icon}
    </div>
    <span className="text-sm font-bold text-gray-600 group-hover:text-[#00b89c] transition-colors duration-300">
      {text}
    </span>
  </div>
);

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-11 h-11 rounded-2xl border border-gray-100 bg-white flex items-center justify-center text-gray-400 hover:bg-[#00b89c] hover:border-[#00b89c] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
  >
    {icon}
  </a>
);

const FooterLinks = ({ title, links }) => (
  <div className="space-y-8">
    <h4 className="text-[#0f172a] font-black text-xs uppercase tracking-[0.2em] relative inline-block">
      {title}
      <div className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#00b89c]" />
    </h4>
    <ul className="space-y-4">
      {links.map((l, i) => (
        <li key={i}>
          <Link 
            to={l.to} 
            className="text-[13px] font-bold text-gray-500 hover:text-[#00b89c] transition-all flex items-center gap-3 group"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#00b89c] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              {l.label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;