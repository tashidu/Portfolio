export const personalInfo = {
  name: "TASHIDU VINUKA",
  title: "Information Technology Undergraduate",
  email: "vinukatashidu@gmail.com",
  phone: "071-9666083",
  location: "Pinthaliya Junction, Pitiwella, Boossa",
  description: " Information Technology undergraduate seeking exciting and challenging opportunities in the IT field. Passionate about developing innovative solutions and contributing to impactful projects.",
  linkedin: "https://www.linkedin.com/in/tashidu-vinuka-348399213/",
  github: "https://github.com/tashidu",
  trailblazer: "https://www.salesforce.com/trailblazer/zauhw8zzhfeffjma26"
};

export const education = [
  {
    institution: "University of Kelaniya",
    degree: "BSc.(Hons.) Information Technology",
    period: "2023 - present",
    status: "Undergraduate"
  },
  {
    institution: "St.Aloysius College, Galle",
    degree: "Advanced Level Physical Science",
    period: "2021",
    result: "ABB"
  }
];

// Project interface
interface Project {
  title: string;
  year: string;
  description: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    title: "Garment Management System",
    year: "2025",
    description: "Developing a Garment Management System using Django, React.js, MySQL for fabric, cutting, sewing, packing, orders, and production tracking.",
    technologies: ["Django", "React.js", "MySQL"],
    category: "Full Stack",
    githubUrl: "https://github.com/tashidu/Pri_Fashion_",
    liveUrl: "https://garment-management-demo.vercel.app"
  },
  {
    title: "VinTrek Adventure Planning App",
    year: "2025",
    description: "Designed and developed VinTrek, an interactive outdoor adventure planning platform built on the Salesforce ecosystem. Enables users to discover hiking trails, book campsites, and rent gear through a responsive web interface powered by Apex, Lightning Web Components (LWC), and Experience Cloud. Integrates Salesforce Weather API for live weather data and Google Maps API for real-time location services.",
    technologies: ["Salesforce", "LWC", "Apex", "Experience Cloud", "Weather API", "Google Maps API"],
    category: "Salesforce",
    githubUrl: "https://github.com/pavithra614/VinTrek1",
    liveUrl: "https://github.com/pavithra614/VinTrek1"
  },
  {
    title: "Distributed Voting Application",
    year: "2025",
    description: "Developed a distributed voting app using React, Node.js, Docker, and replicas for scalability and reliability.",
    technologies: ["React", "Node.js", "Docker"],
    category: "Distributed Systems",
    githubUrl: "https://github.com/tashidu/distributed-voting-app",
    liveUrl: "https://voting-app-demo.netlify.app"
  },
  {
    title: "Inventory Management System",
    year: "2025",
    description: "Developed an Inventory Management System using Java Servlet and Jakarta EE, enabling efficient stock tracking, role-based access, and report generation.",
    technologies: ["Java Servlet", "Jakarta EE"],
    category: "Enterprise",
    githubUrl: "https://github.com/tashidu/inventory-management-java",
    liveUrl: "https://inventory-demo.herokuapp.com"
  },
  {
    title: "Inventory Management Web Application",
    year: "2024",
    description: "Developed a role-based inventory management system for tracking stock levels, movements, and reports. Built with modern web technologies for a secure, responsive interface.",
    technologies: ["Web Technologies"],
    category: "Web Application",
    githubUrl: "https://github.com/tashidu/webdevelopment",
    liveUrl: "https://inventory-web-demo.vercel.app"
  },
  {
    title: "Helarasa Recipe App",
    year: "2024",
    description: "Designed a mobile recipe app using Flutter and Firebase, enabling users to add, edit, rate recipes, upload images, and log in via Google and Facebook authentication.",
    technologies: ["Flutter", "Firebase"],
    category: "Mobile",
    githubUrl: "https://github.com/tashidu/webdevelopment",
    liveUrl: "https://play.google.com/store/apps/details?id=com.tashidu.helarasa"
  },
  {
    title: "Java-based LMS",
    year: "2023",
    description: "Building a Java and MySQL-powered Learning Management System with course management, student enrollment, assignment submissions, and role-based authentication.",
    technologies: ["Java", "MySQL"],
    category: "Education",
    githubUrl: "https://github.com/tashidu/java-lms",
    liveUrl: "https://java-lms-demo.herokuapp.com"
  },
  {
    title: "Flappy Bird Game (C++)",
    year: "2023",
    description: "Created a C++ CLI-based Flappy Bird game with score tracking, difficulty progression, and interactive mechanics for an engaging text-based experience.",
    technologies: ["C++"],
    category: "Game Development",
    githubUrl: "https://github.com/tashidu/flappy-bird-cpp",
    liveUrl: "https://github.com/tashidu/flappy-bird-cpp/releases"
  },
  {
    title: "Personalized Ad-Copy Generation",
    year: "2024",
    description: "Built a deep learning pipeline for personalized ad content using PyTorch, T5, and SentenceTransformers. Optimized with FAISS, Mixed Precision (FP16), and integrated Hugging Face, WandB, and GPU memory management.",
    technologies: ["PyTorch", "T5", "SentenceTransformers", "FAISS", "Hugging Face"],
    category: "Machine Learning",
    githubUrl: "https://github.com/tashidu/ad-copy-generation",
    liveUrl: "https://ad-copy-generator-demo.streamlit.app"
  }
];

