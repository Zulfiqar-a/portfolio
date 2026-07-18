export const capabilities = [
  { id: "001", name: "Python", note: "Core application logic" },
  { id: "002", name: "FastAPI", note: "Production backend systems" },
  { id: "003", name: "React", note: "Reusable interface systems" },
  { id: "004", name: "Vite", note: "Fast build tooling" },
  { id: "005", name: "MySQL / SQL", note: "Relational data layer" },
  { id: "006", name: "SQLAlchemy", note: "ORM & data modeling" },
  { id: "007", name: "OpenAI Whisper", note: "Speech-to-text" },
  { id: "008", name: "Google Gemini", note: "LLM reasoning & feedback" },
  { id: "009", name: "LangChain", note: "Agent orchestration (learning)" },
  { id: "010", name: "Librosa", note: "Acoustic feature extraction" },
  { id: "011", name: "Flask", note: "Lightweight backends" },
  { id: "012", name: "Prolog", note: "Logic-based reasoning" },
  { id: "013", name: "Docker", note: "Environment familiarity" },
  { id: "014", name: "Git & GitHub", note: "Collaborative delivery" },
  { id: "015", name: "REST API design", note: "Service integration" },
  { id: "016", name: "PptxGenJS", note: "Programmatic reporting" },
];

export const expertise = [
  {
    n: "01",
    title: "Full-Stack AI Application Engineering",
    body: "End-to-end delivery — React/Vite interfaces wired to FastAPI or Flask backends, with MySQL or SQLAlchemy underneath, taken from prototype to a deployable product.",
  },
  {
    n: "02",
    title: "Speech & Acoustic AI",
    body: "Transcription with Whisper, acoustic feature extraction with Librosa, and NLP-driven feedback generation with Gemini — the pipeline behind RhetorIQ.",
  },
  {
    n: "03",
    title: "Applied Machine Learning",
    body: "Turning a trained prediction model into a real, dual-user web application people can actually submit data to and get decisions from.",
  },
  {
    n: "04",
    title: "Agentic & LLM-Connected Systems",
    body: "Building agents on LangGraph and MCP that take real action against live systems, rather than just answering questions.",
  },
  {
    n: "05",
    title: "Voice & Local-Language Interfaces",
    body: "Designing voice-controlled interactions that support English and Urdu, matched to how people in Karachi actually speak.",
  },
  {
    n: "06",
    title: "Full-Stack Debugging",
    body: "Tracking down the unglamorous bugs that block a demo — race conditions, silent pipeline timeouts, CORS misconfigurations — and fixing them under deadline.",
  },
];

export const experience = [
  {
    period: "2025 — Present",
    org: "Omdena",
    role: "AI Engineer Collaborator",
    body: "Collaborating on applied AI projects as part of Omdena's global engineering community, working with real-world datasets and production-style ML workflows.",
  },
  {
    period: "2023 — Present",
    org: "SZABIST University, Karachi",
    role: "B.S. Computer Science · 6th Semester · AI Engineering focus",
    body: "Coursework and independent projects centered on AI engineering — from model integration through full-stack deployment.",
  },
];

export const currentWork = {
  org: "Omdena",
  role: "AI Engineer Collaborator",
  body: "Working across applied AI projects, real-world datasets and production-style ML workflows, while building independent full-stack AI products alongside it.",
  active: [
    {
      label: "Active build · 01",
      name: "DataHub Steward Agent",
      note: "Autonomous metadata-quality agent — hackathon running through Aug 10, 2026",
    },
    {
      label: "Ongoing · 02",
      name: "RhetorIQ",
      note: "Speech-coaching platform — continued refinement post-launch",
    },
  ],
  responsibilities: [
    "Full-stack AI product development (React/Vite + FastAPI/Flask)",
    "Model integration — Whisper, Gemini, LangChain",
    "Data processing and pipeline debugging",
    "Voice and local-language interface design",
    "Agentic workflows with LangGraph and MCP",
    "Deployment across Heroku, PythonAnywhere and similar platforms",
  ],
};

export const projects = [
  {
    slug: "rhetoriq",
    tag: "Flagship · Speech AI",
    name: "RhetorIQ",
    blurb:
      "A full-stack speech-coaching platform built across 12 development phases and 97 files. Whisper transcription, Gemini 1.5 Flash feedback, and Librosa acoustic analysis work together to turn a raw recording into structured coaching.",
    stack: ["React", "Vite", "FastAPI", "MySQL", "SQLAlchemy", "Whisper", "Gemini 1.5", "Librosa"],
    detail:
      "Shipped through real production bugs: a recording race condition, a silent analysis-pipeline timeout, and a CORS misconfiguration that was quietly blocking authentication.",
    stat: { value: "12", label: "build phases" },
    visual: "waveform",
  },
  {
    slug: "loan-approval",
    tag: "Applied ML · Fintech",
    name: "AI-Powered Loan Approval System",
    blurb:
      "Took a Python ML prediction model out of a notebook and into a dual-user Flask application — bulk CSV processing for admins, single submissions for applicants.",
    stack: ["Flask", "Python", "ML", "Glassmorphism UI"],
    detail:
      "Designed a glassmorphism interface with an animated canvas background, and wrote the deployment guides for both Heroku and PythonAnywhere.",
    stat: { value: "2", label: "user roles" },
    visual: "ledger",
  },
  {
    slug: "bintag",
    tag: "Voice Interface · Local-first",
    name: "BinTag",
    blurb:
      "A voice-controlled folder and inventory manager that understands both English and Urdu commands — built for how people actually speak, not just how they type.",
    stack: ["Web Speech API", "JavaScript", "Fuzzy matching"],
    detail:
      "Persists locally, resolves folder names with fuzzy matching, and works around real-world browser microphone-permission constraints.",
    stat: { value: "2", label: "languages" },
    visual: "mic",
  },
  {
    slug: "datahub-agent",
    tag: "Agentic AI · Hackathon",
    name: "DataHub Steward Agent",
    blurb:
      "An autonomous metadata-quality agent built solo for the DataHub hackathon's \"Agents That Do Real Work\" track.",
    stack: ["LangGraph", "DataHub SDK", "MCP"],
    detail:
      "Wires an agent directly into DataHub's own SDK over MCP so it can inspect and improve metadata quality without a human in the loop.",
    stat: { value: "1", label: "solo build" },
    visual: "graph",
  },
];
