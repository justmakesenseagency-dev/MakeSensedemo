/**
 * Al-Jamia International School
 * Gwalior | Nursery to Class 8 | English Medium
 * Official Website Data Configuration (Aligned with Website Brief & Audit)
 */

export const SCHOOL_INFO = {
  name: 'Al-Jamia International School',
  shortName: 'Al-Jamia',
  location: '24 Bigha Road, Bahodapur Choraha, Gwalior',
  tagline: 'Modern Education with Islamic Values.',
  heroSupporting:
    'An English-medium school for Nursery to Class 8, where children grow in knowledge, character and Imaan.',
  phone: '93010 89001',
  phoneRaw: '9301089001',
  phoneDial: 'tel:9301089001',
  whatsapp: '93010 89001',
  whatsappUrl: 'https://wa.me/919301089001',
  instagram: '@al_jamia_international_school',
  instagramUrl: 'https://www.instagram.com/al_jamia_international_school',
  facebook: 'https://www.facebook.com/share/19xCPL78c1/',
  grades: 'Nursery to Class 8',
  medium: 'English Medium',
  educationType: 'Modern + Islamic Education',
  officeHours: '8:30 AM – 2:30 PM (Mon – Sat)',
  address: '24 Bigha Road, Bahodapur Choraha, Gwalior, Madhya Pradesh, India',
};

// Real School Photos & Logo extracted from the official brief
export const SCHOOL_IMAGES = {
  logo: '/images/school_logo.png',
  campusGardenPath: '/images/campus_garden_path.jpg',
  campusGardenArea: '/images/campus_garden_area.jpg',
  classroomDesks: '/images/classroom_desks.jpg',
  outdoorPlayArea: '/images/outdoor_play_area.jpg',
  receptionOffice: '/images/reception_office.jpg',
  schoolCorridor: '/images/school_corridor.jpg',
  // Confirmed leadership portrait photographs
  portraitA: '/assets/aistudio/image_e734ddb2.png',
  portraitB: '/assets/aistudio/image_5afb7726.png',
  portraitC: '/images/portrait_reference_c.jpg',
  summerCampHero: '/images/summer_camp_coming_soon.jpg',
};

export const TRUST_POINTS = [
  'Nursery to Class 8',
  'English Medium',
  'Gwalior Campus',
  'Islamic Values & Guidance',
];

export const ABOUT_COPY = {
  title: 'About Al-Jamia',
  body:
    'At Al-Jamia International School, a child’s success should never come at the cost of their values. We bring concept-based English-medium learning together with daily Islamic guidance, so your child grows sharp in mind and strong in character.',
  bodyHindi:
    'अल-जामिया इंटरनेशनल स्कूल में, बच्चे की सफलता उनके संस्कारों की कीमत पर नहीं आनी चाहिए। हम कॉन्सेप्ट-आधारित अंग्रेज़ी माध्यम की पढ़ाई के साथ रोज़ाना इस्लामी मार्गदर्शन देते हैं, ताकि आपका बच्चा बुद्धि में तेज़ और चरित्र में मज़बूत बने।',
};

export const WHY_CHOOSE_CARDS = [
  {
    num: '01',
    title: 'Smart Classes',
    description: 'Lessons children can see and discuss.',
    descHindi: 'पाठ जिन्हें बच्चे देख सकते हैं और चर्चा कर सकते हैं।',
  },
  {
    num: '02',
    title: 'Qur’an & Duas',
    description: 'Daily recitation, gentle Tajweed.',
    descHindi: 'दैनिक तिलावत और सरल तजवीद का प्रशिक्षण।',
  },
  {
    num: '03',
    title: 'English Medium',
    description: 'Confident reading and speaking.',
    descHindi: 'आत्मविश्वास से अंग्रेज़ी पढ़ना और बोलना।',
  },
  {
    num: '04',
    title: 'Character First',
    description: 'Honesty, respect, discipline.',
    descHindi: 'ईमानदारी, आदर और अनुशासन।',
  },
  {
    num: '05',
    title: 'Active Play',
    description: 'Outdoor games every week.',
    descHindi: 'हर हफ़्ते खुले मैदान में खेल और व्यायाम।',
  },
  {
    num: '06',
    title: 'Caring Teachers',
    description: 'Every child known by name.',
    descHindi: 'हर बच्चे पर व्यक्तिगत ध्यान और स्नेह।',
  },
];

