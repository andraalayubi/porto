import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Andra",
  lastName: "Al Ayubi",
  name: `Andra Al Ayubi`,
  role: "Backend Developer & Computer Engineering Student",
  avatar: "/images/og/avatar.jpg",
  email: "andraalayubi@gmail.com",
  location: "Asia/Jakarta",
  languages: ["English", "Bahasa Indonesia"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Send me a message</>,
  description: <>Interested in collaborating or have questions? Feel free to reach out!</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/andraalayubi",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/andra-al-ayubi/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/andra.al.ayubi/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Professional Backend Developer</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Andra Al Ayubi</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/toefl-video-exercise-application",
  },
  subline: (
    <>
      I'm Andra Al Ayubi, a Computer Engineering student at{" "}
      <strong>Electronic Engineering Polytechnic Institute of Surabaya{" "}</strong>
      with a passion for backend development, RESTful APIs, and database management.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Andra Al Ayubi is a Computer Engineering student at PENS Surabaya with a strong focus 
        on backend development. With a GPA of 3.68/4.00, he specializes in building RESTful APIs 
        using Express.js, Next.js, and Laravel, with expertise in various databases including 
        MySQL, PostgreSQL, Prisma, and Supabase.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "PT. Travelana Mandiri Sejahtera",
        timeframe: "Jan 2025 - Present",
        role: "Backend Developer",
        achievements: [
          <>
            Developing applications for quick count in the electoral process and features for 
            booking transportation tickets.
          </>,
          <>
            Building scalable backend systems to handle real-time data processing and 
            transaction management.
          </>,
        ]
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Electronic Engineering Polytechnic Institute of Surabaya (PENS)",
        description: (
          <>
            Diploma in Computer Engineering (D4) - Cumulative GPA: 3.68/4.00<br />
            Focus on software engineering, database systems, and web development
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Backend Development",
        description: (
          <>
            Building RESTful APIs with Express.js, Next.js, and Laravel. 
            Experienced in creating scalable server architectures and handling 
            database operations.
          </>
        ),
        tags: [
          {
            name: "Express.js",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Laravel",
            icon: "php",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
        ]
      },
      {
        title: "Database Management",
        description: (
          <>
            Expertise in relational databases MySQL and PostgreSQL, along with 
            modern database services like Prisma and Supabase for efficient 
            data management.
          </>
        ),
        tags: [
          {
            name: "MySQL",
            icon: "database",
          },
          {
            name: "PostgreSQL",
            icon: "database",
          },
          {
            name: "Prisma",
            icon: "database",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ]
      },
      {
        title: "Mobile & Frontend",
        description: (
          <>
            Developing mobile applications with Flutter and web interfaces with 
            React.js. Experience in full-stack development and cross-platform solutions.
          </>
        ),
        tags: [
          {
            name: "Flutter",
            icon: "mobile",
          },
          {
            name: "React.js",
            icon: "react",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Dart",
            icon: "mobile",
          },
        ]
      },
      {
        title: "Deployment & Tools",
        description: (
          <>
            Deploying applications to Vercel and managing hosting with Niagahoster. 
            Experienced with Git version control and Agile development methodologies.
          </>
        ),
        tags: [
          {
            name: "Vercel",
            icon: "deploy",
          },
          {
            name: "Git",
            icon: "git",
          },
          {
            name: "RESTful API",
            icon: "api",
          },
          {
            name: "Agile",
            icon: "agile",
          },
        ]
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about backend development and technology...",
  description: `Read about ${person.name}'s journey in backend development and computer engineering`,
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Backend and full-stack projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Project gallery – ${person.name}`,
  description: `A collection of project screenshots by ${person.name}`,
  images: [
    {
      src: "/images/projects/toefl-app/cover-01.jpg",
      alt: "TOEFL Application Project",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/internship-system/cover-01.jpg",
      alt: "Internship Management System",
      orientation: "vertical",
    },
    {
      src: "/images/projects/anime-list/cover-01.jpg",
      alt: "Anime List Application",
      orientation: "horizontal",
    },
    {
      src: "",
      alt: "Travelana Backend Development",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };