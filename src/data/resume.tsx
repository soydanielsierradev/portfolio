import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Rust } from "@/components/ui/svgs/rust";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Astro } from "@/components/ui/svgs/astro";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { NodeRed } from "@/components/ui/svgs/nodeRed";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { Tauri } from "@/components/ui/svgs/tauri";
import { Docker } from "@/components/ui/svgs/docker";
import { ReactNative } from "@/components/ui/svgs/reactNative";
import { MQTT } from "@/components/ui/svgs/mqtt";
import { Zigbee } from "@/components/ui/svgs/zigbee";
import { NestJS } from "@/components/ui/svgs/nestjs";
import { Supabase } from "@/components/ui/svgs/supabase";
import { PocketBase } from "@/components/ui/svgs/pocketbase";
import { PostgreSQL } from "@/components/ui/svgs/postgresql";
import { SQLite } from "@/components/ui/svgs/sqlite";
import { InfluxDB } from "@/components/ui/svgs/influxdb";
import { Grafana } from "@/components/ui/svgs/grafana";
import { Shopify } from "@/components/ui/svgs/shopify";
import { Modbus } from "@/components/ui/svgs/modbus";
import { LoRa } from "@/components/ui/svgs/lora";
import { Stripe } from "@/components/ui/svgs/stripe";

