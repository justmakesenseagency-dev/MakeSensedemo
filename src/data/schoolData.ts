/**
 * AI Jamia International School
 * Centralized Brand & Content Configuration
 *
 * Easily update phone, WhatsApp, Instagram, classes, photography, and facts here.
 * Notice: Strict anti-fabrication rules are followed. No fake certifications,
 * exam rankings, or unverified amenities are included.
 */

export const SCHOOL_INFO = {
  name: 'AI Jamia International School',
  tagline: 'Where Faith Meets the Future',
  subheading:
    'Modern education rooted in Islamic values, nurturing confident, knowledgeable and responsible young minds.',
  phone: '9301089001',
  phoneDial: 'tel:9301089001',
  whatsapp: '9301089001',
  whatsappUrl: 'https://wa.me/919301089001',
  instagram: '@al_jamia_international_school',
  instagramUrl: 'https://www.instagram.com/al_jamia_international_school',
  grades: 'Nursery – Class 8',
  medium: 'English Medium',
  educationType: 'Modern + Islamic Education',
};

// Replaceable image assets
export const SCHOOL_IMAGES = {
  heroCampus: '/src/assets/images/hero_school_campus_1792827343378.jpg',
  smartClass: '/src/assets/images/smart_classroom_learning_1792827343553.jpg',
  islamicStudy: '/src/assets/images/islamic_education_learning_1792827345129.jpg',
  playground: '/src/assets/images/school_playground_activities_1792827344794.jpg',
};

export const TRUST_STRIP_ITEMS = [
  'Modern Education',
  'Islamic Values',
  'Smart Classes',
  'English Medium',
  'Nursery – Class 8',
  'Playground',
];

export const ABOUT_FEATURES = [
  {
    number: '01',
    title: 'Modern Education',
    description:
      'Building strong academic foundations through engaging and meaningful learning in an English-medium environment.',
  },
  {
    number: '02',
    title: 'Islamic Education',
    description:
      'Integrating Qur’an and Sunnah learning into the everyday development of young minds, fostering strong Imaan and spiritual clarity.',
  },
  {
    number: '03',
    title: 'Character & Values',
    description:
      'Encouraging personal discipline, mutual respect, self-confidence, and steadfast moral values that guide students through life.',
  },
];

export const ACADEMIC_JOURNEY_STAGES = [
  {
    step: '01',
    stage: 'NURSERY & EARLY YEARS',
    subtitle: 'Nursery, LKG, UKG',
    description:
      'Building curiosity, confidence, communication, and early foundational learning habits through supportive, play-guided discovery.',
    focusPoints: [
      'Early language & phonics immersion',
      'Gentle introduction to Arabic alphabet & basic Adab',
      'Fine motor skills and sensory activities',
      'Warm, caring, safe atmosphere',
    ],
  },
  {
    step: '02',
    stage: 'PRIMARY SCHOOL',
    subtitle: 'Class 1 to Class 5',
    description:
      'Developing core academic understanding, logical problem-solving, structured creativity, and positive study routines.',
    focusPoints: [
      'Solid English, Mathematics, and General Science',
      'Daily Qur’an recitation, Tajweed basics, and essential Duas',
      'Interactive Smart Classroom sessions',
      'Character guidance, honesty, and cooperative teamwork',
    ],
  },
  {
    step: '03',
    stage: 'MIDDLE SCHOOL',
    subtitle: 'Class 6 to Class 8',
    description:
      'Strengthening analytical knowledge, moral responsibility, academic confidence, and independent critical thinking.',
    focusPoints: [
      'Higher-order conceptual academic inquiry',
      'Deen & Sunnah understanding applied to modern contexts',
      'Digital literacy, collaborative projects, and sportsmanship',
      'Leadership readiness and self-discipline',
    ],
  },
];

export const WHY_CHOOSE_CARDS = [
  {
    num: '01',
    title: 'Smart Classes',
    description:
      'Technology-supported classrooms designed to make concepts visual, interactive, and deeply engaging for every student.',
    icon: 'MonitorPlay',
  },
  {
    num: '02',
    title: 'Islamic Learning',
    description:
      'Authentic Qur’an and Sunnah training carefully integrated alongside modern education to cultivate strong Imaan.',
    icon: 'BookOpen',
  },
  {
    num: '03',
    title: 'Playground',
    description:
      'Dedicated outdoor space for students to stay physically active, healthy, social, and engaged in active play.',
    icon: 'Trophy',
  },
  {
    num: '04',
    title: 'Character Development',
    description:
      'Helping students grow with discipline, confidence, respect, humility, and principled moral values.',
    icon: 'Sparkles',
  },
  {
    num: '05',
    title: 'English Medium',
    description:
      'An English-medium learning environment supporting modern academic communication and future-ready fluency.',
    icon: 'Languages',
  },
  {
    num: '06',
    title: 'Balanced Education',
    description:
      'Harmoniously bringing academics, faith, physical activity, and ethical character together in one nurturing space.',
    icon: 'Compass',
  },
];

