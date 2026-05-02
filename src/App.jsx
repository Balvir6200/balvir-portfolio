import { useEffect, useRef, useState } from "react"
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Code2,
  Database,
  Dumbbell,
  ExternalLink,
  FileText,
  Globe2,
  HeartPulse,
  Layers3,
  Mail,
  Menu,
  MonitorSmartphone,
  MousePointerClick,
  Phone,
  Plane,
  Rocket,
  Search,
  ServerCog,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Wrench,
  X,
  Zap,
} from "lucide-react"

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Live Work", href: "#live-work" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

const projects = [
  {
    id: "dripbloc-pro",
    title: "DripBloc Pro",
    tag: "AI Printing SaaS",
    desc: "AI-powered printing platform with design specs, dynamic pricing, file validation and production workflow controls.",
    problem: "Manual printing quotes, file checks and order handoffs slowed the customer journey.",
    solution: "Built a SaaS flow for upload validation, pricing logic, job status and admin review.",
    result: "Reduced repetitive admin work and made the order path clearer from quote to production.",
    tech: ["Laravel", "React", "Tailwind", "SaaS"],
    image: "/projects/dripbloc-homepage.png",
    github: "https://github.com/Balvir6200/dripbloc",
    live: "#",
    accent: "from-orange-400 to-cyan-300",
    preview: {
      label: "Quote engine",
      metric: "$12.8k",
      change: "+18%",
      bars: [64, 82, 48, 76, 92, 58],
      rows: ["Artwork check", "Dynamic price", "Workflow queue"],
    },
  },
 
  {
    id: "food-admin-dashboard",
    title: "Food Admin Dashboard",
    tag: "Admin Dashboard",
    desc: "Swiggy-style admin dashboard with orders, customers, payments, status updates and operations views.",
    problem: "Restaurant operations needed a central place to scan orders, customers and payment status.",
    solution: "Built a fast React admin surface backed by Laravel APIs and clear status controls.",
    result: "Made daily operations easier to scan, filter and update without jumping between screens.",
    tech: ["Laravel", "React", "Dashboard"],
    image: "/projects/food-admin-dashboard.png",
    github: "https://github.com/Balvir6200/laravel-react-food-admin-dashboard",
    live: "#",
    accent: "from-cyan-300 to-violet-300",
    preview: {
      label: "Orders live",
      metric: "326",
      change: "+24%",
      bars: [44, 68, 88, 74, 52, 84],
      rows: ["New order", "Payment done", "Out delivery"],
    },
  },
  {
    id: "readers-realm-library",
    title: "Reader's Realm Library",
    tag: "Library Management",
    desc: "Premium library management system with student records, plans, subscriptions, payments, auto-expiry and PDF receipts.",
    problem: "Libraries need a clean way to manage students, paid plans, renewals and receipt records without manual tracking.",
    solution: "Built a Laravel MVC and React dashboard with modules for students, plans, subscriptions, payments and receipt generation.",
    result: "Created an operational admin system that makes membership tracking, payment status and expiring subscriptions easier to manage.",
    tech: ["Laravel MVC", "React", "Tailwind", "SQLite / MySQL"],
    image: "/projects/readers-realm-dashboard.png",
    github: "https://github.com/Balvir6200/readers-realm-library-management",
    live: "#",
    accent: "from-red-400 to-amber-300",
    preview: {
      label: "Library admin",
      metric: "LibSys",
      change: "Live repo",
      bars: [88, 62, 76, 54, 92, 68],
      rows: ["Student records", "Plan billing", "PDF receipts"],
    },
  },

   {
    id: "lab-saas-system",
    title: "Lab SaaS System",
    tag: "Multi-Tenant SaaS",
    desc: "Multi-tenant diagnostic lab platform with super-admin tenant control, subscription plans, lab dashboards, billing and reports.",
    problem: "Diagnostic labs needed tenant-separated operations, plan control and one clean place to manage patients, tests, billing and reports.",
    solution: "Built super-admin modules for labs and plans plus a lab-admin command center for daily laboratory workflows.",
    result: "Created a SaaS-ready lab system that handles tenant access, active subscriptions, patient intake and report operations from one product.",
    tech: ["Laravel MVC", "React", "Tailwind", "SQLite / MySQL"],
    image: "/projects/lab-saas-dashboard.png",
    github: "https://github.com/Balvir6200",
    live: "#",
    accent: "from-cyan-300 to-emerald-300",
    preview: {
      label: "Lab workspace",
      metric: "NMN",
      change: "SaaS flow",
      bars: [82, 58, 76, 68, 88, 74],
      rows: ["Lab tenants", "Plan control", "Reports"],
    },
  },
]

const skills = [
  { label: "Laravel MVC", desc: "Clean controllers, services, auth and billing flows.", icon: ServerCog },
  { label: "React JS", desc: "Interactive dashboards, stateful UI and reusable components.", icon: MonitorSmartphone },
  { label: "Tailwind CSS", desc: "Sharp responsive interfaces with polished interaction states.", icon: Sparkles },
  { label: "WordPress Custom", desc: "Custom themes, child themes, plugins and ACF Pro builds.", icon: Globe2 },
  { label: "WooCommerce", desc: "Store setup, product flows, checkout polish and customization.", icon: ShoppingCart },
  { label: "REST APIs", desc: "Reliable endpoints, validation, resources and integrations.", icon: Zap },
  { label: "MySQL / PostgreSQL", desc: "Normalized tables, queries, reporting, backups and permissions.", icon: Database },
  { label: "SaaS Architecture", desc: "Plans, tenants, roles, dashboards and subscription modules.", icon: Layers3 },
  { label: "Admin Dashboards", desc: "Operations views for orders, users, payments and reports.", icon: Activity },
  { label: "SEO + Performance", desc: "Responsive builds, caching, minification and image optimization.", icon: Search },
  { label: "Hosting + DNS", desc: "cPanel, FTP, domains, DNS and production website maintenance.", icon: Wrench },
  { label: "Git & GitHub", desc: "Readable commits, code reviews and deploy-friendly workflows.", icon: Code2 },
]

