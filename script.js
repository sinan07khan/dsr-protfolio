/**
 * ==============================================================================
 * 🏥 DR. SAZZADUR RAHMAN RUMON - OFFICIAL WEBSITE SCRIPT
 * ==============================================================================
 * 
 * 📖 COMPLETE CUSTOMIZATION GUIDE (সম্পূর্ণ কাস্টমাইজেশন নির্দেশিকা):
 * ------------------------------------------------------------------------------
 * এই ফাইলটিতে ওয়েবসাইটের সমস্ত ডেটা, টেক্সট, চিকিৎসা তালিকা, স্বাস্থ্য টিপস, 
 * চেম্বার ইনফরমেশন ও প্রশ্নোত্তরের ডাটাবেজ রয়েছে। 
 * আপনি খুব সহজেই নিচের নির্দেশিকা অনুযায়ী যেকোনো তথ্য পরিবর্তন বা যোগ করতে পারবেন:
 * 
 * 1. ডাক্তার সাহেবের তথ্য পরিবর্তন (Name, Title, BMDC No, Experience):
 *    -> নিচে `siteContent.bn` এবং `siteContent.en` এর মধ্যে `heroTitle`, `heroSub`,
 *       `heroMission`, `heroExpVal`, `bmdcBadge` ইত্যাদি এডিট করুন।
 * 
 * 2. চেম্বার ও ফোন নম্বর পরিবর্তন (Chamber Addresses & Phone Hotlines):
 *    -> `siteContent.bn` ও `siteContent.en` এর `c1Name`, `c1Phone`, `c1Hours`,
 *       `c2Name`, `c2Phone`, `c2Hours` পরিবর্তন করুন।
 *    -> দ্রষ্টব্য: index.html ফাইলেও সরাসরি কল বাটন ও মোডালে নম্বর দেওয়া আছে, 
 *       সেখানেও নম্বর পরিবর্তন করতে পারবেন।
 * 
 * 3. নতুন চিকিৎসা সেবা যোগ/এডিট করা (Add/Edit Treatments):
 *    -> নিচে `treatmentsData.bn` এবং `treatmentsData.en` অবজেক্টে যান। 
 *       নতুন চিকিৎসা যোগ করতে একটি নতুন `{ id: "t5", icon: "activity", ... }` ব্লক যোগ করুন।
 * 
 * 4. নতুন স্বাস্থ্য টিপস যোগ/এডিট করা (Add/Edit Health Tips):
 *    -> নিচে `healthTipsData.bn` এবং `healthTipsData.en` অবজেক্টে যান। 
 *       ক্যাটাগরি হিসেবে `lifestyle`, `prevention`, অথবা `seasonal` ব্যবহার করুন।
 * 
 * 5. শিক্ষা ও ক্যারিয়ারের মাইলফলক পরিবর্তন (Timeline):
 *    -> নিচে `timelineData.bn` এবং `timelineData.en` অবজেক্টে সাল ও বিবরণ আপডেট করুন।
 * 
 * 6. সাধারণ প্রশ্নোত্তর পরিবর্তন (FAQs):
 *    -> নিচে `faqData.bn` এবং `faqData.en` অবজেক্টে নতুন প্রশ্ন (`q`) ও উত্তর (`a`) যোগ করুন।
 * 
 * 7. ডিফল্ট ভাষা পরিবর্তন (Change Default Language):
 *    -> লাইন ৪৭৫ এ `currentLang = ... || 'bn'` পরিবর্তন করে `'en'` করতে পারেন।
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 1. DATA DICTIONARIES (Bilingual: Bengali & English)
//    - bn: বাংলা টেক্সট ও লেবেল
//    - en: ইংরেজি টেক্সট ও লেবেল
// ------------------------------------------------------------------------------
const siteContent = {
  // ----------------------------------------------------------------------------
  // [BENGALI CONTENT] - বাংলা কন্টেন্ট ও ওয়েবসাইট টেক্সট
  // ----------------------------------------------------------------------------
  bn: {
    // নেভিগেশন মেনু
    navHome: "হোম",
    navChambers: "চেম্বার সমূহ",
    navTreatments: "চিকিৎসা সেবা",
    navHealthTips: "স্বাস্থ্য টিপস",
    navBio: "পরিচিতি",
    navFAQ: "সাধারণ প্রশ্ন",
    btnTakeSerial: "সিরিয়াল নিন",
    callHotline: "হটলাইনে কল করুন",
    
    // হিরো সেকশন (ডাক্তারের নাম, পদবী, ডিগ্রি ও অভিজ্ঞতা)
    heroBadge: "নিবন্ধিত চিকিৎসক • বিসিএস (স্বাস্থ্য)",
    heroTitle: "ডাঃ সাজ্জাদুর রহমান রুমন",
    heroSub: "এমবিবিএস, বিসিএস (স্বাস্থ্য), সিসিডি (ডায়াবেটিস), সিএমইউ, এম-ফিল (কোর্স)",
    heroMission: "মেডিসিন ও ডায়াবেটিস চিকিৎসক। প্রভাষক, শহীদ জিয়াউর রহমান মেডিকেল কলেজ (SZMC), বগুড়া।",
    heroExpVal: "১২+ বছর",
    heroExpLabel: "অভিজ্ঞতা",
    heroPatientsVal: "১৫,০০০+",
    heroPatientsLabel: "সুস্থ রোগী",
    bmdcBadge: "BMDC Reg No.",
    heroCtaSerial: "সিরিয়াল নিন (Get Serial)",
    
    // চেম্বার ও সিরিয়াল হেল্পলাইন (Chambers & Direct Phone Numbers)
    chambersTitle: "চেম্বার ও সিরিয়াল হেল্পলাইন",
    chambersSubtitle: "আপনার সুবিধাজনক সময়ে সরাসরি চেম্বারে সাক্ষাতের জন্য কল করুন বা সিরিয়াল বুক করুন।",
    
    // চেম্বার ১: অক্সিজেন হেলথকেয়ার
    c1Tag: "CHAMBER ONE • ACTIVE",
    c1Name: "Oxygen Health Care (অক্সিজেন হেলথকেয়ার)",
    c1Location: "গাবতলী, বগুড়া",
    c1Phone: "01302-031077",
    c1Hours: "শনি থেকে বুধ: বিকাল ৩:৩০ টা | শুক্রবার সকাল ৯:০০ টা",
    
    // চেম্বার ২: এলিট ডায়াগনস্টিক
    c2Tag: "CHAMBER TWO • ACTIVE",
    c2Name: "Elite Diagnostic & Consultation Center (এলিট ডায়াগনস্টিক)",
    c2Location: "ইয়ারকুবিয়া মোড়, বগুড়া",
    c2Phone: "01735 164 172",
    c2Hours: "সিরিয়ালের জন্য ফোন করুন",
    
    // বাটন টেক্সট
    btnCallNow: "সরাসরি কল করুন",
    btnCopyNumber: "কপি নম্বর",
    copiedText: "নম্বর কপি হয়েছে!",
    
    // চিকিৎসা সেবা সেকশন হেডার
    treatmentsTitle: "চিকিৎসা ও সেবা সমূহ",
    treatmentsSubtitle: "দীর্ঘমেয়াদী অসুস্থতার সুনির্দিষ্ট থেরাপি, মেটাবলিক স্বাস্থ্য সুরক্ষা এবং ব্যক্তিগত স্বাস্থ্য পরিকল্পনা।",
    approachTitle: "আমাদের ক্লিনিকাল পদ্ধতি",
    approachDesc: "প্রতিটি পরামর্শ রোগীর বিস্তৃত ইতিহাস, সহজ ভাষায় রোগ বুঝিয়ে দেওয়া এবং পরিমিত ওষুধের সাহায্যে স্থায়ী নিরাময় নিশ্চিত করতে পরিচালিত হয়।",
    
    // স্বাস্থ্য টিপস সেকশন হেডার ও ফিল্টার
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
    
    // এফএকিউ (FAQ)
    faqTitle: "সাধারণ জিজ্ঞাসা (FAQ)",
    faqSubtitle: "ভিজিট ফি, সরাসরি সিরিয়াল পাওয়ার নিয়ম ও প্রেসক্রিপশন রি-চেক সংক্রান্ত জরুরি সাধারণ উত্তরসমূহ।",

    // সিরিয়াল বুকিং মোডাল
    modalTitle: "চেম্বার সিরিয়াল বুকিং",
    modalSubtitle: "সরাসরি কল করে আপনার সিরিয়াল বুক করুন",
    modalClose: "বন্ধ করুন",
    
    // ফুটার
    footerDesc: "মেডিসিন ও ডায়াবেটিস চিকিৎসক, প্রভাষক, শহীদ জিয়াউর রহমান মেডিকেল কলেজ, বগুড়া।",
    footerReg: "শহীদ জিয়াউর রহমান মেডিকেল কলেজ (SZMC) বগুড়া থেকে নিবন্ধিত এবং বিসিএস (স্বাস্থ্য) ক্যাডার কর্মকর্তা।",
    footerHours: "রোগী দেখার সময়: শনি থেকে বুধ বিকাল ৩:৩০ টা | শুক্রবার সকাল ৯:০০ টা",
    footerRights: "সর্বস্বত্ব সংরক্ষিত। ডাঃ সাজ্জাদুর রহমান রুমন।"
  },

  // ----------------------------------------------------------------------------
  // [ENGLISH CONTENT] - English Content & Website Text
  // ----------------------------------------------------------------------------
  en: {
    // Navigation Menu
    navHome: "Home",
    navChambers: "Chambers",
    navTreatments: "Treatments",
    navHealthTips: "Health Tips",
    navBio: "Bio & Timeline",
    navFAQ: "FAQ",
    btnTakeSerial: "Get Serial",
    callHotline: "Call Hotline",
    
    // Hero Section
    heroBadge: "Registered Physician • BCS (Health)",
    heroTitle: "Dr. Sazzadur Rahman Rumon",
    heroSub: "MBBS, BCS (Health), CCD (Diabetes), CMU, M-Phil (Course)",
    heroMission: "Medicine & Diabetes Specialist Physician. Lecturer at Shaheed Ziaur Rahman Medical College (SZMC), Bogura.",
    heroExpVal: "12+ Years",
    heroExpLabel: "Experience",
    heroPatientsVal: "15,000+",
    heroPatientsLabel: "Happy Patients",
    bmdcBadge: "BMDC Reg No.",
    heroCtaSerial: "Get Serial Appointment",
    
    // Chambers Section
    chambersTitle: "Chamber Locations & Serial Hotline",
    chambersSubtitle: "Call our chamber desks directly to confirm your consultation schedule.",
    
    // Chamber 1: Oxygen Health Care
    c1Tag: "CHAMBER ONE • ACTIVE",
    c1Name: "Oxygen Health Care",
    c1Location: "Gabtali, Bogura",
    c1Phone: "01302-031077",
    c1Hours: "Sat - Wed: 3:30 PM | Friday: 9:00 AM",
    
    // Chamber 2: Elite Diagnostic
    c2Tag: "CHAMBER TWO • ACTIVE",
    c2Name: "Elite Diagnostic & Consultation Center",
    c2Location: "Yarkubia More, Bogura",
    c2Phone: "01735 164 172",
    c2Hours: "Call for available slots",
    
    // Buttons
    btnCallNow: "Call Hotline Now",
    btnCopyNumber: "Copy",
    copiedText: "Number Copied!",
    
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
    
    // FAQ
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Quick answers about clinic timings, consultation fees, and appointment preparations.",

    // Modal
    modalTitle: "Chamber Serial Booking",
    modalSubtitle: "Directly call our chambers to confirm your slot",
    modalClose: "Close",
    
    // Footer
    footerDesc: "Medicine & Diabetes Specialist Physician. Lecturer, Shaheed Ziaur Rahman Medical College, Bogura.",
    footerReg: "Registered with BMDC and Officer of Bangladesh Civil Service (BCS Health).",
    footerHours: "Consultation Hours: Sat - Wed 3:30 PM | Fri 9:00 AM",
    footerRights: "All Rights Reserved. Dr. Sazzadur Rahman Rumon."
  }
};


// ------------------------------------------------------------------------------
// 2. TREATMENTS & CLINICAL SERVICES DATA (চিকিৎসা সেবা তালিকা)
//    - কীভাবে নতুন সেবা যোগ করবেন (How to add a new treatment):
//      নিচের অ্যারেতে অবজেক্টটি কপি করে পেস্ট করুন এবং মানগুলো পরিবর্তন করুন:
//      {
//        id: "t5",
//        icon: "activity", // Lucide icon name (e.g. activity, heart, shield, users, apple)
//        title: "চিকিৎসার নাম",
//        description: "চিকিৎসা সংক্রান্ত বিবরণ",
//        treats: "যেসব লক্ষণে চিকিৎসা দেওয়া হয়",
//        expect: "চিকিৎসায় কী আশা করা যায়",
//        duration: "চিকিৎসার সময়কাল"
//      }
// ------------------------------------------------------------------------------
const treatmentsData = {
  bn: [
    {
      id: "t1",
      icon: "activity",
      title: "উন্নত ডায়াবেটিস নিরাময় ও নিয়ন্ত্রণ",
      description: "ইনসুলিন রেজিস্ট্যান্স কমানো, খাবারের কার্বোহাইড্রেট নিয়ন্ত্রণ ও জীবনযাত্রার পরিবর্তনের মাধ্যমে টাইপ-২ ডায়াবেটিস সম্পূর্ণ নিয়ন্ত্রণে রাখার আধুনিক চিকিৎসা কার্যক্রম।",
      treats: "ঘন ঘন প্রস্রাব, অতিরিক্ত পিপাসা, আকস্মিক ওজন হ্রাস, দীর্ঘমেয়াদী দুর্বলতা ও উচ্চ HbA1c",
      expect: "রোগীর মেটাবলিক পয়েন্ট যাচাই, কাস্টমাইজড ডায়েট চার্ট, নিয়মিত গ্লুকোজ লেভেল ট্র্যাকিং এবং অপ্রয়োজনীয় ওষুধ কমানো।",
      duration: "১ থেকে ৩ মাস সুনির্দিষ্ট ফলো-আপ প্রোগ্রাম"
    },
    {
      id: "t2",
      icon: "heart",
      title: "উচ্চ রক্তচাপ ও হৃদরোগের ঝুঁকি পরীক্ষা",
      description: "রক্তচাপের কারণ অনুসন্ধান, লিপিড প্রোফাইল (রক্তের চর্বি) বিশ্লেষণ, মানসিক অবসাদ কমানো এবং ধমনীর স্থিতিস্থাপকতা বাড়ানোর চিকিৎসা গাইডলাইন।",
      treats: "মাথা ঘোরা, ঘাড় ব্যথা, বুক ধড়ফড় করা, উচ্চ ক্ষতিকর কোলেস্টেরল এবং হৃদযন্ত্রের ক্লান্তি",
      expect: "চেম্বারে সূক্ষ্ম প্রেশার পর্যবেক্ষণ, ড্যাশ (DASH) লো-সোডিয়াম ডায়েট চার্ট প্রদান এবং হৃদরোগ প্রতিরোধে প্রয়োজনীয় দিকনির্দেশনা।",
      duration: "২ সপ্তাহের মধ্যে রক্তচাপ নিয়ন্ত্রণ, ৩ মাস পর পর চেকআপ"
    },
    {
      id: "t3",
      icon: "shield",
      title: "হাঁপানি, অ্যালার্জি ও ফুসফুসের যত্ন",
      description: "ঋতুভিত্তিক হাঁপানি, ব্রঙ্কাইটিস এবং ক্রনিক কাশির সঠিক কারণ যাচাই করে সঠিক ইনহেলার ব্যবহার শেখানো ও অ্যালার্জি প্রতিরোধ করা।",
      treats: "ধুলোবালিতে দীর্ঘমেয়াদী হাঁচি-কাশি, শ্বাসকষ্ট, ভোরে বুকে সাঁই সাঁই শব্দ হওয়া ও বুকের ভারী ভাব",
      expect: "ইনহেলার ব্যবহারের সঠিক কৌশল শেখানো, অ্যালার্জি সৃষ্টিকারী নিয়ামক সনাক্তকরণ এবং ওষুধের সঠিক মাত্রা নির্ধারণ।",
      duration: "৩ থেকে ৫ দিনের মধ্যে আরাম, দীর্ঘমেয়াদী মৌসুমী গাইড"
    },
    {
      id: "t4",
      icon: "users",
      title: "পারিবারিক সাধারণ স্বাস্থ্য ও শিশু চিকিৎসা",
      description: "সব বয়সী পরিবারের সদস্যদের জ্বর, কোষ্ঠকাঠিন্য, পেটের সমস্যা এবং শিশুদের সঠিক বৃদ্ধি ও পুষ্টির নিশ্চয়তা প্রদানকারী সমন্বিত চিকিৎসা সেবা।",
      treats: "একটানা ভাইরাল জ্বর, ডেঙ্গু/টাইফয়েড পরবর্তী দুর্বলতা, আইবিএস ও পেটের সমস্যা এবং শিশুদের পুষ্টির ঘাটতি",
      expect: "শিশুবান্ধব ও শান্ত পরিবেশে চেকআপ, বয়স ও ওজনের সাথে মিলিয়ে সুনির্দিষ্ট ডোজ নির্ধারণ এবং অভিভাবকদের পূর্ণ গাইডলাইন।",
      duration: "৫ থেকে ৭ দিনের মধ্যে সম্পূর্ণ উপশম"
    }
  ],
  en: [
    {
      id: "t1",
      icon: "activity",
      title: "Advanced Diabetology & Remission Care",
      description: "In-depth metabolic panel reviews, insulin tailoring, and structured programs targeting Type 2 Diabetes control through targeted nutrition and lifestyle.",
      treats: "Frequent urination, unexplained weight loss, blurred vision, insulin resistance, HbA1c control",
      expect: "Baseline health evaluation, custom nutrition planner, daily glucose logs review, and rational dose titrations.",
      duration: "1 to 3 months continuous tracking for stability"
    },
    {
      id: "t2",
      icon: "heart",
      title: "Hypertension & Cardiovascular Assessment",
      description: "Comprehensive blood pressure tracking, cardiovascular risk calculator profiles, fatty acid profiles, and customized stress and arterial elasticity protocols.",
      treats: "Chronic high blood pressure, pounding chest feelings, morning dizziness, high triglycerides",
      expect: "At-chamber BP screening, arterial screening checklist, personalized low-sodium DASH cooking charts.",
      duration: "Immediate control in 2 weeks, quarterly recheck"
    },
    {
      id: "t3",
      icon: "shield",
      title: "Asthma, COPD & Respiratory Care",
      description: "Diagnosis and management of seasonal allergies, bronchial asthma, and chronic obstructive pulmonary diseases through proper inhaler techniques and pulmonary hygiene.",
      treats: "Persistent dry wheezing cough, chest tightness, morning sneezing, dust allergies, seasonal breathlessness",
      expect: "Peak-flow checking, correction of inhaler or spacer techniques, allergy trigger identification charts.",
      duration: "Acute relief in 3-5 days, seasonal maintenance advice"
    },
    {
      id: "t4",
      icon: "users",
      title: "Comprehensive Family & Pediatric Medicine",
      description: "Holistic general medicine checks for all ages. Addresses acute fevers, respiratory infections, stomach issues, and growth optimization in growing toddlers.",
      treats: "Prolonged high fever, Dengue/Typhoid recovery, IBS & food allergies, childhood micro-nutrient deficiency",
      expect: "Warm, non-intimidating pediatric examination, precise weight-based dosage metrics, and parental counseling.",
      duration: "Symptom resolution in 5-7 days"
    }
  ]
};


// ------------------------------------------------------------------------------
// 3. HEALTH TIPS & EDUCATION DATA (স্বাস্থ্য সচেতনতা টিপস)
//    - ক্যাটাগরি অপশনসমূহ: 'lifestyle', 'prevention', 'seasonal'
//    - নতুন টিপস যোগ করার ফরম্যাট:
//      {
//        id: "tip4",
//        category: "lifestyle",
//        title: "টিপসের শিরোনাম",
//        excerpt: "সংক্ষিপ্ত বিবরণ",
//        readTime: "৩ মিনিট পাঠ",
//        content: "বিস্তারিত আর্টিকেল (HTML ট্যাগ যেমন <strong>, <br> ব্যবহার করতে পারেন)"
//      }
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
// 4. ACADEMIC & CAREER TIMELINE DATA (শিক্ষা ও ক্যারিয়ারের মাইলফলক)
//    - নতুন কোনো ডিগ্রী বা পদবী যোগ করতে:
//      { year: "২০২৫", title: "পদবী বা ডিগ্রী", inst: "ইনস্টিটিউট বা প্রতিষ্ঠান", desc: "সংক্ষিপ্ত বিবরণ" }
// ------------------------------------------------------------------------------
const timelineData = {
  bn: [
    { year: "২০১২", title: "মেডিসিন ও সার্জারি স্নাতক (MBBS)", inst: "ঢাকা মেডিকেল কলেজ ও হাসপাতাল (DMCH)", desc: "মেডিসিন বিভাগে সফলতার সাথে চিকিৎসাবিদ্যা সম্পন্ন করেন।" },
    { year: "২০১৪", title: "বিসিএস (স্বাস্থ্য) ক্যাডার নিয়োগ", inst: "স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়", desc: "বিসিএস কর্মকর্তা হিসেবে সরকারি চিকিৎসাসেবায় নিয়োজিত হন।" },
    { year: "২০১৬ - ২০১৯", title: "প্রাক্তন প্রভাষক, ফরেনসিক মেডিসিন", inst: "আর্মি মেডিকেল কলেজ, বগুড়া সেনানিবাস", desc: "ভবিষ্যৎ সেনা চিকিৎসকদের চিকিৎসাবিজ্ঞান ও ডায়াগনস্টিকস বিষয়ে পাঠদান করেন।" },
    { year: "২০১৯ - ২০২১", title: "প্রাক্তন মেডিকেল অফিসার (৩৯তম বিসিএস)", inst: "গাবতলী উপজেলা স্বাস্থ্য কমপ্লেক্স, বগুড়া", desc: "তৃণমূল পর্যায়ে ফ্রন্টলাইন চিকিৎসক হিসেবে জনস্বাস্থ্য সেবা প্রদান করেন।" },
    { year: "২০২৩ - বর্তমান", title: "ফিজিওলজি বিভাগের প্রভাষক", inst: "শহীদ জিয়াউর রহমান মেডিকেল কলেজ (SZMC), বগুড়া", desc: "মেডিকেল শিক্ষার্থীদের পাঠদান এবং পাশাপাশি চেম্বারে মেডিসিন ও ডায়াবেটিস রোগীদের সেবা প্রদান করছেন।" }
  ],
  en: [
    { year: "2012", title: "Bachelor of Medicine & Surgery (MBBS)", inst: "Dhaka Medical College & Hospital (DMCH)", desc: "Graduated in Medicine from Bangladesh's premier medical institution." },
    { year: "2014", title: "BCS (Health) Cadre Commission", inst: "Ministry of Health & Family Welfare", desc: "Entered Civil Service as an Officer, serving dedicated community health roles." },
    { year: "2016 - 2019", title: "Former Lecturer, Forensic Medicine", inst: "Army Medical College, Bogra Cantonment", desc: "Educated future army doctors in clinical diagnostics and medicine." },
    { year: "2019 - 2021", title: "Former Medical Officer (BCS 39th Health)", inst: "Gabtali Upazila Health Complex, Bogura", desc: "Served as a frontline clinical physician managing critical primary health." },
    { year: "2023 - Present", title: "Lecturer of Physiology", inst: "Shaheed Ziaur Rahman Medical College (SZMC), Bogura", desc: "Educating MBBS students while actively serving General Medicine & Diabetes chambers." }
  ]
};


// ------------------------------------------------------------------------------
// 5. FREQUENTLY ASKED QUESTIONS DATA (সাধারণ প্রশ্নোত্তর / FAQ)
//    - নতুন প্রশ্ন ও উত্তর যোগ করতে:
//      { q: "আপনার প্রশ্নটি লিখুন?", a: "প্রশ্নের উত্তরটি লিখুন।" }
// ------------------------------------------------------------------------------
const faqData = {
  bn: [
    {
      q: "আমি কীভাবে ডাঃ সাজ্জাদুর রহমানের সিরিয়াল পেতে পারি?",
      a: "আমাদের চেম্বার হটলাইনে সরাসরি কল করে সহজে সিরিয়াল নিতে পারেন: অক্সিজেন হেলথকেয়ার (গাবতলী) 01302-031077 অথবা এলিট ডায়াগনস্টিক (বগুড়া) 01735 164 172 নম্বরে। এছাড়াও স্ক্রিনের নিচের হোয়াটসঅ্যাপ বাটনে মেসেজ দিতে পারেন।"
    },
    {
      q: "রোগী দেখার সময় ও চেম্বার বন্ধের দিনগুলো কী কী?",
      a: "ডাঃ সাজ্জাদুর রহমান শনি থেকে বুধবার প্রতিদিন বিকাল ৩:৩০ টা এবং শুক্রবার সকাল ৯:০০ টায় অক্সিজেন হেলথকেয়ারে রোগী দেখেন। এলিট ডায়াগনস্টিকের স্লটের জন্য ফোন করে জেনে নিন।"
    },
    {
      q: "প্রথমবার ভিজিট এবং পরবর্তীতে দেখানোর ফি কত?",
      a: "প্রাথমিক ভিজিট ফি এবং ফলো-আপের বিস্তারিত তথ্য হটলাইন ফোনে কল করার সময় আমাদের চেম্বার সহকারী নিশ্চিত করে জানিয়ে দেবেন।"
    },
    {
      q: "চেম্বারে আসার সময় সাথে কী নিয়ে আসতে হবে?",
      a: "আপনার পূর্বের সমস্ত প্রেসক্রিপশন, সাম্প্রতিক টেস্ট রিপোর্ট এবং বর্তমানে যেসব ওষুধ খাচ্ছেন সেগুলোর তালিকা বা পাতা সাথে নিয়ে আসবেন।"
    },
    {
      q: "জরুরি প্রয়োজনে কীভাবে যোগাযোগ করব?",
      a: "তীব্র শ্বাসকষ্ট, বুকে প্রচণ্ড ব্যথা বা অজ্ঞান হয়ে যাওয়ার মতো আশঙ্কাজনক অবস্থায় সাথে সাথে নিকটস্থ সরকারি হাসপাতালের জরুরি বিভাগে যান।"
    }
  ],
  en: [
    {
      q: "How can I book an appointment or serial?",
      a: "Call our direct chamber hotlines: Oxygen Healthcare (Gabtali) at 01302-031077 or Elite Diagnostic (Bogura) at 01735 164 172. You can also tap the floating WhatsApp button to text our desk."
    },
    {
      q: "What are the consultation hours and schedules?",
      a: "Dr. Rumon is available at Oxygen Healthcare from Saturday to Wednesday starting 3:30 PM, and Friday at 9:00 AM. For Elite Diagnostic slots, please call in advance."
    },
    {
      q: "What are the first-time consultation fees?",
      a: "Standard consultation and follow-up fee details will be clearly informed over the phone call by our chamber manager."
    },
    {
      q: "What documents should I bring to the chamber?",
      a: "Please bring all prior medical records, previous prescriptions, recent lab test results, and current medication packets."
    },
    {
      q: "What should I do in an acute emergency?",
      a: "For acute emergencies like sudden chest pressure, breathlessness, or severe trauma, please head immediately to the nearest hospital emergency room."
    }
  ]
};


// ==============================================================================
// 6. APPLICATION STATE & INITIALIZATION LOGIC (অ্যাপ্লিকেশন স্টেট ও রেন্ডারিং)
// ==============================================================================

// ডিফল্ট ভাষা সেট করা (ব্রাউজারে পূর্বে সংরক্ষিত ভাষা অথবা ডিফল্ট হিসেবে 'bn')
let currentLang = localStorage.getItem("dr_rumon_lang") || "bn";
let currentTipCategory = "all";
let currentTipSearch = "";
let expandedTipId = null;
let expandedFaqIdx = null;

// DOM লোড সম্পন্ন হলে রেন্ডারিং শুরু
document.addEventListener("DOMContentLoaded", () => {
  renderContent();
  initScrollListeners();
  initLucide();
});

// Lucide Icons ইনিশিয়ালাইজেশন
function initLucide() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}


// ==============================================================================
// 7. LANGUAGE SWITCHING & DOM UPDATES (ভাষা পরিবর্তন ও পেজ আপডেট)
// ==============================================================================

// ভাষা পরিবর্তন ফাংশন (বাংলা ↔ ইংরেজি)
function toggleLanguage() {
  currentLang = currentLang === "bn" ? "en" : "bn";
  localStorage.setItem("dr_rumon_lang", currentLang);
  renderContent();
}

// সমস্ত টেক্সট ও সেকশন রি-রেন্ডার করা
function renderContent() {
  const t = siteContent[currentLang];
  
  // ভাষা টগল বাটনের টেক্সট পরিবর্তন
  const langToggleBtn = document.getElementById("langToggleBtn");
  if (langToggleBtn) {
    langToggleBtn.innerHTML = currentLang === "bn" 
      ? '<span class="font-bold text-xs">EN</span>' 
      : '<span class="font-bold text-xs">বাংলা</span>';
  }

  // HTML এ data-i18n বিশিষ্ট সব এলিমেন্ট আপডেট করা
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // সার্চ ইনপুট প্লেসহোল্ডার আপডেট
  const searchInput = document.getElementById("tipsSearchInput");
  if (searchInput && t.tipsSearchPlaceholder) {
    searchInput.placeholder = t.tipsSearchPlaceholder;
  }

  // ডাইনামিক সেকশনসমূহ রেন্ডার
  renderTreatments();
  renderHealthTips();
  renderTimeline();
  renderFAQ();
  initLucide();
}


// ==============================================================================
// 8. TREATMENTS SECTION RENDERER (চিকিৎসা সেবা কার্ড রেন্ডারিং)
// ==============================================================================
function renderTreatments() {
  const container = document.getElementById("treatmentsContainer");
  if (!container) return;

  const items = treatmentsData[currentLang] || [];
  container.innerHTML = items.map(item => `
    <div class="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-slate-200/80 shadow-sm card-hover flex flex-col justify-between">
      <div>
        <div class="w-12 h-12 rounded-2xl bg-[#12A585]/10 text-[#12A585] flex items-center justify-center mb-4">
          <i data-lucide="${item.icon}" class="w-6 h-6"></i>
        </div>
        <h3 class="text-xl font-black text-slate-900 mb-2">${item.title}</h3>
        <p class="text-sm text-slate-600 leading-relaxed mb-4">${item.description}</p>
        
        <div class="space-y-2 pt-2 border-t border-slate-100 text-xs">
          <div><strong class="text-slate-800">${currentLang === 'bn' ? 'মূল লক্ষণসমূহ:' : 'Target Symptoms:'}</strong> <span class="text-slate-600">${item.treats}</span></div>
          <div><strong class="text-slate-800">${currentLang === 'bn' ? 'যা আশা করবেন:' : 'What to Expect:'}</strong> <span class="text-slate-600">${item.expect}</span></div>
          <div><strong class="text-slate-800">${currentLang === 'bn' ? 'চিকিৎসার সময়:' : 'Typical Duration:'}</strong> <span class="text-slate-600">${item.duration}</span></div>
        </div>
      </div>

      <button onclick="openBookingModal()" class="mt-6 w-full py-3 bg-[#12A585]/10 hover:bg-[#12A585] text-[#12A585] hover:text-white font-bold text-xs rounded-xl transition-all cursor-pointer">
        ${currentLang === 'bn' ? 'সিরিয়াল বুকিং করুন' : 'Book Consultation'}
      </button>
    </div>
  `).join("");
}


// ==============================================================================
// 9. HEALTH TIPS SEARCH & FILTER RENDERER (স্বাস্থ্য টিপস ফিল্টারিং)
// ==============================================================================

// ক্যাটাগরি ফিল্টার ক্লিক
function filterTips(category) {
  currentTipCategory = category;
  
  // ফিল্টার বাটনের একটিভ স্টাইল পরিবর্তন
  document.querySelectorAll(".tip-filter-btn").forEach(btn => {
    if (btn.getAttribute("data-category") === category) {
      btn.className = "tip-filter-btn px-4 py-2 rounded-xl text-xs font-bold bg-[#12A585] text-white shadow-sm cursor-pointer";
    } else {
      btn.className = "tip-filter-btn px-4 py-2 rounded-xl text-xs font-bold bg-white/70 hover:bg-white text-slate-600 border border-slate-200 cursor-pointer";
    }
  });

  renderHealthTips();
}

// লাইভ সার্চ হ্যান্ডলার
function handleTipsSearch(e) {
  currentTipSearch = e.target.value.toLowerCase().trim();
  renderHealthTips();
}

// আর্টিকেল ড্রয়ার ওপেন/ক্লোজ
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
        <i data-lucide="help-circle" class="w-8 h-8 mx-auto mb-2 text-slate-300"></i>
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
      <div class="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#12A585]/10 text-[#12A585]">
              ${art.category}
            </span>
            <span class="text-xs text-slate-400 font-semibold flex items-center gap-1">
              <i data-lucide="clock" class="w-3.5 h-3.5"></i> ${art.readTime}
            </span>
          </div>

          <h3 class="text-lg font-black text-slate-900 mb-2 leading-snug">${art.title}</h3>
          <p class="text-sm text-slate-600 leading-relaxed mb-4">${art.excerpt}</p>

          ${isExpanded ? `
            <div class="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-700 leading-relaxed bg-slate-50/70 p-4 rounded-2xl fade-in">
              ${art.content}
            </div>
          ` : ''}
        </div>

        <button onclick="toggleTipArticle('${art.id}')", class="mt-4 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-all cursor-pointer">
          <span>${isExpanded ? t.closeArticle : t.readArticle}</span>
          <i data-lucide="${isExpanded ? 'chevron-up' : 'chevron-down'}" class="w-4 h-4"></i>
        </button>
      </div>
    `;
  }).join("");

  initLucide();
}


// ==============================================================================
// 10. TIMELINE RENDERER (ক্যারিয়ার ও শিক্ষা মাইলফলক)
// ==============================================================================
function renderTimeline() {
  const container = document.getElementById("timelineContainer");
  if (!container) return;

  const items = timelineData[currentLang] || [];
  container.innerHTML = items.map((item, idx) => `
    <div class="relative pl-8 pb-8 border-l-2 border-[#12A585]/30 last:border-l-0 last:pb-0">
      <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-[#12A585]"></div>
      <span class="text-xs font-black text-[#12A585] uppercase tracking-wider block mb-1">${item.year}</span>
      <h4 class="text-base font-black text-slate-900 leading-tight mb-1">${item.title}</h4>
      <p class="text-xs font-bold text-slate-500 mb-1.5">${item.inst}</p>
      <p class="text-xs text-slate-600 leading-relaxed">${item.desc}</p>
    </div>
  `).join("");
}


// ==============================================================================
// 11. FAQ ACCORDION RENDERER (প্রশ্নোত্তর একর্ডিয়ন)
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
      <div class="bg-white/80 backdrop-blur-md rounded-2xl border ${isOpen ? 'border-[#12A585]/50 shadow-md' : 'border-slate-200/80 shadow-sm'} overflow-hidden transition-all">
        <button onclick="toggleFaq(${idx})" class="w-full p-5 text-left font-bold text-slate-800 flex items-center justify-between gap-4 cursor-pointer">
          <span class="text-sm md:text-base leading-snug">${item.q}</span>
          <i data-lucide="${isOpen ? 'chevron-up' : 'chevron-down'}" class="w-5 h-5 text-[#12A585] shrink-0"></i>
        </button>
        ${isOpen ? `
          <div class="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 fade-in">
            ${item.a}
          </div>
        ` : ''}
      </div>
    `;
  }).join("");

  initLucide();
}


// ==============================================================================
// 12. CLIPBOARD & TOAST NOTIFICATION (ফোন নম্বর কপি ও নোটিফিকেশন)
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
// 13. MODALS & MOBILE NAVIGATION (সিরিয়াল মোডাল ও মোবাইল ড্রয়ার)
// ==============================================================================
function openBookingModal() {
  const modal = document.getElementById("bookingModal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
}

function closeBookingModal() {
  const modal = document.getElementById("bookingModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
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
// 14. SCROLL LISTENERS (স্ক্রোল ইফেক্ট - নেভবার গ্লাস ও মোবাইল বটম বার)
// ==============================================================================
function initScrollListeners() {
  const navbar = document.getElementById("mainNavbar");
  const stickyBar = document.getElementById("mobileStickyBar");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // স্ক্রল করলে নেভবারে হালকা গ্লাস ইফেক্ট যুক্ত হওয়া
    if (navbar) {
      if (scrollY > 20) {
        navbar.classList.add("bg-white/90", "backdrop-blur-md", "shadow-sm", "border-b", "border-slate-200/50");
        navbar.classList.remove("bg-transparent");
      } else {
        navbar.classList.remove("bg-white/90", "backdrop-blur-md", "shadow-sm", "border-b", "border-slate-200/50");
        navbar.classList.add("bg-transparent");
      }
    }

    // মোবাইলে স্ক্রল করলে নিচের কল বার ভেসে ওঠা
    if (stickyBar) {
      if (scrollY > 300) {
        stickyBar.classList.remove("translate-y-full");
        stickyBar.classList.add("translate-y-0");
      } else {
        stickyBar.classList.remove("translate-y-0");
        stickyBar.classList.add("translate-y-full");
      }
    }
  });
}