export const DATA = {
  name: "Daniel Sierra",
  initials: "DS",
  // Hero headline rotation: starts on the name, then cycles through roles.
  // Each entry follows "Hi, I'm ", so keep the article ("a"/"an") in the string.
  heroRoles: [
    "Daniel Sierra",
    "a Frontend Developer",
    "an IoT Engineer",
    "a Fullstack Developer",
    "a Telecom Engineer",
  ],
  url: "https://danielsierra.vercel.app",
  location: "Havana, Cuba",
  locationLink: "https://www.google.com/maps/place/havana",
  description:
    "Telecommunications engineer who builds software. I work where hardware meets the web: IoT monitoring, industrial protocols, and the interfaces that turn sensor data into something people can actually use.",
  summary:
    "I am a [telecommunications and electronics engineer](/#education) who writes code. Since 2022 I have been building IoT monitoring systems end to end — LoRa and Zigbee sensors feeding real-time dashboards through Node-RED and MQTT — for the energy, logistics and environmental sectors. I taught myself web development in 2020 and never stopped: today I move between React and Astro on the frontend, Node-RED and MongoDB on the backend, and Rust when a problem deserves a real tool. I care about the unglamorous parts — reconnection logic, CRC checks, deployments that survive a bad network — because in this field those are what actually break.",
  avatarUrl: "/me.jpg",
  // Grouped by area so the row reads as a stack rather than a flat word cloud:
  // languages, frontend, backend, data, IoT, tooling.
  skills: [
    { name: "TypeScript", icon: Typescript },
    { name: "Rust", icon: Rust },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Astro", icon: Astro },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "React Native", icon: ReactNative },
    { name: "Tauri", icon: Tauri },
    { name: "Node.js", icon: Nodejs },
    { name: "NestJS", icon: NestJS },
    { name: "Node-RED", icon: NodeRed },
    { name: "Supabase", icon: Supabase },
    { name: "PocketBase", icon: PocketBase },
    { name: "PostgreSQL", icon: PostgreSQL },
    { name: "MongoDB", icon: MongoDB },
    { name: "SQLite", icon: SQLite },
    { name: "InfluxDB", icon: InfluxDB },
    { name: "Grafana", icon: Grafana },
    { name: "MQTT", icon: MQTT },
    { name: "LoRa", icon: LoRa },
    { name: "Zigbee", icon: Zigbee },
    { name: "Modbus RTU/TCP", icon: Modbus },
    { name: "Docker", icon: Docker },
    { name: "Shopify", icon: Shopify },
    { name: "Stripe", icon: Stripe },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "danielsierraperera07@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/soydanielsierradev",
        icon: Icons.github,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:danielsierraperera07@gmail.com",
        icon: Icons.email,
        navbar: false,
        primary: true,
      },
    },
  },

  // Reverse chronological by end date. work-section.tsx renders this array as
  // given, so the order here is the order on the page.
  work: [
    {
      company: "Freelance",
      href: "",
      badges: [],
      location: "Havana, Cuba",
      title: "Fullstack Developer",
      // Freelance is not a company, so there is no mark to borrow. Daniel's own
      // DS monogram stands in, matching the generated favicon in app/icon.tsx.
      // White on near-black keeps the glyph legible on both themes, which matters
      // because an <img> cannot respond to the theme. The font is a system stack
      // rather than outlined paths (no text-to-path tooling available); the same
      // tradeoff icon.tsx already makes.
      logoUrl: "/logos/freelance.svg",
      start: "2022",
      end: "Present",
      description:
        "Build monitoring applications and web products for national and international clients. Delivered a license plate recognition (LPR) parking system in React and Tailwind CSS backed by Node-RED and MongoDB, plus complete IoT sensor monitoring apps for the energy and logistics sectors. Also ship SEO-optimized landing pages in Astro. Everything version-controlled with Git, written modular, and deployed with Docker.",
    },
    {
      company: "ConnexIA Soluciones",
      href: "https://connexiasoluciones.vercel.app",
      badges: [],
      location: "Havana, Cuba",
      title: "Fullstack Developer",
      // Trimmed from the company's own /img/logo.png, which ships with heavy
      // whitespace padding that would shrink the mark inside the 40px circle.
      logoUrl: "/logos/connexia.png",
      start: "2024",
      end: "2026",
      description:
        "Built fleet monitoring platforms and automation applications end to end, owning the infrastructure design, the data flow from field device to operator dashboard, and the application code itself rather than a single layer of it. Also delivered the company's corporate site in Astro, engineered for near-zero JavaScript so it loads fast on unreliable connections.",
    },
    {
      company: "COPEXTEL TVS",
      href: "",
      badges: [],
      location: "Havana, Cuba",
      title: "Radiocommunications Specialist, IoT Solutions",
      // Supplied by Daniel; copextel.com.cu is not reachable from outside Cuba.
      // White background keyed out so the mark sits on either theme.
      logoUrl: "/logos/copextel.png",
      start: "2022",
      end: "2024",
      description:
        "Designed and deployed IoT monitoring solutions for environmental, electrical and geospatial applications. Built real-time sensor acquisition over LoRa and Zigbee orchestrated in Node-RED with MQTT transport, persisting to MongoDB through a microservice layer. Developed the custom dashboards and interactive visualizations operators used daily, designed responsive and cross-platform so they worked from a control room or a phone in the field. Work carried out in interdisciplinary teams alongside RF and electrical engineers.",
    },
  ],
  education: [
    {
      school: "Universidad Tecnológica de La Habana José Antonio Echeverría (CUJAE)",
      href: "https://www.cujae.edu.cu",
      degree: "Telecommunications and Electronics Engineering",
      // CUJAE isotipo from Wikimedia Commons (File:Isotipo.png, CC BY-SA 4.0).
      // cujae.edu.cu is not reachable from outside Cuba, so the asset is served
      // locally rather than hotlinked.
      logoUrl: "/logos/cujae.png",
      start: "2019",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "node-red-contrib-rtu-over-tcp",
      href: "https://github.com/soydanielsierradev/node-red-contrib-rtu-over-tcp",
      dates: "April 2026",
      active: true,
      description:
        "A custom Node-RED node that speaks Modbus RTU over a raw TCP socket — the frame, the CRC16, and the wire, without a gateway in between. Keeps a persistent connection with automatic reconnection and serializes requests through a queue so concurrent flows never interleave frames on the same link. Built for and tested against Ibercon RS485 devices.",
      technologies: ["Node.js", "Node-RED", "Modbus RTU", "TCP Sockets"],
      links: [
        {
          type: "Source",
          href: "https://github.com/soydanielsierradev/node-red-contrib-rtu-over-tcp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Bruce TUI",
      href: "https://github.com/soydanielsierradev/bruce-tui",
      dates: "June 2026 - Present",
      active: true,
      description:
        "A terminal workspace for Claude Code, written in Rust. Runs an embedded Claude session next to a live Git pane, tracks token usage and cost as you work, and keeps resumable sessions per project. Distributed through its own Homebrew tap.",
      technologies: ["Rust", "Ratatui", "Git", "Homebrew"],
      links: [
        {
          type: "Source",
          href: "https://github.com/soydanielsierradev/bruce-tui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "SMS Broadcast",
      href: "https://github.com/soydanielsierradev/sms-broadcast",
      dates: "July 2026 - Present",
      active: true,
      description:
        "A desktop app that sends SMS campaigns through your own phone's SIM instead of a paid gateway. Tauri and Rust on the desktop side, a React Native Android app acting as the SMS server, talking over the local network.",
      technologies: ["Rust", "Tauri", "TypeScript", "React Native", "Kotlin", "Tailwind CSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/soydanielsierradev/sms-broadcast",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "ConnexIA Soluciones",
      href: "https://connexiasoluciones.vercel.app",
      dates: "May 2025 - February 2026",
      active: true,
      description:
        "Corporate site for a technology solutions company, built in Astro for near-zero JavaScript and fast loads on unreliable connections.",
      technologies: ["Astro", "Tailwind CSS", "TypeScript"],
      links: [
        {
          type: "Website",
          href: "https://connexiasoluciones.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "BACO Agency",
      href: "https://bacoagency.vercel.app",
      dates: "November 2024 - January 2025",
      active: true,
      description:
        "Site for a creative agency, where the visual work had to lead. Astro with a motion layer for the presentation pieces, without giving up static delivery.",
      technologies: ["Astro", "Tailwind CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://bacoagency.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Guachipupa",
      href: "https://guachipupa.vercel.app",
      dates: "August 2025 - April 2026",
      active: true,
      description:
        "Brand site for a Cuban beverage product. Astro static build, image-heavy and mobile-first — most of the audience arrives from a phone on mobile data.",
      technologies: ["Astro", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://guachipupa.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
