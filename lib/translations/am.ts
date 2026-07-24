export const am = {
  // Navigation
  nav: {
    home: 'ቤት',
    menu: 'ምግብ',
    gallery: 'ጋለሪ',
    location: 'ቦታ',
    contact: 'ናገር',
    visitUs: 'ይጎብኙን',
  },

  // Hero
  hero: {
    badge: 'በየቀኑ በጣም 신선한ሙሞሮ',
    headline: 'የኢትዮጵያ ምርጥ ቡና ሞክር',
    description:
      'በወለይታ ሶዶ የኢትዮጵያ ምርጥ ቡና ባህል እና ሙሙሮ ተሞክር፡፡ በፍቅር የተዘጋጀ፣ በአዝናቢ የሚቀርብ።',
    viewMenu: 'ምግብ ዝርዝር ይያዙ',
    findUs: 'ኛን ያግኙ',
    scrollExplore: 'ለመመልከት ተንሸራትቱ',
  },

  // About
  about: {
    title: 'ስለ ዩኔ ቡና',
    description:
      'ምርጥ ቡና ከመጠጥ በላይ ተሞክሮ ነው - የኢትዮጵያ ባህል እና ማህበረሰብ በሥር የተመሠረተ።',
    features: [
      {
        title: 'በርታና ምርጫ',
        description: 'ከወለይታ ክልል ትንንሸ ገበሬዎች ጋር ቀጥተኛ ንግድ',
      },
      {
        title: 'ተራቢ ዘዴዎች',
        description: 'በእያንዳንዱ ዝግጅት የኢትዮጵያ ቡና ሥነ-ሥርዓት ክብር',
      },
      {
        title: 'ማህበረሰብ ቦታ',
        description: 'የአከባቢ ባህል እና ሞግዝነትን ያክብራል በሚያሰበው ሥፍራ',
      },
      {
        title: 'ከፍተኛ ጥራት',
        description: 'በእኛ ልምድ ባለሙያ ባሪስታ ተወርውሮ እና በፍቅር ዝግጁ ነው።',
      },
    ],
    story: 'አማራችን',
    storyText1:
      'ዩኔ ቡና በወለይታ ሶዶ ሪች ቡና ባህል ክብር ለማድረግ ተመስርቷል፡፡ "ዩኔ" በአማርኛ "የኔ" ማለት ነው, ከቡና ፍቅር ጋር ሥሩ ሱቅ ብለን መስጠቱን ወሠንዋል።',
    storyText2:
      'ከአከባቢ ገበሬዎች ጋር በቀጥታ ስራ እና ባህላዊ የኢትዮጵያ ቡና ዝግጅት ዘዴ ተግባራዊ ታሪኬ ይጀምር፡፡ እያንዳንዱ ጽዋ የኢትዮጵያ ቡና ሥነ-ሥርዓት ክብር ያደርጋል ሳሌ ዘመናዊ ካፌ ባህል ይዋሃድ፡፡ ምሳሌ ስሌት ለመፈለግ ወይም ከሌሎች ጋር ለመገናኘት ቢፈልጉ, ዩኔ ቡና ዓለም ነው።',
  },

  // Menu
  menu: {
    title: 'የእኛ ምግብ ዝርዝር',
    description:
      'ከመጠን በላይ የተመረጠ መጠጥ እና ምግቦች, ሁሉንም ከከፍተኛ ግቡ ኢትዮጵያ ጥራት ጋር ዝግጁ።',
    categories: {
      coffee: 'ቡና',
      coldDrinks: 'ቀዝቅዝ መጠጥ',
      snacks: 'ቅጥያ',
    },
    items: [
      // Coffee
      {
        category: 'coffee',
        name: 'ኢስፔሬሶ',
        description: 'ውድ እና የሚገመት የኢትዮጵያ ቡና ድብልቅ',
        price: '3.50 ብር',
      },
      {
        category: 'coffee',
        name: 'ካፕቺኖ',
        description: 'ኢስፌሬሶ ለስለስ ወተት እና ሊን ፎም ጋር',
        price: '4.50 ብር',
      },
      {
        category: 'coffee',
        name: 'ላቴ',
        description: 'ለስለስ ኢስፌሬሶ ለስለስ ወተት ጋር ቀላል',
        price: '4.75 ብር',
      },
      {
        category: 'coffee',
        name: 'ማካያቶ',
        description: 'ኢስፍሬሶ "ምልክት" ልስለስ ወተት ፎም ጋር',
        price: '4.25 ብር',
      },
      {
        category: 'coffee',
        name: 'ሞካ',
        description: 'ሪች ቅኔት እና ኢስፈሬሶ ወተት ጋር',
        price: '5.00 ብር',
      },
      {
        category: 'coffee',
        name: 'ኢትዮጵያ ቡና',
        description: 'እኛ ልዩ: ባህላዊ የኢትዮጵያ ቡና ሥነ-ሥርዓት ዘዴ',
        price: '4.00 ብር',
      },
      // Cold Drinks
      {
        category: 'coldDrinks',
        name: 'ዝንጊ ላቴ',
        description: 'ተስ አርሊ ኢስፈሬሶ በበረዶ እና ወተት ጋር',
        price: '4.75 ብር',
      },
      {
        category: 'coldDrinks',
        name: 'በቀዝቅዝ የተደረደረ',
        description: 'ለስለስ ሚዛን-የተሰጠ ኢትዮጵያ ቡና ትርኢት',
        price: '4.50 ብር',
      },
      {
        category: 'coldDrinks',
        name: 'ዝንጊ ሞካ',
        description: 'ቅኔት, ኢስፈሬሶ, እና ቀዝቅዝ ወተት በበረዶ ላይ',
        price: '5.25 ብር',
      },
      // Snacks
      {
        category: 'snacks',
        name: 'ክሬሳን',
        description: 'ውድ, ሰያፍ ፋንሲ ጥቂት ቡና ጋር ምርጥ',
        price: '3.75 ብር',
      },
      {
        category: 'snacks',
        name: 'ባህላዊ ስንዴ',
        description: 'ዝተቀቆ የኢትዮጵያ ስንዴ медовой ጋር ሚሰተዋወቁ',
        price: '4.50 ብር',
      },
      {
        category: 'snacks',
        name: 'ጣፍጥ',
        description: 'ትልቅ ግራ ሥበከ አከባቢ አሰቃቂ ጋር',
        price: '2.50 ብር',
      },
      {
        category: 'snacks',
        name: 'ሳንድዊች',
        description: 'ትዝ ንጥረ ነገር ከምርጫ ሂሳብ ጋር',
        price: '7.50 ብር',
      },
    ],
  },

  // Features/Why Choose Us
  features: {
    title: 'ይህ ከእንድ ዩኔ ቡና ይምረጡ',
    premiumBeans: {
      title: 'ከፍተኛ ኢትዮጵያ ሕዋሳ',
      description:
        'ከወለይታ ክልል ገበሬዎች ጋር ቀጥተኛ ንግድ, ሐሳበ ተጠቃሚ ልምምድ ድጋፍ',
    },
    expertBaristas: {
      title: 'ባሪስታ ሙያተኞች',
      description: 'ይህ ቡና ስነ-ሥርዓት እና ሳይንስ ሊተገበር ፈልገ ልምድ ባለሙያ',
    },
    comfortableSpace: {
      title: 'ምቾት ቦታ',
      description:
        'ባህላዊ ኢትዮጵያ አጤና በሚመስል ዘመናዊ ሥፍራ, ስራ ወይም ዖዝነት ተስማሚ',
    },
    freeWifi: {
      title: 'ነጻ WiFi',
      description: 'ቡና ስ ደስተኛ ሆንክ ቀጥል ሞገስ',
    },
  },

  // Testimonials
  testimonials: {
    title: 'ከእኛ ደንበኞች ያዳምጧቸው',
    reviews: [
      {
        name: 'አበባ በቀለ',
        text: 'ከこの ታሪክ ዓይኔ የወለይታ ሶዶ ማሃከያ ቡና ሪርጅመው ወደ ውዝ አመንግሥ። ሞግዝነት ተስፈኝ ዩኔ ቡና ኤምህ ቦታ ውድ።',
        rating: 5,
      },
      {
        name: 'ዳዊድ ጫን',
        text: 'ምርጥ ቡና ስህተት በጊዜ! ባሪስታ ክብር ነው ዕውቀታቸው, ትዝ እያንዳንዱ ፃወት ውስጥ ገንዘብ ይሰማ። በጣም የታዘbefore!',
        rating: 5,
      },
      {
        name: 'ዮሃንስ ተስፋዬ',
        text: 'ዩኔ ቡና የኢትዮጵያ ሞግዝነት መንፈስ ያስተጋባ ሞሳን። ከቡና በላይ - ልዩ ተሞክሮ ነውኃ።',
        rating: 5,
      },
    ],
  },

  // Location
  location: {
    title: 'ኛን ይጎብኙ',
    description: 'በወለይታ ሶዶ ውስጥ ነው, ስህተት ተያያዘ እና ሁልጊዜ ደህና',
    address: 'ወለይታ ሶዶ, ኢትዮጵያ',
    phone: '+251-123-456-789',
    email: 'hello@yenecoffee.com',
    hours: 'ሰ-እሁ: காலை 7:00 - ምሽት 8:00',
    getDirections: 'አቅጣጫዎች ያድርጉ',
    callNow: 'አሁን ይደውሉ',
  },

  // CTA
  cta: {
    heading: 'ለበርታ ጽዋ ሬዲ?',
    description: 'ዩኔ ቡናworking በገባ ኢትዮጵያ ሞግዝነት ሞክር',
    button: 'ዛሬ ጎብኙን',
  },

  // Footer
  footer: {
    tagline:
      'የበርታ ኢትዮጵያ ቡና ባህል ወለይታ ሶዶ እና ወደ ውጭ ውጭ አስተላልፍ።',
    quickLinks: 'ፍጥንቁ ዓላዮች',
    hours: 'ሰዓት',
    followUs: 'ዋቅ ወረራ',
    privacyPolicy: 'ግላዊ ፖሊሲ',
    termsOfService: 'አገልግሎት ስምምነት',
  },
};
