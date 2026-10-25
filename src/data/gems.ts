import heroImg from "../assets/hero.jpg";
import pukhrajImg from "../assets/pukhraj.jpg";
import pannaImg from "../assets/panna.jpg";
import neelamImg from "../assets/neelam.jpg";
import moongaImg from "../assets/moonga.jpg";
import manikImg from "../assets/manik.jpg";
import lehsuniaImg from "../assets/lehsunia.jpg";
import gomedImg from "../assets/gomed.jpg";
import rudrakshaImg from "../assets/rudraksha.jpg";
import sphatikImg from "../assets/sphatik.jpg";

export type GemCategory = "navratna" | "spiritual" | "jewellery";

export interface Gem {
  id: string;
  nameEn: string;
  nameHi: string;
  alias: string;
  planetEn: string;
  planetHi: string;
  accent: string;
  benefits: string[];
  wear?: string;
  category: GemCategory;
  image?: string;
  art?: "opal";
  tag?: string;
}

export const CATEGORIES: { id: GemCategory | "all"; labelEn: string; labelHi: string }[] = [
  { id: "all", labelEn: "All", labelHi: "सभी" },
  { id: "navratna", labelEn: "Navratna (9 Gems)", labelHi: "नवरत्न" },
  { id: "spiritual", labelEn: "Rudraksha & Sphatik", labelHi: "रुद्राक्ष व स्फटिक" },
  { id: "jewellery", labelEn: "Rings & Pendants", labelHi: "अंगूठी व लॉकेट" },
];

export const GEMS: Gem[] = [
  {
    id: "pukhraj",
    nameEn: "Yellow Sapphire",
    nameHi: "पुखराज",
    alias: "Pukhraj",
    planetEn: "Jupiter",
    planetHi: "गुरु (बृहस्पति)",
    accent: "#e2b53a",
    benefits: ["Wisdom, prosperity & good fortune", "Marriage, children & family harmony", "Favourable for education & finance"],
    wear: "Index finger · Thursday morning",
    category: "navratna",
    image: pukhrajImg,
    tag: "Most Popular",
  },
  {
    id: "neelam",
    nameEn: "Blue Sapphire",
    nameHi: "नीलम",
    alias: "Neelam",
    planetEn: "Saturn",
    planetHi: "शनि",
    accent: "#2f5bd0",
    benefits: ["Fast results in career & business", "Relief during Shani Sade Sati & Dhaiya", "Discipline, focus & stability"],
    wear: "Middle finger · Saturday evening",
    category: "navratna",
    image: neelamImg,
  },
  {
    id: "panna",
    nameEn: "Emerald",
    nameHi: "पन्ना",
    alias: "Panna",
    planetEn: "Mercury",
    planetHi: "बुध",
    accent: "#1f9d5a",
    benefits: ["Intellect, memory & communication", "Growth in business, trade & studies", "Calms nerves & sharpens decision-making"],
    wear: "Little finger · Wednesday morning",
    category: "navratna",
    image: pannaImg,
  },
  {
    id: "manik",
    nameEn: "Ruby",
    nameHi: "माणिक",
    alias: "Manik",
    planetEn: "Sun",
    planetHi: "सूर्य",
    accent: "#c3123a",
    benefits: ["Leadership, confidence & authority", "Name, fame & government favour", "Vitality, heart & eye health"],
    wear: "Ring finger · Sunday morning",
    category: "navratna",
    image: manikImg,
  },
  {
    id: "moonga",
    nameEn: "Red Coral",
    nameHi: "मूंगा",
    alias: "Moonga",
    planetEn: "Mars",
    planetHi: "मंगल",
    accent: "#e2442a",
    benefits: ["Courage, energy & victory over enemies", "Remedy for Mangal Dosha", "Protection from accidents & debts"],
    wear: "Ring finger · Tuesday morning",
    category: "navratna",
    image: moongaImg,
  },
  {
    id: "moti",
    nameEn: "Pearl",
    nameHi: "मोती",
    alias: "Moti",
    planetEn: "Moon",
    planetHi: "चंद्र",
    accent: "#d9d4cc",
    benefits: ["Peace of mind & emotional balance", "Controls anger, anxiety & stress", "Good for mother, home & relationships"],
    wear: "Little finger · Monday morning",
    category: "navratna",
    image: "https://images.pexels.com/photos/5988254/pexels-photo-5988254.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "heera",
    nameEn: "Diamond",
    nameHi: "हीरा",
    alias: "Heera",
    planetEn: "Venus",
    planetHi: "शुक्र",
    accent: "#bfe3ff",
    benefits: ["Luxury, love & artistic success", "Charm, beauty & marital bliss", "Growth in fashion, media & arts"],
    wear: "Middle finger · Friday morning",
    category: "navratna",
    image: "https://images.pexels.com/photos/32534464/pexels-photo-32534464.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "gomed",
    nameEn: "Hessonite",
    nameHi: "गोमेद",
    alias: "Gomed",
    planetEn: "Rahu",
    planetHi: "राहु",
    accent: "#c76a1e",
    benefits: ["Relief from Rahu Dosha & Kaal Sarp Dosha", "Clarity, focus & sudden gains", "Protection from confusion & fear"],
    wear: "Middle finger · Saturday evening",
    category: "navratna",
    image: gomedImg,
  },
  {
    id: "lehsunia",
    nameEn: "Cat's Eye",
    nameHi: "लहसुनिया",
    alias: "Lehsunia",
    planetEn: "Ketu",
    planetHi: "केतु",
    accent: "#a9a04a",
    benefits: ["Shield against evil eye & hidden enemies", "Remedy for Ketu Dosha", "Spiritual growth & intuition"],
    wear: "Middle finger · Tuesday / Thursday",
    category: "navratna",
    image: lehsuniaImg,
  },
  {
    id: "opal",
    nameEn: "Opal",
    nameHi: "ओपल",
    alias: "Opal",
    planetEn: "Venus",
    planetHi: "शुक्र",
    accent: "#9fd8e8",
    benefits: ["Affordable substitute for Diamond", "Creativity, love & luxury", "Harmony in married life"],
    wear: "Middle finger · Friday morning",
    category: "navratna",
    art: "opal",
    tag: "Diamond Substitute",
  },
  {
    id: "rudraksha",
    nameEn: "Rudraksha",
    nameHi: "रुद्राक्ष",
    alias: "1 to 14 Mukhi",
    planetEn: "Lord Shiva",
    planetHi: "भगवान शिव",
    accent: "#8b4a21",
    benefits: ["Peace, focus & protection", "Malas, bracelets & single beads", "Original Nepali & Indonesian beads"],
    wear: "Energised before wearing",
    category: "spiritual",
    image: rudrakshaImg,
  },
  {
    id: "sphatik",
    nameEn: "Sphatik Shree Yantra",
    nameHi: "स्फटिक श्री यंत्र",
    alias: "Crystal Yantra",
    planetEn: "Goddess Lakshmi",
    planetHi: "माँ लक्ष्मी",
    accent: "#cfd8e3",
    benefits: ["Wealth, prosperity & positivity at home", "Sphatik malas & Shivling available", "Ideal for puja room & office"],
    wear: "Place in puja room / cash counter",
    category: "spiritual",
    image: sphatikImg,
  },
  {
    id: "navratna-ring",
    nameEn: "Navratna Ring & Pendant",
    nameHi: "नवरत्न अंगूठी व लॉकेट",
    alias: "Custom Jewellery",
    planetEn: "All 9 Planets",
    planetHi: "नवग्रह",
    accent: "#d4af37",
    benefits: ["Blessings of all nine planets together", "Set in gold, silver or panchdhatu", "Made to your size & budget"],
    wear: "Custom-made in 3–7 days",
    category: "jewellery",
    image: heroImg,
    tag: "Made to Order",
  },
];

