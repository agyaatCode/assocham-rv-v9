// ASSOCHAM navigation structure
import {
  FaLandmark,
  FaChartBar,
  FaHandshake,
  FaBullseye,
  FaBriefcase,
  FaGlobeAsia,
  FaRocket,
  FaLeaf,
} from "react-icons/fa";

export const NAV_DATA = [
  {
    label: "About Us",
    href: "#about",
    items: [
      "About us",
      "Notice of ASSOCHAM 105th AGM",
      "Financials",
      "Employee Recognition",
    ],
  },
  {
    label: "Initiatives",
    href: "#initiatives",
    items: [
      "Startup Mahakumbh",
      "GEM Green Building Certification Program",
      "Intellectual Property Facilitation Centre",
    ],
  },
  {
    label: "Sectors",
    href: "#sectors",
    columns: true,
    items: [
      "Agri Industries & Farming Practices",
      "AI Task Force",
      "Auto & Auto Ancillaries",
      "AVGC",
      "Banking",
      "Branding & Marketing",
      "Capital & Commodity Markets",
      "CFOs",
      "Chemical & Petrochemicals",
      "Civil Aviation",
      "Corporate Bond Market",
      "CSR Council & Empowerment",
      "Cyber Security & Cyber Law",
      "Data Centre",
      "Digital Communication",
      "Digital Health Task Force",
      "Direct Selling & Consumer Affairs",
      "Direct Taxes",
      "Education",
      "Electronics & Components",
      "Energy",
      "Entertainment and Media",
      "Environment and Climate Change",
      "GEM Green Building Certification Program",
      "Government Procurement",
      "Healthcare",
      "Homeland Security & Disaster Management",
      "Hydropower and PSP",
      "Indirect Taxes",
      "Industrial Relation polices and Reforms",
      "Insolvency & Bankruptcy Code (IBC)",
      "Insurance",
      "Intellectual Property Rights (IPR)",
      "Iron & Steel",
      "IT & ITeS & Digital Commerce",
      "Manufacturing and Capital Goods",
      "Medical Devices & Diagnostics",
      "MSME Development Council",
      "National Task force for Ayush",
      "NBFCs & Green Financing",
      "Pharmaceuticals & Biotechnology",
      "Power Distribution",
      "Power Generation",
      "Power Transmission",
      "Quality & Productivity",
      "Real Estate, Housing & Urban Development",
      "Renewable Energy",
      "SEZ & Industrial Park",
      "Skill Development and Entrepreneurship",
      "Start-up",
      "Stressed Assets",
      "Sustainable Finance",
      "Task Force on Green Hydrogen & Derivatives",
      "Task Force on Hydrocarbon",
      "Task Force on International Taxation",
      "Task Force on Manufacturing for Renewable Energy",
      "Task force on Port and Shipping",
      "Travel, Tourism & Hospitality",
      "Water",
      "Wellness",
      "Wine and Beer",
      "WTO, Trade and Investment",
    ],
  },
  {
    label: "Regions",
    href: "#regions",
    columns: true,
    items: [
      "Andhra Pradesh",
      "Bihar",
      "Central Region",
      "Chandigarh",
      "Chhattisgarh",
      "Delhi",
      "Eastern Region",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jammu & Kashmir",
      "Karnataka",
      "Kerala",
      "Ladakh",
      "Madhya Pradesh",
      "Maharashtra",
      "North East",
      "Northern Region",
      "Odisha",
      "Pondicherry",
      "Punjab",
      "Rajasthan",
      "Tamil Nadu",
      "Telangana",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
    ],
  },
  { label: "International", href: "#international" },
  { label: "Knowledge", href: "#knowledge" },
  { label: "Events", href: "#events" },
  { label: "Membership", href: "#membership" },
  { label: "Foundation", href: "#foundation" },
  {
    label: "Media Room",
    href: "#media",
    items: ["Gallery", "Press Coverage", "Press Releases"],
  },
];

export const TICKER_ITEMS = [
  "GOVERNMENT MEASURES TO MITIGATE IMPACT OF WEST ASIA CONFLICT ON INDIA",
  "D&B ASSOCHAM Report",
  "Industry Standards Note on Regulation 30 of the LODR Regulations",
  "SEBI Circular - Industry Standards on RPTs",
  "ASSOCHAM Compendium 2024",
  "Startup Mahakumbh Podcasts",
  "FAQs on Applicability of the Industry Standards on Related Party Transaction",
  "India–UAE CEPA Review: ASSOCHAM Submission",
  "National Logistics Policy — Industry Recommendations",
];

export const KNOWLEDGE_REPORTS = [
  {
    title: "India @ 2047: Roadmap to a $30 Trillion Economy",
    category: "Economy",
    date: "Nov 2025",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    title: "Green Hydrogen & Derivatives — Sector Outlook",
    category: "Energy",
    date: "Oct 2025",
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
  },
  {
    title: "AI Task Force: Responsible AI for Indian Enterprise",
    category: "Technology",
    date: "Oct 2025",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    title: "MSME Credit Flow & Green Financing 2025",
    category: "Finance",
    date: "Sep 2025",
    img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
  },
  {
    title: "Digital Health — Building Bharat's Care Stack",
    category: "Healthcare",
    date: "Sep 2025",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
  },
  {
    title: "Travel, Tourism & Hospitality — Inbound Trends",
    category: "Tourism",
    date: "Aug 2025",
    img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
  },
];

export const NEWSLETTERS = [
  { title: "ASSOCHAM Weekly Bulletin — Vol. 48", date: "Nov 28, 2025", pages: 24 },
  { title: "Policy Pulse — Direct & Indirect Taxes", date: "Nov 21, 2025", pages: 16 },
  { title: "Sector Spotlight — Renewable Energy", date: "Nov 14, 2025", pages: 20 },
  { title: "Regional Digest — North & East India", date: "Nov 07, 2025", pages: 18 },
];

