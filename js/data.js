// Comprehensive Database of Ready Business Solutions & Demos
const SOLUTIONS_DATA = [
  {
    id: "jewel-01",
    category: "jewelry",
    categoryName: "ज्वेलरी व फैशन",
    title: "ज्वेलरी शोरूम व डायमंड डिजिटल दुकान",
    tagline: "गहने, डायमंड, सिल्वर, फैशन ज्वेलरी के लिए प्रीमियम कैटलॉग",
    problemSolved: "दुकान पर आने से पहले ग्राहक घर बैठे नए डिज़ाइन्स और आज का लाइव सोने-चांदी का भाव देख सकते हैं।",
    leadGain: "+45% नए ग्राहक",
    liveRateFeature: true,
    price: 11999,
    originalPrice: 24999,
    deliveryDays: "24-48 घंटे",
    rating: 4.9,
    reviewsCount: 142,
    badge: "Most Popular",
    badgeColor: "amber",
    image: "assets/demo_jain_jewellers.jpg",
    tags: ["Responsive", "Live Gold Rate", "WhatsApp Enquiry", "SEO Ready"],
    features: [
      "आज का लाइव 22K/24K सोने-चांदी का रेट टिकर",
      "एचडी फोटो व वीडियो ज्वेलरी कैटलॉग",
      "सीधा WhatsApp पर डिज़ाइन इन्क्वायरी बटन",
      "दुकान का गूगल मैप लोकेशन और ट्रस्ट बैज",
      "1 साल का मुफ्त .com/.in डोमेन और फास्ट होस्टिंग"
    ],
    demoPreview: {
      brandName: "जैन ज्वेलर्स & संस (सूरत)",
      heroTitle: "शाही आभूषणों का सबसे भरोसेमंद संगम",
      heroSubtitle: "शुद्ध हॉलमार्क 916 गोल्ड एवं सर्टिफाइड डायमंड आभूषण — खास आपके लिए।",
      categories: ["ब्राइडल सेट्स", "सोने के कड़े", "डायमंड रिंग्स", "चांदी के बर्तन"],
      items: [
        { name: "कुंदन ब्राइडल नेकलेस सेट", weight: "45 ग्राम (22K)", price: "₹3,45,000", tag: "Hot Seller" },
        { name: "सॉलिटेयर डायमंड एंगेजमेंट रिंग", weight: "1.2 कैरेट", price: "₹1,18,000", tag: "New Arrival" },
        { name: "एंटीक टेम्पल वर्क झुमकी", weight: "18 ग्राम", price: "₹1,38,000", tag: "Trending" }
      ]
    }
  },
  {
    id: "furniture-02",
    category: "furniture",
    categoryName: "होम डेकोर व फर्नीचर",
    title: "फर्नीचर शोरूम & इंटीरियर डेकोर वेबसाइट",
    tagline: "फर्नीचर, होम डेकोर और इंटीरियर बिज़नेस के लिए लग्जरी स्टोर",
    problemSolved: "ग्राहक को शोरूम की हर वैरायटी, साइज़ और कस्टमाइज़ेशन ऑप्शन घर बैठे दिखाकर सीधा ऑर्डर बुक करें।",
    leadGain: "+60% बुकिंग इन्क्वायरी",
    price: 12999,
    originalPrice: 27999,
    deliveryDays: "48 घंटे",
    rating: 4.8,
    reviewsCount: 98,
    badge: "Trending",
    badgeColor: "blue",
    image: "assets/demo_furnihome.jpg",
    tags: ["3D Gallery", "Room Planner", "WhatsApp Booking", "Mobile First"],
    features: [
      "सोफा, बेड, डाइनिंग टेबल की रूम-वाइज़ कैटलॉग",
      "कस्टम साइज़ व फैब्रिक रिक्वेस्ट फॉर्म",
      "सीधा WhatsApp पर कोटेशन भेजने का विकल्प",
      "ग्राहक के घर की डिलीवरी ट्रैकर सपोर्ट",
      "फास्ट लोडिंग स्पीड और 100% मोबाइल रेडी"
    ],
    demoPreview: {
      brandName: "फर्नीहोम - लग्जरी लिविंग (इंदौर)",
      heroTitle: "आपके सपनों के आशियाने के लिए रॉयल फर्नीचर",
      heroSubtitle: "सागवान और शीशम की गारंटीड मजबूती — 10 साल की वारंटी के साथ।",
      categories: ["लिविंग रूम सोफा", "किंग साइज़ बेड", "डाइनिंग सेट्स", "ऑफिस फर्नीचर"],
      items: [
        { name: "7-सीटर रॉयल मखमल एल-शेप सोफा", weight: "प्रीमियम शीशम वुड", price: "₹48,500", tag: "Best Seller" },
        { name: "हाइड्रोलिक स्टोरेज किंग बेड", weight: "वाटरप्रूफ टीक फिनिश", price: "₹36,000", tag: "Special Offer" },
        { name: "6-सीटर मार्बल टॉप डाइनिंग टेबल", weight: "इटालियन मार्बल", price: "₹42,000", tag: "Popular" }
      ]
    }
  },
  {
    id: "csc-03",
    category: "services",
    categoryName: "सर्विस सेंटर व ऑनलाइन",
    title: "ऑनलाइन सर्विस सेंटर & CSC कियोस्क पोर्टल",
    tagline: "रेलवे टिकट, पैन कार्ड, आधार, बिजली बिल, CSC व कियोस्क पोर्टल",
    problemSolved: "दुकान पर भीड़ कम होगी, लोग वेबसाइट पर आवश्यक डॉक्यूमेंट देखकर तुरंत WhatsApp पर भेज सकेंगे।",
    leadGain: "+3X तेज काम",
    price: 8999,
    originalPrice: 18999,
    deliveryDays: "24 घंटे",
    rating: 4.9,
    reviewsCount: 215,
    badge: "Value For Money",
    badgeColor: "emerald",
    image: "assets/demo_balaji_online.jpg",
    tags: ["Document Checklist", "Instant WhatsApp", "Service Rates", "Trust Badges"],
    features: [
      "सभी 50+ सरकारी व ऑनलाइन सेवाओं की सूची व फीस",
      "डॉक्यूमेंट अपलोड और WhatsApp डायरेक्ट शेयरिंग",
      "दुकान के खुलने-बंद होने का लाइव स्टेटस",
      "QR कोड से डायरेक्ट ऑनलाइन पेमेंट स्वीकार करें",
      "गूगल मैप नेविगेशन ताकि ग्राहक दुकान पर आसानी से पहुंचे"
    ],
    demoPreview: {
      brandName: "बालाजी ऑनलाइन & ई-मित्र सेंटर",
      heroTitle: "सभी सरकारी व ऑनलाइन काम — एक ही छत के नीचे",
      heroSubtitle: "पैन कार्ड, आधार अपडेट, ट्रेन-फ्लाइट टिकट, ड्राइविंग लाइसेंस और आय प्रमाण पत्र तुरंत बनवाएं।",
      categories: ["पैन कार्ड", "आधार सेवाएं", "टिकट बुकिंग", "बैंकिंग व ट्रांसफर"],
      items: [
        { name: "नया पैन कार्ड / सुधार (3 दिन में नंबर)", weight: "आवश्यक: आधार + फोटो", price: "₹150", tag: "Instant" },
        { name: "कन्फर्म तत्काल ट्रेन टिकट बुकिंग", weight: "IRCTC ऑथराइज्ड", price: "न्यूनतम चार्ज", tag: "Verified" },
        { name: "मनी ट्रांसफर व माइक्रो ATM कैश", weight: "तुरंत किसी भी बैंक में", price: "₹10 से शुरू", tag: "24x7" }
      ]
    }
  },
  {
    id: "food-04",
    category: "food",
    categoryName: "रेस्टोरेंट व फूड",
    title: "रेस्टोरेंट, कैफे व क्लाउड किचन डिजिटल मेनू",
    tagline: "क्यूआर कोड मेनू, टेबल बुकिंग और सीधा व्हाट्सएप डिलीवरी सिस्टम",
    problemSolved: "स्विगी/ज़ोमैटो को 25% भारी कमीशन देने से बचें, सीधे अपने ग्राहकों से 0% कमीशन पर ऑर्डर लें!",
    leadGain: "25% कमीशन की बचत",
    price: 10999,
    originalPrice: 22999,
    deliveryDays: "24 घंटे",
    rating: 4.9,
    reviewsCount: 167,
    badge: "Zero Commission",
    badgeColor: "rose",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    tags: ["QR Digital Menu", "WhatsApp Food Order", "Zero Commission", "Live Table Booking"],
    features: [
      "इंटरैक्टिव डिजिटल मेनू (फोटो, रेट व वेज/नॉनवेज टैग)",
      "ग्राहक कार्ट बनाकर सीधे WhatsApp पर एड्रेस सहित आर्डर भेजेगा",
      "टेबल पर रखने के लिए कस्टम QR कोड स्टिकर डिजाइन",
      "पार्टी और टेबल एडवांस बुकिंग फॉर्म",
      "डेली स्पेशल व ऑफर बैनर खुद बदलने की सुविधा"
    ],
    demoPreview: {
      brandName: "द रॉयल स्पाइस रेस्टोरेंट & कैफे",
      heroTitle: "स्वाद जो दिल जीत ले — अब सीधा घर पर मंगवाएं",
      heroSubtitle: "0% अतिरिक्त डिलीवरी चार्ज, शुद्ध व स्वच्छ सामग्री से तैयार लजीज व्यंजन।",
      categories: ["स्टार्टर्स", "मेन कोर्स", "पिज्जा व बर्गर", "मॉकटेल्स"],
      items: [
        { name: "पनीर टिक्का बटर मसाला (हांडी)", weight: "वेज | 2-3 लोगों के लिए", price: "₹280", tag: "Chef Special" },
        { name: "वुड-फायर लोडेड फार्महाउस पिज्जा", weight: "10 इंच | चीज़ बर्स्ट", price: "₹320", tag: "Must Try" },
        { name: "क्रंची मसाला चाप प्लैटर", weight: "पुदीना चटनी के साथ", price: "₹220", tag: "Popular" }
      ]
    }
  },
  {
    id: "clinic-05",
    category: "clinic",
    categoryName: "क्लिनिक व डॉक्टर",
    title: "डॉक्टर क्लिनिक, डेंटिस्ट व पैथोलॉजी वेबसाइट",
    tagline: "अपॉइंटमेंट बुकिंग, डॉक्टर प्रोफाइल और टेस्ट रिपोर्ट डाउनलोड",
    problemSolved: "क्लिनिक पर मरीजों की लंबी लाइन और फोन कॉल्स बंद, मरीज ऑनलाइन टोकन लेकर सही समय पर आएंगे।",
    leadGain: "100% सुव्यवस्थित क्लिनिक",
    price: 11499,
    originalPrice: 23999,
    deliveryDays: "48 घंटे",
    rating: 4.9,
    reviewsCount: 88,
    badge: "High Trust",
    badgeColor: "emerald",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    tags: ["Token System", "Doctor Timings", "WhatsApp Booking", "HIPAA Safe"],
    features: [
      "तारीख व समय के अनुसार ऑनलाइन टोकन/अपॉइंटमेंट बुकिंग",
      "डॉक्टर की डिग्री, अनुभव और विशेषज्ञता का सुंदर डिस्प्ले",
      "क्लिनिक के खुलने का समय और इमरजेंसी संपर्क",
      "मरीजों के लिए गूगल रिव्यू और फीडबैक गैलरी",
      "व्हाट्सएप पर ऑटोमैटिक अपॉइंटमेंट कन्फर्मेशन मैसेज"
    ],
    demoPreview: {
      brandName: "संजीवनी हेल्थकेयर & पॉलीक्लिनिक",
      heroTitle: "अनुभवी डॉक्टर्स द्वारा समर्पित एवं सटीक उपचार",
      heroSubtitle: "बिना लाइन में लगे घर बैठे अपनी पसंद के समय पर अपॉइंटमेंट बुक करें।",
      categories: ["जनरल फिजिशियन", "डेंटल केयर", "स्त्री रोग विशेषज्ञ", "पैथोलॉजी टेस्ट"],
      items: [
        { name: "सीनियर डॉक्टर कंसल्टेशन टोकन", weight: "सुबह 10:00 से शाम 7:00", price: "₹400", tag: "Book Slot" },
        { name: "फुल बॉडी 64-पैरामीटर ब्लड चेकअप", weight: "घर से ब्लड सैंपल पिकअप", price: "₹899", tag: "50% Off" },
        { name: "डेंटल स्केलिंग व कम्पलीट चेकअप", weight: "30 मिनट सेशन", price: "₹600", tag: "Available" }
      ]
    }
  },
  {
    id: "fashion-06",
    category: "retail",
    categoryName: "दुकान व शोरूम",
    title: "कपड़ा दुकान, साड़ी शोरूम व बुटीक वेबसाइट",
    tagline: "साड़ी, लहंगा, सूट व मेंस वियर के लिए स्मार्ट डिजिटल शोरूम",
    problemSolved: "लोकल ग्राहकों को नई वैरायटी WhatsApp स्टेटस की जगह पूरी प्रोफेशनल वेबसाइट पर दिखाएं।",
    leadGain: "+50% रिपीट ग्राहक",
    price: 11999,
    originalPrice: 25999,
    deliveryDays: "24-48 घंटे",
    rating: 4.8,
    reviewsCount: 130,
    badge: "Best Seller",
    badgeColor: "purple",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    tags: ["Color Variants", "WhatsApp Cart", "Video Tour", "Festival Offers"],
    features: [
      "फैब्रिक, रंग और साइज़ फिल्टर के साथ प्रोडक्ट शोकेस",
      "ग्राहकों को सीधे WhatsApp पर फोटो सहित इन्क्वायरी भेजने की सुविधा",
      "त्यौहारों व शादी सीजन के स्पेशल ऑफर बैनर्स",
      "कस्टमर रिव्यू और इंस्टाग्राम रील्स एम्बेड करने का फीचर",
      "गूगल सर्च में आपकी दुकान को टॉप पर लाने वाला SEO"
    ],
    demoPreview: {
      brandName: "परिधान साड़ी & बुटीक पैलेस",
      heroTitle: "भारतीय परंपरा और आधुनिक फैशन का अनुपम संगम",
      heroSubtitle: "बनारसी, कांजीवरम, सिल्क साड़ियां और एक्सक्लूसिव पार्टी वियर सूट।",
      categories: ["सिल्क साड़ियां", "ब्राइडल लहंगा", "कुर्ती प्लाजो", "पार्टी वियर गाउन"],
      items: [
        { name: "प्योर बनारसी काता सिल्क साड़ी", weight: "जरी वर्क | रिच पल्लू", price: "₹4,200", tag: "Best Seller" },
        { name: "हैंडक्राफ्टेड ब्राइडल वेलवेट लहंगा", weight: "हैवी जरदोजी वर्क", price: "₹24,500", tag: "Exclusive" },
        { name: "डिजाइनर अनारकली सूट विथ दुपट्टा", weight: "प्योर कॉटन मलमल", price: "₹2,499", tag: "Trending" }
      ]
    }
  },
  {
    id: "grocery-07",
    category: "retail",
    categoryName: "दुकान व शोरूम",
    title: "किराना दुकान & सुपरमार्केट ऑनलाइन स्टोर",
    tagline: "दाल, चावल, मसाले, ड्राईफ्रूट्स और होम डिलीवरी सिस्टम",
    problemSolved: "ब्लिंकिट और ज़ेप्टो की तरह अपनी दुकान से 30 मिनट में मोहल्ले भर में डिलीवरी पहुंचाएं।",
    leadGain: "लोकल ग्राहकों पर 100% कब्ज़ा",
    price: 10499,
    originalPrice: 21999,
    deliveryDays: "24 घंटे",
    rating: 4.9,
    reviewsCount: 174,
    badge: "High Demand",
    badgeColor: "amber",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    tags: ["Fast Ordering", "Smart Cart", "Daily Essentials", "Free Delivery Alert"],
    features: [
      "1-क्लिक कार्ट: ग्राहक बस मात्रा चुने और लिस्ट WhatsApp पर आ जाए",
      "पर्ची / लिस्ट की फोटो खींचकर आर्डर भेजने का आसान विकल्प",
      "न्यूनतम आर्डर राशि पर फ्री डिलीवरी का नियम सेट करें",
      "दुकान का क्यूआर कोड ताकि ग्राहक पेमेंट का स्क्रीनशॉट भेज सके",
      "मोबाइल पर बिजली जैसी तेज स्पीड"
    ],
    demoPreview: {
      brandName: "अग्रवाल सुपरमार्ट & प्रोविजन स्टोर",
      heroTitle: "शुद्धता और भरोसे की गारंटी — 1 घंटे में फ्री होम डिलीवरी",
      heroSubtitle: "बाजार से सस्ती दर पर सभी ब्रांड्स के किराना सामान घर बैठे मंगवाएं।",
      categories: ["दाल व अनाज", "घी व तेल", "मसाले", "ड्राई फ्रूट्स"],
      items: [
        { name: "प्रीमियम बासमती राइस (5 KG बैग)", weight: "दावत स्पेशल लंबा दाना", price: "₹520", tag: "Daily Deal" },
        { name: "शुद्ध देसी गाय का घी (1 लीटर)", weight: "पारंपरिक वैदिक बिलौना", price: "₹680", tag: "Pure 100%" },
        { name: "शाही काजू & बादाम कॉम्बो पैक", weight: "500 ग्राम + 500 ग्राम", price: "₹850", tag: "Value Pack" }
      ]
    }
  },
  {
    id: "coaching-08",
    category: "education",
    categoryName: "एजुकेशन व कोचिंग",
    title: "कोचिंग इंस्टीट्यूट, स्कूल व ट्यूटर वेबसाइट",
    tagline: "कोर्स डिटेल्स, एडमिशन इंक्वायरी, नोट्स और रिजल्ट पोर्टल",
    problemSolved: "अभिभावकों का भरोसा बढ़ेगा और नए एडमिशन के लिए हर महीने दर्जनों इन्क्वायरी आएंगी।",
    leadGain: "+3X नए एडमिशन",
    price: 11999,
    originalPrice: 24999,
    deliveryDays: "48 घंटे",
    rating: 4.8,
    reviewsCount: 79,
    badge: "Admission Booster",
    badgeColor: "blue",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    tags: ["Admission Form", "Toppers Gallery", "Demo Class Booking", "Syllabus Download"],
    features: [
      "ऑनलाइन एडमिशन व डेमो क्लास बुकिंग फॉर्म",
      "टॉपर्स का फोटो रिजल्ट और पेरेंट्स के वीडियो टेस्टिमोनियल",
      "कोर्स की फीस स्ट्रक्चर और बैच टाइमिंग का स्पष्ट डिस्प्ले",
      "सीधा WhatsApp पर सिलेबस PDF डाउनलोड करने की सुविधा",
      "टीचर्स की योग्यता और अनुभव का प्रोफेशनल प्रोफाइल"
    ],
    demoPreview: {
      brandName: "उत्कर्ष करियर अकादमी (IIT-JEE & NEET)",
      heroTitle: "सफलता का सीधा रास्ता — बेहतरीन मेंटर्स के साथ",
      heroSubtitle: "पिछले 10 वर्षों में 1200+ छात्रों का चयन — नया बैच प्रारंभ, सीमित सीटें।",
      categories: ["IIT-JEE फाउंडेशन", "NEET मेडिकल", "कक्षा 9वीं-10वीं बोर्ड", "टेस्ट सीरीज"],
      items: [
        { name: "IIT-JEE 2 ईयर क्लासरूम प्रोग्राम", weight: "डेली 4 घंटे क्लास + DPPS", price: "सीट बुक करें", tag: "Top Rated" },
        { name: "NEET रैपिड रिवीजन क्रैश कोर्स", weight: "फुल मॉक टेस्ट + डाउट सॉल्विंग", price: "फ्री डेमो लें", tag: "Admissions Open" },
        { name: "ऑल इंडिया संडे टेस्ट सीरीज", weight: "ऑनलाइन + ऑफलाइन एनालिसिस", price: "रजिस्टर करें", tag: "Limited Seats" }
      ]
    }
  },
  {
    id: "auto-09",
    category: "services",
    categoryName: "सर्विस सेंटर व ऑटो",
    title: "कार/बाइक सर्विस सेंटर & वर्कशॉप पोर्टल",
    tagline: "सर्विस बुकिंग, पिकअप-ड्रॉप, रेट कार्ड और इमरजेंसी ब्रेकडाउन",
    problemSolved: "गाड़ी खराब होने पर ग्राहक गूगल पर सबसे पहले आपकी दुकान ढूंढेगा और सीधा कॉल करेगा।",
    leadGain: "डेली 10+ नए सर्विस आर्डर",
    price: 9999,
    originalPrice: 20999,
    deliveryDays: "24-48 घंटे",
    rating: 4.9,
    reviewsCount: 112,
    badge: "Local Hero",
    badgeColor: "amber",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
    tags: ["Breakdown SOS", "Pick & Drop", "WhatsApp Estimate", "Genuine Spares"],
    features: [
      "1-टैप 'इमरजेंसी रोड साइड हेल्प' कॉल बटन",
      "गाड़ी सर्विस का पारदर्शी रेट कार्ड (नो हिडन चार्ज)",
      "डोरस्टेप पिकअप और ड्रॉप शेड्यूलिंग फॉर्म",
      "ओरिजिनल स्पेयर पार्ट्स और वारंटी का ट्रस्ट डिस्प्ले",
      "Google Maps पर 'Best Car Service Near Me' में टॉप रैंकिंग"
    ],
    demoPreview: {
      brandName: "स्पीडज़ोन मल्टी-ब्रांड ऑटो वर्कशॉप",
      heroTitle: "आपकी कार की देखभाल — अधिकृत सर्विस सेंटर से आधी कीमत पर",
      heroSubtitle: "फ्री पिकअप & ड्रॉप | 100% ओरिजिनल पार्ट्स | 6 महीने की सर्विस वारंटी।",
      categories: ["जनरल सर्विस", "डेंटिंग-पेंटिंग", "AC रिपेयर", "इमरजेंसी SOS"],
      items: [
        { name: "कम्प्लीट कार जनरल सर्विस पैकेज", weight: "इंजन ऑयल + 40-पॉइंट चेक", price: "₹1,999", tag: "Best Value" },
        { name: "प्रीमियम टेफ्लॉन कोटिंग व डीप क्लीन", weight: "शो-रूम जैसी नई चमक", price: "₹1,499", tag: "Popular" },
        { name: "AC कूलिंग व गैस रीफिलिंग सर्विस", weight: "100% कूलिंग परफॉर्मेंस", price: "₹1,199", tag: "Summer Special" }
      ]
    }
  },
  {
    id: "realestate-10",
    category: "realestate",
    categoryName: "रियल एस्टेट",
    title: "प्रॉपर्टी डीलर & रियल एस्टेट ब्रोकर वेबसाइट",
    tagline: "प्लॉट, मकान, फ्लैट, दुकान और कमर्शियल जमीन की लिस्टिंग",
    problemSolved: "ग्राहकों को फोटो, वीडियो, लोकेशन और रेट सहित प्रॉपर्टी दिखाएं और जेन्युइन बायर पाएं।",
    leadGain: "प्रीमियम इन्वेस्टर्स का भरोसा",
    price: 13999,
    originalPrice: 29999,
    deliveryDays: "48 घंटे",
    rating: 4.9,
    reviewsCount: 64,
    badge: "High Ticket",
    badgeColor: "purple",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    tags: ["RERA Verified", "Map Pinning", "Video Walkthrough", "WhatsApp Direct"],
    features: [
      "प्लॉट, फ्लैट और दुकान के लिए अलग-अलग फिल्टर",
      "प्रॉपर्टी का वीडियो वॉकथ्रू और गूगल मैप लोकेशन",
      "लोन और EMI कैलकुलेटर इनबिल्ट",
      "RERA अप्रूव्ड और लीगल डॉक्यूमेंटेशन ट्रस्ट बैज",
      "सीधा मालिक या ब्रोकर से 1-क्लिक WhatsApp चैट"
    ],
    demoPreview: {
      brandName: "महावीर रियल्टर्स & डेवलपर्स",
      heroTitle: "सुरक्षित निवेश, सुरक्षित भविष्य — प्राइम लोकेशन्स पर",
      heroSubtitle: "RERA अप्रूव्ड प्लॉट्स और लक्ज़री 2/3 BHK फ्लैट्स — बैंक लोन सुविधा उपलब्ध।",
      categories: ["रेजिडेंशियल प्लॉट्स", "2 & 3 BHK फ्लैट्स", "कमर्शियल शॉप्स", "फार्म हाउस"],
      items: [
        { name: "प्राइम कॉलोनी में 1000 वर्गफीट प्लॉट", weight: "मेन रोड से 200 मी | तुरंत रजिस्ट्री", price: "₹18.5 लाख", tag: "Hot Deal" },
        { name: "3 BHK रेडी-टू-मूव लक्ज़री फ्लैट", weight: "मॉड्यूलर किचन + लिफ्ट + पार्क", price: "₹42 लाख", tag: "Ready to Move" },
        { name: "कमर्शियल मार्केट फ्रंट शॉप", weight: "रेंटल इनकम गारंटीड", price: "₹26 लाख", tag: "High ROI" }
      ]
    }
  },
  {
    id: "construction-11",
    category: "construction",
    categoryName: "कंस्ट्रक्शन व हार्डवेयर",
    title: "बिल्डिंग मटेरियल, हार्डवेयर व पेंट स्टोर",
    tagline: "सीमेंट, सरिया, सेनेटरी, टाइल्स, पाइप्स व पेंट्स की ऑनलाइन दुकान",
    problemSolved: "ठेकेदारों और मकान बनाने वालों को डायरेक्ट रेट लिस्ट दें और फोन पर ही लाखों का ऑर्डर क्लोज करें।",
    leadGain: "+40% बल्क ऑर्डर्स",
    price: 11499,
    originalPrice: 23999,
    deliveryDays: "48 घंटे",
    rating: 4.8,
    reviewsCount: 82,
    badge: "B2B & Retail",
    badgeColor: "amber",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    tags: ["Bulk Enquiry", "Brand Catalog", "WhatsApp Quotation", "Fast Delivery"],
    features: [
      "अल्ट्राटेक, जेके, एशियन पेंट्स जैसे टॉप ब्रांड्स का कैटलॉग",
      "थोक (होलसेल) और रिटेल के लिए अलग पूछताछ बटन",
      "सीधे WhatsApp पर बिल और कोटेशन भेजने का फीचर",
      "साइट पर डिलीवरी के लिए गाड़ी की सुविधा का विवरण",
      "गूगल मैप पर मजबूत लोकल विजिबिलिटी"
    ],
    demoPreview: {
      brandName: "श्रीनाथ हार्डवेयर & बिल्डिंग सप्लायर्स",
      heroTitle: "मजबूत मकान की मजबूत नींव — असली माल, सही दाम",
      heroSubtitle: "सीमेंट, सरिया, पेंट, प्लम्बिंग और सेनेटरी वेयर — साइट पर डायरेक्ट डिलीवरी।",
      categories: ["सीमेंट & सरिया", "एशियन पेंट्स", "टाइल्स & सेनेटरी", "पाइप्स & फिटिंग्स"],
      items: [
        { name: "अल्ट्राटेक सुपर सीमेंट (प्रति बोरी)", weight: "ISI ग्रेड 53 | फ्रेश स्टॉक", price: "₹380", tag: "Wholesale Rate" },
        { name: "टाटा टिस्कॉन 550D TMT सरिया", weight: "प्रति क्विंटल | फ्री अनलोडिंग", price: "मार्केट रेट", tag: "Certified" },
        { name: "रॉयल लग्जरी इमल्शन (20 लीटर)", weight: "एंटी-फंगल | 1000+ शेड्स", price: "₹6,800", tag: "Special Discount" }
      ]
    }
  },
  {
    id: "travel-12",
    category: "travel",
    categoryName: "ट्रैवल व टूरिज्म",
    title: "टूर पैकेज & टैक्सी/कैब सर्विस वेबसाइट",
    tagline: "चारधाम यात्रा, मनाली-गोवा टूर पैकेज, एयरपोर्ट टैक्सी और रेंटल",
    problemSolved: "यात्रियों को खूबसूरत टूर प्लान और फिक्स टैक्सी किराया दिखाकर तुरंत बुकिंग और एडवांस पेमेंट लें।",
    leadGain: "डायरेक्ट कस्टमर बुकिंग",
    price: 10999,
    originalPrice: 22999,
    deliveryDays: "24-48 घंटे",
    rating: 4.9,
    reviewsCount: 105,
    badge: "Tourism Special",
    badgeColor: "blue",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    tags: ["Day-wise Itinerary", "Fare Calculator", "Instant WhatsApp", "Trip Reviews"],
    features: [
      "दिन-वार टूर आइटिनररी (डे 1, डे 2 पूरा प्लान)",
      "प्रति किलोमीटर टैक्सी किराया और फिक्स एयरपोर्ट ड्रॉप रेट",
      "सीधा WhatsApp पर कस्टमाइज्ड ट्रिप प्लान बनाने की सुविधा",
      "ग्राहकों की ट्रिप की असली तस्वीरें और वीडियो रिव्यू",
      "टूरिस्ट सीजन के अनुसार तुरंत स्पेशल ऑफर अपडेट करने की आजादी"
    ],
    demoPreview: {
      brandName: "शुभम ट्रैवल्स & हॉलिडेज",
      heroTitle: "सुरक्षित सफर, यादगार पल — देश-विदेश की बेहतरीन यात्राएं",
      heroSubtitle: "चारधाम, कश्मीर, गोवा एवं राजस्थान के विशेष पैकेज — लग्जरी गाड़ियां और होटल सहित।",
      categories: ["धार्मिक यात्राएं", "हिल स्टेशन पैकेज", "आउटस्टेशन कैब्स", "कपल टूर्स"],
      items: [
        { name: "चारधाम यात्रा डीलक्स पैकेज (9 रातें/10 दिन)", weight: "होटल + खाना + ट्रांसपोर्ट शामिल", price: "₹24,999/व्यक्ति", tag: "Bestseller" },
        { name: "इनोवा क्रिस्टा आउटस्टेशन किराया", weight: "₹14/KM | अनुभवी ड्राइवर", price: "तुरंत बुक करें", tag: "Clean & Sanitized" },
        { name: "मनाली-रोहतांग 4 रातें हॉलिडे पैकेज", weight: "डीलक्स स्टे + साइटसीइंग", price: "₹12,499/व्यक्ति", tag: "Special Deal" }
      ]
    }
  }
];

