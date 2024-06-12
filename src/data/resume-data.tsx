import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Leon Füßner",
  initials: "LF",
  location: "Munich, Germany, CET",
  locationLink: "https://www.google.com/maps/place/munich",
  about:
    "Professional Software Developer. Experience with C++, Swift, Kotlin, 3D Programming",
  summary:
    "Worked on a variety of products, both large and small, with diverse teams has been a rewarding experience. Driven by a continuous desire to learn and explore new areas, particularly in health and technology.",
  avatarUrl: "https://avatars.githubusercontent.com/u/34339014?v=4",
  contact: {
    email: "leon.fuessner@hotmail.de",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/leonidaas",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leon-füßner-bab212170/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/leon_fuessner",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Ludwigs-Maximilians-Universität München",
      degree: "Bachelor's Degree in Computer Science",
      start: "2021",
      end: "2024"
    },
    {
      school: "Universidad de Sevilla",
      degree: "BS in Computer Science - Exchange Semester",
      start: "2023", 
      end: "2024"
    },
    {
      school: "Berufschule für Informatik München",
      degree: "Fachinformatiker Anwendungsentwicklung",
      start: "2017",
      end: "2020"
    }
  ],
  work: [
    {
      company: "MaibornWolff GmbH",
      link: "https://www.maibornwolff.de",
      badges: [],
      title: "Software Developer",
      logo: ParabolLogo,
      start: "start 2023",
      end: "now",
      description:
        "Working for different clients including STIHL and BMW",
    },
    {
      company: "Droid-Dojo - Angelo Rüggeberg - Freelancer",
      link: "https://droid-dojo.ninja",
      badges: ["Remote"],
      title: "Android Developer",
      logo: ParabolLogo,
      start: "end 2021",
      end: "start 2023",
      description:
        "Worked for various clients including Deutsche Bahn, Joyn and a private project fully in Compose",
    },
    {
      company: "myposter GmbH",
      link: "https://www.myposter.de",
      badges: [],
      title: "Android Developer",
      logo: ClevertechLogo,
      start: "mid 2020",
      end: "end 2021",
      description:
        "Created several features in the Android App in a dev team of two.",
    },
    {
      company: "Spontacts GmbH (Formerly company of Jochen Schweizer)",
      link: "https://www.spontacts.com/",
      badges: [],
      title: "Android Developer (still in apprenticeship)",
      logo: JojoMobileLogo,
      start: "2019",
      end: "mid 2020",
      description:
        "Jochen Schweizer Mobile Team took over the Spontacts Apps with around 100k MAU and refactored it to Kotlin and GraphQL. Implemented a new Group Feature.",
    },
    {
      company: "Jochen Schweizer Technology Solutions GmbH",
      link: "https://www.jochen-schweizer.de",
      badges: [],
      title: "Software Developer",
      logo: NSNLogo,
      start: "2017",
      end: "2020",
      description: "Apprenticeship Software Developer - started on a Web Project and later on switched to the mobile team",
    },
  ],
  skills: [
    "Swift",
    "SwiftUI",
    "VisionOS",
    "Kotlin",
    "C++",
    "Java",
    "Jetpack Compose",
    "SQL",
    "GraphQL",
    "NodeJS",
  ],
  projects: [
    {
      title: "Game Memory Manipulation",
      techStack: ["Side project", "C++", "x64dbg", "Cheat Engine"],
      description:
        "Reversed engineered CS2 and implemented a helper tool which reads and writes memory",
      logo: MonitoLogo,
    },
    {
      title: "BMW",
      techStack: ["Work Project", "Swift", "SwiftUI", "Apple Vision Pro"],
      description:
        "3D VR/AR programming and prototyping for BMW",
      logo: MonitoLogo,
      link: {
        label: "BMW",
        href: "https://www.bmw.de"
      },
    },
    {
      title: "STIHL",
      techStack: ["Work Project", "Kotlin", "Jetpack Compose"],
      description:
        "iMOW Android Client",
      logo: MonitoLogo,
      link: {
        label: "iMOW",
        href: "https://www.stihl.de"
      },
    },
    {
      title: "RoboRally",
      techStack: [
        "Side Project",
        "Java",
        "JavaFX",
      ],
      description: "A boardgame transformed into a online-multiplayer-game",
      logo: ConsultlyLogo,
    },
    {
      title: "Spontacts Android App",
      techStack: ["Work Project", "Java", "Kotlin", "GraphQL", "NodeJS"],
      description:
        "Android App for meeting new people with same interests",
      logo: MonitoLogo,
      link: {
        label: "Spontacts",
        href: "https://www.spontacts.com"
      },
    },
    {
      title: "Jochen Schweizer",
      techStack: ["Work Project", "Java", "Kotlin"],
      description:
        "Android App for the Jochen Schweizer Shop with an voucher management",
      logo: JarockiMeLogo,
      link: {
        label: "Jochen Schweizer",
        href: "https://www.jochen-schweizer.de/",
      },
    },
    {
      title: "myposter Android",
      techStack: ["Work Project", "Kotlin", "Python"],
      description:
        "Android App for the myposter shop with Photobook/Calendar creator tools",
      logo: Minimal,
      link: {
        label: "myposter",
        href: "https://myposter.de/",
      },
    },
    {
      title: "Manuel Buschendorf",
      techStack: ["Side Project", "Wordpress", "PHP"],
      description:
        "Website for a professional sports photographer",
      logo: BarepapersLogo,
      link: {
        label: "manuelbuschendorf.com",
        href: "https://manuelbuschendorf.com/",
      },
    },
  ],
} as const;