export const ACADEMIC_STAGES = [
  {
    stage: 'Nursery – UKG',
    title: 'Early Years Foundation',
    ageNote: 'Ages 3 to 5 Years',
    description:
      'Gentle foundation in language phonics, early numeracy, sensory activities, and basic Islamic Adab in a warm, caring environment.',
    points: [
      'Early English language & phonics immersion',
      'Arabic alphabet recognition & basic Duas',
      'Playground activity and social interaction',
      'Safe, supervised classroom care',
    ],
  },
  {
    stage: 'Classes 1 – 5',
    title: 'Primary School',
    ageNote: 'Class 1: Age 5.5+ Years',
    description:
      'Concept-based learning in core academic subjects, building reading fluency, mathematics, science, and structured moral etiquette.',
    points: [
      'Structured English, Mathematics & Environmental Studies',
      'Daily Qur’an reading, Tajweed basics & essential Duas',
      'Smart Class visual learning sessions',
      'Honesty, respect, and cooperative teamwork',
    ],
  },
  {
    stage: 'Classes 6 – 8',
    title: 'Middle School',
    ageNote: 'Classes 6 to 8',
    description:
      'Strengthening independent inquiry, analytical thinking, digital literacy, and firm moral judgment grounded in Sunnah values.',
    points: [
      'Higher-order conceptual academics & science experiments',
      'Seerah stories & Islamic morals applied to daily life',
      'Public speaking and sportsmanship',
      'Preparation for secondary education readiness',
    ],
  },
];

export const ISLAMIC_CURRICULUM_TABLE = [
  {
    level: 'Nursery – UKG',
    topics: 'Arabic Alphabet, Basic Daily Duas, Islamic Etiquette (Adab)',
    periods: 'Daily 20 mins',
    status: 'Foundation Schedule',
  },
  {
    level: 'Classes 1 – 3',
    topics: 'Nazira / Qur’an recitation, Tajweed fundamentals, Short Surahs',
    periods: 'Daily period',
    status: 'Core Syllabus',
  },
  {
    level: 'Classes 4 – 5',
    topics: 'Tajweed practice, Seerah stories, Daily Sunnah manners, Duas',
    periods: 'Daily period',
    status: 'Core Syllabus',
  },
  {
    level: 'Classes 6 – 8',
    topics: 'Qur’an recitation, Seerah in depth, Akhlaq & Islamic values',
    periods: 'Weekly scheduled modules',
    status: 'Advanced Syllabus',
  },
];

export const REAL_GALLERY_PHOTOS = [
  {
    id: 1,
    title: 'Campus Garden & Landscaped Path',
    caption: 'Landscaped green lawn and school pathway with official entrance banner.',
    category: 'Campus & Grounds',
    image: SCHOOL_IMAGES.campusGardenPath,
  },
  {
    id: 2,
    title: 'Classroom Seating & Blackboard',
    caption: 'Classroom with ergonomic student benches, natural ventilation and board.',
    category: 'Classrooms',
    image: SCHOOL_IMAGES.classroomDesks,
  },
  {
    id: 3,
    title: 'Outdoor Play Area & Slide',
    caption: 'Open recreational ground with multi-color slide and greenery for physical play.',
    category: 'Play Area',
    image: SCHOOL_IMAGES.outdoorPlayArea,
  },
  {
    id: 4,
    title: 'School Corridor & Class Wing',
    caption: 'Clean, tiled hallway leading to classrooms with safety supervision.',
    category: 'Corridor & Offices',
    image: SCHOOL_IMAGES.schoolCorridor,
  },
  {
    id: 5,
    title: 'Administrative Office & Reception',
    caption: 'Principal/Administrative consultation desk and visitor reception area.',
    category: 'Corridor & Offices',
    image: SCHOOL_IMAGES.receptionOffice,
  },
  {
    id: 6,
    title: 'Garden & Planted Campus Space',
    caption: 'Tree-lined garden area supporting fresh air and student recreation.',
    category: 'Campus & Grounds',
    image: SCHOOL_IMAGES.campusGardenArea,
  },
];

export const SUMMER_CAMP_ACTIVITIES = [
  {
    id: 'martial-arts',
    name: 'Martial Arts',
    desc: 'Self-defence, discipline, fitness',
  },
  {
    id: 'spoken-english',
    name: 'Spoken English',
    desc: 'Public speaking, storytelling',
  },
  {
    id: 'quran-duas',
    name: 'Qur’an & Duas Circle',
    desc: 'Gentle recitation, Duas, Prophet stories',
  },
  {
    id: 'calligraphy-art',
    name: 'Islamic Calligraphy & Art',
    desc: 'Arabic lettering, colour, craft',
  },
  {
    id: 'sports-outdoor',
    name: 'Sports & Outdoor Games',
    desc: 'Team games, races, fitness',
  },
  {
    id: 'computer-smart',
    name: 'Computer & Smart Skills',
    desc: 'Typing, safe internet, projects',
  },
  {
    id: 'life-skills',
    name: 'Life Skills & Etiquette',
    desc: 'Manners, teamwork, time sense',
  },
];

