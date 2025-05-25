const person = {
  firstName: "Rafael",
  lastName: "Teixeira",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Technical Support Consultant – Level II",
  avatar: "/images/rafa-profile-pic.jpg",
  email: "rafael@nerdstack.dev",
  location: "America/Sao_Paulo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Portuguese", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/rafactx",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rafactxr/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>
      Empowering clients, colleagues, and devs
      <br />
      through smarter support
    </>
  ),
  featured: {
    display: true,
    title: (
      <>
        Recent project:{" "}
        <strong className="ml-4">Involves Stage API Reference</strong>
      </>
    ),
    href: "/work/revamping-involves-stage-api-docs",
  },
  subline: (
    <>
      Tech support isn't just fixing bugs.
      <br />
      It's building trust through solutions.
      <br />I turn questions into insights and blockers into documentation.
    </>
  ),
};

const about = {
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
    display: true,
    link: "https://cal.com/rafactx",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Customer Support expert with over 6 years of experience in SaaS seeking
        a techsupport role where I can address customer issues, improve
        products, and work across teams. I've deep expertise in APIs, SQL, log
        analysis, and tools like Kibana, Elastic, Grafana, and Firebase, with an
        eye for simplicity, durability, and real-world impact. I'm studying
        Software Development and diving deeper into Swift, Next. js, TypeScript,
        and Python. Passionate about clean code, excellent documentation, and
        doing things that work and make sense.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Involves",
        timeframe: "December 2021 - Present",
        role: "Technical Support Consultant – Level II",
        achievements: [
          <>
            Support a SaaS platform (Involves Stage) serving small to global
            clients across LATAM, Canada and Europe.
          </>,
          <>
            Analyze logs using Kibana, Elastic, Firebase and Grafana to
            investigate system behavior and identify issues.
          </>,
          <>
            Troubleshoot issues with APIs and databases, guiding the team using
            business logic context.
          </>,
          <>
            Write MySQL queries to support root cause analysis and improve
            internal documentation.
          </>,
          <>
            Revamped outdated API documentation and contributed to chatbot
            development for automation.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "TIVIT",
        timeframe: "September 2021 - December 2021",
        role: "Technical Support Analyst – Level II",
        achievements: [
          <>
            Supported a financial API for the Interbank Payment Clearinghouse
            (CIP) with focus on data consistency and system reliability.
          </>,
          <>
            Monitored logs and system behavior in production to detect and
            investigate critical failures.
          </>,
          <>
            Wrote PostgreSQL queries to support incident resolution and perform
            data validation.
          </>,
          <>
            Triggered backup routines and coordinated corrective actions with
            internal teams.
          </>,
          <>
            Documented recurring issues and fixes to strengthen the internal
            knowledge base.
          </>,
        ],
        images: [],
      },
      {
        company: "Softplan",
        timeframe: "January 2020 - July 2021",
        role: "Technical Support Analyst – Public Sector Platform",
        achievements: [
          <>
            Supported SAJ, a justice automation system used by courts across
            Brazil.
          </>,
          <>
            Investigated and reproduced critical bugs based on user reports in
            controlled environments.
          </>,
          <>
            Wrote SQL queries in Oracle, DB2 and SQL Server to analyze data and
            validate integrity.
          </>,
          <>
            Escalated incidents, tracked fixes and collaborated with dev teams
            on resolutions.
          </>,
          <>
            Contributed to the team’s knowledge base with patterns, insights and
            documentation.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Universidade Cruzeiro do Sul",
        description: (
          <>
            Software Development
            <br />
            <strong>In progress</strong>
            <br />
            May 2025 – Present
            <br />
            Bachelor of Technology – BTech
            <br />
            <a
              href="https://www.cruzeirodosul.edu.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.cruzeirodosul.edu.br/
            </a>
          </>
        ),
      },
      {
        name: "Centro Universitário Cesusc",
        description: (
          <>
            Law
            <br />
            June 2015 – December 2018
            <br />
            Bachelor of Laws – LLB (interrupted)
            <br />
            <a
              href="https://unicesusc.edu.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://unicesusc.edu.br/
            </a>
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "TypeScript",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "SQL",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};
const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: "Some of my personal and professional projects.",
};
export { about, home, person, social, work };
