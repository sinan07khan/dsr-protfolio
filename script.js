/**
 * ==============================================================================
 * 🏥 DR. SAZZADUR RAHMAN RUMON - OFFICIAL WEBSITE SCRIPT
 * Apple-Style Fluid Glass Experience (Bilingual: Bengali & English)
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 1. DATA DICTIONARIES (Bilingual: Bengali & English)
// ------------------------------------------------------------------------------
const siteContent = {
  // ----------------------------------------------------------------------------
  // [BENGALI CONTENT] - বাংলা কন্টেন্ট
  // ----------------------------------------------------------------------------
  bn: {
    // নেভিগেশন
    navHome: "হোম",
    navChambers: "চেম্বার সমূহ",
    navScreener: "স্বাস্থ্য স্ক্রিনার",
    navTreatments: "চিকিৎসা সেবা",
    navHealthTips: "স্বাস্থ্য টিপস",
    navBio: "পরিচিতি",
    navTesti: "রোগীদের আস্থা",
    navFAQ: "সাধারণ প্রশ্ন",
    btnTakeSerial: "সিরিয়াল নিন",
    callHotline: "হটলাইনে কল করুন",
    themeToggleLight: "লাইট মোড",
    themeToggleDark: "ডার্ক মোড",

    // হিরো সেকশন
    heroBadge: "নিবন্ধিত সরকারি চিকিৎসক • বিসিএস (স্বাস্থ্য)",
    heroTitle: "ডাঃ সাজ্জাদুর রহমান রুমন",
    heroSub: "এমবিবিএস (ডিএমসি), বিসিএস (স্বাস্থ্য), সিসিডি (বারডেম), সিএমইউ (আল্ট্রা), এম-ফিল (কোর্স)",
    heroMission: "মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ চিকিৎসক। প্রভাষক, ফিজিওলজি বিভাগ, শহীদ জিয়াউর রহমান মেডিকেল কলেজ (SZMC), বগুড়া।",
    heroExpVal: "১২+ বছর",
    heroExpLabel: "অভিজ্ঞতা",
    heroPatientsVal: "১৫,০০০+",
    heroPatientsLabel: "সুস্থ রোগী",
    heroRatingVal: "৯৯%",
    heroRatingLabel: "রোগী সন্তুষ্টি",
    bmdcBadge: "BMDC Reg No. A-84951",
    bmdcVerified: "সরকারী নিবন্ধিত চিকিৎসক",
    heroCtaSerial: "অনলাইন সিরিয়াল বুকিং",
    heroCtaCall: "সরাসরি হটলাইন কল",

    // চেম্বার ও সিরিয়াল হেল্পলাইন
    chambersTitle: "চেম্বার ও সিরিয়াল হেল্পলাইন",
    chambersSubtitle: "আপনার সুবিধাজনক সময়ে সরাসরি চেম্বারে সাক্ষাতের জন্য কল করুন বা সিরিয়াল বুক করুন।",
    
    // চেম্বার ১: অক্সিজেন হেলথকেয়ার
    c1Tag: "চেম্বার ১ • সক্রিয় চেম্বার",
    c1Name: "Oxygen Health Care (অক্সিজেন হেলথকেয়ার)",
    c1Location: "গাবতলী, বগুড়া",
    c1Phone: "01302-031077",
    c1Hours: "শনি থেকে বুধ: বিকাল ৩:৩০ টা | শুক্রবার সকাল ৯:০০ টা",
    
    // চেম্বার ২: এলিট ডায়াগনস্টিক
    c2Tag: "চেম্বার ২ • সক্রিয় চেম্বার",
    c2Name: "Elite Diagnostic & Consultation Center (এলিট ডায়াগনস্টিক)",
    c2Location: "ইয়ারকুবিয়া মোড়, শেরপুর রোড, বগুড়া",
    c2Phone: "01735 164 172",
    c2Hours: "সিরিয়ালের জন্য ফোন করুন",
    
    btnCallNow: "সরাসরি কল করুন",
    btnCopyNumber: "কপি নম্বর",
    btnGoogleMaps: "ম্যাপে লোকেশন",
    copiedText: "নম্বর কপি হয়েছে!",

    // ইন্টারেক্টিভ স্বাস্থ্য স্ক্রিনার
    screenerSectionTitle: "ইন্টারেক্টিভ হেলথ স্ক্রিনার",
    screenerSectionSubtitle: "আপনার বিএমআই (BMI), মেটাবলিক ঝুঁকি ও ডায়াবেটিস সম্ভাবনা দ্রুত যাচাই করুন।",
    screenerHeightLabel: "আপনার উচ্চতা:",
    screenerWeightLabel: "আপনার ওজন:",
    screenerSugarLabel: "রক্তে গ্লুকোজ লেভেল (ঐচ্ছিক - mmol/L):",
    screenerResultTitle: "আপনার স্বাস্থ্য মূল্যায়ন",
    screenerAdviceBtn: "চিকিৎসকের সাথে পরামর্শের জন্য সিরিয়াল নিন",

    // চিকিৎসা সেবা
    treatmentsTitle: "চিকিৎসা ও সেবা সমূহ",
    treatmentsSubtitle: "মেটাবলিক রোগ নিরাময়, দীর্ঘমেয়াদী অসুস্থতার সঠিক থেরাপি ও ব্যক্তিগত স্বাস্থ্য পরিকল্পনা।",
    approachTitle: "আমাদের আধুনিক ক্লিনিকাল পদ্ধতি",
    approachDesc: "প্রতিটি পরামর্শ রোগীর বিস্তৃত ইতিহাস পর্যালোচনা, সহজ ভাষায় রোগ বুঝিয়ে দেওয়া এবং পরিমিত ওষুধের সাহায্যে স্থায়ী নিরাময় নিশ্চিত করতে পরিচালিত হয়।",
    
    // স্বাস্থ্য টিপস
    tipsTitle: "রোগী স্বাস্থ্য শিক্ষা ও সচেতনতা",
    tipsSubtitle: "সুস্থ থাকতে কার্যকর ঘরোয়া টিপস, বৈজ্ঞানিক ডায়েট এবং রোগ প্রতিরোধের সুনির্দিষ্ট পরামর্শ।",
    tipsSearchPlaceholder: "স্বাস্থ্য টিপস বা লক্ষণ খুঁজুন...",
    filterAll: "সব টিপস",
    filterLifestyle: "জীবনযাত্রা ও ডায়েট",
    filterPrevention: "রোগ প্রতিরোধ",
    filterSeasonal: "মৌসুমী রোগ",
    readArticle: "সম্পূর্ণ পড়ুন",
    closeArticle: "বন্ধ করুন",

    // বায়ো ও পরিচিতি
    bioTitle: "চিকিৎসক প্রোফাইল ও ক্যারিয়ার",
    bioSubtitle: "ডাঃ সাজ্জাদুর রহমান রুমনের শিক্ষাগত যোগ্যতা, চিকিৎসাসেবার আদর্শ ও অভিজ্ঞতার মাইলফলক।",
    bioHeading: "সহানুভূতি ও আধুনিক চিকিৎসা বিজ্ঞানের সমন্বয়",
    bioP1: "ডাঃ সাজ্জাদুর রহমান রুমন বগুড়ার একজন অত্যন্ত সুপরিচিত ও দক্ষ মেডিসিন ও ডায়াবেটিস চিকিৎসক। বাংলাদেশ সিভিল সার্ভিস (বিসিএস স্বাস্থ্য) ক্যাডার কর্মকর্তা এবং শহীদ জিয়াউর রহমান মেডিকেল কলেজ (SZMC), বগুড়ার ফিজিওলজি বিভাগের প্রভাষক হিসেবে তিনি রোগী ও শিক্ষার্থীদের সেবায় নিজেকে নিয়োজিত রেখেছেন।",
    bioP2: "তিনি কেবল প্রেসক্রিপশন নির্ভর চিকিৎসায় বিশ্বাসী নন; বরং রোগীদের জীবনযাত্রার মান পরিবর্তন, পরিমিত পুষ্টি এবং সুষম খাদ্য তালিকার মাধ্যমে ডায়াবেটিস ও মেটাবলিক স্বাস্থ্য সুরক্ষার বৈজ্ঞানিক পরামর্শ প্রদানে বিশেষভাবে কাজ করেন। অপ্রয়োজনীয় ওষুধ এড়িয়ে চলার পক্ষপাতী তিনি।",
    
    // টেস্টিমোনিয়াল
    testiTitle: "রোগীদের আস্থা ও অভিজ্ঞতা",
    testiSubtitle: "ডাঃ সাজ্জাদুর রহমান রুমনের চিকিৎসাসেবায় সুস্থ হওয়া সাধারণ রোগীদের কিছু প্রতিক্রিয়া।",

    // জরুরি মেডিকেল সতর্কতা
    emergencyTitle: "জরুরি স্বাস্থ্য সতর্কতা",
    emergencyDesc: "হঠাৎ তীব্র বুকব্যথা, প্রচণ্ড শ্বাসকষ্ট, শরীরের একপাশ অবশ বা অচেতন হওয়ার মতো ঝুঁকিপূর্ণ লক্ষণে দেরি না করে তাৎক্ষণিক সরকারি বা নিকটস্থ হাসপাতালের জরুরি বিভাগে যোগাযোগ করুন।",

    // এফএকিউ (FAQ)
    faqTitle: "সাধারণ জিজ্ঞাসা (FAQ)",
    faqSubtitle: "ভিজিট ফি, সরাসরি সিরিয়াল পাওয়ার নিয়ম ও প্রেসক্রিপশন সংক্রান্ত সাধারণ উত্তরসমূহ।",

    // সিরিয়াল বুকিং মোডাল
    modalTitle: "স্মার্ট চেম্বার সিরিয়াল বুকিং",
    modalSubtitle: "হটলাইনে সরাসরি কল করুন অথবা হোয়াটসঅ্যাপে তাৎক্ষণিক সিরিয়াল বুক করুন",
    modalTabCall: "সরাসরি ফোন কল",
    modalTabWA: "হোয়াটসঅ্যাপে সিরিয়াল",
    formName: "রোগীর নাম",
    formPhone: "মোবাইল নম্বর",
    formAge: "বয়স (বছর)",
    formChamber: "চেম্বার নির্বাচন করুন",
    formDate: "সাক্ষাতের কাঙ্ক্ষিত তারিখ",
    formProblem: "সমস্যার সংক্ষিপ্ত বিবরণ (যেমন: ডায়াবেটিস, প্রেশার, জ্বর)",
    btnSendWA: "হোয়াটসঅ্যাপে সিরিয়াল পাঠান",
    btnCopyWAMsg: "মেসেজ কপি করুন",
    modalClose: "বন্ধ করুন",
    
    // ফুটার
    footerDesc: "মেডিসিন ও ডায়াবেটিস চিকিৎসক, প্রভাষক, শহীদ জিয়াউর রহমান মেডিকেল কলেজ, বগুড়া।",
    footerReg: "শহীদ জিয়াউর রহমান মেডিকেল কলেজ (SZMC) বগুড়া থেকে নিবন্ধিত এবং বিসিএস (স্বাস্থ্য) ক্যাডার কর্মকর্তা। বিএমডিসি রেজিঃ নং A-84951",
    footerHours: "রোগী দেখার সময়: শনি থেকে বুধ বিকাল ৩:৩০ টা | শুক্রবার সকাল ৯:০০ টা",
    footerRights: "সর্বস্বত্ব সংরক্ষিত। ডাঃ সাজ্জাদুর রহমান রুমন।"
  },

  // ----------------------------------------------------------------------------
  // [ENGLISH CONTENT] - ইংরেজি কন্টেন্ট
  // ----------------------------------------------------------------------------
  en: {
    // Navigation
    navHome: "Home",
    navChambers: "Chambers",
    navScreener: "Health Screener",
    navTreatments: "Treatments",
    navHealthTips: "Health Tips",
    navBio: "Bio & Timeline",
    navTesti: "Testimonials",
    navFAQ: "FAQ",
    btnTakeSerial: "Get Serial",
    callHotline: "Call Hotline",
    themeToggleLight: "Light Mode",
    themeToggleDark: "Dark Mode",

    // Hero Section
    heroBadge: "Registered Government Physician • BCS (Health)",
    heroTitle: "Dr. Sazzadur Rahman Rumon",
    heroSub: "MBBS (DMC), BCS (Health), CCD (BIRDEM), CMU (Ultra), M-Phil (Course)",
    heroMission: "Medicine & Diabetes Specialist Physician. Lecturer, Department of Physiology, Shaheed Ziaur Rahman Medical College (SZMC), Bogura.",
    heroExpVal: "12+ Years",
    heroExpLabel: "Experience",
    heroPatientsVal: "15,000+",
    heroPatientsLabel: "Happy Patients",
    heroRatingVal: "99%",
    heroRatingLabel: "Patient Satisfaction",
    bmdcBadge: "BMDC Reg No. A-84951",
    bmdcVerified: "Official Government Verified",
    heroCtaSerial: "Book Online Serial",
    heroCtaCall: "Direct Hotline Call",

    // Chambers Section
    chambersTitle: "Chamber Locations & Serial Hotline",
    chambersSubtitle: "Call our chamber desks directly to confirm your consultation schedule or book advance slots.",
    
    // Chamber 1: Oxygen Health Care
    c1Tag: "CHAMBER ONE • ACTIVE",
    c1Name: "Oxygen Health Care",
    c1Location: "Gabtali, Bogura",
    c1Phone: "01302-031077",
    c1Hours: "Sat - Wed: 3:30 PM | Friday: 9:00 AM",
    
    // Chamber 2: Elite Diagnostic
    c2Tag: "CHAMBER TWO • ACTIVE",
    c2Name: "Elite Diagnostic & Consultation Center",
    c2Location: "Yarkubia More, Sherpur Road, Bogura",
    c2Phone: "01735 164 172",
    c2Hours: "Call for available consultation slots",
    
    btnCallNow: "Call Hotline Now",
    btnCopyNumber: "Copy",
    btnGoogleMaps: "View on Map",
    copiedText: "Number Copied!",

    // Health Screener
    screenerSectionTitle: "Interactive Health & BMI Screener",
    screenerSectionSubtitle: "Analyze your BMI, metabolic category, and diabetes risk profile with instant clinical guidance.",
    screenerHeightLabel: "Your Height:",
    screenerWeightLabel: "Your Weight:",
    screenerSugarLabel: "Blood Glucose Level (Optional - mmol/L):",
    screenerResultTitle: "Your Health Assessment",
    screenerAdviceBtn: "Book Consultation with Dr. Rumon",

    // Treatments Section
    treatmentsTitle: "Treatments & Clinical Services",
    treatmentsSubtitle: "Comprehensive metabolic screening, chronic disease protocols, and personalized health guidance.",
    approachTitle: "Evidence-Based Clinical Approach",
    approachDesc: "Every consultation is supported by thorough evaluations, patient empowerment, and minimal rational drug prescriptions.",
    
    // Health Tips Section
    tipsTitle: "Patient Health Education",
    tipsSubtitle: "Empowering tips, dietary hacks, and preventive medical guidance for you and your family.",
    tipsSearchPlaceholder: "Search health tips or symptoms...",
    filterAll: "All Articles",
    filterLifestyle: "Lifestyle & Diet",
    filterPrevention: "Prevention",
    filterSeasonal: "Seasonal Health",
    readArticle: "Read Full Article",
    closeArticle: "Close Article",

    // Bio & Career
    bioTitle: "Physician Profile & Career",
    bioSubtitle: "Learn about Dr. Rumon's academic credentials, clinical ethos, and service milestones.",
    bioHeading: "A Journey Rooted in Patient Compassion & Modern Science",
    bioP1: "Dr. Sazzadur Rahman Rumon is a highly regarded General Medicine and Diabetes specialist in Bogura, Bangladesh. As an officer of the Bangladesh Civil Service (BCS Health) and Lecturer at Shaheed Ziaur Rahman Medical College (SZMC), he serves patients and medical students with devotion.",
    bioP2: "His practice merges precise diagnostic evidence with holistic lifestyle modifications. He believes in using minimal, rational drug interventions while educating families on chronic disease self-management, nutritional optimization, and metabolic health.",
    
    // Testimonials
    testiTitle: "Patient Stories & Trust",
    testiSubtitle: "Real experiences of patients recovering with compassionate, rational medicine under Dr. Rumon's care.",

    // Emergency Notice
    emergencyTitle: "Emergency Health Notice",
    emergencyDesc: "For acute emergencies such as sudden crushing chest pain, extreme breathlessness, or stroke symptoms, please head immediately to the nearest hospital emergency room.",

    // FAQ
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Quick answers about clinic timings, consultation fees, and appointment preparations.",

    // Modal
    modalTitle: "Smart Chamber Serial Assistant",
    modalSubtitle: "Directly call our hotlines or generate a formatted WhatsApp serial request",
    modalTabCall: "Direct Phone Call",
    modalTabWA: "WhatsApp Booking",
    formName: "Patient Name",
    formPhone: "Contact Phone",
    formAge: "Age (Years)",
    formChamber: "Select Chamber",
    formDate: "Preferred Date",
    formProblem: "Brief Symptoms / Concern",
    btnSendWA: "Send Booking via WhatsApp",
    btnCopyWAMsg: "Copy Formatted Message",
    modalClose: "Close",
    
    // Footer
    footerDesc: "Medicine & Diabetes Specialist Physician. Lecturer, Shaheed Ziaur Rahman Medical College, Bogura.",
    footerReg: "Registered with BMDC (Reg No. A-84951) and Officer of Bangladesh Civil Service (BCS Health).",
    footerHours: "Consultation Hours: Sat - Wed 3:30 PM | Fri 9:00 AM",
    footerRights: "All Rights Reserved. Dr. Sazzadur Rahman Rumon."
  }
};


// ------------------------------------------------------------------------------
// 2. TREATMENTS DATA
// ------------------------------------------------------------------------------
const treatmentsData = {
  bn: [
    {
      id: "t1",
      icon: "activity",
      category: "ডায়াবেটিস ও মেটাবলিজম",
      title: "উন্নত ডায়াবেটিস নিয়ন্ত্রণ ও রেমিশন কেয়ার",
      description: "ইনসুলিন রেজিস্ট্যান্স হ্রাস, কার্বোহাইড্রেট নিয়ন্ত্রণ ও বিজ্ঞানসম্মত জীবনযাত্রার মাধ্যমে টাইপ-২ ডায়াবেটিস সম্পূর্ণ নিয়ন্ত্রণে রাখার আধুনিক চিকিৎসা কার্যক্রম।",
      treats: "ঘন ঘন প্রস্রাব, অতিরিক্ত পিপাসা, আকস্মিক ওজন হ্রাস, দুর্বলতা ও উচ্চ HbA1c",
      expect: "মেটাবলিক পয়েন্ট যাচাই, কাস্টমাইজড ডায়েট চার্ট, নিয়মিত গ্লুকোজ লেভেল ট্র্যাকিং ও পরিমিত ওষুধের সমন্বয়।",
      duration: "১ থেকে ৩ মাস সুনির্দিষ্ট ফলো-আপ প্রোগ্রাম"
    },
    {
      id: "t2",
      icon: "heart-pulse",
      category: "হৃদরোগ ও রক্তচাপ",
      title: "উচ্চ রক্তচাপ ও হৃদরোগের ঝুঁকি পরীক্ষা",
      description: "রক্তচাপের গভীর কারণ অনুসন্ধান, লিপিড প্রোফাইল (রক্তের চর্বি) বিশ্লেষণ, মানসিক অবসাদ কমানো এবং ধমনীর স্থিতিস্থাপকতা বাড়ানোর চিকিৎসা গাইডলাইন।",
      treats: "মাথা ঘোরা, ঘাড় ব্যথা, বুক ধড়ফড় করা, উচ্চ কোলেস্টেরল এবং হৃদযন্ত্রের ক্লান্তি",
      expect: "চেম্বারে সূক্ষ্ম প্রেশার পর্যবেক্ষণ, ড্যাশ (DASH) লো-সোডিয়াম ডায়েট চার্ট এবং হৃদরোগ প্রতিরোধে প্রয়োজনীয় দিকনির্দেশনা।",
      duration: "২ সপ্তাহের মধ্যে রক্তচাপ নিয়ন্ত্রণ, ৩ মাস পর পর চেকআপ"
    },
    {
      id: "t3",
      icon: "wind",
      category: "ফুসফুস ও শ্বাসযন্ত্র",
      title: "হাঁপানি, অ্যালার্জি ও ফুসফুসের যত্ন (COPD)",
      description: "ঋতুভিত্তিক হাঁপানি, ব্রঙ্কাইটিস এবং ক্রনিক কাশির সঠিক কারণ যাচাই করে সঠিক ইনহেলার ব্যবহার শেখানো ও অ্যালার্জি প্রতিরোধ করা।",
      treats: "ধুলোবালিতে দীর্ঘমেয়াদী হাঁচি-কাশি, শ্বাসকষ্ট, ভোরে বুকে সাঁই সাঁই শব্দ হওয়া ও বুকের ভারী ভাব",
      expect: "ইনহেলার ব্যবহারের সঠিক কৌশল শেখানো, অ্যালার্জি সৃষ্টিকারী নিয়ামক সনাক্তকরণ এবং ওষুধের সঠিক মাত্রা নির্ধারণ।",
      duration: "৩ থেকে ৫ দিনের মধ্যে আরাম, দীর্ঘমেয়াদী মৌসুমী গাইড"
    },
    {
      id: "t4",
      icon: "stethoscope",
      category: "পারিবারিক মেডিসিন",
      title: "পারিবারিক সাধারণ স্বাস্থ্য ও ফিভার ম্যানেজমেন্ট",
      description: "সব বয়সী পরিবারের সদস্যদের জ্বর, গ্যাস্ট্রিক, কোষ্ঠকাঠিন্য, পেটের সমস্যা এবং শিশুদের সঠিক বৃদ্ধি ও পুষ্টির নিশ্চয়তা প্রদানকারী সমন্বিত চিকিৎসা সেবা।",
      treats: "একটানা ভাইরাল জ্বর, ডেঙ্গু/টাইফয়েড পরবর্তী দুর্বলতা, আইবিএস ও পেটের সমস্যা এবং পুষ্টির ঘাটতি",
      expect: "আন্তরিক পরিবেশে চেকআপ, বয়স ও ওজনের সাথে মিলিয়ে সুনির্দিষ্ট ডোজ নির্ধারণ এবং অভিভাবকদের পূর্ণ গাইডলাইন।",
      duration: "৫ থেকে ৭ দিনের মধ্যে সম্পূর্ণ উপশম"
    }
  ],
  en: [
    {
      id: "t1",
      icon: "activity",
      category: "Diabetes & Metabolism",
      title: "Advanced Diabetology & Remission Care",
      description: "In-depth metabolic panel reviews, insulin tailoring, and structured programs targeting Type 2 Diabetes control through targeted nutrition and lifestyle.",
      treats: "Frequent urination, unexplained weight loss, blurred vision, insulin resistance, HbA1c control",
      expect: "Baseline health evaluation, custom nutrition planner, daily glucose logs review, and rational dose titrations.",
      duration: "1 to 3 months continuous tracking for stability"
    },
    {
      id: "t2",
      icon: "heart-pulse",
      category: "Cardiovascular & Pressure",
      title: "Hypertension & Cardiovascular Assessment",
      description: "Comprehensive blood pressure tracking, cardiovascular risk calculator profiles, fatty acid profiles, and customized stress and arterial elasticity protocols.",
      treats: "Chronic high blood pressure, pounding chest feelings, morning dizziness, high triglycerides",
      expect: "At-chamber BP screening, arterial screening checklist, personalized low-sodium DASH cooking charts.",
      duration: "Immediate control in 2 weeks, quarterly recheck"
    },
    {
      id: "t3",
      icon: "wind",
      category: "Pulmonary & Respiratory",
      title: "Asthma, COPD & Respiratory Care",
      description: "Diagnosis and management of seasonal allergies, bronchial asthma, and chronic obstructive pulmonary diseases through proper inhaler techniques and pulmonary hygiene.",
      treats: "Persistent dry wheezing cough, chest tightness, morning sneezing, dust allergies, seasonal breathlessness",
      expect: "Peak-flow checking, correction of inhaler or spacer techniques, allergy trigger identification charts.",
      duration: "Acute relief in 3-5 days, seasonal maintenance advice"
    },
    {
      id: "t4",
      icon: "stethoscope",
      category: "Family Medicine",
      title: "Comprehensive Family & Pediatric Medicine",
      description: "Holistic general medicine checks for all ages. Addresses acute fevers, respiratory infections, stomach issues, and growth optimization in growing toddlers.",
      treats: "Prolonged high fever, Dengue/Typhoid recovery, IBS & food allergies, childhood micro-nutrient deficiency",
      expect: "Warm, non-intimidating pediatric examination, precise weight-based dosage metrics, and parental counseling.",
      duration: "Symptom resolution in 5-7 days"
    }
  ]
};


// ------------------------------------------------------------------------------
// 3. HEALTH TIPS DATA
// ------------------------------------------------------------------------------
const healthTipsData = {
  bn: [
    {
      id: "tip1",
      category: "lifestyle",
      title: "প্রাকৃতিকভাবে টাইপ-২ ডায়াবেটিস নিয়ন্ত্রণে ৫টি সহজ বৈজ্ঞানিক নিয়ম",
      excerpt: "ডায়াবেটিস নিয়ন্ত্রণ ৮০% পুষ্টি ও সঠিক জীবনযাত্রার ওপর নির্ভর করে। জেনে নিন কীভাবে কার্বোহাইড্রেট নিয়ন্ত্রণ ও পেশী শক্তিশালী করে HbA1c কমাবেন।",
      readTime: "৪ মিনিট পাঠ",
      content: `অতিরিক্ত ওষুধের ওপর নির্ভর না করে শুধুমাত্র সঠিক বৈজ্ঞানিক অভ্যাস গড়ে তোলার মাধ্যমে টাইপ-২ ডায়াবেটিস সম্পূর্ণ নিয়ন্ত্রণে আনা সম্ভব।
<br><br>
<strong>১. শর্করা নিয়ন্ত্রণ:</strong> চিনি, কৃত্রিম মিষ্টি, কোমল পানীয়, সাদা ভাত এবং ময়দার খাবার কমান। এর বদলে শাকসবজি ও ডাল জাতীয় জটিল ফাইবার বেছে নিন।
<br><br>
<strong>২. পেশীর ব্যায়াম:</strong> শরীরের পেশীগুলো গ্লুকোজ শোষণের সবচেয়ে বড় ভাণ্ডার। সপ্তাহে ৩-৪ দিন হালকা ফ্রি-হ্যান্ড ব্যায়াম করলে ইনসুলিন ছাড়াই পেশী রক্ত থেকে অতিরিক্ত চিনি শোষণ করে।
<br><br>
<strong>৩. ইন্টারমিটেন্ট ফাস্টিং:</strong> রাতের খাবার রাত ৮:০০ টার মধ্যে শেষ করে পরদিন সকাল ১০:০০ টায় প্রথম খাবার খেলে ইনসুলিন রেজিস্ট্যান্স উল্লেখযোগ্য হারে কমে।
<br><br>
<strong>৪. পর্যাপ্ত ঘুম:</strong> প্রতি রাতে ৭-৮ ঘণ্টা গভীর ঘুম শরীরের কর্টিসল হরমোন কমায় এবং রক্তে গ্লুকোজের মাত্রা স্বাভাবিক রাখতে সাহায্য করে।
<br><br>
<strong>৫. নিয়মিত গ্লুকোজ মাপা:</strong> ডাক্তারের গাইডলাইনে গ্লুকোজ লেভেল ট্র্যাক করে পর্যায়ক্রমে ওষুধের মাত্রা সমন্বয় করুন।`
    },
    {
      id: "tip2",
      category: "prevention",
      title: "উচ্চ রক্তচাপ: আমাদের ঘরের নীরব ঘাতককে চেনার উপায়",
      excerpt: "উচ্চ রক্তচাপের শুরুর দিকে কোনো লক্ষণ থাকে না, যা পরবর্তীতে স্ট্রোক ও হার্ট ফেইলিউরের কারণ হতে পারে। ওষুধ ছাড়া প্রেশার কমানোর মূল স্তম্ভগুলো জানুন।",
      readTime: "৩ মিনিট পাঠ",
      content: `উচ্চ রক্তচাপ বা হাইপারটেনশন-কে 'নীরব ঘাতক' বলা হয় কারণ এটি ধমনীর ভেতরের দেয়ালকে আস্তে আস্তে ড্যামেজ করে কোনো কষ্ট ছাড়াই। পরবর্তীতে হঠাৎ করে ব্রেইন স্ট্রোক বা হার্ট অ্যাটাক ডেকে আনে।
<br><br>
<strong>হার্ট সুস্থ রাখার জরুরি পরামর্শ:</strong>
<br>• তরকারিতে অতিরিক্ত কাঁচা লবণ খাওয়া পরিহার করুন। প্যাকেটজাত খাবার ও ফাস্টফুডে প্রচুর সোডিয়াম থাকে।
<br>• পটাশিয়াম সমৃদ্ধ খাবার (ডাব, কলা, পালং শাক) বাড়ান, যা প্রাকৃতিকভাবে রক্তনালী শিথিল করে।
<br>• দৈনিক ১০ মিনিট ধীরে ধীরে দীর্ঘশ্বাস নেওয়ার অভ্যাস করুন, যা মানসিক চাপ দ্রুত কমায়।
<br>• প্রতিদিন অন্তত ৩০ মিনিট দ্রুত হাঁটার অভ্যাস গড়ে তুলুন।`
    },
    {
      id: "tip3",
      category: "seasonal",
      title: "বর্ষাকালীন সতর্কতা: ডেঙ্গু ও ভাইরাল জ্বর প্রতিরোধে চিকিৎসকের জরুরি নির্দেশিকা",
      excerpt: "বাংলাদেশে বর্ষাকালে এডিস মশার প্রকোপ মারাত্মকভাবে বৃদ্ধি পায়। ডেঙ্গুর আশঙ্কাজনক লক্ষণসমূহ এবং সঠিক তরল খাবার গ্রহণের নিয়মগুলো জানুন।",
      readTime: "৫ মিনিট পাঠ",
      content: `বর্ষাকালে ডেঙ্গু জ্বর একটি বড় স্বাস্থ্যঝুঁকি। সঠিক সময়ে সঠিক তরল খাবার গ্রহণের মাধ্যমে বড় বিপদ এড়ানো যায়।
<br><br>
<strong>১. পর্যাপ্ত তরল খাবার গ্রহণ:</strong> রোগীকে প্রচুর ওরস্যালাইন, ডাবের পানি, ডালের পানি এবং স্যুপ পান করান। দিনে অন্তত ৫ বার রোগী প্রস্রাব করছে কিনা খেয়াল রাখুন।
<br><br>
<strong>২. ব্যথানাশক ওষুধ কখনো নয়:</strong> ডেঙ্গুর কারণে শরীর ও হাড়ে তীব্র ব্যথা হলেও কেবল প্যারাসিটামল গ্রহণ করবেন। ভুলেও আইবুপ্রোফেন, ডাইক্লোফেনাক বা অ্যাসপিরিন জাতীয় ব্যথানাশক ওষুধ খাবেন না!
<br><br>
<strong>৩. ডেঞ্জার সাইন:</strong> অনবরত বমি, তীব্র পেটব্যথা, দাঁতের মাড়ি বা নাক দিয়ে রক্তক্ষরণ হলে সাথে সাথে জরুরি বিভাগে নিন।
<br><br>
<strong>৪. মশার উৎস ধ্বংস:</strong> জমে থাকা স্বচ্ছ পানি ৩ দিনের মধ্যে পরিষ্কার করুন এবং দিনে ঘুমালেও মশারি ব্যবহার করুন।`
    }
  ],
  en: [
    {
      id: "tip1",
      category: "lifestyle",
      title: "5 Simple Rules for Reversing Type-2 Diabetes Naturally",
      excerpt: "Diabetes management is 80% nutrition and lifestyle. Discover how smart carbohydrate restriction and muscular strength can drastically lower your HbA1c.",
      readTime: "4 min read",
      content: `Putting Type-2 Diabetes into clinical control is achievable with science-backed habits:
<br><br>
<strong>1. Prioritize Intelligent Carb Restriction:</strong> Eliminate refined sugars, sweetened beverages, white rice, and flour products. Replace them with high-fiber leafy greens and pulses.
<br><br>
<strong>2. Engage in Resistance Training:</strong> Muscles are your largest glucose disposal sinks. Bodyweight exercises 3-4 days a week allow muscles to utilize sugar without excess insulin.
<br><br>
<strong>3. Incorporate Intermittent Fasting:</strong> Finishing dinner by 8 PM and breaking fast at 10 AM (14-hour window) significantly reduces insulin resistance.
<br><br>
<strong>4. Ensure 7-8 Hours of Deep Sleep:</strong> Poor sleep releases cortisol, which commands the liver to dump stored glucose into your blood.
<br><br>
<strong>5. Regular Glucose Logging:</strong> Review glucose logs with Dr. Rumon to safely taper medication dosages over time.`
    },
    {
      id: "tip2",
      category: "prevention",
      title: "Understanding High Blood Pressure: The Silent Killer in Our Homes",
      excerpt: "High blood pressure rarely shows early symptoms, yet causes stroke and heart failure. Learn the non-pharmacological pillars to shield your heart.",
      readTime: "3 min read",
      content: `Hypertension is termed a 'Silent Killer' because it gradually damages arterial walls without noticeable early pain.
<br><br>
<strong>Vital Risk Management Steps:</strong>
<br>• Limit added table salt to under 1 teaspoon daily and cut out ultra-processed snacks.
<br>• Boost potassium intake via coconut water, bananas, tomatoes, and spinach.
<br>• Practice paced deep breathing (4-7-8 breathing) for 10 minutes to suppress stress hormones.
<br>• Walk briskly for 30 minutes daily to naturally improve arterial elasticity.`
    },
    {
      id: "tip3",
      category: "seasonal",
      title: "Seasonal Safeguards: Essential Guidelines Against Dengue and Chikungunya",
      excerpt: "Monsoon seasons bring a heavy rise in Aedes mosquitoes. Learn medical rules for severe symptom warnings and optimal hydration care.",
      readTime: "5 min read",
      content: `Dengue fever represents a critical medical threat during monsoons. Early recognition and hydration save lives:
<br><br>
<strong>1. Aggressive Hydration:</strong> Drink plenty of Oral Rehydration Solution (ORS), coconut water, and soups. Ensure patient urinates at least 5 times in 24 hours.
<br><br>
<strong>2. Never Take NSAID Painkillers:</strong> Only take Paracetamol for fever. NEVER take Ibuprofen, Diclofenac, Naproxen, or Aspirin, as they provoke internal hemorrhage.
<br><br>
<strong>3. Watch for Critical Warning Signs:</strong> Persistent vomiting, severe abdominal pain, bleeding gums, or extreme lethargy demand immediate emergency hospitalization.
<br><br>
<strong>4. Eradicate Mosquito Breeding:</strong> Empty stagnant water pots every 3 days and always sleep under bed nets.`
    }
  ]
};


// ------------------------------------------------------------------------------
// 4. TIMELINE DATA
// ------------------------------------------------------------------------------
const timelineData = {
  bn: [
    { year: "২০১২", title: "মেডিসিন ও সার্জারি স্নাতক (MBBS)", inst: "ঢাকা মেডিকেল কলেজ (DMC)", desc: "বাংলাদেশের শীর্ষতম মেডিকেল প্রতিষ্ঠান থেকে কৃতিত্বের সাথে ডিগ্রি অর্জন।" },
    { year: "২০১৪", title: "বিসিএস (স্বাস্থ্য) ক্যাডার কমিশন", inst: "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার", desc: "বিসিএস কর্মকর্তা হিসেবে সরকারি স্বাস্থ্যসেবায় নিয়োজিত হন।" },
    { year: "২০১৬ - ২০১৯", title: "প্রাক্তন প্রভাষক, ফরেনসিক মেডিসিন", inst: "আর্মি মেডিকেল কলেজ, বগুড়া সেনানিবাস", desc: "ভবিষ্যৎ সেনা চিকিৎসকদের চিকিৎসাবিজ্ঞান ও ডায়াগনস্টিকস বিষয়ে পাঠদান করেন।" },
    { year: "২০১৯ - ২০২১", title: "মেডিকেল অফিসার (৩৯তম বিসিএস)", inst: "গাবতলী উপজেলা স্বাস্থ্য কমপ্লেক্স, বগুড়া", desc: "তৃণমূল পর্যায়ে ফ্রন্টলাইন চিকিৎসক হিসেবে ব্যাপক জনস্বাস্থ্য সেবা প্রদান করেন।" },
    { year: "২০২৩ - বর্তমান", title: "প্রভাষক, ফিজিওলজি বিভাগ", inst: "শহীদ জিয়াউর রহমান মেডিকেল কলেজ (SZMC), বগুড়া", desc: "এমবিবিএস শিক্ষার্থীদের পাঠদান এবং চেম্বারে মেডিসিন ও ডায়াবেটিস রোগীদের নিরবচ্ছিন্ন সেবা প্রদান।" }
  ],
  en: [
    { year: "2012", title: "Bachelor of Medicine & Surgery (MBBS)", inst: "Dhaka Medical College (DMC)", desc: "Graduated in Medicine with excellence from Bangladesh's premier medical institution." },
    { year: "2014", title: "BCS (Health) Cadre Commission", inst: "Ministry of Health & Family Welfare", desc: "Commissioned as a Civil Service Officer, serving dedicated community health roles." },
    { year: "2016 - 2019", title: "Former Lecturer, Forensic Medicine", inst: "Army Medical College, Bogra Cantonment", desc: "Educated future army doctors in clinical diagnostics and patient care." },
    { year: "2019 - 2021", title: "Medical Officer (BCS 39th Health)", inst: "Gabtali Upazila Health Complex, Bogura", desc: "Served as a frontline clinical physician managing acute and chronic medicine cases." },
    { year: "2023 - Present", title: "Lecturer of Physiology", inst: "Shaheed Ziaur Rahman Medical College (SZMC), Bogura", desc: "Educating MBBS students while actively serving General Medicine & Diabetes chambers." }
  ]
};


// ------------------------------------------------------------------------------
// 5. PATIENT TESTIMONIALS DATA
// ------------------------------------------------------------------------------
const testimonialsData = {
  bn: [
    {
      name: "মোঃ রফিকুল ইসলাম",
      location: "গাবতলী, বগুড়া",
      condition: "টাইপ-২ ডায়াবেটিস রোগী",
      rating: 5,
      comment: "ডাঃ সাজ্জাদুর রহমান রুমন স্যারের সঠিক খাদ্যাভ্যাস ও ব্যায়ামের পরামর্শে আমার অতিরিক্ত ইনসুলিনের নির্ভরতা দূর হয়েছে এবং সুগার সম্পূর্ণ নিয়ন্ত্রণে এসেছে। অপ্রয়োজনীয় ওষুধ দেন না।"
    },
    {
      name: "বেগম জাহানারা",
      location: "বগুড়া সদর",
      condition: "উচ্চ রক্তচাপ ও বুক ধড়ফড়",
      rating: 5,
      comment: "স্যার অত্যন্ত ধৈর্য ধরে রোগীর সমস্যা শোনেন এবং সহজ ভাষায় সবকিছু বুঝিয়ে দেন। উনার নির্দেশিত লো-সোডিয়াম খাদ্যতালিকা ও ওষুধে আমার রক্তচাপ এখন সম্পূর্ণ স্বাভাবিক।"
    },
    {
      name: "আলহাজ্ব শফিকুল আলম",
      location: "ইয়ারকুবিয়া মোড়, বগুড়া",
      condition: "সিজনাল ক্রনিক অ্যাজমা",
      rating: 5,
      comment: "দীর্ঘদিন ধরে ইনহেলার ব্যবহারেও কাশির সমস্যা কমছিল না। স্যার আমাকে সঠিক উপায়ে ইনহেলার নেওয়ার কৌশল শিখিয়ে দেন। এখন আমি অনেকটাই সুস্থ ও স্বাভাবিক।"
    }
  ],
  en: [
    {
      name: "Md. Rafiqul Islam",
      location: "Gabtali, Bogura",
      condition: "Type-2 Diabetes Patient",
      rating: 5,
      comment: "Under Dr. Rumon's lifestyle and dietary guidance, my heavy insulin dependency ended and my HbA1c normalized. He prescribes minimal, rational medicine."
    },
    {
      name: "Begum Jahanara",
      location: "Bogura Sadar",
      condition: "Hypertension Care",
      rating: 5,
      comment: "Dr. Rumon listens to the whole medical history with utmost compassion. His DASH diet guidance and targeted blood pressure management gave me peace of mind."
    },
    {
      name: "Alhaj Shafiqul Alam",
      location: "Yarkubia More, Bogura",
      condition: "Chronic Seasonal Asthma",
      rating: 5,
      comment: "I was using inhalers incorrectly for years. Dr. Rumon patiently demonstrated the proper technique and refined my dosage. Breathing freely now!"
    }
  ]
};


// ------------------------------------------------------------------------------
// 6. FREQUENTLY ASKED QUESTIONS (FAQ) DATA
// ------------------------------------------------------------------------------
const faqData = {
  bn: [
    {
      q: "আমি কীভাবে ডাঃ সাজ্জাদুর রহমানের সিরিয়াল পেতে পারি?",
      a: "আমাদের চেম্বার হটলাইনে সরাসরি কল করে সহজে সিরিয়াল নিতে পারেন: অক্সিজেন হেলথকেয়ার (গাবতলী) 01302-031077 অথবা এলিট ডায়াগনস্টিক (বগুড়া) 01735 164 172 নম্বরে। এছাড়াও স্ক্রিনের নিচের স্মার্ট হোয়াটসঅ্যাপ বাটনে ক্লিক করে ফর্ম পূরণ করে তাৎক্ষণিক সিরিয়াল পাঠাতে পারেন।"
    },
    {
      q: "রোগী দেখার সময় ও চেম্বার বন্ধের দিনগুলো কী কী?",
      a: "ডাঃ সাজ্জাদুর রহমান শনি থেকে বুধবার প্রতিদিন বিকাল ৩:৩০ টা এবং শুক্রবার সকাল ৯:০০ টায় অক্সিজেন হেলথকেয়ারে রোগী দেখেন। বৃহস্পতিবার নিয়মিত চেম্বার বন্ধ থাকলেও হটলাইনে আগামী দিনের অগ্রিম সিরিয়াল গ্রহণ করা হয়। এলিট ডায়াগনস্টিকের স্লটের জন্য ফোন করে জেনে নিন।"
    },
    {
      q: "প্রথমবার ভিজিট এবং পরবর্তীতে দেখানোর ফি কত?",
      a: "প্রাথমিক ভিজিট ফি এবং ফলো-আপের বিস্তারিত তথ্য হটলাইন ফোনে কল করার সময় আমাদের চেম্বার সহকারী নিশ্চিত করে জানিয়ে দেবেন।"
    },
    {
      q: "চেম্বারে আসার সময় সাথে কী নিয়ে আসতে হবে?",
      a: "আপনার পূর্বের সমস্ত প্রেসক্রিপশন, সাম্প্রতিক টেস্ট রিপোর্ট এবং বর্তমানে যেসব ওষুধ খাচ্ছেন সেগুলোর তালিকা বা ওষুধের পাতা সাথে নিয়ে আসবেন।"
    },
    {
      q: "জরুরি প্রয়োজনে কীভাবে যোগাযোগ করব?",
      a: "তীব্র শ্বাসকষ্ট, বুকে প্রচণ্ড ব্যথা বা অজ্ঞান হয়ে যাওয়ার মতো আশঙ্কাজনক অবস্থায় কোনো কালক্ষেপণ না করে সাথে সাথে নিকটস্থ সরকারি হাসপাতালের জরুরি বিভাগে যোগাযোগ করুন।"
    }
  ],
  en: [
    {
      q: "How can I book an appointment or serial?",
      a: "Call our direct chamber hotlines: Oxygen Healthcare (Gabtali) at 01302-031077 or Elite Diagnostic (Bogura) at 01735 164 172. You can also tap the floating WhatsApp button or the online serial modal to generate a pre-formatted message."
    },
    {
      q: "What are the consultation hours and schedules?",
      a: "Dr. Rumon is available at Oxygen Healthcare from Saturday to Wednesday starting 3:30 PM, and Friday at 9:00 AM. Thursday is the weekly scheduled off, but advance bookings are accepted. For Elite Diagnostic slots, please call our hotline in advance."
    },
    {
      q: "What are the consultation and follow-up fees?",
      a: "Standard consultation and follow-up fee details will be clearly informed over the phone call by our chamber manager."
    },
    {
      q: "What documents should I bring to the chamber?",
      a: "Please bring all prior medical records, previous prescriptions, recent lab test results, and current medication packets."
    },
    {
      q: "What should I do in an acute emergency?",
      a: "For acute emergencies like sudden chest pressure, extreme breathlessness, or severe trauma, please head immediately to the nearest hospital emergency room."
    }
  ]
};


// ==============================================================================
// 7. APPLICATION STATE & INITIALIZATION
// ==============================================================================
let currentLang = localStorage.getItem("dr_rumon_lang") || "bn";
let currentTheme = localStorage.getItem("dr_rumon_theme") || "light";
let currentTipCategory = "all";
let currentTipSearch = "";
let expandedTipId = null;
let expandedFaqIdx = null;

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(currentTheme);
  renderContent();
  updateLiveChamberBadge();
  initScrollListeners();
  initLucide();
  initHealthScreener();
});

// Lucide Icon Helper
function initLucide() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}


// ==============================================================================
// 8. THEME TOGGLING (Apple Light / Dark Fluid Glass)
// ==============================================================================
function toggleTheme() {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("dr_rumon_theme", currentTheme);
  applyTheme(currentTheme);
}

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.setAttribute("data-theme", "dark");
    root.classList.add("dark");
  } else {
    root.removeAttribute("data-theme");
    root.classList.remove("dark");
  }

  // Update theme toggle button icon
  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) {
    themeBtn.innerHTML = theme === "dark" 
      ? '<i data-lucide="sun" class="w-4 h-4 text-amber-400"></i>' 
      : '<i data-lucide="moon" class="w-4 h-4 text-slate-700"></i>';
    initLucide();
  }
}


// ==============================================================================
// 9. LANGUAGE SWITCHING & DOM UPDATES
// ==============================================================================
function toggleLanguage() {
  currentLang = currentLang === "bn" ? "en" : "bn";
  localStorage.setItem("dr_rumon_lang", currentLang);
  renderContent();
  updateLiveChamberBadge();
  calculateScreener();
}

function renderContent() {
  const t = siteContent[currentLang];
  
  // Language button label
  const langToggleBtn = document.getElementById("langToggleBtn");
  if (langToggleBtn) {
    langToggleBtn.innerHTML = currentLang === "bn" 
      ? '<i data-lucide="globe" class="w-3.5 h-3.5 text-[#0EA57A]"></i> <span class="font-bold text-xs">EN</span>' 
      : '<i data-lucide="globe" class="w-3.5 h-3.5 text-[#0EA57A]"></i> <span class="font-bold text-xs">বাংলা</span>';
  }

  // Update all data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Search input placeholder
  const searchInput = document.getElementById("tipsSearchInput");
  if (searchInput && t.tipsSearchPlaceholder) {
    searchInput.placeholder = t.tipsSearchPlaceholder;
  }

  // Render Dynamic Sections
  renderTreatments();
  renderHealthTips();
  renderTimeline();
  renderTestimonials();
  renderFAQ();
  initLucide();
}


// ==============================================================================
// 10. REAL-TIME LIVE CHAMBER STATUS
// ==============================================================================
function updateLiveChamberBadge() {
  const badgeContainer = document.getElementById("liveChamberStatusBadge");
  if (!badgeContainer) return;

  const dayOfWeek = new Date().getDay(); // 0 = Sun, 1 = Mon, ..., 4 = Thu, 5 = Fri, 6 = Sat
  let statusText = "";
  let isHoliday = false;

  if (dayOfWeek === 5) {
    // Friday
    statusText = currentLang === "bn" 
      ? "আজ শুক্রবার: সকাল ৯:০০ টা হতে অক্সিজেন হেলথকেয়ারে রোগী দেখা হচ্ছে" 
      : "Friday Special: Chamber open at Oxygen Health Care at 9:00 AM";
  } else if (dayOfWeek === 4) {
    // Thursday
    isHoliday = true;
    statusText = currentLang === "bn" 
      ? "আজ সাপ্তাহিক ছুটি • হটলাইনে অগ্রিম সিরিয়াল নেওয়া হচ্ছে" 
      : "Weekly Off Today • Advance Serial Hotline is Active";
  } else {
    // Sat - Wed
    statusText = currentLang === "bn" 
      ? "আজ চেম্বার খোলা: অক্সিজেন হেলথকেয়ার (বিকাল ৩:৩০ টা হতে)" 
      : "Chamber Open Today: Oxygen Health Care (From 3:30 PM)";
  }

  badgeContainer.innerHTML = `
    <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold apple-glass border ${
      isHoliday 
        ? 'border-amber-400/40 text-amber-600 dark:text-amber-300' 
        : 'border-emerald-400/40 text-emerald-700 dark:text-emerald-300'
    }">
      <span class="w-2.5 h-2.5 rounded-full ${isHoliday ? 'bg-amber-500' : 'bg-emerald-500 animate-live-dot'}"></span>
      <span>${statusText}</span>
    </span>
  `;
}


// ==============================================================================
// 11. INTERACTIVE APPLE HEALTH SCREENER (BMI & Diabetes Risk Calculator)
// ==============================================================================
function initHealthScreener() {
  const heightSlider = document.getElementById("screenerHeight");
  const weightSlider = document.getElementById("screenerWeight");
  const sugarInput = document.getElementById("screenerSugar");

  if (heightSlider) {
    heightSlider.addEventListener("input", calculateScreener);
  }
  if (weightSlider) {
    weightSlider.addEventListener("input", calculateScreener);
  }
  if (sugarInput) {
    sugarInput.addEventListener("input", calculateScreener);
  }

  calculateScreener();
}

function calculateScreener() {
  const heightSlider = document.getElementById("screenerHeight");
  const weightSlider = document.getElementById("screenerWeight");
  const sugarInput = document.getElementById("screenerSugar");
  if (!heightSlider || !weightSlider) return;

  const heightCm = parseFloat(heightSlider.value) || 165;
  const weightKg = parseFloat(weightSlider.value) || 68;
  const sugarVal = sugarInput ? parseFloat(sugarInput.value) : null;

  // Update dynamic value displays
  const heightValEl = document.getElementById("screenerHeightVal");
  const weightValEl = document.getElementById("screenerWeightVal");

  // Calculate Feet & Inches
  const totalInches = heightCm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);

  if (heightValEl) {
    heightValEl.textContent = `${heightCm} cm (${feet}'${inches}")`;
  }
  if (weightValEl) {
    weightValEl.textContent = `${weightKg} kg`;
  }

  // Calculate BMI: weight (kg) / (height (m))^2
  const heightM = heightCm / 100;
  const bmi = (weightKg / (heightM * heightM)).toFixed(1);

  // Classify BMI
  let categoryKey = "";
  let categoryColor = "";
  let progressWidth = "50%";
  let riskAssessment = "";

  if (bmi < 18.5) {
    categoryKey = currentLang === "bn" ? "স্বল্প ওজন (Underweight)" : "Underweight";
    categoryColor = "text-sky-500";
    progressWidth = "25%";
    riskAssessment = currentLang === "bn" 
      ? "শরীরে পুষ্টি ঘাটতি বা পেশীর দুর্বলতা থাকতে পারে। পুষ্টিকর প্রোটিন ও সুষম ডায়েট প্রয়োজন।" 
      : "Possible nutritional deficiency or lower muscle mass. Balanced nutrition plan recommended.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    categoryKey = currentLang === "bn" ? "আদর্শ ওজন (Normal Weight)" : "Normal Weight";
    categoryColor = "text-emerald-500";
    progressWidth = "50%";
    riskAssessment = currentLang === "bn" 
      ? "আপনার ওজন চমৎকার ও স্বাস্থ্যসম্মত সীমায় রয়েছে। নিয়মিত হাঁটা ও স্বাস্থ্যকর খাবারের মাধ্যমে এটি ধরে রাখুন।" 
      : "Excellent healthy range! Maintain this with regular physical activity and nutrient-dense whole foods.";
  } else if (bmi >= 25 && bmi <= 29.9) {
    categoryKey = currentLang === "bn" ? "অতিরিক্ত ওজন (Overweight)" : "Overweight";
    categoryColor = "text-amber-500";
    progressWidth = "75%";
    riskAssessment = currentLang === "bn" 
      ? "টাইপ-২ ডায়াবেটিস ও রক্তচাপের প্রাথমিক ঝুঁকি রয়েছে। চিনি, মিষ্টি ও অতিরিক্ত কার্বোহাইড্রেট নিয়ন্ত্রণ করুন।" 
      : "Increased predisposition to Type 2 Diabetes and Hypertension. Limit refined carbs and boost aerobic steps.";
  } else {
    categoryKey = currentLang === "bn" ? "স্থূলতা (Obesity)" : "Obese Range";
    categoryColor = "text-rose-500";
    progressWidth = "95%";
    riskAssessment = currentLang === "bn" 
      ? "উচ্চ বিপাকীয় ঝুঁকি (High Metabolic Risk)। ইনসুলিন রেজিস্ট্যান্স ও ফ্যাটি লিভার রোধে চিকিৎসকের পরামর্শ জরুরি।" 
      : "High metabolic risk. Clinical supervision for insulin resistance and cardiovascular screening is strongly advised.";
  }

  // Check Blood Glucose Risk if entered
  let sugarRiskNote = "";
  if (sugarVal && sugarVal > 0) {
    if (sugarVal > 7.0) {
      sugarRiskNote = currentLang === "bn" 
        ? " • আপনার রক্তে গ্লুকোজ মাত্রা ডায়াবেটিসের নির্দেশক! অবিলম্বে একজন বিশেষজ্ঞ চিকিৎসকের পরামর্শ নিন।" 
        : " • Fasting blood glucose indicates possible diabetes! A clinical consultation is warranted.";
    } else if (sugarVal >= 5.6 && sugarVal <= 7.0) {
      sugarRiskNote = currentLang === "bn" 
        ? " • আপনার রক্তে গ্লুকোজ প্রি-ডায়াবেটিস পর্যায়ে রয়েছে।" 
        : " • Blood glucose falls in the pre-diabetes threshold.";
    }
  }

  // Update UI elements
  const bmiDisplay = document.getElementById("screenerBmiScore");
  const catDisplay = document.getElementById("screenerCategory");
  const barDisplay = document.getElementById("screenerProgressBar");
  const adviceDisplay = document.getElementById("screenerAdviceText");

  if (bmiDisplay) bmiDisplay.textContent = bmi;
  if (catDisplay) {
    catDisplay.textContent = categoryKey;
    catDisplay.className = `text-lg font-black ${categoryColor}`;
  }
  if (barDisplay) barDisplay.style.width = progressWidth;
  if (adviceDisplay) adviceDisplay.textContent = riskAssessment + sugarRiskNote;
}


// ==============================================================================
// 12. TREATMENTS RENDERER
// ==============================================================================
function renderTreatments() {
  const container = document.getElementById("treatmentsContainer");
  if (!container) return;

  const items = treatmentsData[currentLang] || [];
  container.innerHTML = items.map(item => `
    <div class="apple-glass-card p-6 md:p-8 flex flex-col justify-between group">
      <div>
        <div class="flex items-center justify-between mb-5">
          <div class="w-13 h-13 rounded-2xl bg-gradient-to-tr from-[#0EA57A] to-[#0284C7] p-0.5 shadow-md shadow-[#0EA57A]/20">
            <div class="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center text-[#0EA57A]">
              <i data-lucide="${item.icon}" class="w-6 h-6"></i>
            </div>
          </div>
          <span class="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#0EA57A]/10 text-[#0EA57A] border border-[#0EA57A]/20">
            ${item.category}
          </span>
        </div>

        <h3 class="text-xl font-black text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-[#0EA57A] transition-colors">
          ${item.title}
        </h3>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
          ${item.description}
        </p>

        <div class="space-y-2.5 pt-3 border-t border-slate-200/60 dark:border-slate-800 text-xs">
          <div>
            <strong class="text-slate-900 dark:text-slate-100">${currentLang === 'bn' ? 'মূল লক্ষণসমূহ:' : 'Target Symptoms:'}</strong>
            <span class="text-slate-600 dark:text-slate-400 block mt-0.5 leading-relaxed">${item.treats}</span>
          </div>
          <div>
            <strong class="text-slate-900 dark:text-slate-100">${currentLang === 'bn' ? 'যা আশা করবেন:' : 'What to Expect:'}</strong>
            <span class="text-slate-600 dark:text-slate-400 block mt-0.5 leading-relaxed">${item.expect}</span>
          </div>
          <div>
            <strong class="text-slate-900 dark:text-slate-100">${currentLang === 'bn' ? 'চিকিৎসার সময়কাল:' : 'Typical Duration:'}</strong>
            <span class="text-slate-600 dark:text-slate-400 block mt-0.5">${item.duration}</span>
          </div>
        </div>
      </div>

      <div class="pt-6 mt-4">
        <button onclick="openBookingModal('${encodeURIComponent(item.title)}')" 
          class="w-full py-3 apple-btn apple-btn-glass text-xs font-bold">
          <i data-lucide="calendar" class="w-4 h-4 text-[#0EA57A]"></i>
          <span>${currentLang === 'bn' ? 'এই সেবার জন্য সিরিয়াল নিন' : 'Book for this Treatment'}</span>
        </button>
      </div>
    </div>
  `).join("");
}


// ==============================================================================
// 13. HEALTH TIPS SEARCH & FILTER RENDERER
// ==============================================================================
function filterTips(category) {
  currentTipCategory = category;
  
  document.querySelectorAll(".tip-filter-btn").forEach(btn => {
    if (btn.getAttribute("data-category") === category) {
      btn.className = "tip-filter-btn px-4 py-2 rounded-xl text-xs font-bold bg-[#0EA57A] text-white shadow-md cursor-pointer";
    } else {
      btn.className = "tip-filter-btn px-4 py-2 rounded-xl text-xs font-bold apple-glass text-slate-700 dark:text-slate-300 hover:border-[#0EA57A]/40 cursor-pointer";
    }
  });

  renderHealthTips();
}

function handleTipsSearch(e) {
  currentTipSearch = e.target.value.toLowerCase().trim();
  renderHealthTips();
}

function toggleTipArticle(id) {
  expandedTipId = expandedTipId === id ? null : id;
  renderHealthTips();
}

function renderHealthTips() {
  const container = document.getElementById("healthTipsContainer");
  if (!container) return;

  const articles = healthTipsData[currentLang] || [];
  const filtered = articles.filter(art => {
    const matchesCat = currentTipCategory === "all" || art.category === currentTipCategory;
    const matchesQuery = !currentTipSearch || 
      art.title.toLowerCase().includes(currentTipSearch) || 
      art.excerpt.toLowerCase().includes(currentTipSearch);
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400">
        <i data-lucide="help-circle" class="w-8 h-8 mx-auto mb-2 text-slate-400"></i>
        <p class="text-sm font-semibold">${currentLang === 'bn' ? 'কোনো টিপস পাওয়া যায়নি।' : 'No health tips found matching your search.'}</p>
      </div>
    `;
    initLucide();
    return;
  }

  const t = siteContent[currentLang];

  container.innerHTML = filtered.map(art => {
    const isExpanded = expandedTipId === art.id;
    return `
      <div class="apple-glass-card p-6 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3.5">
            <span class="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#0EA57A]/15 text-[#0EA57A]">
              ${art.category}
            </span>
            <span class="text-xs text-slate-400 font-semibold flex items-center gap-1">
              <i data-lucide="clock" class="w-3.5 h-3.5"></i> ${art.readTime}
            </span>
          </div>

          <h3 class="text-lg font-black text-slate-900 dark:text-white mb-2 leading-snug">${art.title}</h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">${art.excerpt}</p>

          ${isExpanded ? `
            <div class="mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-white/40 dark:bg-slate-900/40 p-4 rounded-2xl fade-in">
              ${art.content}
            </div>
          ` : ''}
        </div>

        <button onclick="toggleTipArticle('${art.id}')" 
          class="mt-4 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 apple-btn apple-btn-glass text-xs font-bold w-full">
          <span>${isExpanded ? t.closeArticle : t.readArticle}</span>
          <i data-lucide="${isExpanded ? 'chevron-up' : 'chevron-down'}" class="w-4 h-4"></i>
        </button>
      </div>
    `;
  }).join("");

  initLucide();
}


// ==============================================================================
// 14. TIMELINE RENDERER
// ==============================================================================
function renderTimeline() {
  const container = document.getElementById("timelineContainer");
  if (!container) return;

  const items = timelineData[currentLang] || [];
  container.innerHTML = items.map(item => `
    <div class="relative pl-8 pb-7 border-l-2 border-[#0EA57A]/30 last:border-l-0 last:pb-0">
      <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-[#0EA57A]"></div>
      <span class="text-xs font-black text-[#0EA57A] uppercase tracking-wider block mb-1">${item.year}</span>
      <h4 class="text-base font-black text-slate-900 dark:text-white leading-tight mb-0.5">${item.title}</h4>
      <p class="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">${item.inst}</p>
      <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${item.desc}</p>
    </div>
  `).join("");
}


// ==============================================================================
// 15. TESTIMONIALS RENDERER
// ==============================================================================
function renderTestimonials() {
  const container = document.getElementById("testimonialsContainer");
  if (!container) return;

  const items = testimonialsData[currentLang] || [];
  container.innerHTML = items.map(t => `
    <div class="apple-glass-card p-6 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-1 text-amber-400 mb-4">
          ${Array(t.rating).fill('<i data-lucide="star" class="w-4 h-4 fill-current"></i>').join("")}
        </div>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic mb-5">
          "${t.comment}"
        </p>
      </div>

      <div class="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
        <div>
          <h4 class="text-sm font-black text-slate-900 dark:text-white">${t.name}</h4>
          <span class="text-[11px] text-slate-400 font-semibold block">${t.location}</span>
        </div>
        <span class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          ${t.condition}
        </span>
      </div>
    </div>
  `).join("");
}


// ==============================================================================
// 16. FAQ ACCORDION RENDERER
// ==============================================================================
function toggleFaq(idx) {
  expandedFaqIdx = expandedFaqIdx === idx ? null : idx;
  renderFAQ();
}

function renderFAQ() {
  const container = document.getElementById("faqContainer");
  if (!container) return;

  const items = faqData[currentLang] || [];
  container.innerHTML = items.map((item, idx) => {
    const isOpen = expandedFaqIdx === idx;
    return `
      <div class="apple-glass rounded-2xl overflow-hidden transition-all ${isOpen ? 'border-[#0EA57A]/50 shadow-md' : ''}">
        <button onclick="toggleFaq(${idx})" class="w-full p-5 text-left font-bold text-slate-800 dark:text-slate-100 flex items-center justify-between gap-4 cursor-pointer">
          <span class="text-sm md:text-base leading-snug">${item.q}</span>
          <i data-lucide="${isOpen ? 'chevron-up' : 'chevron-down'}" class="w-5 h-5 text-[#0EA57A] shrink-0"></i>
        </button>
        ${isOpen ? `
          <div class="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/50 dark:border-slate-800 fade-in">
            ${item.a}
          </div>
        ` : ''}
      </div>
    `;
  }).join("");

  initLucide();
}


// ==============================================================================
// 17. CLIPBOARD & TOAST NOTIFICATION
// ==============================================================================
function copyNumber(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(siteContent[currentLang].copiedText + " (" + text + ")");
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const input = document.createElement("input");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  showToast(siteContent[currentLang].copiedText + " (" + text + ")");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-emerald-400"></i> <span>${message}</span>`;
  toast.classList.add("show");
  initLucide();
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}


// ==============================================================================
// 18. SMART SERIAL MODAL & WHATSAPP ASSISTANT
// ==============================================================================
function openBookingModal(prefilledProblem = "") {
  const modal = document.getElementById("bookingModal");
  if (!modal) return;

  if (prefilledProblem) {
    const problemInput = document.getElementById("waPatientProblem");
    if (problemInput) {
      problemInput.value = decodeURIComponent(prefilledProblem);
    }
    switchModalTab('wa');
  } else {
    switchModalTab('call');
  }

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeBookingModal() {
  const modal = document.getElementById("bookingModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

function switchModalTab(tab) {
  const tabCallBtn = document.getElementById("modalTabCallBtn");
  const tabWABtn = document.getElementById("modalTabWABtn");
  const contentCall = document.getElementById("modalContentCall");
  const contentWA = document.getElementById("modalContentWA");

  if (tab === 'call') {
    if (tabCallBtn) tabCallBtn.className = "segmented-option active";
    if (tabWABtn) tabWABtn.className = "segmented-option";
    if (contentCall) contentCall.classList.remove("hidden");
    if (contentWA) contentWA.classList.add("hidden");
  } else {
    if (tabCallBtn) tabCallBtn.className = "segmented-option";
    if (tabWABtn) tabWABtn.className = "segmented-option active";
    if (contentCall) contentCall.classList.add("hidden");
    if (contentWA) contentWA.classList.remove("hidden");
  }
}

// Generate formatted WhatsApp serial message
function buildWhatsAppMessage() {
  const name = document.getElementById("waPatientName")?.value.trim() || "";
  const phone = document.getElementById("waPatientPhone")?.value.trim() || "";
  const age = document.getElementById("waPatientAge")?.value.trim() || "";
  const chamber = document.getElementById("waChamberSelect")?.value || "Oxygen Health Care (গাবতলী)";
  const date = document.getElementById("waPreferredDate")?.value || "";
  const problem = document.getElementById("waPatientProblem")?.value.trim() || "";

  if (currentLang === "bn") {
    return `আসসালামু আলাইকুম। আমি ডাঃ সাজ্জাদুর রহমান রুমন স্যারের চেম্বার সিরিয়াল বুক করতে চাই:
• রোগীর নাম: ${name || "উলেখ্য নয়"}
• বয়স: ${age ? age + " বছর" : "উলেখ্য নয়"}
• মোবাইল: ${phone || "উলেখ্য নয়"}
• নির্বাচিত চেম্বার: ${chamber}
• সাক্ষাতের সম্ভাব্য তারিখ: ${date || "আসন্ন সুবিধাজনক সময়"}
• সমস্যা / লক্ষণ: ${problem || "সাধারণ চেকআপ"}`;
  } else {
    return `Hello. I would like to book a chamber serial for Dr. Sazzadur Rahman Rumon:
• Patient Name: ${name || "Not provided"}
• Age: ${age || "N/A"}
• Phone: ${phone || "N/A"}
• Chamber: ${chamber}
• Preferred Date: ${date || "Earliest available"}
• Concerns: ${problem || "General Consultation"}`;
  }
}

function sendWhatsAppSerial() {
  const msg = buildWhatsAppMessage();
  const phone = "8801302031077"; // Chamber hotline WhatsApp
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

function copyWhatsAppMessage() {
  const msg = buildWhatsAppMessage();
  copyNumber(msg);
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) {
    menu.classList.toggle("hidden");
  }
}

function closeMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) {
    menu.classList.add("hidden");
  }
}


// ==============================================================================
// 19. SCROLL LISTENERS
// ==============================================================================
function initScrollListeners() {
  const navbar = document.getElementById("mainNavbar");
  const stickyBar = document.getElementById("mobileStickyBar");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Sticky Navbar elevation
    if (navbar) {
      if (scrollY > 30) {
        navbar.classList.add("shadow-lg");
      } else {
        navbar.classList.remove("shadow-lg");
      }
    }

    // Mobile Bottom Floating Dock trigger
    if (stickyBar) {
      if (scrollY > 280) {
        stickyBar.classList.remove("translate-y-full");
        stickyBar.classList.add("translate-y-0");
      } else {
        stickyBar.classList.remove("translate-y-0");
        stickyBar.classList.add("translate-y-full");
      }
    }
  });
}