const timeline = [
  {
    period: "2010 - 2016",
    title: "Computer science foundation",
    text: "Completed Diploma in Computer Science Engineering and B.Tech with a strong technical base.",
  },
  {
    period: "2021 - 2024",
    title: "WordPress & Web Developer at Kodegurus",
    text: "Shipped custom themes, ACF builds, WooCommerce work, responsive websites, SEO improvements and hosting support.",
  },
  {
    period: "2024",
    title: "International website delivery",
    text: "Worked on Hungary projects including Unimart International and Chef's Corner, extending delivery beyond local markets.",
  },
  {
    period: "Now",
    title: "Laravel + React product systems",
    text: "Focused on SaaS dashboards, Laravel APIs, React interfaces and full-stack business applications.",
  },
]

const proofStats = [
  ["15+", "Live websites shipped"],
  ["2021-2024", "Agency experience"],
  ["10+", "Database tables designed"],
  ["6", "Business domains served"],
]

const achievements = [
  {
    title: "Fundamentals of Artificial Intelligence",
    issuer: "Wadhwani Foundation",
    level: "Certificate of Completion - Basic",
    date: "May 01, 2026",
    duration: "7.5 hours",
    href: "/certificates/ai-fundamentals-wadhwani.pdf",
    focus: ["AI fundamentals", "Concept knowledge", "Continuous learning"],
  },
]

const heroScreenshots = [
  {
    title: "DripBloc Pro",
    tag: "Printing SaaS",
    caption: "Premium Laravel + React printing platform with category-first product flow.",
    src: "/projects/dripbloc-homepage.png",
    github: "https://github.com/Balvir6200/dripbloc",
    accent: "from-orange-400 to-cyan-300",
    stats: ["Laravel + React", "Design specs", "Category flow"],
  },
  {
    title: "Reader's Realm",
    tag: "Library System",
    caption: "Library dashboard for students, plans, subscriptions, payments and PDF receipts.",
    src: "/projects/readers-realm-dashboard.png",
    github: "https://github.com/Balvir6200/readers-realm-library-management",
    accent: "from-red-400 to-amber-300",
    stats: ["Subscriptions", "Payments", "PDF receipts"],
  },
  {
    title: "Food Admin",
    tag: "Operations Dashboard",
    caption: "Restaurant admin dashboard for orders, customers, payments and status tracking.",
    src: "/projects/food-admin-dashboard.png",
    github: "https://github.com/Balvir6200/laravel-react-food-admin-dashboard",
    accent: "from-cyan-300 to-violet-300",
    stats: ["Orders", "Customers", "Payments"],
  },
]

const projectGalleries = [
  {
    title: "DripBloc Pro",
    tag: "Printing SaaS",
    accent: "from-orange-400 to-cyan-300",
    images: [
      { src: "/projects/dripbloc-homepage.png", label: "Homepage" },
      { src: "/projects/dripbloc-category-page.png", label: "Category Page" },
      { src: "/projects/dripbloc-admin-dashboard.png", label: "Admin Dashboard" },
      { src: "/projects/dripbloc-product-flow.png", label: "Product Flow" },
    ],
  },
  {
    title: "Reader's Realm",
    tag: "Library System",
    accent: "from-red-400 to-amber-300",
    images: [
      { src: "/projects/readers-realm-dashboard.png", label: "Dashboard" },
      { src: "/projects/readers-realm-students.png", label: "Students" },
      { src: "/projects/readers-realm-payments.png", label: "Payments" },
      { src: "/projects/readers-realm-receipt.png", label: "Receipt" },
    ],
  },
  {
    title: "Food Admin Dashboard",
    tag: "Operations Dashboard",
    accent: "from-cyan-300 to-violet-300",
    images: [
      { src: "/projects/food-admin-dashboard.png", label: "Dashboard" },
      { src: "/projects/food-admin-orders.png", label: "Orders" },
      { src: "/projects/food-admin-customers.png", label: "Customers" },
      { src: "/projects/food-admin-overview.png", label: "Overview" },
    ],
  },
  {
    title: "Lab SaaS System",
    tag: "Diagnostic SaaS",
    accent: "from-cyan-300 to-emerald-300",
    images: [
      { src: "/projects/lab-saas-dashboard.png", label: "Lab Admin Dashboard" },
      { src: "/projects/lab-saas-tenants.png", label: "Super Admin Tenants" },
      { src: "/projects/lab-saas-plans.png", label: "Subscription Plans" },
    ],
  },
]

const orbitTech = [
  { label: "Laravel", icon: ServerCog, className: "left-0 top-8" },
  { label: "React", icon: MonitorSmartphone, className: "right-2 top-20" },
  { label: "Tailwind", icon: Sparkles, className: "left-8 bottom-28" },
  { label: "MySQL", icon: Database, className: "right-8 bottom-24" },
  { label: "SEO", icon: Search, className: "left-1/2 top-0 -translate-x-1/2" },
]

