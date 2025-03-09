import Clients from "@/components/Clients";
import { FloatingNav } from "@/components/FloatingNavbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Technologies from "@/components/Technologies";
import { Spotlight } from "@/components/ui/Spotlight";
import { Timeline } from "@/components/ui/Timeline";
import { navItems } from "@/data";
import Image from "next/image";

export default function Home() {
  const data = [
    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Exploring the IT World
          </p>
          <ul className="list-disc max-w-2xl">
            <li>Started my journey at Cherkasy Computer Academy "Step", where I was introduced to Python, Arduino, Web Development, Computer Modeling, and Game Development.</li>
            <li>Discovered my passion for Web Development and began building small projects.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            University & C# Development
          </p>
          <ul className="list-disc max-w-2xl">
            <li>Entered university and started learning C#, building small applications.</li>
            <li>Collaborated with a team and learned GitHub for version control.</li>
            <li>Took courses covering C# fundamentals, advanced concepts, and asynchronous programming.</li>
            <li>Developed more complex applications using ASP.NET Core and learned C++ for 3D modeling with OpenGL.</li>
            <li>Created a bicycle management system with CRUD functionality and an interactive hyperbolic paraboloid model for research.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Backend Development with Python & Django
          </p>

          <ul className="list-disc max-w-2xl">
            <li>Discovered Django, which became one of my favorite frameworks.</li>
            <li>Built multiple projects, including a blog, e-commerce site and social network.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Full-Stack Development & Modern Frontend
          </p>

          <ul className="list-disc max-w-2xl">
            <li>Explored JavaScript, TypeScript, React, and Next.js.</li>
            <li>Built full-stack applications, integrating Django with modern frontend frameworks.</li>
            <li>Developed server-side rendering with Next.js.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <main className="relative bg-black-100 w-full flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <div className="max-w-7xl w-full sm:px-10 px-5">
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>

      <Timeline data={data} />

      <div className="max-w-7xl w-full sm:px-10 px-5 text-white">
        <RecentProjects />
        <Clients />
        <Technologies />
        <Footer />
      </div>
    </main>
  );
}