// Feature Add-ons for the Interactive Quotation Generator (Image 2 style)
const QUOTATION_FEATURES = [
  { id: "feat-base", name: "वेबसाइट डिजाइन & डेवलपमेंट", desc: "100% रिस्पॉन्सिव, मॉडर्न UI, 10+ पेज स्ट्रक्चर, स्पीड ऑप्टिमाइज्ड", price: 9999, default: true, locked: true },
  { id: "feat-catalog", name: "डिजिटल प्रोडक्ट / सर्विस कैटलॉग", desc: "फोटो, रेट, साइज, डिस्क्रिप्शन और अनलिमिटेड आइटम शोकेस", price: 2000, default: true },
  { id: "feat-whatsapp", name: "1-क्लिक WhatsApp ऑर्डर & इन्क्वायरी", desc: "ग्राहक का नाम, पता व चुने हुए सामान की लिस्ट सीधे आपके WhatsApp पर", price: 1500, default: true },
  { id: "feat-admin", name: "आसान एडमिन पैनल (Admin Panel)", desc: "मोबाइल से ही नए फोटो, रेट और ऑफर जब चाहे बदलने की पूरी आजादी", price: 3000, default: false },
  { id: "feat-payment", name: "ऑनलाइन पेमेंट गेटवे (UPI / Razorpay / QR)", desc: "PhonePe, GooglePay, कार्ड से बिना झंझट सीधे आपके बैंक खाते में पैसे", price: 2500, default: false },
  { id: "feat-domain", name: "1 वर्ष .com / .in डोमेन + सुपरफास्ट होस्टिंग", desc: "प्रीमियम SSL सिक्योरिटी और 99.9% अपटाइम के साथ बिल्कुल फ्री (ऑफर में)", price: 0, originalVal: 3500, default: true, locked: true },
  { id: "feat-seo", name: "Google My Business & लोकल SEO सेटअप", desc: "गूगल पर 'दुकान नियर मी' सर्च करने पर आपकी दुकान सबसे ऊपर दिखे", price: 1500, default: true },
  { id: "feat-support", name: "1 महीने की VIP ट्रेनिंग और मुफ्त सपोर्ट", desc: "वेबसाइट चलाना सिखाना और कोई भी तकनीकी समस्या तुरंत ठीक करना", price: 0, originalVal: 2000, default: true, locked: true }
];

