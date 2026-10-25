export const BUSINESS = {
  nameEn: "Aashirwad Gems & Jewellers",
  nameHi: "आशीर्वाद जेम्स",
  shortName: "Aashirwad Gems",
  taglineEn: "100% Pure & Natural Gemstones",
  taglineHi: "100% शुद्ध एवं प्राकृतिक रत्न",
  city: "Itwari, Nagpur",

  phones: [
    { display: "98343 47399", tel: "+919834347399", raw: "9834347399" },
  ],
  whatsappNumber: "919834347399",

  addressEn: "Nikalas Mandir Road, Opp. Jai Hotel, Itwari, Nagpur – 440002, Maharashtra",
  addressHi: "निकलस मंदिर रोड, जय होटल के सामने, इतवारी, नागपुर – 440002",
  landmarkEn: "Opposite Jai Hotel, Nikalas Mandir Road",
  landmarkHi: "जय होटल के सामने, निकलस मंदिर रोड",

  hours: [
    { days: "Monday – Saturday", daysHi: "सोमवार – शनिवार", time: "10:30 AM – 8:30 PM" },
    { days: "Sunday", daysHi: "रविवार", time: "11:00 AM – 6:00 PM" },
  ],
  hoursNote: "Timings may vary on festivals — please call before visiting.",
  // Minutes from midnight (IST), indexed by JS day: 0 = Sunday … 6 = Saturday. null = closed.
  schedule: [
    { open: 11 * 60, close: 18 * 60 },
    { open: 10 * 60 + 30, close: 20 * 60 + 30 },
    { open: 10 * 60 + 30, close: 20 * 60 + 30 },
    { open: 10 * 60 + 30, close: 20 * 60 + 30 },
    { open: 10 * 60 + 30, close: 20 * 60 + 30 },
    { open: 10 * 60 + 30, close: 20 * 60 + 30 },
    { open: 10 * 60 + 30, close: 20 * 60 + 30 },
  ] as ({ open: number; close: number } | null)[],

  coordinates: { lat: 21.1526225, lng: 79.1081112 },

  maps: {
    // Official embed shared by the shop
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.994366478738!2d79.1081111743215!3d21.152622480527878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c7d0b1415907%3A0x33efef8fd6669657!2sAashirwad%20gems!5e0!3m2!1sen!2sin!4v1792864084371!5m2!1sen!2sin",
    // Opens the exact Google Business listing (reviews, photos, hours)
    place: "https://maps.google.com/?cid=3742473216424580695",
    // One-tap turn-by-turn navigation to the shop
    directions:
      "https://www.google.com/maps/dir//Aashirwad+gems,+Nikalas+Mandir+Road,+Itwari,+Nagpur/@21.1526225,79.1081112,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bd4c7d0b1415907:0x33efef8fd6669657!2m2!1d79.1081112!2d21.1526225",
  },
} as const;

export const telHref = (tel: string) => `tel:${tel}`;

export const whatsappHref = (message?: string) => {
  const text =
    message ??
    "Namaste Aashirwad Gems! 🙏 I would like to know more about your gemstones. Please share details.";
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(text)}`;
};

export const gemEnquiryHref = (gemNameEn: string, gemNameHi: string) =>
  whatsappHref(
    `Namaste Aashirwad Gems! 🙏 I am interested in ${gemNameEn} (${gemNameHi}). Please share availability, certification details and price.`
  );
