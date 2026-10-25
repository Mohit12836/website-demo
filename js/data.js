// Comprehensive Database of Ready Business Solutions & Demos
// Grounded in authentic local demo assets created by Mohit Jain
const SOLUTIONS_DATA = [
  {
    id: "jewel-01",
    category: "jewelry",
    categoryName: "ज्वेलरी व फैशन",
    title: "जैन ज्वेलर्स - गोल्ड, डायमंड व सिल्वर शोरूम",
    tagline: "गहने, डायमंड, ब्राइडल सेट्स और लाइव गोल्ड रेट टिकर वेबसाइट",
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
    image: "assets/demo-jewellery-jain-jewellers.jpg",
    tags: ["Responsive", "Live Gold Rate", "WhatsApp Enquiry", "SEO Ready"],
    features: [
      "आज का लाइव 22K/24K सोने-चांदी का रेट टिकर",
      "एचडी फोटो व वीडियो ज्वेलरी कैटलॉग",
      "सीधा WhatsApp पर डिज़ाइन इन्क्वायरी बटन",
      "दुकान का गूगल मैप लोकेशन और ट्रस्ट बैज",
      "1 साल का मुफ्त .com/.in डोमेन और फास्ट होस्टिंग"
    ]
  },
  {
    id: "furniture-02",
    category: "furniture",
    categoryName: "होम डेकोर व फर्नीचर",
    title: "फर्नीहोम - फर्नीचर & होम डेकोर (इंदौर)",
    tagline: "सोफा, बेड, डाइनिंग टेबल और इंटीरियर डिज़ाइन लग्जरी स्टोर",
    problemSolved: "ग्राहक को शोरूम की हर वैरायटी, साइज़ और कस्टमाइज़ेशन ऑप्शन घर बैठे दिखाकर सीधा ऑर्डर बुक करें।",
    leadGain: "+60% बुकिंग इन्क्वायरी",
    price: 12999,
    originalPrice: 27999,
    deliveryDays: "48 घंटे",
    rating: 4.8,
    reviewsCount: 98,
    badge: "Trending",
    badgeColor: "blue",
    image: "assets/demo-furniture-furnihome.jpg",
    tags: ["3D Gallery", "Room Planner", "WhatsApp Booking", "Mobile First"],
    features: [
      "सोफा, बेड, डाइनिंग टेबल की रूम-वाइज़ कैटलॉग",
      "कस्टम साइज़ व फैब्रिक रिक्वेस्ट फॉर्म",
      "सीधा WhatsApp पर कोटेशन भेजने का विकल्प",
      "ग्राहक के घर की डिलीवरी ट्रैकर सपोर्ट",
      "फास्ट लोडिंग स्पीड और 100% मोबाइल रेडी"
    ]
  },
  {
    id: "csc-03",
    category: "services",
    categoryName: "सर्विस सेंटर व CSC",
    title: "CSC MPOnline & डिजिटल सेवा केंद्र",
    tagline: "पैन कार्ड, आधार, जाति-निवास, समग्र आईडी व सरकारी सेवाएं",
    problemSolved: "दुकान पर भीड़ कम होगी, लोग वेबसाइट पर आवश्यक डॉक्यूमेंट देखकर तुरंत WhatsApp पर भेज सकेंगे।",
    leadGain: "+3X तेज काम",
    price: 8999,
    originalPrice: 18999,
    deliveryDays: "24 घंटे",
    rating: 4.9,
    reviewsCount: 215,
    badge: "Value For Money",
    badgeColor: "emerald",
    image: "assets/demo-csc-mponline-digital-seva.jpg",
    tags: ["Document Checklist", "Instant WhatsApp", "Service Rates", "Trust Badges"],
    features: [
      "सभी 50+ सरकारी व ऑनलाइन सेवाओं की सूची व फीस",
      "डॉक्यूमेंट अपलोड और WhatsApp डायरेक्ट शेयरिंग",
      "दुकान के खुलने-बंद होने का लाइव स्टेटस",
      "QR कोड से डायरेक्ट ऑनलाइन पेमेंट स्वीकार करें",
      "गूगल मैप नेविगेशन ताकि ग्राहक दुकान पर आसानी से पहुंचे"
    ]
  },
  {
    id: "grocery-04",
    category: "retail",
    categoryName: "दुकान व शोरूम",
    title: "फ्रेशमार्ट - सुपरमार्केट & प्रोविजन स्टोर",
    tagline: "दाल, चावल, मसाले, ड्राईफ्रूट्स और 1 घंटे में होम डिलीवरी",
    problemSolved: "ब्लिंकिट और ज़ेप्टो की तरह अपनी दुकान से 30 मिनट में पूरे शहर में होम डिलीवरी का ऑर्डर लें।",
    leadGain: "लोकल ग्राहकों पर 100% कब्ज़ा",
    price: 10499,
    originalPrice: 21999,
    deliveryDays: "24 घंटे",
    rating: 4.9,
    reviewsCount: 174,
    badge: "Daily Essentials",
    badgeColor: "amber",
    image: "assets/demo-grocery-supermarket-freshmart.jpg",
    tags: ["Fast Ordering", "Smart Cart", "Daily Essentials", "Free Delivery"],
    features: [
      "1-क्लिक कार्ट: ग्राहक बस मात्रा चुने और लिस्ट WhatsApp पर आ जाए",
      "पर्ची / लिस्ट की फोटो खींचकर आर्डर भेजने का आसान विकल्प",
      "न्यूनतम आर्डर राशि पर फ्री डिलीवरी का नियम सेट करें",
      "दुकान का क्यूआर कोड ताकि ग्राहक पेमेंट का स्क्रीनशॉट भेज सके",
      "मोबाइल पर बिजली जैसी तेज स्पीड"
    ]
  },
  {
    id: "food-05",
    category: "food",
    categoryName: "रेस्टोरेंट व फूड",
    title: "फूडीज़ ट्रीट - रेस्टोरेंट & कैफे डिजिटल मेनू",
    tagline: "क्यूआर डिजिटल मेनू, टेबल बुकिंग और 0% कमीशन पर होम डिलीवरी",
    problemSolved: "स्विगी/ज़ोमैटो को 25% भारी कमीशन देने से बचें, सीधे अपने ग्राहकों से 0% कमीशन पर ऑर्डर लें!",
    leadGain: "25% कमीशन की बचत",
    price: 10999,
    originalPrice: 22999,
    deliveryDays: "24 घंटे",
    rating: 4.9,
    reviewsCount: 167,
    badge: "Zero Commission",
    badgeColor: "rose",
    image: "assets/demo-restaurant-foodies-treat.jpg",
    tags: ["QR Digital Menu", "WhatsApp Food Order", "Zero Commission", "Live Table Booking"],
    features: [
      "इंटरैक्टिव डिजिटल मेनू (फोटो, रेट व वेज/नॉनवेज टैग)",
      "ग्राहक कार्ट बनाकर सीधे WhatsApp पर एड्रेस सहित आर्डर भेजेगा",
      "टेबल पर रखने के लिए कस्टम QR कोड स्टिकर डिजाइन",
      "पार्टी और टेबल एडवांस बुकिंग फॉर्म",
      "डेली स्पेशल व ऑफर बैनर खुद बदलने की सुविधा"
    ]
  },
  {
    id: "clinic-06",
    category: "clinic",
    categoryName: "क्लिनिक व डॉक्टर",
    title: "आरोग्य केयर - क्लिनिक & पॉलीक्लिनिक पोर्टल",
    tagline: "ऑनलाइन अपॉइंटमेंट टोकन, डॉक्टर टाइमिंग और मेडिकल टेस्ट लिस्ट",
    problemSolved: "क्लिनिक पर मरीजों की लंबी लाइन और फोन कॉल्स बंद, मरीज ऑनलाइन टोकन लेकर सही समय पर आएंगे।",
    leadGain: "100% सुव्यवस्थित क्लिनिक",
    price: 11499,
    originalPrice: 23999,
    deliveryDays: "48 घंटे",
    rating: 4.9,
    reviewsCount: 88,
    badge: "High Trust",
    badgeColor: "emerald",
    image: "assets/demo-clinic-doctor-aarogya-care.jpg",
    tags: ["Token System", "Doctor Timings", "WhatsApp Booking", "HIPAA Safe"],
    features: [
      "तारीख व समय के अनुसार ऑनलाइन टोकन/अपॉइंटमेंट बुकिंग",
      "डॉक्टर की डिग्री, अनुभव और विशेषज्ञता का सुंदर डिस्प्ले",
      "क्लिनिक के खुलने का समय और इमरजेंसी संपर्क",
      "मरीजों के लिए गूगल रिव्यू और फीडबैक गैलरी",
      "व्हाट्सएप पर ऑटोमैटिक अपॉइंटमेंट कन्फर्मेशन मैसेज"
    ]
  },
  {
    id: "homedecor-07",
    category: "furniture",
    categoryName: "होम डेकोर व फर्नीचर",
    title: "होमस्टाइल - लक्जरी डेकोर & दिवाली कलेक्शंस",
    tagline: "कर्टेन्स, लाइटिंग, वॉल आर्ट और होम फर्निशिंग शोकेस",
    problemSolved: "ग्राहकों को घर सजाने के एक्सक्लूसिव डिज़ाइन्स और कॉम्बो ऑफर्स दिखाएं।",
    leadGain: "+50% प्रीमियम ग्राहक",
    price: 11999,
    originalPrice: 25999,
    deliveryDays: "48 घंटे",
    rating: 4.8,
    reviewsCount: 76,
    badge: "Festive Special",
    badgeColor: "amber",
    image: "assets/demo-homedecor-diwali-homestyle.jpg",
    tags: ["Festive Offers", "Room Visualizer", "Instant Quote", "Fast Delivery"],
    features: [
      "दिवाली व वेडिंग स्पेशल गिफ्ट कलेक्शंस",
      "WhatsApp पर तुरंत कस्टमाइज्ड कोटेशन",
      "घर पर डेमो व फैब्रिक सैंपल विजिट बुकिंग",
      "आसान EMI और ऑनलाइन पेमेंट इंटीग्रेशन"
    ]
  },
  {
    id: "electronics-08",
    category: "retail",
    categoryName: "दुकान व शोरूम",
    title: "डिजीमार्ट - मोबाइल & इलेक्ट्रॉनिक्स स्टोर",
    tagline: "स्मार्टफोन, लैपटॉप, स्मार्ट टीवी व एक्सेसरीज स्टोर",
    problemSolved: "लोकल ग्राहकों को ऑनलाइन से कम रेट और 0% ब्याज EMI का ऑफर दिखाकर दुकान पर बुलाएं।",
    leadGain: "+40% नए स्मार्टफोन बायर्स",
    price: 12499,
    originalPrice: 26999,
    deliveryDays: "24-48 घंटे",
    rating: 4.8,
    reviewsCount: 119,
    badge: "Tech Gadgets",
    badgeColor: "blue",
    image: "assets/demo-electronics-mobiles-digimart.jpg",
    tags: ["EMI Calculator", "Exchange Offer", "WhatsApp Booking", "Invoice Support"],
    features: [
      "ब्रांड-वाइज़ मोबाइल व लैपटॉप कैटलॉग",
      "पुराना फोन एक्सचेंज प्राइस कैलकुलेटर",
      "बजाज फिनसर्व व क्रेडिट कार्ड EMI ऑप्शन",
      "सीधे WhatsApp पर बुकिंग और टोकन पेमेंट"
    ]
  },
  {
    id: "footwear-09",
    category: "retail",
    categoryName: "दुकान व शोरूम",
    title: "स्टेपइन - प्रीमियम फुटवियर & शू शोरूम",
    tagline: "स्पोर्ट्स शूज, लेदर फॉर्मल्स, पार्टी वियर व सैंडल्स स्टोर",
    problemSolved: "युवाओं को लेटेस्ट ट्रेंडिंग शूज की वैरायटी और साइज़ उपलब्धता घर बैठे दिखाएं।",
    leadGain: "+35% वॉक-इन ग्राहक",
    price: 9999,
    originalPrice: 19999,
    deliveryDays: "24 घंटे",
    rating: 4.7,
    reviewsCount: 65,
    badge: "Trending Shoes",
    badgeColor: "rose",
    image: "assets/demo-footwear-shoes-stepin.jpg",
    tags: ["Size Filter", "Brand Showcase", "Fast Delivery", "Discount Deals"],
    features: [
      "साइज़ व ब्रांड के हिसाब से आसान फिल्टर",
      "लिमिटेड एडिशन शूज के लिए WhatsApp प्री-ऑर्डर",
      "7 दिन आसान साइज एक्सचेंज पॉलिसी डिस्प्ले",
      "कस्टमर रिव्यू और अनबॉक्सिंग वीडियो गैलरी"
    ]
  },
  {
    id: "realestate-10",
    category: "realestate",
    categoryName: "रियल एस्टेट",
    title: "स्काईव्यू - रियल एस्टेट & प्रॉपर्टी कंसल्टेंसी",
    tagline: "प्लॉट, 2/3 BHK लक्जरी फ्लैट्स, विला और कमर्शियल शॉप्स",
    problemSolved: "ग्राहकों को फोटो, वीडियो, लोकेशन और रेट सहित प्रॉपर्टी दिखाएं और जेन्युइन बायर पाएं।",
    leadGain: "प्रीमियम इन्वेस्टर्स का भरोसा",
    price: 13999,
    originalPrice: 29999,
    deliveryDays: "48 घंटे",
    rating: 4.9,
    reviewsCount: 64,
    badge: "High Ticket",
    badgeColor: "purple",
    image: "assets/demo-real-estate-skyview.jpg",
    tags: ["RERA Verified", "Map Pinning", "Video Walkthrough", "WhatsApp Direct"],
    features: [
      "प्लॉट, फ्लैट और दुकान के लिए अलग-अलग फिल्टर",
      "प्रॉपर्टी का वीडियो वॉकथ्रू और गूगल मैप लोकेशन",
      "लोन और EMI कैलकुलेटर इनबिल्ट",
      "RERA अप्रूव्ड और लीगल डॉक्यूमेंटेशन ट्रस्ट बैज",
      "सीधा मालिक या ब्रोकर से 1-क्लिक WhatsApp चैट"
    ]
  },
  {
    id: "salon-11",
    category: "services",
    categoryName: "सर्विस सेंटर व अन्य",
    title: "ग्लो & स्टाइल - यूनिसेक्स सैलून & स्पा",
    tagline: "हेयर कट, ब्राइडल मेकअप, फेशियल व स्किन केयर बुकिंग",
    problemSolved: "सैलून में ग्राहकों को इंतजार नहीं करना पड़ेगा, ऑनलाइन स्लॉट बुक कर समय पर आएंगे।",
    leadGain: "+50% ब्राइडल बुकिंग्स",
    price: 10499,
    originalPrice: 21999,
    deliveryDays: "24-48 घंटे",
    rating: 4.9,
    reviewsCount: 93,
    badge: "Beauty & Spa",
    badgeColor: "rose",
    image: "assets/demo-salon-beauty-glow-and-style.jpg",
    tags: ["Slot Booking", "Bridal Packages", "Rate Card", "Instagram Feed"],
    features: [
      "ब्राइडल व ग्रूम पैकेज का पूरा विवरण व रेट कार्ड",
      "तारीख व समय के अनुसार ऑनलाइन स्लॉट बुकिंग",
      "मेकअप आर्टिस्ट का पोर्टफोलियो व क्लाइंट रिव्यूज",
      "त्यौहारों व शादी सीजन के स्पेशल डिस्काउंट बैनर्स"
    ]
  },
  {
    id: "mehandi-12",
    category: "services",
    categoryName: "सर्विस सेंटर व अन्य",
    title: "रिया मेहंदी आर्टिस्ट - ब्राइडल डिज़ाइन्स",
    tagline: "राजस्थानी, अरेबिक, फिगर ब्राइडल मेहंदी व होम सर्विस बुकिंग",
    problemSolved: "दुल्हनों को अपने पसंदीदा मेहंदी डिज़ाइन्स दिखाकर शादी की तारीख एडवांस में बुक करवाएं।",
    leadGain: "+100% फुल सीजन बुकिंग",
    price: 9499,
    originalPrice: 19999,
    deliveryDays: "24 घंटे",
    rating: 5.0,
    reviewsCount: 110,
    badge: "Top Rated Artist",
    badgeColor: "emerald",
    image: "assets/demo-mehandi-artist-riya.jpg",
    tags: ["Bridal Portfolio", "Date Booking", "WhatsApp Chat", "Organic Henna"],
    features: [
      "100+ ओरिजिनल ब्राइडल मेहंदी डिज़ाइन्स गैलरी",
      "शादी व रिसेप्शन के लिए तारीख उपलब्धता चेकर",
      "100% केमिकल-फ्री ऑर्गेनिक मेहंदी की गारंटी",
      "सीधा WhatsApp पर पैकेज पूछताछ व बुकिंग"
    ]
  },
  {
    id: "legal-13",
    category: "services",
    categoryName: "सर्विस सेंटर व अन्य",
    title: "जैन & एसोसिएट्स - एडवोकेट & लीगल कंसल्टेंसी",
    tagline: "कंपनी रजिस्ट्रेशन, जीएसटी, इनकम टैक्स, लीगल नोटिस व ड्राफ्टिंग",
    problemSolved: "व्यापारियों को ऑनलाइन कानूनी सलाह और टैक्स कंप्लायंस की सुविधा एक ही जगह मिलेगी।",
    leadGain: "कॉर्पोरेट क्लाइंट्स का भरोसा",
    price: 12999,
    originalPrice: 27999,
    deliveryDays: "48 घंटे",
    rating: 4.9,
    reviewsCount: 52,
    badge: "Corporate Legal",
    badgeColor: "amber",
    image: "assets/demo-legal-advocate-jain-associates.jpg",
    tags: ["Online Consultation", "GST & ITR", "Legal Retainer", "Confidential"],
    features: [
      "ऑनलाइन लीगल कंसल्टेशन स्लॉट बुकिंग",
      "जीएसटी, ट्रेडमार्क व कंपनी रजिस्ट्रेशन सर्विस रेट्स",
      "100% गोपनीय और सुरक्षित डॉक्यूमेंट शेयरिंग",
      "लीगल नोटिस व एग्रीमेंट ड्राफ्टिंग रिक्वेस्ट फॉर्म"
    ]
  },
  {
    id: "auto-14",
    category: "services",
    categoryName: "सर्विस सेंटर व अन्य",
    title: "विस्मार्ट - पुरानी कार & बाइक बाजार",
    tagline: "सर्टिफाइड सेकंड हैंड गाड़ियां, RTO ट्रांसफर व कार लोन",
    problemSolved: "गाड़ी खरीदने-बेचने वालों को फोटो, किलोमीटर और रेट सहित लिस्टिंग दिखाएं।",
    leadGain: "+40% कार टेस्ट ड्राइव लीड्स",
    price: 11999,
    originalPrice: 24999,
    deliveryDays: "48 घंटे",
    rating: 4.8,
    reviewsCount: 84,
    badge: "Verified Vehicles",
    badgeColor: "blue",
    image: "assets/demo-used-cars-bikes-vismart.jpg",
    tags: ["Car Inspection", "Easy EMI", "RTO Transfer", "Instant Test Drive"],
    features: [
      "गाड़ी के मॉडल, साल और बजट के अनुसार फिल्टर",
      "140-पॉइंट इंस्पेक्शन रिपोर्ट और ओरिजिनल फोटो",
      "कार लोन EMI कैलकुलेटर और बैंक अप्रूवल",
      "1-टैप में WhatsApp पर टेस्ट ड्राइव बुकिंग"
    ]
  },
  {
    id: "wholesale-15",
    category: "retail",
    categoryName: "दुकान व शोरूम",
    title: "सियागंज होलसेल हब - किराना & कमोडिटी",
    tagline: "थोक किराना, व्यापारी रेट लिस्ट, ट्रांसपोर्ट डिलीवरी व B2B आर्डर",
    problemSolved: "रिटेल दुकानदारों को रोज़ का थोक भाव देकर सीधा लाखों का बल्क ऑर्डर प्राप्त करें।",
    leadGain: "शहर भर के दुकानदारों का नेटवर्क",
    price: 13499,
    originalPrice: 28999,
    deliveryDays: "48 घंटे",
    rating: 4.9,
    reviewsCount: 137,
    badge: "B2B Wholesale",
    badgeColor: "purple",
    image: "assets/demo-wholesale-siyaganj-hub.jpg",
    tags: ["Wholesale Rates", "GST Billing", "Bulk Order Cart", "Transport Facility"],
    features: [
      "प्रतिदिन का थोक (होलसेल) रेट कार्ड टिकर",
      "दुकानदारों के लिए न्यूनतम 10 कार्टन बल्क आर्डर कार्ट",
      "जीएसटी बिलिंग और ट्रांसपोर्ट बिल्टी सपोर्ट",
      "सीधा मालिक से थोक भाव पर WhatsApp सौदेबाजी"
    ]
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
    badge: "🏪 दुकान व सुपरमार्ट समाधान",
    pain: "दुकान में बैठे रहने पर केवल आसपास के लोग आते हैं, बाकी लोग ऑनलाइन खरीद लेते हैं।",
    solution: "आपकी दुकान की हर वैरायटी अब पूरे शहर के मोबाइल में दिखेगी। ग्राहक घर बैठे सामान चुनकर सीधे WhatsApp पर ऑर्डर देंगे!",
    expectedSales: "30% से 50% अधिक दैनिक बिक्री",
    demoId: "grocery-04"
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
    demoId: "food-05"
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
    demoId: "clinic-06"
  },
  "education": {
    badge: "🎓 स्कूल व कोचिंग समाधान",
    pain: "नए एडमिशन के समय पेरेंट्स को कोचिंग की ताकत और पुराने रिजल्ट्स का पता नहीं चल पाता।",
    solution: "टॉपर्स की सफलता की कहानियां, टेस्टिमोनियल और फ्री डेमो क्लास बुकिंग फॉर्म से रिकॉर्ड एडमिशन होंगे।",
    expectedSales: "एडमिशन इन्क्वायरी में 3 गुना उछाल",
    demoId: "csc-03"
  }
};