export const PRESS_RELEASES = [
  {
    title: "ASSOCHAM urges faster rollout of PLI 2.0 for electronics & semiconductors",
    date: "Dec 02, 2025",
    tag: "Press Release",
  },
  {
    title: "Union Budget 2026 — ASSOCHAM Pre-Budget Memorandum submitted to MoF",
    date: "Nov 29, 2025",
    tag: "Press Release",
  },
  {
    title: "Startup Mahakumbh 2026 registrations open; 15,000+ startups expected",
    date: "Nov 25, 2025",
    tag: "Press Release",
  },
  {
    title: "Green Building certifications cross 2,500 projects under GEM programme",
    date: "Nov 20, 2025",
    tag: "Press Release",
  },
];

export const PRESS_COVERAGE = [
  {
    title: "ASSOCHAM sees 7.2% GDP growth for FY26 on strong capex cycle",
    source: "The Economic Times",
    date: "Dec 01, 2025",
  },
  {
    title: "Industry body pushes for uniform GST on insurance premium",
    source: "Business Standard",
    date: "Nov 28, 2025",
  },
  {
    title: "ASSOCHAM partners with MeitY on AI skilling for 1 lakh youth",
    source: "Mint",
    date: "Nov 26, 2025",
  },
  {
    title: "Port & Shipping reforms key to $2T export target: ASSOCHAM",
    source: "The Hindu BusinessLine",
    date: "Nov 22, 2025",
  },
];

export const EVENTS = [
  {
    title: "105th ASSOCHAM Annual General Meeting",
    date: "Dec 18, 2025",
    location: "New Delhi",
    category: "Flagship",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80",
  },
  {
    title: "Startup Mahakumbh 2026",
    date: "Feb 12–14, 2026",
    location: "Bharat Mandapam, Delhi",
    category: "Initiative",
    img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=900&q=80",
  },
  {
    title: "National Summit on Green Hydrogen",
    date: "Jan 22, 2026",
    location: "Mumbai",
    category: "Energy",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&q=80",
  },
  {
    title: "Global AI Conclave 2026",
    date: "Mar 05, 2026",
    location: "Bengaluru",
    category: "Technology",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
  },
];

export const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_208d7d52-3a9b-4a95-93a0-6e4a9b862f74/artifacts/7jp1o2sh_assocham-logo-new%20%281%29.jpg";



  export const pillars = [
  { icon: FaLandmark, label: "Policy Advocacy" },
  { icon: FaChartBar, label: "Research & Reports" },
  { icon: FaHandshake, label: "Industry Networking" },
  { icon: FaBullseye, label: "Capacity Building" },
  { icon: FaBriefcase, label: "Business Opportunities" },
  { icon: FaGlobeAsia, label: "Global Partnerships" },
  { icon: FaRocket, label: "Start-up Support" },
  { icon: FaLeaf, label: "Sustainability & ESG" },
  
];


export const knowledgeReports = [
  { title: "Sustainable Financial Ecosystem For Viksit Bharat March 2026", date: "May 2024", img: "https://assocham.org/assets/images/1776425322_2.jpg", color: "#1a1a4e" },
 
  { title: "ASSOCHAM ASCELA Report Future Ready Railways", date: "May 2024", img: "https://assocham.org/assets/images/1775723918_Screenshot%202026-04-09%20140531.jpg", color: "#7b1a1a" },

  { title: "NutriBharat@20247", date: "April 2024", img: "https://assocham.org/assets/images/1775281193_NutriBharat@20247.jpg", color: "#1a4e1a" },

  { title: "Integrating the billion market into the $5 Trillion Indian Economy and Global Financial Order", date: "April 2024", img: "https://assocham.org/assets/images/1775281193_NutriBharat@20247.jpg", color: "#c0392b" },
  // { title: "Integrating the billion market into the $5 Trillion Indian Economy and Global Financial Order", date: "April 2024", img: "https://assocham.org/assets/images/1776771415_Golds%20New%20Horizon.jpg", color: "#c0392b" },
];

export const newsletters = [
  { title: "ASSOCHAM Bulletin", issue: "May 2024 | Volume 15, Issue 5", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=80&h=60&fit=crop" },
  { title: "ASSOCHAM Insights", issue: "April 2024 | Volume 15, Issue 4", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=80&h=60&fit=crop" },
  { title: "ASSOCHAM Update", issue: "March 2024 | Volume 15, Issue 3", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=80&h=60&fit=crop" },
];

export const pressReleases = [
  { date: "24 MAY 2024", text: "ASSOCHAM suggests policy reforms to boost Ease of Doing Business in India" },
  { date: "20 MAY 2024", text: "ASSOCHAM releases report on 'Future of Manufacturing in India'" },
  { date: "16 MAY 2024", text: "ASSOCHAM organizes National Conference on Green Energy Transition" },
];

export const mediaCoverage = [
  { source: "The Economic Times", logo: "/assets/logos/economic-times.png", text: "ASSOCHAM calls for tax rationalization in Union Budget 2024", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=250&h=150&fit=crop", color: "#FF6600" },

  { source: "Business Standard", logo: "/assets/logos/business-standard.png", text: "India's growth momentum to continue: ASSOCHAM", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=250&h=150&fit=crop", color: "#CC0000" },

  { source: "Financial Express", logo: "/assets/logos/financial-express.png", text: "ASSOCHAM recommends policy measures for MSME sector", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=250&h=150&fit=crop", color: "#003087" },
  
  { source: "Mint", logo: "/assets/logos/mint.png", text: "Strengthening India's Global Trade Competitiveness", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=250&h=150&fit=crop", color: "#006400" },
];