export const LEADERSHIP_PROFILES = [
  {
    role: 'Owner',
    name: 'Muhibul Islam',
    credentials: 'Ex Core Member’s HMO, Dawateislami India',
    description:
      'Providing guiding vision, moral mentorship, and values-based educational patronage to Al-Jamia International School.',
    photo: SCHOOL_IMAGES.portraitC,
  },
  {
    role: 'Managing Director',
    name: 'Er. Abdul Nasir Attari',
    credentials: 'Member’s Versetal (U K)',
    description:
      'Leading institutional infrastructure, modern Smart Class learning environments, and comprehensive student advancement.',
    photo: SCHOOL_IMAGES.portraitA,
  },
];

export const TEN_PARENT_FAQS = [
  {
    question: 'Which classes are available?',
    questionHindi: 'स्कूल में कौन-सी कक्षाएं उपलब्ध हैं?',
    answer: 'Nursery to Class 8, English medium.',
    answerHindi: 'नर्सरी से कक्षा 8 तक, अंग्रेज़ी माध्यम।',
  },
  {
    question: 'What is the age criteria?',
    questionHindi: 'प्रवेश के लिए उम्र का क्या नियम है?',
    answer: 'Nursery: 3+ years. Class 1: 5.5+ years.',
    answerHindi: 'नर्सरी: 3+ वर्ष। कक्षा 1: 5.5+ वर्ष।',
  },
  {
    question: 'What are the fees?',
    questionHindi: 'स्कूल की फ़ीस कितनी है?',
    answer:
      'Fees vary by class. Call 93010 89001 or visit the school office for the complete fee breakdown.',
    answerHindi:
      'फ़ीस कक्षा के अनुसार है। पूरी जानकारी के लिए 93010 89001 पर कॉल करें या स्कूल कार्यालय आएं।',
  },
  {
    question: 'What are the school timings?',
    questionHindi: 'स्कूल का समय क्या है?',
    answer: '8:30 AM to 2:30 PM (Monday to Saturday).',
    answerHindi: 'सुबह 8:30 बजे से दोपहर 2:30 बजे तक (सोमवार से शनिवार)।',
  },
  {
    question: 'Which documents are needed?',
    questionHindi: 'प्रवेश के लिए कौन-से दस्तावेज़ चाहिए?',
    answer:
      'Birth certificate, previous report card or Transfer Certificate (TC), Aadhaar card, and passport-size photographs.',
    answerHindi:
      'जन्म प्रमाण पत्र, पिछली मार्कशीट या टीसी, आधार कार्ड और पासपोर्ट साइज़ फ़ोटो।',
  },
  {
    question: 'What Islamic education is taught?',
    questionHindi: 'इस्लामी शिक्षा में क्या-क्या पढ़ाया जाता है?',
    answer:
      'Qur’an recitation, Tajweed basics, Duas, Seerah stories and Islamic manners as part of the regular school day.',
    answerHindi:
      'नियमित स्कूल दिनचर्या के हिस्से के रूप में क़ुरआन तिलावत, तजवीद के नियम, दुआएं, सीरत और इस्लामी अदब।',
  },
  {
    question: 'Is the campus safe?',
    questionHindi: 'क्या स्कूल परिसर सुरक्षित है?',
    answer:
      'Safe enclosed boundary, CCTV monitoring, constant teacher supervision, and verified student pick-up rules.',
    answerHindi:
      'सुरक्षित चारदीवारी, सीसीटीवी निगरानी, शिक्षकों की देखरेख और सत्यापन के साथ सुरक्षित पिक-अप नियम।',
  },
  {
    question: 'Is transport available?',
    questionHindi: 'क्या स्कूल वैन/ट्रांसपोर्ट उपलब्ध है?',
    answer:
      'School van transportation covers major residential routes in Gwalior. Inquire at the office for route details and stops.',
    answerHindi:
      'ग्वालियर के प्रमुख आवासीय क्षेत्रों के लिए स्कूल वैन सुविधा उपलब्ध है। रूट और स्टॉप की जानकारी कार्यालय से प्राप्त करें।',
  },
  {
    question: 'Which board or curriculum is followed?',
    questionHindi: 'स्कूल में कौन-सा बोर्ड या पाठ्यक्रम लागू है?',
    answer:
      'Concept-based English-medium curriculum designed for strong academic progression and comprehensive board readiness.',
    answerHindi:
      'मज़बूत शैक्षणिक विकास और बोर्ड तैयारी के लिए कॉन्सेप्ट-आधारित अंग्रेज़ी माध्यम पाठ्यक्रम।',
  },
  {
    question: 'Is there a Summer Camp?',
    questionHindi: 'क्या स्कूल में समर कैंप आयोजित होता है?',
    answer:
      'Yes, Summer Camp 2027 commences on 1 April with seven exciting skill activities. Open for registration now.',
    answerHindi:
      'हाँ, समर कैंप 2027 आगामी 1 अप्रैल से शुरू होगा जिसमें 7 गतिविधियां शामिल हैं। पंजीकरण अभी खुला है।',
  },
];