// Problem -> Solution Selector Profiles
const BUSINESS_SOLUTIONS_MAP = {
  "retail": {
    badge: "🏪 दुकान व शोरूम समाधान",
    pain: "दुकान में बैठा रहने पर केवल आसपास के लोग आते हैं, बाकी लोग ऑनलाइन खरीद लेते हैं।",
    solution: "आपकी दुकान की हर वैरायटी अब पूरे शहर के मोबाइल में दिखेगी। ग्राहक घर बैठे सामान चुनकर सीधे WhatsApp पर ऑर्डर देंगे!",
    expectedSales: "30% से 50% अधिक दैनिक बिक्री",
    demoId: "grocery-07"
  },
  "jewelry": {
    badge: "💍 ज्वेलरी व्यापार समाधान",
    pain: "ग्राहक दुकान पर आने से कतराते हैं क्योंकि उन्हें सोने का आज का भाव और नए डिज़ाइन्स पता नहीं होते।",
    solution: "लाइव गोल्ड रेट टिकर और एक्सक्लूसिव ज्वेलरी कैटलॉग आपकी वेबसाइट पर देखकर ग्राहक सीधे विजिट बुक करेंगे।",
    expectedSales: "हर महीने 15+ बड़े ब्राइडल आर्डर",
    demoId: "jewel-01"
  },
  "food": {
    badge: "🍽️ रेस्टोरेंट व कैफे समाधान",
    pain: "स्विगी/ज़ोमैटो को 25-30% कमीशन कटवाने के बाद मुनाफ़ा ना के बराबर बचता है।",
    solution: "अपना खुद का डिजिटल क्यूआर मेनू! 0% कमीशन पर सीधे अपने WhatsApp पर डिलीवरी ऑर्डर लें और टेबल बुक करवाएं।",
    expectedSales: "कमीशन में हर महीने ₹15,000+ की बचत",
    demoId: "food-04"
  },
  "services": {
    badge: "🔧 सर्विस सेंटर व कियोस्क समाधान",
    pain: "ग्राहकों को पता नहीं होता कि आप कौन-कौन सी सेवाएं देते हैं और क्या दस्तावेज चाहिए।",
    solution: "पूरी सर्विस रेट लिस्ट और डॉक्यूमेंट चेकलिस्ट ऑनलाइन। ग्राहक पहले से तैयार होकर आएंगे, आपका समय 3x बचेगा!",
    expectedSales: "प्रतिदिन 35+ अतिरिक्त ग्राहक",
    demoId: "csc-03"
  },
  "clinic": {
    badge: "🩺 क्लिनिक व डॉक्टर समाधान",
    pain: "क्लिनिक पर मरीजों का भारी जमघट, फोन बार-बार बजना और अव्यवस्था।",
    solution: "मरीज घर बैठे डिजिटल टोकन और अपॉइंटमेंट स्लॉट बुक करेंगे। क्लिनिक एकदम शांत और सुव्यवस्थित रहेगा।",
    expectedSales: "100% सुचारू और वीआईपी क्लिनिक अनुभव",
    demoId: "clinic-05"
  },
  "education": {
    badge: "🎓 स्कूल व कोचिंग समाधान",
    pain: "नए एडमिशन के समय पेरेंट्स को कोचिंग की ताकत और पुराने रिजल्ट्स का पता नहीं चल पाता।",
    solution: "टॉपर्स की सफलता की कहानियां, टेस्टिमोनियल और फ्री डेमो क्लास बुकिंग फॉर्म से रिकॉर्ड एडमिशन होंगे।",
    expectedSales: "एडमिशन इन्क्वायरी में 3 गुना उछाल",
    demoId: "coaching-08"
  }
};
