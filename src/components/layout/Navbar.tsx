import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { logo, menu, close } from "../../assets";
import { useLanguage, type Language } from "../../i18n";

const LANG_LABELS: Record<Language, string> = {
  en: "EN",
  uz: "UZ",
  ru: "RU",
};

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { id: "about", title: t.nav.about },
    { id: "work", title: t.nav.work },
    { id: "contact", title: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;
        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-5 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* Logo + Name */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
          <p className="flex cursor-pointer text-[18px] font-bold text-white">
            Abdujabbor&nbsp;
            <span className="hidden sm:block text-[#915EFF]">
              | Backend Dev
            </span>
          </p>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden list-none flex-row gap-8 sm:flex items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-white" : "text-secondary"
              } cursor-pointer text-[18px] font-medium hover:text-white transition-colors`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          {/* Language Switcher */}
          <li className="flex gap-0 ml-4 border border-[#915EFF55] rounded-lg overflow-hidden">
            {(Object.keys(LANG_LABELS) as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-3 py-1 text-[13px] font-semibold transition-colors ${
                  language === lang
                    ? "bg-[#915EFF] text-white"
                    : "text-secondary hover:text-white hover:bg-[#915EFF22]"
                }`}
              >
                {LANG_LABELS[lang]}
              </button>
            ))}
          </li>
        </ul>

        {/* Mobile Nav */}
        <div className="flex flex-1 items-center justify-end gap-3 sm:hidden">
          {/* Mobile language mini-switcher */}
          <div className="flex gap-0 border border-[#915EFF55] rounded-lg overflow-hidden">
            {(Object.keys(LANG_LABELS) as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2 py-1 text-[11px] font-semibold transition-colors ${
                  language === lang
                    ? "bg-[#915EFF] text-white"
                    : "text-secondary"
                }`}
              >
                {LANG_LABELS[lang]}
              </button>
            ))}
          </div>

          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] font-medium ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => setToggle(false)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