const resumeSignals = [
  "Custom WordPress themes",
  "ACF Pro flexible content",
  "WooCommerce customization",
  "SEO and speed optimization",
  "cPanel, FTP, DNS and hosting",
  "PostgreSQL backup and permissions",
]

const liveWebsites = [
  {
    title: "KodeGurus",
    url: "https://kodegurus.com/",
    domain: "kodegurus.com",
    category: "Agency",
    proof: "Digital marketing and web development company website",
    icon: Building2,
    accent: "from-orange-300 to-cyan-200",
  },

    {
    title: "Unimart International",
    url: "https://unimartinternational.com/",
    domain: "unimartinternational.com",
    category: "Hungary",
    proof: "International project listed in resume",
    icon: Globe2,
    accent: "from-cyan-200 to-emerald-200",
  },
   {
    title: "Supertech Construction",
    url: "https://supertechconstruction.in/",
    domain: "supertechconstruction.in",
    category: "Architecture",
    proof: "Build New House",
    icon: Building2,
    accent: "from-slate-200 to-cyan-200",
  },

  {
    title: "Blueballoonparties",
    url: "https://blueballoonparties.com/",
    domain: "blueballoonparties.com",
    category: "Events",
    proof: "Niche business website from agency project list",
    icon: MonitorSmartphone,
    accent: "from-cyan-200 to-blue-300",
  },
  {
    title: "Nooie",
    url: "https://nooie.com/",
    domain: "800creditnow.com",
    category: "Electronics",
    proof: "Devices repair services website",
    icon: ShieldCheck,
    accent: "from-emerald-200 to-cyan-200",
  },
  {
    title: "Credence Medicure",
    url: "https://www.credencemedicure.com/",
    domain: "credencemedicure.com",
    category: "Healthcare",
    proof: "Telemedicine and medical travel platform",
    icon: HeartPulse,
    accent: "from-rose-200 to-orange-200",
  },
  {
    title: "DripBloc",
    url: "https://dripbloc.ca/",
    domain: "https://dripbloc.ca/",
    category: "Portal",
    proof: "Printing SaaS",
    icon: ServerCog,
    accent: "from-violet-200 to-cyan-200",
  },
  {
    title: "Dr Harish Sharma",
    url: "https://www.drharishsharma.com/",
    domain: "drharishsharma.com",
    category: "Medical",
    proof: "Doctor website from live-work portfolio",
    icon: HeartPulse,
    accent: "from-lime-200 to-emerald-200",
  },
  {
    title: "Dietitian Shreya",
    url: "https://www.dietitianshreya.com/",
    domain: "dietitianshreya.com",
    category: "Wellness",
    proof: "Nutrition and wellness website",
    icon: HeartPulse,
    accent: "from-green-200 to-orange-200",
  },
  {
    title: "Rating Agency",
    url: "https://themelfort.com/",
    domain: "themelfort.com",
    category: "Reviews",
    proof: "Rating & Reviews Agency",
    icon: Dumbbell,
    accent: "from-red-200 to-orange-200",
  },
 
  {
    title: "Dawn Financial",
    url: "https://www.dawnfinancial.in/",
    domain: "dawnfinancial.in",
    category: "Finance",
    proof: "Finance, insurance and money exchange website",
    icon: ShieldCheck,
    accent: "from-amber-200 to-emerald-200",
  },
  {
    title: "Bajaj Travel",
    url: "http://www.bajajtravel.com/",
    domain: "bajajtravel.com",
    category: "Travel",
    proof: "Travel business website",
    icon: Plane,
    accent: "from-sky-200 to-cyan-200",
  },
  
]

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="max-w-3xl"
    >
      <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-orange-300">
        <Sparkles className="h-4 w-4" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
        {title}
      </h2>
      <motion.div
        className="mt-6 h-px max-w-xl origin-left bg-gradient-to-r from-orange-300 via-cyan-200 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      />
      {text ? <p className="mt-5 text-lg leading-8 text-zinc-300">{text}</p> : null}
    </motion.div>
  )
}

