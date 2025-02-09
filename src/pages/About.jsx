import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { Link } from "react-router-dom";

import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";
import { useState } from "react";

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Prekshya
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        I am a student pursuing my Bachelor's Degree in Computer Science and Engineering from the University School of Information, Communication and Technology, GGSIPU, Delhi, INDIA
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name} onMouseEnter={ ()=> setHoveredSkill(skill.name)} onMouseLeave={()=>setHoveredSkill(null)}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
              {hoveredSkill === skill.name && (
            <div className='absolute bg-blue-500 text-white p-2 rounded-md z-20 bottom-20'>
              {skill.name}
            </div>
          )}
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience and Achievements.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          Presenting key experiences and milestones cultivated over time, showcasing my growth and commitment in various endeavors:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                {experience.link && (
                  <Link
                    to={experience.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-semibold text-blue-600'
                  >
                    Certification
                  </Link>
                )}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA/>
    </section>
  );
};

export default About;