export const skills = {
  "Programming Languages": [
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "TypeScript", level: 80 },
    { name: "C++", level: 75 }
  ],
  "Frameworks & Libraries": [
    { name: "React.js", level: 90 },
    { name: "Django", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "Flutter", level: 80 },
    { name: "Jakarta EE", level: 75 }
  ],
  "Databases & Tools": [
    { name: "MySQL", level: 85 },
    { name: "Firebase", level: 80 },
    { name: "Docker", level: 75 },
    { name: "Git", level: 90 },
    { name: "Figma", level: 70 }
  ],
  "Salesforce Platform": [
    { name: "Salesforce Platform", level: 85 },
    { name: "Apex Programming", level: 82 },
    { name: "Lightning Web Components (LWC)", level: 85 },
    { name: "Salesforce APIs", level: 80 },
    { name: "SOQL / SOSL", level: 78 },
    { name: "Custom Metadata & Custom Objects", level: 80 }
  ],
  "Cloud & AI": [
    { name: "Experience Cloud", level: 75 },
    { name: "Machine Learning", level: 75 },
    { name: "Weather API Integration", level: 80 },
    { name: "Google Maps API", level: 78 }
  ]
};

export const achievements = [
  {
    title: "2nd Runner Up CodeTerriers HackFest",
    year: "2025",
    description: "Achieved 2nd runner up in the CodeTerriers HackFest by developing VinTrek, an interactive outdoor adventure planning platform built on the Salesforce ecosystem. Designed and developed VinTrek to enable users to discover hiking trails, book campsites, and rent gear — all through a responsive web interface powered by Apex, Lightning Web Components (LWC), and Experience Cloud. The app integrates Salesforce Weather API for live weather data and Google Maps API for real-time location services. Through this project, gained expertise in Salesforce Platform, Apex Programming, Lightning Web Components (LWC), Salesforce APIs, SOQL/SOSL, and Custom Metadata & Custom Objects."
  }
];

export const certifications = [
  {
    title: "Apex Specialist Superbadge",
    status: "Ongoing",
    description: "Focused on Apex triggers, asynchronous callouts, scheduling, and testing automation and integration logic."
  },
  {
    title: "Lightning Web Components Specialist Superbadge",
    status: "Ongoing",
    description: "Developing and testing Lightning Web Components, converting Visualforce pages, enabling component communication, and using Lightning Data Service."
  }
];

export const extraCurricular = [
  {
    role: "Project Co-chair",
    organization: "Leo club UOK",
    project: "Dirisavi project",
    year: "2025"
  },
  {
    role: "Membership Coordinator",
    organization: "Leo club UOK",
    project: "Waste to Worth project",
    year: "2025"
  },
  {
    role: "Event Coordinator",
    organization: "Rotaract club UOK",
    project: "CHRIZTINZEL",
    year: "2024"
  },
  {
    role: "Project Coordinator",
    organization: "Humane club UOK",
    project: "PAWSCLICK",
    year: "2024"
  },
  {
    role: "Member",
    organization: "LED KLN UOK",
    unit: "Business Development unit",
    year: "2024"
  },
  {
    role: "Member",
    organization: "Industrial Management Science Student Association (IMSSA)",
    year: "2023"
  }
];

export const softSkills = [
  "Multi Tasking",
  "Team Collaboration",
  "Critical thinking",
  "Problem Solving",
  "Time Management",
  "Adaptability"
];

export const references = [
  {
    name: "Dr. Ruwan Wickramarachchi",
    title: "Lecturer Department of Industrial Management",
    institution: "Faculty of Science, University of Kelaniya",
    phone: "011 2914482",
    email: "ruwan@kln.ac.lk"
  },
  {
    name: "Dr. Thilini Mahanama",
    title: "Lecturer Department of Industrial Management",
    institution: "Faculty of Science, University of Kelaniya",
    phone: "071 7606243",
    email: "thilinim@kln.ac.lk"
  }
];
