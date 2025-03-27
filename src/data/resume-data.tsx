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
  name: "Leon Fuessner",
  initials: "LF",
  location: "Brisbane, Australia",
  locationLink: "https://www.google.com/maps/place/brisbane",
  about:
    "Professional Mobile Developer from Germany. Experience with Kotlin, C++ and 3D Programming",
  summary:
    "I've had the chance to work on all kinds of projects with different teams, and I love the challenge of creating solutions that actually make a difference for people. I'm always up for new adventures, looking for better, more efficient ways to build things. Always open to new challenges and adventures, I emphasize clean architecture, scalability, and testability to build robust and maintainable solutions.",
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
      school: "Queensland University of Technology",
      degree: "Bachelor's thesis in Computer Science - Road Safety",
      start: "2025",
      end: "2025"
    },
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
      degree: "(Apprenticeship) Fachinformatiker Anwendungsentwicklung",
      start: "2017",
      end: "2020"
    }
  ],
  work: [
    {
      company: "Queensland University of Technology",
      link: "https://www.maibornwolff.de",
      badges: [],
      title: "Software Developer and Research Assistant",
      logo: ParabolLogo,
      start: "start 2025",
      end: "now",
      description:
        "Researching VR/AR solutions at the Road Safety Department to prevent car accidents",
    },
    {
      company: "MaibornWolff GmbH",
      link: "https://www.maibornwolff.de",
      badges: [],
      title: "Software Developer",
      logo: ParabolLogo,
      start: "start 2023",
      end: "start 2025",
      description:
        "Developed apps for clients such as STIHL and BMW.",
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
        "Worked on projects for various clients, including Deutsche Bahn, Joyn, and a private project developed entirely with Jetpack Compose.",
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
        "Developed multiple features for the Android app as part of a two-person dev team. Initially built with RxJava2, later refactored to coroutines in a multi-module architecture.",
    },
    {
      company: "Spontacts GmbH (Formerly company of Jochen Schweizer)",
      link: "https://www.spontacts.com/",
      badges: [],
      title: "Android Developer",
      logo: JojoMobileLogo,
      start: "2019",
      end: "mid 2020",
      description:
        "The Jochen Schweizer Mobile Team took over the Spontacts app, which had around 100k MAU, and refactored it to Kotlin and GraphQL while implementing a new Group feature.",
    },
    {
      company: "Jochen Schweizer Technology Solutions GmbH",
      link: "https://www.jochen-schweizer.de",
      badges: [],
      title: "Software Developer",
      logo: NSNLogo,
      start: "2017",
      end: "2020",
      description: "Completed an apprenticeship as a Software Developer, initially working on a web project before transitioning to the mobile team.",
    },
  ],
  skills: [
    "Android",
    "Kotlin",
    "Jetpack Compose",
    "Room",
    "Hilt",
    "Retrofit",
    "C++",
    "Swift",
    "SwiftUI",
    "VisionOS",
    "Unreal Engine",
    "Java",
    "SQL",
    "GraphQL",
    "NodeJS",
    "GIT"
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
      techStack: ["Work Project", "Swift", "SwiftUI", "Apple Vision Pro", "Unreal Engine", "Meta Quest Pro"],
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
      techStack: ["Work Project", "Kotlin", "Jetpack Compose", "XML Views", "Koin", "MVVM", "Room", "Retrofit", "Coroutines", "Espresso", "JUnit", "CI/CD", "Azure"],
      description:
        "Developed the iMOW Android client, an app for controlling STIHL robotic lawn mowers. Implemented features for remote operation, scheduling, and status monitoring.",
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
      techStack: ["Work Project", "Java", "Kotlin", "GraphQL", "NodeJS", "Firebase", "DataBinding", "MVVM", "XML Views"],
      description:
        "A platform for connecting people with shared interests",
      logo: MonitoLogo,
      link: {
        label: "Spontacts",
        href: "https://www.spontacts.com"
      },
    },
    {
      title: "Jochen Schweizer",
      techStack: ["Work Project", "Java", "Kotlin", "MVC", "Dagger", "XML Views"],
      description:
        "Developed an Android app for the Jochen Schweizer shop, including a voucher management system.",
      logo: JarockiMeLogo,
      link: {
        label: "Jochen Schweizer",
        href: "https://www.jochen-schweizer.de/",
      },
    },
    {
      title: "myposter Android",
      techStack: ["Work Project", "Kotlin", "Python", "RxJava2", "MVVM", "Multi Module App"],
      description:
        "Developed an Android app for the myposter shop, featuring photobook and calendar creation tools. Built a smart photo album creator service using Python.",
      logo: Minimal,
      link: {
        label: "myposter",
        href: "https://myposter.de/",
      },
    },
  ],
} as const;
