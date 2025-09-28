import Bold from '@/components/about/bold';
import Experience from '@/components/about/experience';
import Languages from '@/components/about/languages';
import Passion from '@/components/about/passion';
import SectionCard from '@/components/about/section-card';
import Stack from '@/components/about/stack';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
          From Mathematics to Modern Web Development
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Passionate full-stack developer with strong analytical foundation,
          specializing in Next.js, TypeScript, and Python.
        </p>
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Content - Story & Journey */}
        <div className="flex-1 space-y-8">
          {/* Personal Background */}
          <SectionCard classes="bg-white" h2Orh3={true} title="My Background">
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Born on October 7th, 2002, my journey began with a deep
                fascination for mathematics during school, which naturally
                evolved into computer engineering. I'm currently pursuing my
                Computer Engineering degree at Montazeri University.
              </p>
              <p>
                My mathematical background provides me with strong analytical
                and problem-solving skills that I apply daily in software
                development.
              </p>
            </div>
          </SectionCard>

          {/* University Experience */}
          <SectionCard
            classes="bg-white"
            h2Orh3={true}
            title="University Journey"
          >
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                My computer engineering program has exposed me to a wide range
                of technologies and concepts. I've gained experience with{' '}
                <Bold text="C#" />
                for application development,
                <Bold text="Unity" />
                for game development, <Bold text="Java" />
                for object-oriented programming, and various other technologies
                that have given me a comprehensive understanding of software
                engineering principles.
              </p>
            </div>
          </SectionCard>

          {/* Current Focus */}
          <SectionCard classes="bg-white" h2Orh3={true} title="Current Focus">
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Professionally, I specialize in <Bold text="Next.js" />
                and <Bold text="TypeScript" />, building modern, performant web
                applications. I'm particularly passionate about creating
                seamless user experiences with clean, maintainable code.
              </p>
              <p>
                On the backend side, I'm expanding my <Bold text="Python" />
                expertise by learning
                <Bold text="FastAPI" />
                for a university project, developing robust and efficient API
                solutions.
              </p>
            </div>
          </SectionCard>
        </div>

        {/* Right Content - Skills & Interests */}
        <div className="flex flex-col gap-8 lg:w-96">
          {/* Professional Stack */}
          <SectionCard
            classes="bg-gray-50"
            h2Orh3={false}
            title="Professional Stack"
          >
            <div className="space-y-3">
              <Stack
                title="Frontend Specialization"
                text="Next.js, TypeScript, Tailwind CSS, React"
              />
              <Stack
                title="Backend & Data"
                text="Python, FastAPI, RESTful APIs"
              />
            </div>
          </SectionCard>

          {/* Language Skills */}
          <SectionCard classes="bg-gray-50" h2Orh3={false} title="Languages">
            <div className="space-y-3">
              <Languages
                language="English"
                level="Fluent"
                color="bg-green-500"
                percent="80"
              />
              <Languages
                language="German"
                level="Beginner"
                color="bg-blue-500"
                percent="20"
              />
              <Languages
                language="Persian"
                level="Native"
                color="bg-purple-500"
                percent="100"
              />
            </div>
          </SectionCard>

          {/* University Technologies */}
          <SectionCard
            classes="bg-gray-50"
            h2Orh3={false}
            title="Academic Experience"
          >
            <div className="flex flex-wrap gap-2">
              <Experience
                experiences={[
                  'C#',
                  'Unity',
                  'Java',
                  'OOP',
                  'Data Structures',
                  'Algorithms',
                ]}
              />
            </div>
          </SectionCard>

          {/* Passions */}
          <SectionCard
            classes="bg-gray-50"
            h2Orh3={false}
            title="Passions & Interests"
          >
            <div className="space-y-2">
              <Passion
                colors={[
                  'bg-blue-100',
                  'bg-blue-900/30',
                  'bg-blue-600',
                  'bg-blue-400',
                ]}
                title="Machine Learning & AI"
                text="Exploring AI concepts and their practical applications"
              />
              <Passion
                colors={[
                  'bg-green-100',
                  'bg-green-900/30',
                  'bg-green-600',
                  'bg-green-400',
                ]}
                title="Mathematics"
                text="Applying mathematical thinking to solve complex problems"
              />
              <Passion
                colors={[
                  'bg-purple-100',
                  'bg-purple-900/30',
                  'bg-purple-600',
                  'bg-purple-400',
                ]}
                title="Full-Stack Development"
                text="Building complete, end-to-end web solutions"
              />
            </div>
          </SectionCard>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-12 text-center border-t border-gray-200 dark:border-gray-700 pt-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Ready to Collaborate?
        </h3>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/projects"
            className="bg-indigo-600 dark:bg-indigo-500 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
          >
            View My Projects
          </Link>
          <Link
            href="/contact"
            className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Get In Touch
          </Link>
          <a
            href="https://github.com/DappDevMehran"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}
