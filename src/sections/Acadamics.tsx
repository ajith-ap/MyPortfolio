import React, { Fragment } from "react";

// import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const qualifications = [
  {
    title: "Bachelor of Technology",
    institution: "A P J Abdul Kalam Technological University",
    year: "2021",
    description:
      "Specialized in IT Computer Science, a four-year undergraduate engineering degree focused on the design, development, and implementation of computer software and hardware.",
    icon: "🎓",
  },
  {
    title: "NPTEL Certification | Software Testing",
    institution: "Online Course",
    year: "2020",
    description:
      "The course covers basics of various testing techniques and tools, including black box and white box testing.",
    icon: "📜",
  },
  {
    title: "Frontend Development Expertise",
    institution: "Self-Learned & Projects",
    year: "Ongoing",
    description:
      "Proficient in React, Angular, Styled component, Tailwind CSS, and modern UI/UX principles.",
    icon: "💡",
  },
  {
    title: "Backend Development Skills",
    institution: "Work & Practice",
    year: "Ongoing",
    description:
      "Experience with REST APIs and SQL queries means you are skilled in working with software applications and handling data, two areas that often go hand in hand.",
    icon: "💡",
  },
];

const Academics = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Education & Certifications"
          title="My Qualifications"
          description="A blend of academic achievements and technical expertise that shape my professional journey."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip py-4 -my-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
            {[
              ...new Array(2).fill(0).map((_, index) => (
                <Fragment key={index}>
                  {qualifications.map((qualification) => (
                    <Card
                      key={qualification.title}
                      className="max-w-xs md:p-8 p-6 md:max-w-md hover:-rotate-3 transition duration-300"
                    >
                      <div className="flex gap-4 items-center ">
                        <div className="size-14 bg-gray-700 rounded-full inline-flex items-center justify-center flex-shrink-0">
                          {/* <Image
                          src={qualification.avatar}
                          alt={qualification.name}
                          className="max-h-full"
                        /> */}
                          {qualification.icon}
                        </div>
                        <div>
                          <div className="font-semibold">
                            {qualification.title}
                          </div>
                          <div className="text-sm text-white/40">
                            {qualification.institution} {qualification.year}
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 md:mt-6 text-sm md:text-base">
                        {qualification.description}
                      </p>
                    </Card>
                  ))}
                </Fragment>
              )),
            ]}
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-24">
        <a
          download="Ajith_A_P.pdf"
          href="./Sarath-k-resume.pdf"
          className="relative px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out hover:from-sky-400 hover:to-emerald-300 flex items-center gap-2 group overflow-hidden bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 font-semibold"
        >
          <span className="relative z-10">Resume</span>
          <svg
            className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-y-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v14m-7-7l7 7 7-7M5 19h14"
            ></path>
          </svg>
          <span className="absolute inset-0 bg-white opacity-10 transition duration-300 group-hover:opacity-20"></span>
        </a>
      </div>
    </div>
  );
};

export default Academics;