export const CLASS_OPTIONS = [
  'Select class',
  'Nursery',
  'LKG',
  'UKG',
  'Class 1',
  'Class 2',
  'Class 3',
  'Class 4',
  'Class 5',
  'Class 6',
  'Class 7',
  'Class 8',
];

export const CALL_TIME_OPTIONS = [
  'Morning (9:00 AM – 12:00 PM)',
  'Afternoon (12:00 PM – 3:00 PM)',
  'Evening (3:00 PM – 6:00 PM)',
  'Anytime during school office hours',
];

export interface AgeEligibilityResult {
  grade: string;
  stageName: string;
  recommendedAge: string;
  highlights: string[];
}

export function calculateEligibility(ageInYears: number): AgeEligibilityResult {
  if (ageInYears <= 3) {
    return {
      grade: 'Nursery',
      stageName: 'Early Years Foundation',
      recommendedAge: '2.5 to 3.5 Years',
      highlights: ['Sensory play', 'English speech phonetics', 'Gentle Islamic Adab', 'Social interaction'],
    };
  } else if (ageInYears === 4) {
    return {
      grade: 'LKG',
      stageName: 'Kindergarten Stage 1',
      recommendedAge: '3.5 to 4.5 Years',
      highlights: ['Letter recognition', 'Basic numeracy', 'Arabic alphabet phonetics', 'Creative expression'],
    };
  } else if (ageInYears === 5) {
    return {
      grade: 'UKG',
      stageName: 'Kindergarten Stage 2',
      recommendedAge: '4.5 to 5.5 Years',
      highlights: ['Sentence building', 'Mathematical patterns', 'Short Surahs & Duas', 'Physical coordination'],
    };
  } else if (ageInYears === 6) {
    return {
      grade: 'Class 1',
      stageName: 'Primary Stage',
      recommendedAge: '5.5 to 6.5 Years',
      highlights: ['Structured English & Math', 'Qur’an reading fundamentals', 'Environmental studies', 'Smart Class interaction'],
    };
  } else if (ageInYears === 7) {
    return {
      grade: 'Class 2',
      stageName: 'Primary Stage',
      recommendedAge: '6.5 to 7.5 Years',
      highlights: ['Fluent reading comprehension', 'Science discovery', 'Daily Islamic etiquette', 'Active playground sports'],
    };
  } else if (ageInYears === 8) {
    return {
      grade: 'Class 3',
      stageName: 'Primary Stage',
      recommendedAge: '7.5 to 8.5 Years',
      highlights: ['Applied problem solving', 'Sunnah ethics & Tarbiyah', 'Computer basics', 'Collaborative class tasks'],
    };
  } else if (ageInYears === 9) {
    return {
      grade: 'Class 4',
      stageName: 'Primary Stage',
      recommendedAge: '8.5 to 9.5 Years',
      highlights: ['English grammar & essay writing', 'Science experiments', 'Qur’an Tajweed practice', 'Sportsmanship & health'],
    };
  } else if (ageInYears === 10) {
    return {
      grade: 'Class 5',
      stageName: 'Upper Primary',
      recommendedAge: '9.5 to 10.5 Years',
      highlights: ['Advanced concepts', 'Islamic history lessons', 'Analytical mathematics', 'Classroom leadership'],
    };
  } else if (ageInYears === 11) {
    return {
      grade: 'Class 6',
      stageName: 'Middle School',
      recommendedAge: '10.5 to 11.5 Years',
      highlights: ['Subject-focused disciplines', 'Independent reasoning', 'Moral decision making', 'Digital technology projects'],
    };
  } else if (ageInYears === 12) {
    return {
      grade: 'Class 7',
      stageName: 'Middle School',
      recommendedAge: '11.5 to 12.5 Years',
      highlights: ['Deeper scientific inquiry', 'Principled debate & communication', 'Sunnah character in daily life', 'Team athletics'],
    };
  } else {
    return {
      grade: 'Class 8',
      stageName: 'Middle School Graduation',
      recommendedAge: '12.5 to 14 Years',
      highlights: ['Comprehensive academic readiness', 'Strong Imaan & leadership', 'Critical thinking', 'High school transition prep'],
    };
  }
}

