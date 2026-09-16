// data.js - لیست کامل غذاها و قیمت‌های مستر سعید
const CATEGORIES = [
  { id: "all", title: "همه" },
  { id: "halim-ash", title: "آش و حلیم" },
  { id: "dessert", title: "شله زرد و دسر" },
  { id: "traditional", title: "خوراک و سنتی" },
  { id: "daily", title: "غذای روز" },
  { id: "sides", title: "نان و نوشیدنی" }
];

const MENU_ITEMS = [
  // آش، حلیم و سوپ
  {
    id: 1,
    name: "حلیم مخصوص",
    category: "halim-ash",
    desc: "حلیم سنتی گندم و گوشت تازه همراه دارچین و کنجد",
    variants: [
      { label: "پرسی", price: 220000 },
      { label: "کیلویی (۱ کیلو)", price: 400000 }
    ]
  },
  {
    id: 2,
    name: "آش رشته",
    category: "halim-ash",
    desc: "همراه کشک، پیازداغ و نعناداغ اعلا",
    variants: [
      { label: "پرسی", price: 220000 },
      { label: "کیلویی (۱ کیلو)", price: 400000 }
    ]
  },
  {
    id: 3,
    name: "آش شله قلمکار",
    category: "halim-ash",
    desc: "غلیظ و جاافتاده با گوشت فراوان",
    variants: [
      { label: "پرسی", price: 250000 },
      { label: "کیلویی (۱ کیلو)", price: 450000 }
    ]
  },
  {
    id: 4,
    name: "آش دوغ محلی",
    category: "halim-ash",
    desc: "دوغ محلی همراه سبزی‌های معطر و سیر",
    variants: [
      { label: "پرسی", price: 220000 },
      { label: "کیلویی (۱ کیلو)", price: 400000 }
    ]
  },
  {
    id: 5,
    name: "سوپ جو",
    category: "halim-ash",
    desc: "سوپ جو خوش‌طعم و جاافتاده",
    variants: [
      { label: "پرسی (۶۰۰ گرم)", price: 220000 },
      { label: "کیلویی (۱ کیلو)", price: 420000 }
    ]
  },
  {
    id: 6,
    name: "سوپ شیر",
    category: "halim-ash",
    desc: "سوپ شیر خامه‌ای همراه قارچ و هویج",
    variants: [
      { label: "پرسی", price: 250000 },
      { label: "کیلویی (۱ کیلو)", price: 450000 }
    ]
  },

  // شله زرد و دسرها
  {
    id: 7,
    name: "شله زرد زعفرانی",
    category: "dessert",
    desc: "با زعفران درجه یک، خلال بادام و دارچین",
    variants: [
      { label: "پرسی (۴۵۰ گرم)", price: 230000 },
      { label: "کیلویی (۱ کیلو)", price: 450000 }
    ]
  },
  {
    id: 8,
    name: "فرنی سنتی",
    category: "dessert",
    desc: "با شیر تازه، هل و گلاب ناب",
    variants: [
      { label: "پرسی", price: 250000 },
      { label: "کیلویی (۱ کیلو)", price: 465000 }
    ]
  },
  {
    id: 9,
    name: "شیربرنج",
    category: "dessert",
    desc: "شیربرنج خامه‌ای و معطر به گلاب",
    variants: [
      { label: "پرسی", price: 230000 },
      { label: "کیلویی (۱ کیلو)", price: 450000 }
    ]
  },
  {
    id: 10,
    name: "حلوا شیر",
    category: "dessert",
    desc: "حلوا شیر زعفرانی و بسیار لطیف",
    variants: [
      { label: "کاسه ۱۰۰ گرمی", price: 120000 }
    ]
  },

  // خوراک و سنتی
  {
    id: 11,
    name: "خوراک عدسی",
    category: "traditional",
    desc: "عدسی داغ و جاافتاده با پیازداغ",
    variants: [
      { label: "پرسی", price: 220000 },
      { label: "کیلویی (۱ کیلو)", price: 400000 }
    ]
  },
  {
    id: 12,
    name: "خوراک لوبیا",
    category: "traditional",
    desc: "لوبیا چیتی همراه با قارچ و ادویه مخصوص",
    variants: [
      { label: "پرسی", price: 250000 },
      { label: "کیلویی (۱ کیلو)", price: 450000 }
    ]
  },
  {
    id: 13,
    name: "کشک بادمجان",
    category: "traditional",
    desc: "بادمجان سرخ‌شده همراه گردو و کشک غلیظ",
    variants: [
      { label: "پرسی (۳۰۰ گرم)", price: 280000 },
      { label: "کیلویی (۱ کیلو)", price: 800000 }
    ]
  },
  {
    id: 14,
    name: "میرزاقاسمی",
    category: "traditional",
    desc: "بادمجان دودی شمال همراه سیر و تخم‌مرغ",
    variants: [
      { label: "پرسی (۳۰۰ گرم)", price: 280000 },
      { label: "کیلویی (۱ کیلو)", price: 800000 }
    ]
  },
  {
    id: 15,
    name: "جغول بغول",
    category: "traditional",
    desc: "خوراک سنتی و پرطرفدار",
    variants: [
      { label: "پرسی (۳۰۰ گرم)", price: 320000 }
    ]
  },
  {
    id: 16,
    name: "سیرابی",
    category: "traditional",
    desc: "سیرابی تمیز و کاملاً مغزپخت",
    variants: [
      { label: "پرسی (۳۰۰ گرم)", price: 340000 }
    ]
  },
  {
    id: 17,
    name: "کوفته تبریزی",
    category: "traditional",
    desc: "کوفته تبریزی پرملات با مغز آلو و گردو",
    variants: [
      { label: "یک عدد کامل", price: 350000 }
    ]
  },
  {
    id: 18,
    name: "دلمه برگ مو",
    category: "traditional",
    desc: "دلمه برگ خانگی و لذیذ",
    variants: [
      { label: "بسته ۷ عددی", price: 298000 }
    ]
  },
  {
    id: 19,
    name: "دلمه بادمجان",
    category: "traditional",
    desc: "دلمه شکم‌پر خانگی",
    variants: [
      { label: "بسته ۲ عددی", price: 298000 }
    ]
  },
  {
    id: 20,
    name: "دلمه فلفل",
    category: "traditional",
    desc: "دلمه فلفل دلمه‌ای پرگوشت",
    variants: [
      { label: "بسته ۲ عددی", price: 298000 }
    ]
  },

  // غذای روز
  {
    id: 21,
    name: "ماکارانی ساده",
    category: "daily",
    desc: "ماکارانی خانگی با گوشت چرخ‌کرده",
    variants: [
      { label: "پرسی (۴۸۰ گرم)", price: 270000 }
    ]
  },
  {
    id: 22,
    name: "ماکارانی ویژه",
    category: "daily",
    desc: "یک پرس ماکارانی همراه با ۳ عدد دلمه برگ مو",
    variants: [
      { label: "پرس ویژه", price: 380000 }
    ]
  },
  {
    id: 23,
    name: "سالاد الویه",
    category: "daily",
    desc: "الویه مرغ تازه و خانگی",
    variants: [
      { label: "ظرف ۲۵۰ گرم", price: 250000 },
      { label: "ظرف ۵۵۰ گرم", price: 500000 },
      { label: "ظرف ۶۵۰ گرم", price: 630000 }
    ]
  },
  {
    id: 24,
    name: "سوسیس بندری",
    category: "daily",
    desc: "سوسیس بندری تند با پیاز داغ فراوان",
    variants: [
      { label: "۲۵۰ گرم", price: 300000 },
      { label: "۵۰۰ گرم", price: 580000 },
      { label: "۷۰۰ گرم", price: 700000 },
      { label: "۱ کیلوگرم", price: 980000 }
    ]
  },

  // نان و نوشیدنی
  {
    id: 25,
    name: "نان بربری تازه",
    category: "sides",
    desc: "نان داغ و کنجدی",
    variants: [
      { label: "۲ تکه (نصف بربری)", price: 14000 }
    ]
  },
  {
    id: 26,
    name: "نان لواش",
    category: "sides",
    desc: "نان نرم و تازه",
    variants: [
      { label: "بسته ۵ عددی", price: 30000 }
    ]
  },
  {
    id: 27,
    name: "دوغ محلی",
    category: "sides",
    desc: "دوغ سنتی خوش‌طعم",
    variants: [
      { label: "کوچک (تک نفره)", price: 70000 },
      { label: "بزرگ (خانواده)", price: 150000 }
    ]
  },
  {
    id: 28,
    name: "نوشابه گازدار",
    category: "sides",
    desc: "خنک در انواع طعم‌ها",
    variants: [
      { label: "قوطی کوچک", price: 60000 },
      { label: "بطری بزرگ", price: 115000 }
    ]
  }
];