function ActionLink({ href, children, variant = "primary" }) {
  const unavailable = href === "#"
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-black transition focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-black"
  const styles =
    variant === "primary"
      ? "bg-orange-400 text-black hover:bg-orange-300"
      : "border border-white/15 bg-white/[0.03] text-white hover:border-white/35 hover:bg-white/10"

  if (unavailable) {
    return (
      <span className={`${base} ${styles} cursor-not-allowed opacity-55`} aria-disabled="true">
        Demo Coming Soon
      </span>
    )
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles}`}>
      {children}
    </a>
  )
}

function TechOrbit({ shouldReduceMotion }) {
  return (
    <div className="pointer-events-none absolute -inset-8 hidden xl:block" aria-hidden="true">
      {orbitTech.map((item, index) => {
        const Icon = item.icon

        return (
          <motion.div
            key={item.label}
            className={`absolute ${item.className}`}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, index % 2 === 0 ? -9 : 9, 0],
                    opacity: [0.72, 1, 0.72],
                  }
            }
            transition={{
              duration: 3.2 + index * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.22,
            }}
          >
            <div className="flex items-center gap-2 rounded-md border border-white/10 bg-black/70 px-3 py-2 text-xs font-black text-zinc-100 shadow-xl backdrop-blur-xl">
              <Icon className="h-4 w-4 text-orange-200" />
              {item.label}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

function HeroDashboard({ shouldReduceMotion }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = heroScreenshots[activeIndex]

  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % heroScreenshots.length)
    }, 3600)

    return () => window.clearInterval(intervalId)
  }, [shouldReduceMotion])

  return (
    <motion.div
      initial={{ opacity: 0, x: 48, rotate: 1.5 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="relative lg:self-start"
    >
      <div className="absolute -inset-6 -z-10 bg-[linear-gradient(135deg,rgba(251,146,60,.22),rgba(34,211,238,.12),rgba(16,185,129,.10))] blur-3xl" />
      <TechOrbit shouldReduceMotion={shouldReduceMotion} />

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d10]/95 p-3 shadow-2xl">
        <div className="flex items-center justify-between rounded-t-xl border border-white/10 bg-white/[0.035] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
            <Activity className="h-3.5 w-3.5" aria-hidden="true" />
            Real project screenshots
          </div>
        </div>

        <div className="pt-3">
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
            className="overflow-hidden rounded-xl border border-white/10 bg-[#eef2f7] p-3 md:p-4"
          >
            <div className="relative overflow-hidden rounded-lg bg-white">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.src}
                  src={active.src}
                  alt={`${active.title} project screenshot`}
                  className="mx-auto max-h-[430px] w-full object-contain object-top"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.985 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent p-4 sm:p-5">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-200">
                      {active.tag}
                    </p>
                    <h2 className="mt-1 text-2xl font-black tracking-tight text-white">
                      {active.title}
                    </h2>
                    <p className="mt-1 max-w-md text-sm leading-6 text-zinc-300">
                      {active.caption}
                    </p>
                  </div>
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 text-xs font-black text-white transition hover:bg-white hover:text-black"
                  >
                    GitHub <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {heroScreenshots.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group rounded-md border p-2 text-left transition ${
                  activeIndex === index
                    ? "border-orange-300 bg-orange-300/10"
                    : "border-white/10 bg-white/[0.035] hover:border-white/25 hover:bg-white/[0.06]"
                }`}
                aria-label={`Show ${item.title} screenshot`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.src}
                    alt=""
                    className="h-11 w-16 rounded bg-white object-contain object-top ring-1 ring-white/10"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-black text-white">{item.title}</p>
                    <p className="truncate text-xs font-bold text-zinc-500">{item.tag}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {active.stats.map((stat) => (
              <div
                key={stat}
                className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-bold text-zinc-200"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                {stat}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectPreview({ project }) {
  if (project.image) {
    return (
      <div className="group/shot relative overflow-hidden rounded-xl border border-white/10 bg-[#090b0e] p-3 shadow-2xl shadow-black/30 md:p-4">
        <div className={`absolute -inset-20 bg-gradient-to-br ${project.accent} opacity-20 blur-3xl transition duration-700 group-hover/shot:opacity-35`} />
        <div className={`absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r ${project.accent}`} />
        <div className="relative flex items-center justify-between rounded-t-lg border border-white/10 bg-white/[0.035] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-xs font-black uppercase tracking-[0.18em] text-zinc-500">
            Real screen
          </span>
        </div>

        <div className="relative overflow-hidden rounded-b-lg border-x border-b border-white/10 bg-[#e9edf3] p-3 md:p-5">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="mx-auto max-h-[520px] w-full rounded-md object-contain object-top shadow-2xl shadow-black/20 transition duration-700 group-hover/shot:scale-[1.015]"
          />
        </div>

        <div className="relative mt-3 grid gap-2 sm:grid-cols-3">
          {project.preview.rows.map((row) => (
            <div
              key={row}
              className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-bold text-zinc-200"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
              {row}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#090b0e] p-4">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent}`} />
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
            {project.preview.label}
          </p>
          <p className="mt-2 text-3xl font-black">{project.preview.metric}</p>
        </div>
        <span className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs font-black text-emerald-300">
          {project.preview.change}
        </span>
      </div>

      <div className="mt-6 flex h-28 items-end gap-2">
        {project.preview.bars.map((height, index) => (
          <motion.div
            key={height + index}
            className={`flex-1 rounded-t-md bg-gradient-to-t ${project.accent}`}
            initial={{ height: 12, opacity: 0.65 }}
            whileInView={{ height: `${height}%`, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: index * 0.05 }}
          />
        ))}
      </div>

      <div className="mt-5 grid gap-2">
        {project.preview.rows.map((row) => (
          <div key={row} className="flex items-center justify-between rounded-md bg-white/[0.04] px-3 py-2">
            <span className="text-sm text-zinc-300">{row}</span>
            <CheckCircle2 className="h-4 w-4 text-emerald-300" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectGallerySection() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-24 md:px-6">
      <SectionIntro
        eyebrow="Project gallery"
        title="Screenshots that show the actual product depth."
        text="A dedicated visual gallery for multi-screen projects: dashboards, category pages, payments, students, orders and product flows."
      />

      <div className="mt-12 grid gap-10">
        {projectGalleries.map((gallery, groupIndex) => (
          <motion.div
            key={gallery.title}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: groupIndex * 0.08 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,.055),rgba(255,255,255,.025))] p-4 shadow-2xl shadow-black/25 md:p-6"
          >
            <div className={`pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-gradient-to-br ${gallery.accent} opacity-20 blur-3xl`} />
            <div className={`pointer-events-none absolute -bottom-32 left-8 h-72 w-72 rounded-full bg-gradient-to-br ${gallery.accent} opacity-10 blur-3xl`} />

            <div className="relative mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="rounded-full border border-orange-300/25 bg-orange-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-orange-200">
                  {gallery.tag}
                </span>
                <h3 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
                  {gallery.title}
                </h3>
              </div>
              <p className="max-w-md text-sm leading-7 text-zinc-400">
                {gallery.images.length} real screens captured from the project.
              </p>
            </div>

            <div className="relative grid gap-4 lg:grid-cols-2">
              {gallery.images.map((image, index) => (
                <motion.figure
                  key={image.src}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={index === 0 ? "lg:col-span-2" : ""}
                >
                  <div className="group overflow-hidden rounded-xl border border-white/10 bg-[#090b0e] p-3">
                    <div className="flex items-center justify-between rounded-t-lg border border-white/10 bg-white/[0.035] px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-[0.18em] text-zinc-500">
                        {image.label}
                      </span>
                    </div>

                    <div className="overflow-hidden rounded-b-lg border-x border-b border-white/10 bg-[#eef2f7] p-3 md:p-4">
                      <img
                        src={image.src}
                        alt={`${gallery.title} ${image.label} screenshot`}
                        className={`mx-auto w-full rounded-md object-contain object-top shadow-2xl shadow-black/20 transition duration-700 group-hover:scale-[1.01] ${
                          index === 0 ? "max-h-[620px]" : "max-h-[390px]"
                        }`}
                      />
                    </div>
                  </div>
                  <figcaption className="mt-3 text-sm font-black text-zinc-300">
                    {image.label}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function LiveWebsiteCard({ site, index }) {
  const Icon = site.icon

  return (
    <motion.a
      href={site.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -7 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.035 }}
      className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:border-white/25 hover:bg-white/[0.06]"
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${site.accent}`} />
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-black/35 text-white ring-1 ring-white/10">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <ExternalLink className="h-4 w-4 text-zinc-500 transition group-hover:text-orange-200" aria-hidden="true" />
      </div>

      <div className="mt-6">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-200">
          {site.category}
        </p>
        <h3 className="mt-2 text-xl font-black text-white">{site.title}</h3>
        <p className="mt-2 text-sm font-bold text-zinc-500">{site.domain}</p>
        <p className="mt-4 min-h-12 text-sm leading-6 text-zinc-400">{site.proof}</p>
      </div>
    </motion.a>
  )
}

function ResumeProofPanel() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-6">
      <div className="grid gap-7 lg:grid-cols-[.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(251,146,60,.12),rgba(34,211,238,.08),rgba(255,255,255,.03))] p-6 md:p-8"
        >
          <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-orange-200">
            <Star className="h-4 w-4" aria-hidden="true" />
            Recruiter memory hook
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Not just a portfolio. A proof wall of shipped business websites.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Your resume shows a rare combination: agency delivery, live client
            websites, WordPress customization, SEO, hosting, database work and newer
            Laravel + React product systems. That is the story recruiters should
            remember.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2">
          {resumeSignals.map((signal, index) => (
            <motion.div
              key={signal}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-emerald-300/10 text-emerald-200">
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="font-bold text-zinc-200">{signal}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RecruiterProofDock() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="fixed right-4 top-1/2 z-40 hidden w-14 -translate-y-1/2 rounded-lg border border-white/10 bg-black/75 p-2 shadow-2xl backdrop-blur-xl 2xl:block"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="grid h-10 w-10 place-items-center rounded-md bg-orange-300 text-black">
          <Star className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="[writing-mode:vertical-rl] rotate-180 text-xs font-black uppercase tracking-[0.18em] text-white">
          Recruiter Proof
        </p>
      </div>

      <div className="mt-3 grid gap-2">
        {proofStats.slice(0, 3).map(([value, label]) => (
          <div key={label} className="group relative grid h-10 place-items-center rounded-md bg-white/[0.045]">
            <span className="text-sm font-black text-orange-200">{value}</span>
            <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-md border border-white/10 bg-black/90 px-3 py-2 text-xs font-bold text-zinc-300 shadow-xl group-hover:block">
              {label}
            </span>
          </div>
        ))}
      </div>

      <a
        href="#contact"
        aria-label="Contact Balvir"
        className="mt-3 grid h-10 place-items-center rounded-md bg-white text-black transition hover:bg-orange-200"
      >
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </motion.aside>
  )
}

function CursorTrail() {
  const glowRef = useRef(null)
  const trailRefs = useRef([])

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return undefined
    }

    let frameId
    let isVisible = false
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const points = Array.from({ length: 7 }, () => ({ ...target }))

    function handlePointerMove(event) {
      target.x = event.clientX
      target.y = event.clientY
      isVisible = true
    }

    function handlePointerLeave() {
      isVisible = false
    }

    function animateTrail() {
      points.forEach((point, index) => {
        const leader = index === 0 ? target : points[index - 1]
        const ease = index === 0 ? 0.32 : 0.24
        point.x += (leader.x - point.x) * ease
        point.y += (leader.y - point.y) * ease

        const element = trailRefs.current[index]
        if (element) {
          const size = 16 - index * 1.55
          element.style.width = `${size}px`
          element.style.height = `${size}px`
          element.style.opacity = isVisible ? `${0.5 - index * 0.055}` : "0"
          element.style.transform = `translate3d(${point.x - size / 2}px, ${point.y - size / 2}px, 0)`
        }
      })

      if (glowRef.current) {
        glowRef.current.style.opacity = isVisible ? "1" : "0"
        glowRef.current.style.transform = `translate3d(${target.x - 160}px, ${target.y - 160}px, 0)`
      }

      frameId = window.requestAnimationFrame(animateTrail)
    }

    window.addEventListener("pointermove", handlePointerMove)
    document.addEventListener("mouseleave", handlePointerLeave)
    frameId = window.requestAnimationFrame(animateTrail)

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      document.removeEventListener("mouseleave", handlePointerLeave)
      window.cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[95] hidden mix-blend-screen md:block" aria-hidden="true">
      <div
        ref={glowRef}
        className="absolute h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(251,146,60,.18),rgba(34,211,238,.10)_38%,transparent_68%)] opacity-0 blur-xl transition-opacity duration-300"
      />
      {Array.from({ length: 7 }).map((_, index) => (
        <span
          key={index}
          ref={(element) => {
            trailRefs.current[index] = element
          }}
          className="absolute rounded-full border border-orange-200/40 bg-cyan-100/35 opacity-0 shadow-[0_0_22px_rgba(34,211,238,.34)]"
        />
      ))}
    </div>
  )
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [contactStatus, setContactStatus] = useState({
    type: "idle",
    message: "",
  })
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })
  const heroY = useTransform(scrollYProgress, [0, 0.45], [0, -90])

  async function handleContactSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(event.currentTarget)
    const honeypot = formData.get("_honey")

    if (honeypot) {
      return
    }

    setContactStatus({
      type: "loading",
      message: "Sending your message...",
    })

    try {
      const response = await fetch("https://formsubmit.co/ajax/rajeevkainth01@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Form submission failed")
      }

      form.reset()
      setContactStatus({
        type: "success",
        message: "Message sent. I will get back to you soon.",
      })
    } catch {
      setContactStatus({
        type: "error",
        message: "Could not send right now. Please email me directly at rajeevkainth01@gmail.com.",
      })
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#101114] text-zinc-50">
      <CursorTrail />
      <RecruiterProofDock />
      <motion.div
        className="fixed left-0 top-0 z-[90] h-1 origin-left bg-gradient-to-r from-orange-400 via-cyan-300 to-emerald-300"
        style={{ scaleX }}
      />

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.045)_1px,transparent_1px)] bg-[size:76px_76px] opacity-25" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(249,115,22,.14),transparent_28%,rgba(34,211,238,.08)_52%,transparent_76%),linear-gradient(180deg,rgba(16,17,20,.1),#101114_92%)]" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6">
          <a href="#" className="flex items-center gap-3 text-lg font-black tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-orange-400 text-sm text-black">
              BK
            </span>
            <span>
              Balvir <span className="text-orange-300">Kainth</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-bold text-zinc-400 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm font-black transition hover:bg-white hover:text-black md:inline-flex"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Hire Me
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center rounded-md border border-white/15 text-white md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-white/10 bg-black/95 px-5 py-4 md:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-3 font-bold text-zinc-300 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </nav>

      <section className="relative mx-auto grid max-w-7xl items-start gap-10 px-5 py-12 md:px-6 lg:grid-cols-[.86fr_1.14fr] lg:py-14">

        <motion.div
          style={{ y: shouldReduceMotion ? 0 : heroY }}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative z-10"
        >
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-100"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
          >
            <Activity className="h-4 w-4" aria-hidden="true" />
            15+ live websites shipped
          </motion.div>

          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-orange-300/25 bg-orange-300/10 px-4 py-2 text-sm font-black text-orange-200"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    boxShadow: [
                      "0 0 0 rgba(251,146,60,0)",
                      "0 0 32px rgba(251,146,60,.22)",
                      "0 0 0 rgba(251,146,60,0)",
                    ],
                  }
            }
            transition={{ duration: 2.8, repeat: Infinity }}
          >
            <Rocket className="h-4 w-4" aria-hidden="true" />
            Available for full stack developer roles
          </motion.div>

          <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-6xl xl:text-[4.65rem]">
            I build websites that{" "}
            <span className="bg-gradient-to-r from-orange-300 via-white to-cyan-200 bg-clip-text text-transparent">
              look premium and work hard.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-300 md:text-lg">
            Full stack web developer building WordPress business sites, Laravel
            systems, React dashboards, SQL-backed admin panels and SEO-ready
            production experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center gap-2 rounded-md bg-orange-400 px-6 py-3 font-black text-black transition hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-black"
            >
              View Work <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/15 px-6 py-3 font-black text-white transition hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-black"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center gap-2 rounded-md border border-cyan-200/25 bg-cyan-200/10 px-6 py-3 font-black text-cyan-100 transition hover:bg-cyan-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-black"
            >
              Contact Me <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

        </motion.div>

        <HeroDashboard shouldReduceMotion={shouldReduceMotion} />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.65 }}
          className="grid gap-3 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"
        >
          {proofStats.map(([value, label]) => (
            <div
              key={label}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-4"
            >
              <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-orange-300/10 blur-2xl" />
              <p className="relative text-2xl font-black text-orange-300">{value}</p>
              <p className="mt-1 text-xs font-bold text-zinc-400">{label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 md:grid-cols-4 md:px-6">
          {[
            ["Agency Proof", "Kodegurus web developer experience from 2021 to 2024"],
            ["Live Work", "15+ public websites across real business categories"],
            ["WordPress Depth", "Custom themes, child themes, ACF Pro and WooCommerce"],
            ["Full Stack Edge", "Laravel, React, SQL, SEO, hosting and production polish"],
          ].map(([title, text]) => (
            <div key={title} className="rounded-lg border border-white/10 bg-black/20 p-5">
              <p className="font-black text-white">{title}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <ResumeProofPanel />

      <section id="live-work" className="border-y border-white/10 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr]">
            <SectionIntro
              eyebrow="Live website wall"
              title="A recruiter can click these and see shipped work."
              text="The resume listed live projects across healthcare, finance, printing, wellness, travel, agriculture, industrial products and Hungary-based businesses. This section turns that into instant proof."
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg border border-white/10 bg-black/35 p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,146,60,.16),transparent_28%),radial-gradient(circle_at_78%_35%,rgba(34,211,238,.12),transparent_30%)]" />
              <div className="relative grid gap-4 sm:grid-cols-3">
                {[
                  ["15+", "Public URLs"],
                  ["8", "Industries"],
                  ["2", "Hungary projects"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-4xl font-black text-orange-200">{value}</p>
                    <p className="mt-2 text-sm font-bold text-zinc-400">{label}</p>
                  </div>
                ))}
              </div>

              <div className="relative mt-6 rounded-lg border border-white/10 bg-white/[0.035] p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-md bg-cyan-200/10 text-cyan-100">
                    <MousePointerClick className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-black text-white">Click-through proof beats claims.</p>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">
                      Recruiters remember candidates who can point to live, varied, client-facing work.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {liveWebsites.map((site, index) => (
              <LiveWebsiteCard key={site.domain} site={site} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-24 md:px-6">
        <SectionIntro
          eyebrow="Selected work"
          title="Project case studies with real product thinking."
          text="Each build is shaped around the business flow first, then designed into a dashboard people can actually use every day."
        />

        <div className="mt-12 grid gap-10">
          {projects.map((project, index) => (
            <motion.article
              id={project.id}
              key={project.title}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,.06),rgba(255,255,255,.025))] p-4 shadow-2xl shadow-black/25 transition hover:border-white/20 md:p-6"
            >
              <div className={`pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gradient-to-br ${project.accent} opacity-15 blur-3xl transition duration-700 group-hover:opacity-30`} />
              <div className={`pointer-events-none absolute -bottom-40 left-10 h-72 w-72 rounded-full bg-gradient-to-br ${project.accent} opacity-10 blur-3xl transition duration-700 group-hover:opacity-25`} />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.045),transparent)] opacity-0 transition duration-700 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-orange-300/25 bg-orange-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-orange-200">
                        {project.tag}
                      </span>
                      <span className="text-sm font-bold text-zinc-500">0{index + 1}</span>
                    </div>

                    <h3 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-300">
                      {project.desc}
                    </p>
                  </div>

                  <div className="flex shrink-0 flex-wrap gap-3">
                    <ActionLink href={project.live}>
                      Live Demo <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </ActionLink>
                    <ActionLink href={project.github} variant="secondary">
                      <Code2 className="h-4 w-4" aria-hidden="true" />
                      GitHub
                    </ActionLink>
                  </div>
                </div>

                <ProjectPreview project={project} />

                <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_1fr_1fr]">
                    {[
                      ["Challenge", project.problem, "01"],
                      ["Solution", project.solution, "02"],
                      ["Outcome", project.result, "03"],
                    ].map(([label, text, number]) => (
                      <div
                        key={label}
                        className="relative overflow-hidden rounded-xl border border-white/10 bg-black/25 p-5"
                      >
                        <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${project.accent} opacity-10 blur-2xl`} />
                        <div className="relative flex items-center gap-3">
                          <span className="text-sm font-black text-orange-200">{number}</span>
                          <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                            {label}
                          </p>
                        </div>
                        <p className="relative mt-4 text-sm leading-7 text-zinc-300">{text}</p>
                      </div>
                    ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-bold text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <ProjectGallerySection />

      <section id="achievements" className="mx-auto max-w-7xl px-5 py-24 md:px-6">
          <SectionIntro
            eyebrow="Achievements"
            title="Certified, curious and actively leveling up."
            text="Recruiters remember candidates who keep learning. This section will grow as new certificates are added, with AI, full-stack, cloud, database and product skills building into one proof wall."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_.92fr]">
            {achievements.map((achievement) => (
              <motion.article
                key={achievement.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(251,146,60,.11),rgba(34,211,238,.07),rgba(255,255,255,.035))] p-6 shadow-2xl shadow-black/25 md:p-8"
              >
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-300/20 blur-3xl" />
                <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-cyan-200/10 blur-3xl" />

                <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/25 bg-orange-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-200">
                      <Sparkles className="h-4 w-4" aria-hidden="true" />
                      AI Certification
                    </div>
                    <h3 className="mt-5 text-3xl font-black tracking-tight text-white md:text-5xl">
                      {achievement.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
                      Completed at the {achievement.level} through {achievement.issuer}, confirming
                      foundational artificial intelligence knowledge and applied learning discipline.
                    </p>
                  </div>

                  <a
                    href={achievement.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-black text-black transition hover:bg-orange-200"
                  >
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    View Certificate
                  </a>
                </div>

                <div className="relative mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    ["Issuer", achievement.issuer],
                    ["Completed", achievement.date],
                    ["Training", achievement.duration],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-white/10 bg-black/25 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                        {label}
                      </p>
                      <p className="mt-2 font-black text-white">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {achievement.focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs font-bold text-zinc-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 md:p-8"
            >
              <div className="absolute -right-24 top-0 h-56 w-56 rounded-full bg-emerald-300/10 blur-3xl" />
              <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-200">
                Learning pipeline
              </p>
              <h3 className="mt-4 text-3xl font-black tracking-tight text-white">
                10+ certifications incoming.
              </h3>
              <p className="mt-4 leading-8 text-zinc-300">
                The goal is to build a visible proof wall across AI, Laravel, React,
                databases, cloud hosting, SEO and modern product development.
              </p>

              <div className="mt-7 grid gap-3">
                {["Artificial Intelligence", "Laravel + APIs", "React dashboards", "SQL databases", "Cloud and hosting", "SEO performance"].map((item, index) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/25 p-4">
                    <span className="text-sm font-black text-orange-200">0{index + 1}</span>
                    <span className="font-bold text-zinc-200">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-24 md:px-6">
        <SectionIntro
          eyebrow="Technical stack"
          title="The stack behind the systems."
          text="Focused tools, practical architecture and UI choices that make apps easier to maintain after launch."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon

            return (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:border-orange-300/35 hover:bg-white/[0.06]"
              >
                <div className="grid h-11 w-11 place-items-center rounded-md bg-orange-300/10 text-orange-200">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-black text-white">{skill.label}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{skill.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-5 py-24 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <SectionIntro
            eyebrow="Experience"
            title="4 years moving from code to product delivery."
            text="The work has grown from solid Laravel foundations into full SaaS workflows, React dashboards and production-ready admin systems."
          />

          <div className="relative">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-orange-300 via-cyan-200 to-transparent md:block" />
            <div className="grid gap-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.period}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative rounded-lg border border-white/10 bg-white/[0.035] p-5 md:ml-10"
                >
                  <div className="absolute -left-[3.25rem] top-6 hidden h-8 w-8 place-items-center rounded-md border border-orange-300/35 bg-black text-orange-200 md:grid">
                    <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-200">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-400">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-6">
        <SectionIntro
          eyebrow="How I build"
          title="Calm process, sharp execution."
          text="A polished app is not just animation. It is scope, structure, states, edge cases and screens that feel obvious to use."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Architecture first",
              text: "Map the data, roles, API contracts and workflow before dressing the UI.",
            },
            {
              icon: Layers3,
              title: "Dashboard clarity",
              text: "Design dense screens that make orders, reports, payments and users easy to scan.",
            },
            {
              icon: Rocket,
              title: "Launch polish",
              text: "Add loading states, empty states, responsive details and final UX checks before delivery.",
            },
          ].map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.055] to-white/[0.02] p-6"
              >
                <div className="grid h-12 w-12 place-items-center rounded-md bg-cyan-200/10 text-cyan-100">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-2xl font-black text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{item.text}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24 md:px-6">
        <div className="grid gap-8 rounded-lg border border-white/10 bg-white/[0.035] p-5 md:p-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="flex flex-col justify-between">
            <div>
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-orange-300">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Contact
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
                Ready to build something powerful?
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-300">
                Send a short note about the product, dashboard or SaaS idea. I will
                help shape it into a clear build plan.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+919809866200"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-white/15 px-4 font-bold transition hover:bg-white hover:text-black"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                +91 98098-66200
              </a>
              <a
                href="https://github.com/Balvir6200"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-white/15 px-4 font-bold transition hover:bg-white hover:text-black"
              >
                <Code2 className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/balvir-kainth/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-white/15 px-4 font-bold transition hover:bg-white hover:text-black"
              >
                <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>

          <form onSubmit={handleContactSubmit} className="grid gap-4">
            <input type="hidden" name="_subject" value="New portfolio inquiry for Balvir Kainth" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-zinc-300">
                Name
                <input
                  name="name"
                  required
                  className="min-h-12 rounded-md border border-white/10 bg-black/30 px-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-orange-300"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-zinc-300">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  className="min-h-12 rounded-md border border-white/10 bg-black/30 px-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-orange-300"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-bold text-zinc-300">
              Project type
              <select
                name="project_type"
                className="min-h-12 rounded-md border border-white/10 bg-black/30 px-4 text-white outline-none transition focus:border-orange-300"
                defaultValue="SaaS dashboard"
                required
              >
                <option>SaaS dashboard</option>
                <option>Laravel admin panel</option>
                <option>React frontend</option>
                <option>API integration</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-bold text-zinc-300">
              Message
              <textarea
                name="message"
                required
                rows="5"
                className="rounded-md border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-orange-300"
                placeholder="Tell me what you want to build..."
              />
            </label>

            <button
              type="submit"
              disabled={contactStatus.type === "loading"}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-orange-400 px-6 py-3 font-black text-black transition hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-60"
            >
              {contactStatus.type === "loading" ? "Sending..." : "Send Message"}{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>

            {contactStatus.message ? (
              <div
                className={`rounded-md border px-4 py-3 text-sm font-bold ${
                  contactStatus.type === "success"
                    ? "border-emerald-300/25 bg-emerald-300/10 text-emerald-200"
                    : contactStatus.type === "error"
                      ? "border-red-300/25 bg-red-300/10 text-red-200"
                      : "border-cyan-200/25 bg-cyan-200/10 text-cyan-100"
                }`}
                role="status"
              >
                {contactStatus.message}
              </div>
            ) : null}
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-zinc-500 md:px-6">
        &copy; 2026 Balvir Kainth. Built with React, Laravel thinking and Tailwind CSS.
      </footer>
    </main>
  )
}

export default App
