import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Daniel Sierra",
  initials: "DS",
  url: "https://danielsierra.vercel.app",
  location: "Havana, Cuba",
  locationLink: "https://www.google.com/maps/place/havana",
  description:
    "Telecommunications engineer who builds software. I work where hardware meets the web: IoT monitoring, industrial protocols, and the interfaces that turn sensor data into something people can actually use.",
  summary:
    "I am a [telecommunications and electronics engineer](/#education) who writes code. Since 2022 I have been building IoT monitoring systems end to end — LoRa, Zigbee and NB-IoT sensors feeding real-time dashboards through Node-RED and MQTT — for the energy, logistics and environmental sectors. I taught myself web development in 2020 and never stopped: today I move between React and Astro on the frontend, Node-RED and MongoDB on the backend, and Rust when a problem deserves a real tool. I care about the unglamorous parts — reconnection logic, CRC checks, deployments that survive a bad network — because in this field those are what actually break.",
  avatarUrl: "",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
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

  work: [
    {
      company: "COPEXTEL TVS",
      href: "",
      badges: [],
      location: "Havana, Cuba",
      title: "Radiocommunications Specialist, IoT Solutions",
      logoUrl: "",
      start: "2022",
      end: "Present",
      description:
        "Design and deploy IoT monitoring solutions for environmental, electrical and geospatial applications. Built real-time sensor acquisition over LoRa, Zigbee and NB-IoT orchestrated in Node-RED with MQTT transport, persisting to MongoDB through a microservice layer. Developed the custom dashboards and interactive visualizations operators use daily, designed responsive and cross-platform so they work from a control room or a phone in the field. Work carried out in interdisciplinary teams alongside RF and electrical engineers.",
    },
    {
      company: "Freelance",
      href: "",
      badges: [],
      location: "Havana, Cuba",
      title: "Frontend & IoT Solutions Developer",
      logoUrl: "",
      start: "2022",
      end: "Present",
      description:
        "Build monitoring applications and web products for national and international clients. Delivered the frontend of a license plate recognition (LPR) parking system in React and Tailwind CSS backed by Node-RED and MongoDB, plus complete IoT sensor monitoring apps for the energy and logistics sectors. Also ship SEO-optimized landing pages in Astro. Everything version-controlled with Git, written modular, and deployed with Docker.",
    },
  ],
  education: [
    {
      school: "Universidad Tecnológica de La Habana José Antonio Echeverría (CUJAE)",
      href: "https://www.cujae.edu.cu",
      degree: "Telecommunications and Electronics Engineering",
      logoUrl: "",
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
      title: "Parking LPR System",
      href: "",
      dates: "January 2025",
      active: true,
      description:
        "Frontend for a license plate recognition parking system delivered to an international client. React and Tailwind CSS interface over a Node-RED backend with MongoDB, covering live plate reads, access events and vehicle history. Client work — source and deployment are private.",
      technologies: ["React", "Tailwind CSS", "Node-RED", "MongoDB", "Docker"],
      links: [],
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
