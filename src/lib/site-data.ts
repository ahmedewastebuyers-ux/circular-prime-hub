import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Recycle,
  FileCheck2,
  Lock,
  Building2,
  Server,
  Cpu,
  HardDrive,
  Network,
  Router,
  Radio,
  Battery,
  CircuitBoard,
  Factory,
  Wrench,
  Boxes,
  Laptop,
  Monitor,
  GraduationCap,
  Stethoscope,
  Landmark,
  Briefcase,
  Building,
  Award,
  Leaf,
  Users,
  Gauge,
  Globe2,
} from "lucide-react";

export const industries = [
  { icon: Cpu, name: "IT Companies", desc: "Refresh cycle recovery for workstations, laptops, peripherals.", ex: "Laptops · Workstations · Monitors" },
  { icon: Server, name: "Data Centers", desc: "End-to-end rack decommissioning with audit-grade chain of custody.", ex: "Servers · Storage · Networking" },
  { icon: Factory, name: "Manufacturing", desc: "Industrial electronics, control panels, automation hardware.", ex: "PCBs · PLCs · Drives" },
  { icon: Stethoscope, name: "Hospitals", desc: "Compliant disposal of medical electronics and IT assets.", ex: "Diagnostics · Workstations" },
  { icon: GraduationCap, name: "Educational Institutions", desc: "Bulk disposal for labs, libraries and admin infrastructure.", ex: "Desktops · Projectors · Lab kits" },
  { icon: Building, name: "Government Organizations", desc: "Tender-based disposal with full statutory compliance.", ex: "Office IT · Servers" },
  { icon: Landmark, name: "Banks & BFSI", desc: "Certified data destruction with regulatory documentation.", ex: "ATMs · Servers · Drives" },
  { icon: Radio, name: "Telecom", desc: "Network infrastructure recovery and component buyback.", ex: "BTS · Routers · Switches" },
  { icon: Briefcase, name: "Corporate Offices", desc: "Office relocations, refresh cycles and bulk decommissions.", ex: "Laptops · Furniture-IT" },
  { icon: CircuitBoard, name: "Electronics OEMs", desc: "Production scrap, returned units, EOL inventory.", ex: "PCB scrap · Components" },
];

export const services = [
  { icon: HardDrive, title: "IT Asset Recovery", desc: "Maximize returns from retired enterprise hardware through resale, refurbishment and component recovery." },
  { icon: Lock, title: "Secure Data Destruction", desc: "On-site or off-site hard drive shredding, degaussing and NIST 800-88 wiping with video proof." },
  { icon: Truck, title: "E-Waste Collection", desc: "Nationwide collection with environmentally responsible recycling at CPCB-authorised facilities." },
  { icon: Server, title: "Data Center Decommissioning", desc: "Turnkey rack-to-truck retirement with project management, packing and serialised tracking." },
  { icon: Recycle, title: "Reverse Logistics", desc: "GPS-tracked, insured nationwide pickup with tamper-evident packaging and serialised tracking." },
  { icon: Building2, title: "Enterprise Buyback", desc: "Direct purchase of retired corporate equipment with transparent fair-market valuation." },
  { icon: FileCheck2, title: "Compliance Reporting", desc: "Audit-ready Form-6/9, recycling certificates and complete chain-of-custody reporting." },
  { icon: Leaf, title: "ESG & Sustainability Support", desc: "Carbon offset reports, ESG metrics, and disclosure-ready environmental impact data." },
];

export const assets = [
  { icon: Server, name: "Enterprise Servers", desc: "Rack & tower servers, blade chassis" },
  { icon: Laptop, name: "Laptops", desc: "Business notebooks, ultrabooks, workstations" },
  { icon: Monitor, name: "Desktop Computers", desc: "All-in-ones, workstations, mini PCs" },
  { icon: HardDrive, name: "Storage Systems", desc: "SAN, NAS, tape libraries, JBODs" },
  { icon: Network, name: "Networking Equipment", desc: "Firewalls, load balancers, modems" },
  { icon: Router, name: "Switches & Routers", desc: "Enterprise-class L2/L3 hardware" },
  { icon: Radio, name: "Telecom Equipment", desc: "BTS, RAN, microwave, transmission" },
  { icon: Battery, name: "UPS Systems", desc: "Online UPS, batteries, inverters" },
  { icon: CircuitBoard, name: "PCB Assemblies", desc: "Boards, modules, sub-assemblies" },
  { icon: Factory, name: "Industrial Electronics", desc: "Drives, controllers, automation" },
  { icon: Wrench, name: "Test Equipment", desc: "Oscilloscopes, analyzers, test rigs" },
  { icon: Boxes, name: "End-of-Life IT Assets", desc: "Mixed-lot retired technology" },
];

export const why = [
  { icon: Globe2, title: "Pan India Collection", desc: "Operations across 28 states." },
  { icon: Truck, title: "Secure Logistics", desc: "GPS-tracked, insured, tamper-evident." },
  { icon: Gauge, title: "Transparent Valuation", desc: "Line-item pricing, no hidden deductions." },
  { icon: FileCheck2, title: "Compliance Documentation", desc: "Audit-ready paperwork, every time." },
  { icon: Users, title: "Dedicated Account Managers", desc: "Named POC for every enterprise." },
  { icon: ShieldCheck, title: "Certified Recycling Partners", desc: "CPCB authorised facilities only." },
];

