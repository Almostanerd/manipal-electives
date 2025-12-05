export type Bucket =
  | "OE"
  | "PE1_with_minor"
  | "PE2_with_minor"
  | "PE1_without_minor"
  | "PE2_without_minor";

export type Resource = {
  type: string; // "Notes" | "PYQ" | "Slides" | etc.
  label: string;
  url: string;
};

export type Course = {
  code: string;
  name: string;
  type: "OE" | "PE";
  dept: string;
  credits: number;
  semester: number;
  buckets: Bucket[];
  summary: string;
  resources?: Resource[];
};

export function courseSlug(code: string): string {
  return code
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")        // spaces -> dashes
    .replace(/[^a-z0-9-]/g, ""); // remove weird symbols
}

export const courses: Course[] = [
  // OEs
  {
    code: "HUM 4337",
    name: "Introduction to Enterprise Risk Management",
    type: "OE",
    dept: "HUM",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Basics of enterprise risk, governance and compliance. More management/finance flavour.",
  },
  {
    code: "CIE 4315",
    name: "Introduction to Remote Sensing and GIS",
    type: "OE",
    dept: "CIE",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Intro to remote sensing, satellite imagery and GIS tools. Theory + applications.",
  },
  {
    code: "ELE 4311",
    name: "MATLAB for Engineers",
    type: "OE",
    dept: "ELE",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Hands-on MATLAB basics for simulations and numerical computing.",
  },
  {
    code: "ELE 4312",
    name: "Essentials of Energy Auditing",
    type: "OE",
    dept: "ELE",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Energy efficiency, auditing techniques and power consumption analysis.",
  },
  {
    code: "ELE 4313",
    name: "Solar Photovoltaics",
    type: "OE",
    dept: "ELE",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Solar PV fundamentals, basic design and system-level understanding.",
  },
  {
    code: "ICE 4314",
    name: "Sensor Technology",
    type: "OE",
    dept: "ICE",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Different sensor types, characteristics and instrumentation basics. Good for IoT/embedded people.",
  },
  {
    code: "ICE 4316",
    name: "Virtual Instrumentation",
    type: "OE",
    dept: "ICE",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Virtual instrumentation tools, measurement systems and automation concepts.",
  },
  {
    code: "CIE 4314",
    name: "Geology for Engineers",
    type: "OE",
    dept: "CIE",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Engineering geology: soils, rocks and their relevance for infra projects.",
  },
  {
    code: "CIE 4313",
    name: "Environmental Management",
    type: "OE",
    dept: "CIE",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Environmental regulations, impact assessment and sustainability practices.",
  },
  {
    code: "CIE 4316",
    name: "Strength of Materials",
    type: "OE",
    dept: "CIE",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Classical strength of materials: stress, strain, beams etc. Calc heavy.",
  },
  {
    code: "AAE 4311",
    name: "Introduction to Aerospace Engineering",
    type: "OE",
    dept: "AAE",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "High-level intro to aerospace systems, aerodynamics and aircraft basics.",
  },
  {
    code: "AAE 4313",
    name: "Introduction to Automobile Engineering",
    type: "OE",
    dept: "AAE",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Basics of automobile systems: engines, transmission, vehicle dynamics.",
  },
  {
    code: "CHM 4312",
    name: "Sustainable Chemical Processes and Products",
    type: "OE",
    dept: "CHM",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Green chemical processes, sustainability and eco-friendly product design.",
  },
  {
    code: "ECE 4323",
    name: "Vedic Mathematics and its Applications in Modern Technologies",
    type: "OE",
    dept: "ECE",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Vedic math tricks and their potential applications in computing/digital systems.",
  },
  {
    code: "ECE 4313",
    name: "Introduction to Communication Systems",
    type: "OE",
    dept: "ECE",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Basic analog/digital communication concepts and modulation schemes.",
  },
  {
    code: "MAT 5301",
    name: "Applied Graph Theory",
    type: "OE",
    dept: "MAT",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Graph theory with applications in networks, algorithms and optimisation.",
  },
  {
    code: "MAT 5302",
    name: "Applied Linear Algebra",
    type: "OE",
    dept: "MAT",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Linear algebra for applications (ML, systems etc.). Math heavy but very useful.",
  },
  {
    code: "MAT 5305",
    name: "Optimization Techniques",
    type: "OE",
    dept: "MAT",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Classical optimisation methods, constrained/unconstrained problems.",
  },
  {
    code: "MAT 5304",
    name: "Mathematical Modelling",
    type: "OE",
    dept: "MAT",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Building mathematical models for real-world systems (discrete and continuous).",
  },
  {
    code: "MAT 5306",
    name: "Stochastic Processes and Reliability",
    type: "OE",
    dept: "MAT",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Stochastic processes, Markov chains and reliability analysis.",
  },
  {
    code: "MTE 4315",
    name: "Introduction to Industrial Robotics",
    type: "OE",
    dept: "MTE",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Basics of industrial robots, kinematics and automation use-cases.",
  },
  {
    code: "IIE 4324",
    name: "Yoga",
    type: "OE",
    dept: "IIE",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Wellness OE focusing on yoga practice and foundational concepts.",
  },
  {
    code: "IIE 4310",
    name: "Medical Emergency and First Aid",
    type: "OE",
    dept: "IIE",
    credits:3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Practical OE on basic life support and handling common emergencies.",
  },
  {
    code: "IIE 4315",
    name: "Reporting and Writing",
    type: "OE",
    dept: "IIE",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Covers journalistic/report writing and structured written communication.",
  },
  {
    code: "IIE 4318",
    name: "Media Production Techniques",
    type: "OE",
    dept: "IIE",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Intro to media production: basic video/audio and creative workflows.",
  },
  {
    code: "IIE 4333",
    name: "Meditation and Conscious Living Course",
    type: "OE",
    dept: "IIE",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Meditation and conscious living practices focused on mental wellbeing.",
  },
  {
    code: "IIE 4334",
    name: "Discerning India: Living Cultures of Tulunadu",
    type: "OE",
    dept: "IIE",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Culture-focused OE on the history and living traditions of Tulunadu.",
  },
  {
    code: "IIE 4335",
    name: "Introduction to Foreign Language - French I",
    type: "OE",
    dept: "IIE",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Beginner-level French: basic grammar, vocabulary and conversation.",
  },
  {
    code: "HUM 4322",
    name: "Film Studies",
    type: "OE",
    dept: "HUM",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Analysing films, genres and cinematic techniques. Reading/writing heavy.",
  },
  {
    code: "HUM 4323",
    name: "German for Beginners",
    type: "OE",
    dept: "HUM",
    credits: 3,
    semester: 6,
    buckets: ["OE"],
    summary:
      "Beginner-level German language course for absolute beginners.",
  },

  // PE1 (with minor) + PE1 without minor
  {
    code: "ICT 4401",
    name: "Artificial Intelligence",
    type: "PE",
    dept: "ICT",
    credits: 3,
    semester: 6,
    buckets: ["PE1_with_minor", "PE1_without_minor"],
    summary:
      "Core AI: search, reasoning and intro ML. Good entry point into AI/ML.",
  },
  {
    code: "HUM 4411",
    name: "Entrepreneurship",
    type: "PE",
    dept: "HUM",
    credits: 3,
    semester: 6,
    buckets: ["PE1_with_minor"],
    summary:
      "Startup basics: opportunity spotting, business models, funding and pitching.",
  },
  {
    code: "CRA 4401",
    name: "Marketing in a Digital World",
    type: "PE",
    dept: "CRA",
    credits: 3,
    semester: 6,
    buckets: ["PE1_with_minor"],
    summary:
      "Digital marketing concepts: online campaigns, consumers and social media.",
  },
  {
    code: "CRA 4405",
    name: "Big Data Modelling and Management",
    type: "PE",
    dept: "CRA",
    credits: 3,
    semester: 6,
    buckets: ["PE1_with_minor"],
    summary:
      "Big data ecosystems, data models and management for large-scale systems.",
  },
  {
    code: "PHY 4401",
    name: "Fundamentals of Astrophysics",
    type: "PE",
    dept: "PHY",
    credits: 3,
    semester: 6,
    buckets: ["PE1_with_minor", "PE1_without_minor"],
    summary:
      "Astrophysics basics: stars, galaxies and cosmology. Physics-heavy.",
  },
  {
    code: "HUM 4401",
    name: "Human Resource Management",
    type: "PE",
    dept: "HUM",
    credits: 3,
    semester: 6,
    buckets: ["PE1_with_minor"],
    summary:
      "HR concepts: recruitment, performance management and organisational behaviour.",
  },
  {
    code: "MAT 4055",
    name: "Introduction to Game Theory",
    type: "PE",
    dept: "MAT",
    credits: 3,
    semester: 6,
    buckets: ["PE1_with_minor", "PE1_without_minor"],
    summary:
      "Strategic decision-making, Nash equilibrium and basic game models.",
  },
  {
    code: "ECE 4403",
    name: "Photonic Communication System",
    type: "PE",
    dept: "ECE",
    credits: 3,
    semester: 6,
    buckets: ["PE1_with_minor", "PE1_without_minor"],
    summary:
      "Optical/photonic communication: fibre links, components and system-level ideas.",
  },
  {
    code: "AAE 4405",
    name: "Unmanned Aircraft Systems, Sensors, and Instrumentation",
    type: "PE",
    dept: "AAE",
    credits: 3,
    semester: 6,
    buckets: ["PE1_with_minor", "PE1_without_minor"],
    summary:
      "UAV/drones, their sensors and instrumentation. Nice if you like aero + embedded/sensing.",
  },
  {
    code: "ICT 4416",
    name: "Artificial Intelligence in Cyber Security",
    type: "PE",
    dept: "ICT",
    credits: 3,
    semester: 6,
    buckets: ["PE1_with_minor", "PE1_without_minor"],
    summary:
      "AI techniques applied to security: anomaly detection, threat patterns, basic ML for security.",
  },
  {
    code: "ICT 4412",
    name: "Applied Data Analytics",
    type: "PE",
    dept: "ICT",
    credits: 3,
    semester: 6,
    buckets: ["PE1_with_minor", "PE1_without_minor"],
    summary:
      "Hands-on analytics: data pipelines, visualisation and simple predictive models.",
  },

  // PE2 (with minor) + PE2 without minor
  {
    code: "HUM 4402",
    name: "Marketing Management",
    type: "PE",
    dept: "HUM",
    credits: 3,
    semester: 6,
    buckets: ["PE2_with_minor"],
    summary:
      "Core marketing: segmentation, targeting, positioning and 4Ps.",
  },
  {
    code: "ICT 4402",
    name: "Machine Learning",
    type: "PE",
    dept: "ICT",
    credits: 3,
    semester: 6,
    buckets: ["PE2_with_minor", "PE2_without_minor"],
    summary:
      "ML foundations: regression, classification, basic algorithms and evaluation.",
  },
  {
    code: "ECE 4401",
    name: "Machine Learning for Communication System",
    type: "PE",
    dept: "ECE",
    credits: 3,
    semester: 6,
    buckets: ["PE2_with_minor", "PE2_without_minor"],
    summary:
      "ML models applied to communication systems and signal processing problems.",
  },
  {
    code: "ICT 4414",
    name: "Ethical Hacking",
    type: "PE",
    dept: "ICT",
    credits: 3,
    semester: 6,
    buckets: ["PE2_with_minor", "PE2_without_minor"],
    summary:
      "Pen-testing basics, common vulnerabilities and tools. Security-focused and hands-on.",
  },
  {
    code: "CRA 4402",
    name: "Digital Analytics for Marketing",
    type: "PE",
    dept: "CRA",
    credits: 3,
    semester: 6,
    buckets: ["PE2_with_minor"],
    summary:
      "Analysing campaigns, funnels and user behaviour using analytics tools.",
  },
  {
    code: "AAE 4406",
    name: "Antenna Design, Analysis, and its Applications",
    type: "PE",
    dept: "AAE",
    credits: 3,
    semester: 6,
    buckets: ["PE2_with_minor", "PE2_without_minor"],
    summary:
      "EM/antenna theory, design and practical applications. Math + EM heavy.",
  },
  {
    code: "MAT 4056",
    name: "Time Series Analysis",
    type: "PE",
    dept: "MAT",
    credits: 3,
    semester: 6,
    buckets: ["PE2_with_minor", "PE2_without_minor"],
    summary:
      "Modelling and forecasting time-dependent data (ARIMA etc.). Great for data/finance.",
  },
  {
    code: "CRA 4406",
    name: "Big Data Integration and Processing",
    type: "PE",
    dept: "CRA",
    credits: 3,
    semester: 6,
    buckets: ["PE2_with_minor"],
    summary:
      "Integrating and processing large-scale data from multiple sources; systems + data engineering vibe.",
  },
  {
    code: "PHY 4402",
    name: "Astrophysical Processes",
    type: "PE",
    dept: "PHY",
    credits: 3,
    semester: 6,
    buckets: ["PE2_with_minor", "PE2_without_minor"],
    summary:
      "Follow-up astrophysics: radiation processes, stellar/galactic physics.",
  },
  {
    code: "ICT 4409",
    name: "Information Retrieval",
    type: "PE",
    dept: "ICT",
    credits: 3,
    semester: 6,
    buckets: ["PE2_with_minor", "PE2_without_minor"],
    summary:
      "Search engine concepts: indexing, ranking and retrieval models.",
  },
];