export const FACILITIES = [
  {
    title: 'Smart Classrooms',
    description:
      'Audio-visual equipped learning spaces designed to bring academic lessons to life through interactive digital aids.',
    image: SCHOOL_IMAGES.smartClass,
    tag: 'Technology in Education',
  },
  {
    title: 'Playground & Sports Area',
    description:
      'Safe, open outdoor sports grounds for daily physical exercise, recreational activities, and team sports.',
    image: SCHOOL_IMAGES.playground,
    tag: 'Physical Wellbeing',
  },
  {
    title: 'Modern Learning Spaces',
    description:
      'Well-lit, ventilated classrooms with ergonomic student desks configured to encourage focus and healthy peer collaboration.',
    image: SCHOOL_IMAGES.heroCampus,
    tag: 'Academic Focus',
  },
  {
    title: 'Islamic Learning Environment',
    description:
      'Dedicated spaces fostering reflection, Qur’an recitation, Sunnah study, and tranquil moral mentorship.',
    image: SCHOOL_IMAGES.islamicStudy,
    tag: 'Spiritual Nurturing',
  },
];

export const STUDENT_PILLARS = [
  {
    name: 'KNOWLEDGE',
    role: 'Intellectual Foundation',
    description:
      'Mastery of core English-medium academics, inquiry-driven learning, and clear conceptual understanding.',
  },
  {
    name: 'FAITH',
    role: 'Spiritual Compass',
    description:
      'Deep-rooted love for the Qur’an and Sunnah, pure intention, daily prayer habits, and strong Imaan.',
  },
  {
    name: 'CHARACTER',
    role: 'Moral Discipline',
    description:
      'Uncompromising integrity, kindness to others, respect for parents and elders, and personal responsibility.',
  },
  {
    name: 'CONFIDENCE',
    role: 'Future Readiness',
    description:
      'The courage to express ideas eloquently, stand firmly by one’s values, and thrive in a dynamic modern world.',
  },
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Campus Courtyard & Architecture',
    category: 'CLASSROOMS',
    image: SCHOOL_IMAGES.heroCampus,
    description: 'Bright open learning grounds designed for academic curiosity.',
  },
  {
    id: 2,
    title: 'Interactive Smart Board Sessions',
    category: 'SMART CLASSES',
    image: SCHOOL_IMAGES.smartClass,
    description: 'Digital visual aids transforming complex concepts into accessible learning.',
  },
  {
    id: 3,
    title: 'Open Play & Recreational Athletics',
    category: 'PLAYGROUND',
    image: SCHOOL_IMAGES.playground,
    description: 'Outdoor sports field enabling physical vigor and team cooperation.',
  },
  {
    id: 4,
    title: 'Qur’an & Sunnah Learning Setting',
    category: 'ISLAMIC EDUCATION',
    image: SCHOOL_IMAGES.islamicStudy,
    description: 'Tranquil study atmosphere fostering reverence and memorization.',
  },
  {
    id: 5,
    title: 'Engaged Primary Classrooms',
    category: 'LEARNING',
    image: SCHOOL_IMAGES.smartClass,
    description: 'Collaborative student desks supporting joyful peer participation.',
  },
  {
    id: 6,
    title: 'Outdoor Physical Education',
    category: 'ACTIVITIES',
    image: SCHOOL_IMAGES.playground,
    description: 'Structured games, running drills, and healthy student recreation.',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'What classes does AI Jamia International School offer?',
    answer:
      'AI Jamia International School welcomes admissions from Nursery through Class 8 (Nursery, LKG, UKG, and Classes 1 to 8).',
  },
  {
    question: 'What is the medium of instruction?',
    answer:
      'The medium of instruction is English Medium, delivering a comprehensive modern academic curriculum alongside Islamic studies.',
  },
  {
    question: 'Does the school provide Islamic education?',
    answer:
      'Yes. Islamic education is an essential pillar of our school. We seamlessly integrate Islamic learning with modern contemporary schooling.',
  },
  {
    question: 'What Islamic education is provided?',
    answer:
      'Students receive dedicated Qur’an and Sunnah training, Tajweed guidance, character development (Tarbiyah), and practical Islamic manners (Adab) to foster strong Imaan.',
  },
  {
    question: 'Does the school have smart classes?',
    answer:
      'Yes. The school features Smart Classes equipped with digital presentation tools and visual learning aids to make classroom lessons more engaging and interactive.',
  },
  {
    question: 'Is there a playground?',
    answer:
      'Yes. AI Jamia International School provides a spacious outdoor playground where students stay active, play sports, and develop teamwork and physical health.',
  },
  {
    question: 'How can I contact the school?',
    answer:
      'You can call our direct admissions helpline at 9301089001, connect directly on WhatsApp at 9301089001, or follow our official Instagram page @al_jamia_international_school.',
  },
  {
    question: 'How can I enquire about admissions?',
    answer:
      'You can fill out the online admission enquiry form on this website, call 9301089001, or message us instantly on WhatsApp at 9301089001 for immediate guidance from our admissions desk.',
  },
];

export const CLASS_OPTIONS = [
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