export const cases = [
  {
    tag: "Data Center Decommissioning",
    title: "500+ servers recovered for a hyperscale tenant",
    desc: "Turnkey decommissioning of a 9,000 sq ft co-location footprint across Bengaluru and Mumbai with serialised chain of custody.",
    stats: [
      { v: "512", l: "Servers recovered" },
      { v: "₹2.1 Cr", l: "Recovery value" },
      { v: "84 T", l: "CO₂ avoided" },
    ],
  },
  {
    tag: "Manufacturing Facility Upgrade",
    title: "Large-scale IT and industrial asset disposal",
    desc: "Tier-1 auto supplier facility refresh — 1,800+ assets including industrial controllers, PCBs and office IT.",
    stats: [
      { v: "1,820", l: "Assets processed" },
      { v: "₹84 L", l: "Recovery value" },
      { v: "0", l: "Compliance findings" },
    ],
  },
  {
    tag: "Corporate Office Refresh",
    title: "Secure recovery of end-of-life IT assets",
    desc: "Pan-India laptop refresh for a BFSI client across 47 branches with on-site shredding and Form-6 documentation.",
    stats: [
      { v: "3,400", l: "Laptops handled" },
      { v: "47", l: "Locations" },
      { v: "100%", l: "Drives destroyed" },
    ],
  },
  {
    tag: "Telecom Network Sunset",
    title: "Nationwide BTS and RAN equipment recovery",
    desc: "Decommissioning of 240 cell sites across 6 circles — controlled dismantling, secure transport, certified recycling.",
    stats: [
      { v: "240", l: "Sites cleared" },
      { v: "₹1.4 Cr", l: "Recovery value" },
      { v: "190 T", l: "Recycled" },
    ],
  },
  {
    tag: "Healthcare IT Refresh",
    title: "Hospital chain workstation disposal",
    desc: "Disposal of 2,200 clinical workstations with PHI-grade data destruction and per-drive shred certificates.",
    stats: [
      { v: "2,200", l: "Workstations" },
      { v: "100%", l: "Drives shredded" },
      { v: "12", l: "Hospitals" },
    ],
  },
  {
    tag: "Government Tender Disposal",
    title: "PSU office IT retirement programme",
    desc: "Multi-state tender execution covering 80,000+ kg of mixed office IT with full statutory documentation.",
    stats: [
      { v: "80T+", l: "Disposed" },
      { v: "9", l: "States" },
      { v: "100%", l: "Audit-clear" },
    ],
  },
];

export const faqs = [
  { q: "What types of corporate assets do you purchase?", a: "We buy and dispose of all classes of retired enterprise technology: laptops, desktops, servers, storage, networking gear, telecom infrastructure, UPS systems, PCBs, industrial electronics, test equipment, and end-of-life mixed IT lots." },
  { q: "Do you provide nationwide collection?", a: "Yes. We operate across 28 Indian states with GPS-tracked, insured logistics. Multi-city consolidations and single-pickup contracts are both supported." },
  { q: "How is asset valuation determined?", a: "Valuation is based on serial-level inspection, market resale value, working condition, age, and recoverable material content. Every line item is disclosed transparently in the proposal." },
  { q: "Do you offer secure data destruction?", a: "Yes — NIST 800-88 compliant wiping, degaussing and physical shredding. On-site shredding is available with video proof and per-drive destruction certificates." },
  { q: "Can you handle data center decommissioning?", a: "Yes. Our turnkey decommissioning service covers project planning, racks-to-truck removal, packing, serialised tracking, transportation, processing and final reporting." },
  { q: "Do you provide compliance documentation?", a: "Every engagement includes Form-6/Form-9 trail, recycling certificates, data destruction certificates and ESG-grade environmental reports — all audit-ready." },
  { q: "What industries do you serve?", a: "Enterprises across IT, data centers, manufacturing, BFSI, healthcare, telecom, education, government, electronics OEMs and corporate offices of every scale." },
  { q: "How quickly can collections be scheduled?", a: "Standard collections are scheduled within 48–72 hours of accepted quotation. Emergency and same-week pickups are available for enterprise clients." },
];

export const certs = [
  { code: "CPCB", label: "Authorised Recycler" },
  { code: "ISO 14001", label: "Environment Mgmt" },
  { code: "ISO 9001", label: "Quality Mgmt" },
  { code: "ISO 27001", label: "Information Security" },
  { code: "OHSAS 18001", label: "Occupational H&S" },
  { code: "NIST 800-88", label: "Data Sanitization" },
  { code: "R2v3", label: "Responsible Recycling" },
  { code: "E-Waste Rules 2022", label: "MoEF&CC Compliant" },
];

export const PHONE = "+91 98801 12263";
export const PHONE_TEL = "+919880112263";
export const WHATSAPP = "919880112263";
export const EMAIL = "enterprise@ewastebuyers.com";

export { ArrowRight, Award };