export const gemById = (id: string) => GEMS.find((g) => g.id === id)!;

export interface Rashi {
  id: string;
  nameEn: string;
  nameHi: string;
  symbol: string;
  dates: string;
  lordEn: string;
  lordHi: string;
  gemId: string;
  altGemId?: string;
}

export const RASHIS: Rashi[] = [
  { id: "mesh", nameEn: "Aries", nameHi: "मेष", symbol: "♈", dates: "21 Mar – 19 Apr", lordEn: "Mars", lordHi: "मंगल", gemId: "moonga", altGemId: "pukhraj" },
  { id: "vrishabh", nameEn: "Taurus", nameHi: "वृषभ", symbol: "♉", dates: "20 Apr – 20 May", lordEn: "Venus", lordHi: "शुक्र", gemId: "heera", altGemId: "opal" },
  { id: "mithun", nameEn: "Gemini", nameHi: "मिथुन", symbol: "♊", dates: "21 May – 20 Jun", lordEn: "Mercury", lordHi: "बुध", gemId: "panna" },
  { id: "kark", nameEn: "Cancer", nameHi: "कर्क", symbol: "♋", dates: "21 Jun – 22 Jul", lordEn: "Moon", lordHi: "चंद्र", gemId: "moti", altGemId: "moonga" },
  { id: "simha", nameEn: "Leo", nameHi: "सिंह", symbol: "♌", dates: "23 Jul – 22 Aug", lordEn: "Sun", lordHi: "सूर्य", gemId: "manik", altGemId: "moonga" },
  { id: "kanya", nameEn: "Virgo", nameHi: "कन्या", symbol: "♍", dates: "23 Aug – 22 Sep", lordEn: "Mercury", lordHi: "बुध", gemId: "panna" },
  { id: "tula", nameEn: "Libra", nameHi: "तुला", symbol: "♎", dates: "23 Sep – 22 Oct", lordEn: "Venus", lordHi: "शुक्र", gemId: "heera", altGemId: "opal" },
  { id: "vrishchik", nameEn: "Scorpio", nameHi: "वृश्चिक", symbol: "♏", dates: "23 Oct – 21 Nov", lordEn: "Mars", lordHi: "मंगल", gemId: "moonga", altGemId: "moti" },
  { id: "dhanu", nameEn: "Sagittarius", nameHi: "धनु", symbol: "♐", dates: "22 Nov – 21 Dec", lordEn: "Jupiter", lordHi: "गुरु", gemId: "pukhraj" },
  { id: "makar", nameEn: "Capricorn", nameHi: "मकर", symbol: "♑", dates: "22 Dec – 19 Jan", lordEn: "Saturn", lordHi: "शनि", gemId: "neelam" },
  { id: "kumbh", nameEn: "Aquarius", nameHi: "कुंभ", symbol: "♒", dates: "20 Jan – 18 Feb", lordEn: "Saturn", lordHi: "शनि", gemId: "neelam" },
  { id: "meen", nameEn: "Pisces", nameHi: "मीन", symbol: "♓", dates: "19 Feb – 20 Mar", lordEn: "Jupiter", lordHi: "गुरु", gemId: "pukhraj" },
];
